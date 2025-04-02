import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Subheader from "../components/Subheader";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
export default function ContactUs() {
    const [userLocation, setUserLocation] = useState(null);

    // Get user's location on mount
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    }, []);
    if (!userLocation) {
        return <div>Loading...</div>;
      }
  return (
    <>
 <Subheader />
    <div className="contact-container">
      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
      <MapContainer center={userLocation} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={userLocation}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  
      </div>
    </div>
    <Footer />
    </>
  );
}
