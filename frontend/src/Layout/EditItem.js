import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, listItems } from "../utils/api";
import ItemForm from "./ItemForm";

function EditItem() {
  const initialForm = {
    item_name: "",
    item_description: "",
    quantity: "",
    date_added: "",
    time_added: "",
  };
  const [form, setForm] = useState(initialForm);
  const params = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    listItems(abortController.signal)
      .then((response) => {
        setItems(response);
      })
      .catch(setError);
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const current = items.find(
        (item) => item.item_id === Number(params.item_id)
      );
      current.date_added = current.date_added.slice(0,10)
      setCurrentItem(current);
      setForm(current);
    }
  }, [items, params]);
  

  function changeHandler({ target: { name, value } }) {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedItem = {
      ...form,
      item_id: currentItem.item_id  
    };
    console.log(currentItem)
    updatedItem.quantity = Number(updatedItem.quantity);
    updateItem(updatedItem).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h2>Edit Item:</h2>
      <ItemForm
        newItem={form}
        setNewItem={setForm}
        handleSubmit={handleSubmit}
        changeHandler={changeHandler}
      />
    </>
  );
}

export default EditItem;
