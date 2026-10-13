import { useState } from "react";
import { Search, MapPin, Compass } from "lucide-react";
import "./Hero.css";

function Hero({ onSearch }) {
  const [destination, setDestination] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(destination.trim());
    document.getElementById("destinations")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">
            <Compass size={16} />
            DISCOVER THE WORLD WITH TRIPEASE
          </div>

          <h1>
            Explore the world,
            <br />
            <span>one trip at a time.</span>
          </h1>

          <p className="hero-description">
            Find beautiful destinations, plan your next escape and turn your
            travel dreams into unforgettable memories.
          </p>

          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-input-wrap">
              <MapPin size={21} />
              <input
                type="text"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Where do you want to go?"
                aria-label="Search destinations"
              />
            </div>

            <button type="submit">
              <Search size={18} />
              Search
            </button>
          </form>

          <div className="hero-stats">
            <div>
              <strong>50+</strong>
              <span>Destinations</span>
            </div>
            <div>
              <strong>2k+</strong>
              <span>Happy travellers</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Traveller rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;