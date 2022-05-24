import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import AddItem from "./Layout/AddItem";
import Item from "./Layout/Item";
import EditItem from "./Layout/EditItem";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <div className="app-routes">
      <EuiProvider colorMode="light">
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/items/new" element={<AddItem />} />
            <Route path="/items/:item_id" element={<Item />} />
            <Route path="/items/:item_id/edit" element={<EditItem />} />
          </Routes>
        </Fragment>
      </Router>
      </EuiProvider>
    </div>
  );
}

export default App;