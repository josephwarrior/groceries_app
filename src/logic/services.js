import { getItems, addItem, updateItems, deleteItem } from "./itemsdb";

export const getItemsFetch = () => {
  return getItems();
};

export const addItemFetch = (newItem) => {
  addItem(newItem);
  return getItems();
};

export const updateItemsFetch = (updatedItemsObject) => {
  updateItems(updatedItemsObject);
  return getItems();
};

export const deleteItemFetch = (itemId) => {
  deleteItem(itemId);
  return getItems();
};
