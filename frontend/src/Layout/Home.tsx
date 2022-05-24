import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listItems } from "../utils/api";
import ListItems from "./ListItems";
import { EuiButton } from '@elastic/eui'

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
      <EuiButton
        color="primary"
        fill
        onClick={() => navigate("/items/new")}
      >
        + Create Item
      </EuiButton>
      </div>
      <ListItems items={items} />
    </>
  );
}

export default Home;
