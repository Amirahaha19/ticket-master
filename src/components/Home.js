import Upcoming from './Upcoming.js';
import PhotoCarousel from './Carousel.js';

function Home ({ slides }) {
    
    const containerStyles = {
    margin: "0 auto",
    };

    return (
        <div className="App">
            <div style={containerStyles}>
                <PhotoCarousel slides={slides} />
            </div>
            
            <div className="top-picks">
                <div>
                <h2 className="header-label">Top Picks</h2>
                </div>
                {slides.map((product, index) => (
                    <Upcoming key={index} product={product} slides={slides} />
                ))}
            </div>
        </div>
    );
}

export default Home;

    