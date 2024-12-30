"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";


interface Location {
  latitude: number | null;
  longitude: number | null;
  name: string | null; // To store the name of the location
}


function Banner({searchQuery, setSearchQuery, setSelectedCategory, selectedCategory}:any) {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    name: null,
  });
  const handlesearchClick =(e:any)=>{
    e.preventDefault()
    window.location.href = "#products"
  }
  const [error, setError] = useState<string | null>(null);

  // OpenCage API Key - Replace with your actual API key
  const openCageApiKey = "1de5a61c55f44749b653deb8e5915f0a";

  // Fetch location on component mount
  useEffect(() => {
    const handleGetLocation = () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Set latitude, longitude
          setLocation({ latitude: lat, longitude: lon, name: null });
          setError(null);

          // Fetch the location name using reverse geocoding
          fetchLocationName(lat, lon);
        },
        (err) => {
          setError(err.message);
        }
      );
    };

    handleGetLocation();
  }, []); // This will run once when the component mounts

  // Function to fetch the location name using OpenCage Geocoding API
  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=${openCageApiKey}&q=${latitude},${longitude}&pretty=1&no_annotations=1`
      );
      const data = await response.json();
  
      if (data.results.length > 0) {
        // Extract only the state and country components
        const addressComponents = data.results[0].components;
        const state = addressComponents.state || "State not found"; // Default to "State not found"
        const country = addressComponents.country || "Country not found"; // Default to "Country not found"
        
        const locationName = `${state}, ${country}`; // Format as "State, Country"
        setLocation((prevLocation) => ({
          ...prevLocation,
          name: locationName,
        }));
      } else {
        setError("Unable to get location name.");
      }
    } catch (error) {
      setError("Error fetching location name. Please check your API key or network.");
      console.error(error); // Log error for debugging
    }
  };
  

  return (
    <div
    className="w-full h-[30vh] lg:h-[50vh] relative flex justify-center items-center bg-cover bg-center"
    style={{ backgroundImage: "url('/marketplace.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#1d1d1d] bg-opacity-70 pointer-events-none"></div>
  
    {/* Content */}
    <div className="relative z-10 flex-col flex gap-3">
      <form className="flex items-center bg-white rounded shadow-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-[50px] w-[300px] px-4 rounded-l lg:w-[600px] outline-none"
          placeholder="Search for something..."
        />
        <button type="button" onClick={handlesearchClick} className="px-4 text-[#ff7f00]">
          <FaSearch size={20} />
        </button>
      </form>
  
      <select
        className="mb-4 p-2 border rounded cursor-pointer outline-none w-full z-10 bg-white"
        value={selectedCategory}
        onChange={(e) => {
          
          setSelectedCategory(e.target.value);
          window.location.href = "#products";
        }}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  </div>
  
  );
}

export default Banner;
