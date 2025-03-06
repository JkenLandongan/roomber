import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import './App.css'; 

function App() {
  return (
    <>
      <div className="container-fluid" style={{ width: '100vw' }}>
        
        <nav className="navbar">
          <h1 className="logo">ROOMBER</h1>
          <div className="nav-links">
            <a href="#">About us</a>
            <a href="#">Team</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero">
          <div className="hero-text">
            <h2>
              Turn Stress, Boredom & Frustration Into <span>Unforgettable Experiences!</span>
            </h2>
            <p>
              Break free from stress and routine! Smash, escape, play, or reflect—ROOMBER gives you a space to
              experience emotions like never before. Step in, feel it, and leave recharged.
            </p>
            <div className="buttons">
              <button className="btn-dark">How others use it →</button>
              <button className="btn-yellow" onClick={() => document.getElementById('explore-section').scrollIntoView({ behavior: 'smooth' })}>
                Explore Now!
              </button>
            </div>
          </div>

          <div className="hero-images" style={{ width: '50%' }}>
            <div className="yellow-circle"></div>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              <img src="/src/assets/illusion-room.jpg" alt="Illusion Room" />
              <img src="/src/assets/anger-room.png" alt="Smash Room" />
              <img src="/src/assets/game-room.jpg" alt="Game Room" />
              <img src="/src/assets/joy-room.jpg" alt="Fun Group" />
              <img src="/src/assets/escape-room.jpg" alt="Escape Room" />
              <img src="/src/assets/sadness.jpg" alt="Relax Room" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-box1 dark">
            <h3>95%</h3>
            <p>of visitors say ROOMBER helped them relieve stress and feel better.</p>
          </div>
          <div className="stat-box">
            <h3>50k</h3>
            <p>fans sharing their ROOMBER experiences! #FindYourRoom</p>
          </div>
          <div className="stat-box2 dark">
            <h3>30+</h3>
            <p>immersive rooms tailored for every emotion!</p>
          </div>
        </div>

        {/* Enter. Explore. Experience Section */}
        <section id="explore-section" className="text-center bg-white py-10 px-5">
          <div className="position-relative">
            <h1 className="fw-bolder">
              Enter. <span className="text-warning">Explore.</span> Experience
            </h1>
            <p className="text mt-2 text-lg max-w-xl mx-auto">
              Discover a selection of uniquely designed spaces, each offering a different atmosphere and experience.
            </p>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="src/assets/Gameroom-banner.jpg" className="d-block w-100 h-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/sad.jpg" className="d-block w-100 h-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/games.jpeg" className="d-block w-100 h-100" alt="..." />
                  </div>
                </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* Emotion Rooms Section */}
<section className="emotion-rooms text-center py-5">
<h2 className="fw-bold">
<span style={{ color: "white" }}>Find a</span> <span style={{ color: "#F3A619" }}>Room</span> <span style={{ color: "white" }}>fit for your</span>  <span style={{ color: "#F3A619" }}>Emotion</span> <span style={{ color: "white" }}>!</span>
</h2>

  <div className="d-flex flex-wrap justify-content-center mt-4">
    <div className="room-card">
      <img src="src/assets/joy-room.jpg" className="room-image" alt="Joy Room" />
      <span className="room-label joy"><span style={{ color: "#FFD700" }}>Joy</span> <span style={{ color: "white" }}>Room</span>
  </span>
</div>
    <div className="room-card">
      <img src="src/assets/anger-room.png" className="room-image" alt="Anger Room" />
      <span className="room-label anger"><span style={{ color: " #F91111" }}>Anger</span> <span style={{ color: "black" }}>Room</span>
  </span>
</div>
    <div className="room-card">
      <img src="src/assets/illusion-room.jpg" className="room-image" alt="Fear Room" />
      <span className="room-label fear"><span style={{ color: "#B000B9" }}>Fear</span> <span style={{ color: "black" }}>Room</span>
  </span>
</div>
    <div className="room-card">
      <img src="src/assets/sadnesss.jpg" className="room-image" alt="Sadness Room" />
      <span className="room-label sadness"><span style={{ color: "#88A9DA" }}>Sadness</span> <span style={{ color: "white" }}>Room</span>
  </span>
</div>
  </div>
</section>

<div className='meetTheTeam'>
  <div className='header'>
    <h1>Meet the <span className='text-warning'>Team</span>!</h1>
  </div>
  <div className='team-container'>
    <img src="src/assets/team.jpg" className="teampic" alt="team" />
    <div className='team'>
      <p className='p1'>What drives us?</p>
      <p>Our team is driven by a shared passion for creating seamless and efficient solutions that enhance everyday experience. With Roomber: A room to remember, we set out to revolutionize the way people book and manage spaces, ensuring a hassle free and intuitive process. Fueled by innovation and a commitment to user friendly design, we strive to make every reservation smooth and every space truly memorable. Our diverse backgrounds and expertise come together with one goal in mind: to transform the way people interact with their environments, making every room not just a place. but an experience to remember</p>
    </div>
  </div>
</div>

{/* Booking Section */}
<div className="roomber-hero">
  <div className="roomber-info">
    <div className="book-now">
    <h2 style={{ fontSize: "4rem" }}>
  <strong>
    <span style={{ color: "white" }}>Book</span> <span style={{ color: "#F3A619" }}>Now</span>
    <span style={{ color: "white" }}>!</span>
  </strong>
</h2>
    </div>

    {/* New container inside roomber-hero but separate from book-now */}
    <div className="roomber-details-container">
      <div className="roomber-details">
      <h2 style={{ color: "white !important" }}>Toledo City, Cebu</h2>
      <p>
          <span className="location">📍</span> 
          <span style={{ color: "white" }}>6038 Rafols Street</span>
        </p>
        <p>
          <span className="location">🟢</span> 
          <span style={{ color: "white" }}>Opens at 10:00 am</span>
        </p>
        <p>
          <span className="location">🔴</span> 
          <span style={{ color: "white" }}> Closes at 08:00 pm</span>
        </p>
    </div>
    </div>
  </div>

  <div className="roomber-display">
    <div className="circle"></div>
    <img src="src/assets/building.jpg" alt="Building" />
  </div>
</div>

         {/* Testimonials Section */}
         <div className="testimonials container my-5 text-center">
         <h2 className="fw-bold">
          <span style={{ color: "#F3A619" }}>Why</span> <span style={{ color: "black" }}>ROOMBER</span><span style={{ color: "#F3A619" }}>?</span> </h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="testimonial-box p-4 bg-black text-white rounded shadow">
                <h2 className='para'>Seamless Stays, Endless Possibilities</h2>
                <p>At Roomber, we redefine the way you experience stays. Whether you're traveling for business, leisure, or unique adventure, our diverse selection of rooms ensures you find the perfect space</p>
              </div>
            </div>
            <div className="col-md-4">
            <div className="testimonial-box p-4 rounded shadow" style={{ backgroundColor: "#F3A619" }}>
                <h2>More Than Just a Stay-An Experience</h2>
                <p>Why settle for the ordinary when you can have an extraordinary stay? Roomber offers immersive themed rooms tailored to different moods and experiences.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box p-4 bg-black text-white rounded shadow">
                <h2>Designed for Comfort, Built for Convenience</h2>
                <p>Roomber takes the hassle out of finding the perfect stay. With flexible options, instant booking, and thoughtfully designed spaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call To Action Section */}
        <div className="cta-section text-center py-5"style={{ backgroundColor: "#F3A619"}} >
        <h2><strong>ROOMBER</strong></h2>
          <p style={{ color: "white" }}>Step into a room you'll always remember</p>
        </div>
        <div className="cta-section text-center py-5">
          <p>What are you waiting for?</p>
          <h2><strong>Book a Room</strong></h2>
        </div>
        
        {/* Footer Section */}
        <footer className="footer  text-black py-5" style={{ backgroundColor: "#F3A619"}}>
          <div className="container text-center">
            <div className="row ">
              <div className="col-md-4">
                <h2><strong>ROOMBER</strong></h2>
                <p>Stay updated with our latest experiences!</p>
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-light mt-2 text-black">Subscribe</button>
              </div>
            <div className="col-md-4 d-flex justify-content-between">
  <div>
    <h4><strong>About Us</strong></h4>
    <p><a className="text-black">Why ROOMBER?</a></p>
    <p><a className="text-black">Our Story</a></p>
  </div>
  <div>
    <h4><strong>Team</strong></h4>
    <p><a href="#" className="text-black">Meet the Team</a></p>
  </div>
</div>

              <div className="col-md-4">
                <h4><strong>Contact</strong></h4>
                <p>📍 Location: Toledo City</p>
                <p>📧 Email: support@roomber.com</p>
                <p>📞 Phone: +63 999 9999999</p>
              </div>
            </div>
            <p className="mt-3">© ROOMBER 2025. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
