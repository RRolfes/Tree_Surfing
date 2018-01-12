
export const searchLocation = (location) => {
  return $.ajax({
    method: 'GET',
    url: `api/tree_houses/search/${location}`
  });
};
