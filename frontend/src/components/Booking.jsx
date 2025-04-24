import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [form, setForm] = useState({ name: '', roomName: '', time: '', date: '' });
    const [submittedData, setSubmittedData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            setSubmittedData(form);
            setShowPopup(true);
            setForm({ name: '', roomName: '', time: '', date: '' });
        } else {
            alert('Failed to submit booking');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const handleBackToHome = () => {
    navigate('/');
};

const closePopup = () => {
    setShowPopup(false);
};

return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("/src/assets/building.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '300px',
            backdropFilter: 'blur(5px)'
        }}>
            <h1 style={{ textAlign: 'center', color: '#333', fontWeight: "bold" }}>Book Now</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <select name="roomName" value={form.roomName} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }}>
                    <option value="">Select a Room</option>
                    <option value="Joy Room">Joy Room</option>
                    <option value="Anger Room">Anger Room</option>
                    <option value="Fear Room">Fear Room</option>
                    <option value="Sad Room">Sad Room</option>
                </select>
                <input type="date" name="date" value={form.date} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <input type="time" name="time" value={form.time} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button onClick={handleBackToHome} style={{ all: 'unset', cursor: 'pointer', color: '#007BFF' }}>
                    Back to Home
                </button>
            </div>
        </div>

        {showPopup && submittedData && (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                    textAlign: 'center',
                    maxWidth: '400px'
                }}>
                    <h2>Booking Confirmed!</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Room:</strong> {submittedData.roomName}</p>
                    <p><strong>Date:</strong> {submittedData.date}</p>
                    <p><strong>Time:</strong> {submittedData.time}</p>
                    <button onClick={closePopup} style={{ marginTop: '20px', padding: '8px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
);
};

export default Booking;