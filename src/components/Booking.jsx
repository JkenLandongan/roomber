function Booking() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url("/src/assets/building.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px', backdropFilter: 'blur(5px)' }}>
                <h1 style={{ textAlign: 'center', color: '#333', fontWeight: "bold" }}>Book Now</h1>
                <form>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <input type="text" id="name" name="name" placeholder="Name" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', paddingLeft: '10px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                    <input type="text" id="name" name="name" placeholder="Room name" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', paddingLeft: '10px' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="time" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Time:</label>
                            <input type="time" id="time" name="time" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="date" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date:</label>
                            <input type="date" id="date" name="date" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        </div>
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={() => { window.location.href = '/'; window.close(); }} style={{ all: 'unset', cursor: 'pointer', color: '#007BFF' }}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Booking;
