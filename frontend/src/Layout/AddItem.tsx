import React, { FC, useState } from "react";
import { render } from "react-dom";
import { useNavigate } from "react-router-dom";
import { createItem } from "../utils/api";
import { EuiButton, EuiFieldText, EuiFormRow, EuiForm, EuiFlexItem, EuiFlexGroup, EuiBreadcrumbs, EuiBreadcrumb} from '@elastic/eui'



const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Home',
    href: '/',
    color: 'primary'
  }, 
  {
    text: 'Add Item',
    color: 'primary'
    
  }
]

const AddItem: FC = () => {
  const navigate = useNavigate();
  const initialForm = {
    item_name: "",
    item_description: "",
    quantity: "",
    date_added: "",
    time_added: "",
  };
  const [newItem, setNewItem] = useState(initialForm);
 

  async function handleSubmit(event: any) {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await createItem(newItem, abortController.signal);
    navigate(`/items/${response.item_id}`);
  }

  const handleChange = (event: any) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  

  return (
        <>
        <div>
          <EuiBreadcrumbs breadcrumbs={breadcrumbs}>
          </EuiBreadcrumbs>
        </div>

        <div>
          <EuiForm component="form" onSubmit={handleSubmit} className="form-group">
            <EuiFormRow   label="Name" fullWidth>
              <EuiFieldText 
                  fullWidth
                  type="text"
                  id="name"
                  name="item_name"
                  placeholder="Item Name"
                  onChange={handleChange}
                  value={newItem.item_name}
                  required={true}
                />
            </EuiFormRow>
            <EuiFormRow className="mb-3"   label="Item Description" fullWidth>
              <EuiFieldText
                  fullWidth
                  className="form-group"
                  name="item_description"
                  id="description"
                  type="textarea"
                  placeholder="Brief description of item"
                  onChange={handleChange}
                  value={newItem.item_description}
                  required={true}
                >
              </EuiFieldText>
            </EuiFormRow>
            <EuiFormRow className="mb-3"   label="Quantity" fullWidth>
              <EuiFieldText  
                  fullWidth
                  className="form-group"
                  name="quantity"
                  id="quantity"
                  type="number"
                  value={newItem.quantity}
                  onChange={handleChange}
                  required={true}>
              </EuiFieldText>
            </EuiFormRow>
            <EuiFormRow className="mb-3"   label="Date Added" fullWidth>
              <EuiFieldText className="form-group"
                  fullWidth
                  name="date_added"
                  id="date_added"
                  type="date"
                  value={newItem.date_added}
                  onChange={handleChange}
                  required={true}
                  >
              </EuiFieldText>
            </EuiFormRow>
            <EuiFormRow className="mb-3"   label="Time Added" fullWidth>
              <EuiFieldText 
                  fullWidth
                  name="time_added" 
                  className="form-group"
                  id="time_added"
                  type="time"
                  value={newItem.time_added}
                  onChange={handleChange}
                  required={true}
                  >
              </EuiFieldText>
            </EuiFormRow>
            <EuiFlexGroup alignItems="center">
              <EuiFlexItem>
            <EuiButton
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
              color="text"
              fill
            >
              Cancel
            </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem>
            <EuiButton
              type="submit"
              className="btn btn-primary"
              fill
            >
              Submit
            </EuiButton>
            </EuiFlexItem>
            </EuiFlexGroup>
          </EuiForm>
        </div></>
  );

}

export default AddItem;

