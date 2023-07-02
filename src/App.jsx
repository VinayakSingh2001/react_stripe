import React from "react";
import Pay from "./Pay";
import Success from "./Success";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/pay" Component={Pay}/>
          <Route path="/success" Component={Success}/>
          {/* <Route path="/pay" Component={Pay}/> */}
      </Routes>
    </>
  );
}

export default App;
