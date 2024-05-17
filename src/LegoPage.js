import React from 'react';
import './LegoPage.css';
import legos from "./How-to-Build-Your-Lego-Collection-Gear-GettyImages-900408694.jpg.webp";
import starwars from "./CQaJkg.png";
import f1 from "./42171_boxprod_v39.png";
import tower from "./GUEST_38640fdd-c8a1-4057-856d-48067eede8ee.jpeg";

function LegoPage() {
  return (
    <div className="LegoPage">
      <header className="LegoPage-header">
        <h1>Welcome to the World of Legos!</h1>
      </header>
      <main>
        <section className="main-image">
          <img src={legos} alt="Colorful Lego Bricks" />
        </section>
        <section className="content">
          <h2>About Legos</h2>
          <p>
            Legos have been a beloved toy for generations, sparking creativity and engineering skills in kids and adults alike. From simple brick sets to intricate models, Legos offer endless possibilities.
          </p>
          <h2>Why Legos are Amazing</h2>
          <ul>
            <li>Encourages creativity and imagination</li>
            <li>Develops fine motor skills</li>
            <li>Fun for all ages</li>
            <li>Educational and entertaining</li>
          </ul>
          <h2>Popular Lego Themes</h2>
          <p>
            Legos come in various themes including Star Wars, City, Technic, and more. Each theme offers unique building experiences and challenges.
          </p>
        </section>
        <section className="additional-images">
          <img src={starwars} alt="Lego Set 1" />
          <img src={f1} alt="Lego Set 2" />
          <img src={tower} alt="Lego Set 3" />
        </section>
      </main>
    </div>
  );
}

export default LegoPage;