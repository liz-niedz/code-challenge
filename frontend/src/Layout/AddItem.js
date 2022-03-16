import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../utils/api";
import Form from "react-bootstrap/Form";


function AddItem() {
  const navigate = useNavigate();
  const initialForm = {
    item_name: "",
    item_description: "",
    quantity: "",
    date_added: "",
    time_added: "",
  };
  const [newItem, setNewItem] = useState(initialForm);
 

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createItem(newItem);
    navigate(`/items/${response.item_id}`);
  }

  const handleChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add Item
              </li>
            </ol>
          </nav>
        </div>

        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <div className="form-group">
                <label className="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="item_name"
                  placeholder="Item Name"
                  onChange={handleChange}
                  value={newItem.item_name}
                  style={{ width: "100%" }}
                  required={true}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <div className="form-group">
                <label className="description">Description</label>
                <textarea
                  name="item_description"
                  id="description"
                  type="textarea"
                  rows="3"
                  placeholder="Brief description of item"
                  onChange={handleChange}
                  value={newItem.item_description}
                  style={{ width: "100%" }}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </Form.Group>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
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
    </>
  );
}

export default AddItem;

