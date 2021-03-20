import React from "react";
import "./App.css";
import NameTest from "./components/NameTest";
import "bootswatch/dist/materia/bootstrap.min.css";
import ShopContext from "./context/ShopContext";
import ShowProducts from "./components/ShowProducts";

function App() {
  return (
    <div className="container mt-5">
      {/* <NameTest/> */}

      <ShopContext>
        <ShowProducts />
      </ShopContext>
    </div>
  );
}

export default App;
