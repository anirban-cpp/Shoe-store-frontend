const getDate = (date) => {
  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const entries = date.toString().substring(0, 10).split("-");
  return (
    months[parseInt(entries[1], 10)] + " " + entries[2] + " ," + entries[0]
  );
};

export default getDate;
