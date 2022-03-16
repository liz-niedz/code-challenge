import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";


function ItemForm({ newItem, setNewItem, handleSubmit, changeHandler }) {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/item/${params.item_id}`}>{newItem.item_name}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Item
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Item</h2>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="form-group">
              <label className="name">Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                value={newItem.item_name}
                onChange={changeHandler}
                required={true}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="form-group">
              <label className="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={newItem.item_description}
                onChange={changeHandler}
                required={true}
              ></textarea>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="form-group">
              <label className="quantity">Quantity</label>
              <input
                name="quantity"
                id="quantity"
                type="number"
                value={newItem.quantity}
                onChange={changeHandler}
                required={true}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="form-group">
              <label className="date_added">Date Added</label>
              <input
                name="date_added"
                id="date_added"
                type="date"
                value={newItem.date_added}
                onChange={changeHandler}
                required={true}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <div className="form-group">
              <label className="time_added">Time Added</label>
              <input
                name="time_added"
                id="time_added"
                type="time"
                value={newItem.time_added}
                onChange={changeHandler}
                required={true}
              />
            </div>
          </Form.Group>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(`/items/${params.item_id}`)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
export default ItemForm;
