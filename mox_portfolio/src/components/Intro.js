import React from "react";
import { Card } from "@mui/material";
import "../assests/css/Intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <Card className="intro-card">
        <p>
          Welcome to my portfolio, where you can explore my latest projects. If
          you have any questions or wish to discuss a project in more detail,
          please don't hesitate to get in touch. Thank you for visiting!
        </p>
      </Card>
    </div>
  );
}
