import React from "react";


function ListItems({ items }) {
  return (
    <div className="item-cards">
      {items.map((item) => (
        <div key={item.item_id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.item_name}</h5>

              <p className="card-text">{item.item_description}</p>
              <p className="card-text">{item.quantity}</p>
              <p className="card-text">{item.date_added}</p>
              <p className="card-text">{item.time_added}</p>
              <a href={`/items/${item.item_id}`} className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListItems;