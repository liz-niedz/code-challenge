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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items/new" element={<AddItem />} />
          <Route exact path="/items/:itemId" element={<Item />} />
          <Route exact path="/items/:itemId/edit" element={<EditItem />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;