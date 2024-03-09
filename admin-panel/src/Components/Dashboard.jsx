import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const [name, setName] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    // Function to fetch or set the name
    const fetchName = async () => {
      // Assume you fetch the name from an API or some other source
      // For demonstration purposes, setting a hardcoded name
      setName("Gulsher Ali");
    };

    fetchName(); // Call the function to set the name

    // Set interval to change color index every 2 seconds
    const intervalId = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % instagramColors.length);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, []); // Empty dependency array means this effect runs once on component mount

  const instagramColors = [
    "#f09433", "#d95d39", "#1abc9c", "#f7dc6f", "#2ecc71", 
    "#3498db", "#9b59b6", "#e67e22", "#e74c3c", "#34495e"
  ];

  const colorfulText = name.split('').map((char, index) => (
    <span key={index} style={{ color: instagramColors[(colorIndex + index) % instagramColors.length] }}>
      {char}
    </span>
  ));

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center animate-bounce">
        <h1 className="text-8xl font-bold mb-5">Welcome!! {colorfulText}</h1>
        {/* Add other dashboard components here */}
      </div>
    </div>
  );
}

export default Dashboard;
