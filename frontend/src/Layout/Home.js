import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listItems } from "../utils/api";
import ListItems from "./ListItems";

function Home() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(loadItems, []);

  function loadItems() {
    const abortController = new AbortController();
    listItems(abortController.signal).then(setItems);

    return () => abortController.abort();
  }

  return (
    <>
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("/items/new")}
      >
        + Create Item
      </button>
      </div>
      <ListItems items={items} />
    </>
  );
}

export default Home;
