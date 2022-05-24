import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { readItem, deleteItem } from "../utils/api";
import { EuiBreadcrumbs, EuiBreadcrumb, EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';

export type ItemType = {
  item_id: string,
  item_name: string,
  item_description: string,
  quantity: number | string,
  date_added: Date,
  time_added: string
}
function Item() {
  type itemParams = {
    item_id: string;
  }
  const [item, setItem] = useState<ItemType|undefined>();
  const { item_id } = useParams<itemParams>();
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

  if(typeof item === 'undefined') {
    return null;
  }

  const breadcrumbs: EuiBreadcrumb[] = [
    {
      text:'Home',
      href:'/',
      color:'primary'
    },
    {
      text: `${item.item_name}`,
      color:'primary'
    }
  ];
  
  

  return (
    <div>
      <EuiBreadcrumbs breadcrumbs={breadcrumbs} />
      <EuiCard
      title={item.item_name}
      description={item.item_description}>
        <EuiText>
        <ul>
                <li>{item.quantity}</li>
                <li>{item.date_added}</li>
                <li>{item.time_added}</li>
              </ul>
        </EuiText>
        <EuiButton fill 
        onClick={() => navigate(`/items/${item_id}/edit`)}>
          Edit</EuiButton>
        <EuiButton fill 
        color="danger"
        onClick={async (event: any) => {
          const abortController = new AbortController();
            event.preventDefault();
            if (
              window.confirm(
                "Delete this item? You won't be able to recover it."
              )
            ) {
              await deleteItem(item.item_id, abortController.signal);
              navigate("/");
              window.location.reload();
            }
          }}
          >Delete</EuiButton>
      </EuiCard>
        
      </div>
  );
}

export default Item;