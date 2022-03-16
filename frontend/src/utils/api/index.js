const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function readItem(item_id, signal) {
  const url = `${API_BASE_URL}/items/${item_id}`;
  return await fetchJson(url, { signal }, {});
}

export async function listItems(signal) {
  const url = `${API_BASE_URL}/items`;
  return await fetchJson(url, { signal }, []);
}

export async function createItem(item, signal) {
  const url = `${API_BASE_URL}/items`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: item }),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function updateItem(updatedItem, signal) {
  console.log(updatedItem)
  const url = `${API_BASE_URL}/items/${updatedItem.item_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(updatedItem),
  };
  return await fetchJson(url, options, updatedItem);
}

export async function deleteItem(itemId, signal) {
  const url = `${API_BASE_URL}/items/${itemId}`;
  const options = { method: "DELETE", signal };
  return await fetchJson(url, options);
}
