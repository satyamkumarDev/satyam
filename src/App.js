import React, { useEffect } from "react";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import { dataURL } from "../src/config";
import Buildings from "./container-UI/Buildings";
import Apartment from "./container-UI/Apartment";
import Location from "./container-UI/Location";
import Home from "./container-UI/HomeScreen";
import useHistory from "use-history";

// const ChangeRouteHandler = () => {
//     const { baseURL, projectName } = dataURL ? dataURL : "";
//   const { url } = useHistory();
//   url.push(`/${projectName}/home`);
// };

function App(props) {
  const { baseURL, projectName } = dataURL ? dataURL : "";

    useEffect(() => {


    }, []);

  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div >
            <Link className="brand" to={`/${projectName}/home`}>
              VIP
            </Link>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", position:'absolute', left:'60%' }}
          >
            <div>
              <Link to={`/${projectName}/home`}>Home</Link>
            </div>
            <div>
              <Link to={`/${projectName}/buildings`}>Building</Link>
            </div>
            <div>
              <Link to={`/${projectName}/apartment`}>Apartment</Link>
            </div>
            <div>
              <Link to={`/${projectName}/location`}>Location</Link>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path={`/${projectName}/apartment`}
              element={<Apartment />}
            ></Route>
            <Route
              path={`/${projectName}/location`}
              element={<Location />}
            ></Route>
            <Route
              path={`/${projectName}/buildings`}
              element={<Buildings />}
            ></Route>
            <Route path={`/${projectName}/home`} element={<Home />}></Route>
            <Route
              exact
              path="/"
              element={<Navigate to={`/${projectName}/home`} />}
            />
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
