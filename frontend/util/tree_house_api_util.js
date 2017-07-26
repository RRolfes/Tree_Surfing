export const fetchTreeHouses = bounds => {
  return $.ajax({
    method: 'GET',
    url: '/api/tree_houses',
    bounds
  });
};

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
