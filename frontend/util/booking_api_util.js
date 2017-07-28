export const createBooking = booking => (
  $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { booking }
  })
);
