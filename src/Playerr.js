import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    height: "600px",
    width: "288px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  };

  const imageStyle = {
    height: "300px",
    width: "100%",
    objectFit: "cover",
    margin: "7px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "-100px",
  };

  const textStyle = {
    fontSize: "20px",
    color: "#333",
    lineHeight: "2",
    textAlign: "left",
    marginTop: "-150px",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Player;
