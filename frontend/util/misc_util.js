export const dateToWords = (date) => {
  let dateArray = date.split("/");
  let day = dateArray[1];

  let month;

  let months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  let ordinal;

  if (day === '01') {
    ordinal = '1st';
  } else if (day === '02') {
    ordinal = '2nd';
  } else if (day === '03') {
    ordinal = '3rd';
  } else {
    ordinal = day + 'th';
  }


  let dateWords = `${months[dateArray[0]]} ${ordinal}, ${dateArray[2]}`;
  return dateWords;
};
