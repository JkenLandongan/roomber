function Anger() {
    return (
        <div>
            <button onClick={() => { window.location.href = '/'; window.close(); }} style={{ all: 'unset', cursor: 'pointer', color: '#007BFF' }}>
                        Back to Home
                    </button>
            <h1>Anger Room</h1>
            <div className="mt-4 d-flex justify-content-center">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="src/assets/art.jpg" className="d-block w-100 h-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="src/assets/rage.jpg" className="d-block w-100 h-100" alt="..." />
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
        </div>
    );
}

export default Anger;
