import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import { Link } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-5">
          <h1 className="h1">Tracktivity app</h1>
          <p>
            Detta är en webbapplikation som har <strong>React</strong> med{" "}
            <strong>Bootstrap</strong> i Front-end och Back-end består av{" "}
            <strong>Node.js, Express och MongoDB</strong>.
          </p>
          <h2 className="h5">React</h2>
          <p>
            Det har vart extremt utmanande projekt då jag valde att ge mig på
            React i stället för Vue som jag tidigare arbetat med. Det blev lite
            som att uppfinna hjulet på nytt känsla och det var svårare än jag
            trodde.
          </p>
          <p>
            Har använt mig av Reacts routing system samt stylat applikationen med Bootstrap. Har skapat olika komponenter som jag
            använt mig av för att addera och visa upp data, även testat på att
            göra standard layout sida som ligger i 'layout' mappen.
          </p>
          <p>
            Sass lades även till i npm paketet och har använt det lite i
            stylingen av min applikation, tycker att det svåraste var att veta
            hur en bra mappstruktur faktiskt bör se ut,under projektetsgång så
            bildades många tankar om hur det skulle kunna förbättras för
            framtida projekt.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 p-5">
          <h2 className="h1">Funktionalitet</h2>
          <p>Den funktionalitet som webbapplikationen besitter är följande:</p>
          <h2 className="h5">Back-end</h2>
          <ul>
            <li>Full CRUD</li>
          </ul>
          <h2 className="h5">Front-end</h2>
          <li className="mt-2">Reacts inbyggda routingsystem</li>
          <li className="mt-2">
            Addera poster till databasen och skriv ut dessa till skärmen
          </li>
          <li className="mt-2">Radera data ur databasen</li>
          <li className="mt-2">
            Felmeddelanden för användaren vid fel av inmatning i formulär
          </li>

          <div>
            <button className="submit mt-3">
              <Link className="nav-link" to="/sessions">
                Gå till applikationssidan
              </Link>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
