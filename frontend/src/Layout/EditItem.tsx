import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, listItems } from "../utils/api";
import ItemForm from "./ItemForm";
import { EuiButton, EuiFieldText, EuiFormRow, EuiForm, EuiFlexItem, EuiFlexGroup, EuiBreadcrumbs, EuiBreadcrumb} from '@elastic/eui';
import { ItemType } from "./Item"


function EditItem() {
  const initialForm: ItemType = {
    item_id: "undefined",
    item_name: "",
    item_description: "",
    quantity: "",
    date_added: new Date(Date.now()),
    time_added: "4:43 pm",
  };
  const [form, setForm] = useState(initialForm);
  const params = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState<ItemType>();
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
      const current: any = items.find(
        (item: any) => item.item_id === Number(params.item_id)
      );
      current.date_added = current.date_added.slice(0,10)
      setCurrentItem(current);
      setForm(current);
    }
  }, [items, params]);
  

  function handleChange({ target: { name, value } }: any) {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event: any) => {
    const abortController = new AbortController();
    event.preventDefault();
    if(typeof currentItem === 'undefined') {
      return;
    }
    const updatedItem = {
      ...form,
      item_id: currentItem.item_id  
    };
    updatedItem.quantity = Number(updatedItem.quantity);
    updateItem(updatedItem, abortController.signal).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <ItemForm
        newItem={form}
        setNewItem={setForm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
}

export default EditItem;
