import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS

export default function Home() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!username) return null;

  return (
    <div className="home-container">
      <h2>Welcome, {username}!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
}
