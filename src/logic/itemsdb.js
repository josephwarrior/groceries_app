export const items = {
  1: {
    id: 1,
    category: "PRODUCE",
    name: "AVOCADO",
    stock: 4,
    target: 8,
    units: "ea",
  },
  2: {
    id: 2,
    category: "CLEANERS",
    name: "DISH WASHING SOAP",
    stock: 200,
    target: 1000,
    units: "mL",
  },
  3: {
    id: 3,
    category: "CLEANERS",
    name: "DETERGENT",
    stock: 3,
    target: 6,
    units: "mL",
  },
  4: {
    id: 4,
    category: "DAIRY",
    name: "FAT FREE MILK",
    stock: 0,
    target: 12,
    units: "mL",
  },
  5: {
    id: 5,
    category: "MEAT",
    name: "BACON",
    stock: 4,
    target: 4,
    units: "mL",
  },
  6: {
    id: 6,
    category: "DAIRY",
    name: "COTTAGE CHEESE",
    stock: 8,
    target: 30,
    units: "ea",
  },
  7: {
    id: 7,
    category: "DAIRY",
    name: "CHOCOLATE MILK",
    stock: 300,
    target: 2000,
    units: "mL",
  },
};

export const getItems = () => {
  return items;
};

let availableId = 8;

export const addItem = (item, username) => {
  items[availableId] = { ...item, id: availableId };
  availableId++;
};

export const updateItems = (updatedItemsObject) => {
  Object.keys(updatedItemsObject).map((key) => {
    return (items[key] = updatedItemsObject[key]);
  });
};

export const deleteItem = (itemId) => {
  delete items[itemId];
};
