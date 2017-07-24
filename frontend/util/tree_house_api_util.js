export const fetchTreeHouses = data => (
  $.ajax({
    method: 'GET',
    url: '/api/tree_houses',
    data
  })
);

export const fetchTreeHouse = id => (
  $.ajax({
    method: 'GET',
    url: `api/tree_houses/${id}`
  })
);

export const createTreeHouse = treeHouse => (
  $.ajax({
    method: 'POST',
    url: 'api/tree_houses',
    data: { treeHouse }
  })
);
