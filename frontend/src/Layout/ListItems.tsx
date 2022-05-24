import React from "react";
import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';


function ListItems({ items }: any) {
  return (
    <div className="item-cards">
      {items.map((item: any) => (
        <EuiFlexItem>
          <EuiCard
          layout="vertical"
          title={item.item_name}
          description={item.item_description}>
            <EuiText size="s">
              <ul>
                <li>{item.quantity}</li>
                <li>{item.date_added}</li>
                <li>{item.time_added}</li>
              </ul>
            </EuiText>
            <EuiButton fill href={`/items/${item.item_id}`}>
              View
            </EuiButton>
        <div key={item.item_id}>
          </div>
        </EuiCard>
        </EuiFlexItem>
      ))}
      
    </div>
  );
}

export default ListItems;