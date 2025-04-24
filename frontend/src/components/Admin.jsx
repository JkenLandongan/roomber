import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bookings");
        const data = response.data;
        console.log(data); // Log the data to inspect it
        setBookings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBookings();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard - Bookings</h1>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Room Name</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="text-center border-t">
                <td className="p-2 border">{booking.id}</td>
                <td className="p-2 border">{booking.name}</td>
                <td className="p-2 border">{booking.roomname}</td>
                <td className="p-2 border">{booking.date}</td>
                <td className="p-2 border">{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;