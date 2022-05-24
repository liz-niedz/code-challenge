import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import Item from "./Item";
import EditItem from "./EditItem";

function Layout() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/items/new" element={<AddItem />} />
          <Route  path="/items/:itemId" element={<Item />} />
          <Route  path="/items/:itemId/edit" element={<EditItem />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;