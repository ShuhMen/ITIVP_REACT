import ReactDOM from "react-dom/client"; 

import React, { useState, useEffect } from "react";
import  Button from "@mui/material/Button";
import { alignProperty } from "@mui/material/styles/cssUtils";
import "./base.js"

const SubmitButton = ({
  children,
  activeColor = '#ff4444',
  inactiveColor = '#808080',
  submittedText = 'Отправлено',
  className = '',
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dialog = document.getElementById('dialog_sign');
    if (!dialog) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'open' && dialog.open) {
          setIsSubmitted(false);
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
        }
      });
    });

    observer.observe(dialog, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const buttonStyle = {
    backgroundColor: isSubmitted ? inactiveColor : activeColor,
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    transition: 'background-color 0.3s ease',
    paddingLeft: '40px',
    paddingRight: '40px',
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => setIsSubmitted(true)}
      className={className}
      disabled={isSubmitted}
    >
      {isSubmitted ? submittedText : children}
    </button>
  );
};

ReactDOM.createRoot(document.getElementById("social_networks")).render(
    <SubmitButton>
      Отправить
    </SubmitButton>
);
