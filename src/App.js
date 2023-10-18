import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import ReadmePad from "./components/ReadmePad/ReadmePad";

function App() {
  const [showPage, setShowPage] = useState(false); // Show the page or the readme pad
  const [showActionButton, setShowActionButton] = useState(false); // Show the action buttons

  const toggleActionButtons = () => {
    setShowPage(!showPage); // Toggle the page
    setShowActionButton(false); // Close the action buttons when going back
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      {showPage ? (
        <>
          <ReadmePad toggleActionButtons={toggleActionButtons} />
        </>
      ) : (
        <>
          <Details />
          <Button onClick={toggleActionButtons} />
        </>
      )}
    </>
  );
}

export default App;
