import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";
import "./DestinationCard.css";

function DestinationCard({ destination }) {
  const formattedPrice = Number(destination.price || 0).toLocaleString("en-IN");

  return (
    <article className="destination-card">
      <div className="destination-image-wrap">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
          loading="lazy"
        />

        <span className="rating-badge">
          <Star size={14} fill="currentColor" />
          {destination.rating}
        </span>
      </div>

      <div className="destination-info">
        <div className="destination-location">
          <MapPin size={15} />
          {destination.country}
        </div>

        <h3>{destination.name}</h3>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-duration">
          <Clock size={15} />
          {destination.duration}
        </div>

        <div className="destination-bottom">
          <div className="destination-price">
            <span>Starting from</span>
            <strong>{"₹"}{formattedPrice}</strong>
            <small>/ person</small>
          </div>

          <a
            href={`mailto:hello@tripease.example?subject=${encodeURIComponent(
              `Travel enquiry for ${destination.name}`
            )}&body=${encodeURIComponent(
              `Hello TripEase, I am interested in the ${destination.name} trip. Please share more details.`
            )}`}
            className="destination-link"
            aria-label={`Enquire about ${destination.name}`}
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;