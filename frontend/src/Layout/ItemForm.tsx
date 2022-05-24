import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { EuiButton, EuiFieldText, EuiFormRow, EuiForm, EuiFlexItem, EuiFlexGroup, EuiBreadcrumbs, EuiBreadcrumb} from '@elastic/eui'




function ItemForm({ newItem, setNewItem, handleSubmit, handleChange }: any) {
  const params = useParams();
  const navigate = useNavigate();
  const breadcrumbs: EuiBreadcrumb[] = [
    {
      text: 'Home',
      href: '/',
      color: 'primary'
    }, 
    {
      text: newItem.item_name,
      href: `/item/${params.item_id}`,
      color: 'primary'

    },
    {
      text: 'Edit Item',
      color: 'primary'
      
    }
  ]

  return (
    <div>
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
            <EuiFormRow className="mb-3"  label="Date Added" fullWidth>
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
              onClick={() => navigate(`/items/${params.item_id}`)}
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
      </div>
    </div>
  );
}
export default ItemForm;
