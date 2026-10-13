
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import "./App.css";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    price: 24999,
    rating: 4.9,
    duration: "5 Days / 4 Nights",
    description: "Discover tropical beaches, temples and beautiful sunsets.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    price: 45999,
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    description: "Experience snowy mountains, scenic trains and alpine views.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Maldives",
    country: "Indian Ocean",
    price: 35999,
    rating: 4.9,
    duration: "4 Days / 3 Nights",
    description: "Relax in turquoise waters and overwater villas.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Paris",
    country: "France",
    price: 38999,
    rating: 4.7,
    duration: "5 Days / 4 Nights",
    description: "Enjoy charming streets, famous landmarks and French culture.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Manali",
    country: "India",
    price: 12999,
    rating: 4.8,
    duration: "3 Days / 2 Nights",
    description: "Explore mountain valleys, pine forests and peaceful escapes.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Santorini",
    country: "Greece",
    price: 42999,
    rating: 4.8,
    duration: "5 Days / 4 Nights",
    description: "See whitewashed houses, blue domes and sunset views.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) => {
    const searchText = search.toLowerCase();

    return (
      destination.name.toLowerCase().includes(searchText) ||
      destination.country.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <Navbar />

      <main>
        <Hero onSearch={setSearch} />

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <span className="eyebrow">YOUR NEXT ADVENTURE</span>
            <h2>Explore amazing destinations</h2>
            <p>
              Find your perfect getaway from our handpicked travel destinations.
            </p>
          </div>

          <div className="destination-grid">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))
            ) : (
              <div className="no-results">
                <h3>No destinations found</h3>
                <p>Try searching for Bali, Paris, India or another destination.</p>
                <button onClick={() => setSearch("")}>
                  Show all destinations
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="offer-section" id="offers">
          <div>
            <span className="eyebrow">TRAVEL MORE, WORRY LESS</span>
            <h2>Your next great adventure starts here.</h2>
            <p>
              Discover beautiful places, create unforgettable memories and make
              every journey special.
            </p>
            <a href="#destinations" className="offer-button">
              Explore destinations
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
