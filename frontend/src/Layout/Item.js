import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { readItem, deleteItem } from "../utils/api";

function Item() {
  const [item, setItem] = useState([]);
  const { item_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    async function loadItem() {
      const getItemFromAPI = await readItem(item_id, abortController.signal);
      setItem(getItemFromAPI);
    }
    loadItem();
    return () => abortController.abort();
  }, [item_id]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {item.item_name}
          </li>
        </ol>
      </nav>
      <div>
        <h3>{item.item_name}</h3>
        <p>{item.item_description}</p>
        <p>{item.quantity}</p>
        <p>{item.date_added}</p>
        <p>{item.time_added}</p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(`/items/${item_id}/edit`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={async (event) => {
            event.preventDefault();
            if (
              window.confirm(
                "Delete this item? You won't be able to recover it."
              )
            ) {
              await deleteItem(item.item_id);
              navigate("/");
              window.location.reload(false);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;