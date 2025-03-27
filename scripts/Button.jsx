import React, { useState, useEffect } from "react";
import { Button } from "@mui/material/Button";

const ToggleButton = (text) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(`Кнопка ${isActive ? "активна" : "неактивна"}`);
  }, [isActive]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Button 
      onClick={handleClick}
      className={isActive ? "bg-green-500" : "bg-gray-500"}
    >
      {isActive ? text : "Неактивно"}
    </Button>
  );
};

export default ToggleButton;

export class GenButton extends React.Component {
  render() {
    return (
      <a className="button">
        {this.props.text}
        <img src="/icon/web-app-manifest-192x192.png" alt="arrow_icon" />
      </a>
    );
  }
  DefaultProps = { text: "Button" };
}