export const fetchTreeHouses = bounds => (
  $.ajax({
    method: 'GET',
    url: '/api/tree_houses',
    data: bounds
  })
);

export const fetchTreeHouse = id => (
  $.ajax({
    method: 'GET',
    url: `api/tree_houses/${id}`,
    data: {
      treeHouse : {
        id
      }
    }
  })
);

export const createTreeHouse = treeHouse => (
  $.ajax({
    method: 'POST',
    url: 'api/tree_houses',
    data: { treeHouse }
  })
);
