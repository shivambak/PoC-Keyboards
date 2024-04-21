import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    const navigationItemsRef = useRef([]);

    useEffect(() => { 
        // Event handler for key presses
      const keyPress = (event) => { 
        // Find the index of the currently focused item in the navigationItemsRef array
        const currentFocusedIndex = navigationItemsRef.current.findIndex(item => item === document.activeElement);
  
        // Use switch statement to handle different key events
        switch (event.key) {
          case 'ArrowRight':
            // Calculate the next index and moves right
            const nextIndex = (currentFocusedIndex + 1) % navigationItemsRef.current.length;
            navigationItemsRef.current[nextIndex]?.focus();
            break;
          case 'ArrowLeft':
            // Calculate the previous index and moves left
            const prevIndex = (currentFocusedIndex - 1 + navigationItemsRef.current.length) % navigationItemsRef.current.length;
            navigationItemsRef.current[prevIndex]?.focus();
            break;
          default:
            // Exit the function if other keys are pressed
            break;
        }
      };
  
      // Attach the keydown event listener to the window
      window.addEventListener('keydown', keyPress);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', keyPress);
      };
    }, []);
    return (
   <nav>
      <table>
        <th><Link ref={el => navigationItemsRef.current[0] = el} to="/">Home</Link></th>
        <th><Link ref={el => navigationItemsRef.current[1] = el} to="/things-to-read">Things to Read</Link></th>
      </table>
    </nav>
  );
}

export default NavigationBar;