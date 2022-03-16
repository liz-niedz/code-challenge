import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import AddItem from "./Layout/AddItem";
import Item from "./Layout/Item";
import EditItem from "./Layout/EditItem";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="app-routes">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Layout />} />
            <Route exact path="/items/new" element={<AddItem />} />
            <Route exact path="/items/:item_id" element={<Item />} />
            <Route exact path="/items/:item_id/edit" element={<EditItem />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;