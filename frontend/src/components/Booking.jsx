import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you're using react-router-dom

function Booking() {
    const [form, setForm] = useState({ name: '', roomName: '', time: '', date: '' });
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
                alert('Booking submitted!');
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

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url("/src/assets/building.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px', backdropFilter: 'blur(5px)' }}>
                <h1 style={{ textAlign: 'center', color: '#333', fontWeight: "bold" }}>Book Now</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="text" name="roomName" placeholder="Room name" value={form.roomName} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="time" name="time" value={form.time} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <input type="date" name="date" value={form.date} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff' }}>Submit</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={handleBackToHome} style={{ all: 'unset', cursor: 'pointer', color: '#007BFF' }}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Booking;
