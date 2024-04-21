import React, { useEffect, useRef } from 'react';


function ReadPage() {
  const referenceLink = useRef([]);

  useEffect(() => {
    // Fill the useRef array with placeholders for each link
    referenceLink.current = referenceLink.current.slice(0, 10); // For 10 links

    const handleKeyPress = (event) => {
      const currentFocusedElement = document.activeElement;
      const currentIndex = referenceLink.current.indexOf(currentFocusedElement);

      switch (event.key) {
        case 'ArrowDown':
          if (currentIndex < referenceLink.current.length - 1) {
            // Move focus down the list
            referenceLink.current[currentIndex + 1].focus();
          }
          break;
        case 'ArrowUp':
          if (currentIndex > 0) {
            // Move focus up the list
            referenceLink.current[currentIndex - 1].focus();
          }
          break;
        default:
          // Handle other keys if necessary
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <div className="App">
      <h1>Things to Read</h1>
      <ol>
        <li><a href="https://www.healthline.com/nutrition/how-to-start-exercising" ref={el => referenceLink.current[0] = el}>Working Out</a></li>
        <li><a href="https://www.formula1.com" ref={el => referenceLink.current[1] = el}>Formula 1</a></li>
        <li><a href="https://www.ufc.com" ref={el => referenceLink.current[2] = el}>UFC</a></li>
        <li><a href="https://www.xbox.com/en-US/consoles/xbox-series-x" ref={el => referenceLink.current[3] = el}>Xbox</a></li>
        <li><a href="https://www.copart.com" ref={el => referenceLink.current[4] = el}>Car Salvage Auctions</a></li>
        <li><a href="https://www.apple.com" ref={el => referenceLink.current[5] = el}>Apple Products</a></li>
        <li><a href="https://www.nba.com" ref={el => referenceLink.current[6] = el}>NBA</a></li>
        <li><a href="https://www.netflix.com/browse" ref={el => referenceLink.current[7] = el}>Netflix</a></li>
        <li><a href="https://www.youtube.com" ref={el => referenceLink.current[8] = el}>Youtube</a></li>
        <li><a href="https://www.lego.com/" ref={el => referenceLink.current[9] = el}>Legos</a></li>
      </ol>
    </div>
  );
}

export default ReadPage;