import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBookings, setSelectedBookings] = useState([]);

  // On first load: fetch bookings and restore selectedBookings from localStorage
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/bookings");
        setBookings(data);

        // Restore selection, but only if the IDs are still valid
        const savedSelections = JSON.parse(localStorage.getItem("selectedBookings")) || [];
        const validSelections = savedSelections.filter(id =>
          data.some((booking) => booking.id === id)
        );
        setSelectedBookings(validSelections);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Always sync selectedBookings to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedBookings", JSON.stringify(selectedBookings));
  }, [selectedBookings]);

  // Handle booking deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/bookings/${id}`);
      if (response.status === 200) {
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
        setSelectedBookings((prev) => prev.filter((bookingId) => bookingId !== id));
      }
    }catch (err) {
      setError(err.message || "Failed to delete booking");
    }
  }; 

  // Handle checkbox selection
  const handleCheckboxChange = (id) => {
    setSelectedBookings((prev) =>
      prev.includes(id) ? prev.filter((bookingId) => bookingId !== id) : [...prev, id]
    );
  };

  // Save selected bookings (just a simulation here)
  const handleSaveSelectedBookings = async () => {
    if (selectedBookings.length === 0) {
      alert("No bookings selected for saving.");
      return;
    }

    const confirmSave = window.confirm("Are you sure you want to save selected bookings?");
    if (!confirmSave) return;

    try {
      console.log("Saving selected bookings:", selectedBookings);
      // Do not clear selections here
    } catch (err) {
      setError(err.message || "Failed to save selected bookings");
    }
  };

  // Convert military time to 12-hour format
  const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(":");
    const formattedHours = ((hours % 12) || 12);
    const period = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${minutes} ${period}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard - Bookings</h1>

      {loading && <p>Loading bookings...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && bookings.length === 0 && <p>No bookings found.</p>}

      {!loading && !error && bookings.length > 0 && (
        <>
          <div className="mb-4">
            <button
              onClick={handleSaveSelectedBookings}
              className={`py-1 px-4 rounded ${selectedBookings.length === 0 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}
              disabled={selectedBookings.length === 0}
            >
              Save
            </button>
          </div>

          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Room Name</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Select</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="text-center border-t">
                  <td className="p-2 border">{booking.id}</td>
                  <td className="p-2 border">{booking.name}</td>
                  <td className="p-2 border">{booking.roomName}</td>
                  <td className="p-2 border">{booking.date}</td>
                  <td className="p-2 border">{convertTo12HourFormat(booking.time)}</td>
                  <td className="p-2 border">
                    <input
                      type="checkbox"
                      checked={selectedBookings.includes(booking.id)}
                      onChange={() => handleCheckboxChange(booking.id)}
                    />
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="bg-red-500 text-black py-1 px-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Admin;
