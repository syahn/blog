export default function(date) {
  if (date) {
    const [year, month, day] = date.split("-");
    const monthMap = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ];
    return `${day} ${monthMap[parseInt(month, 10) - 1]} ${year}`;
  } else {
    return "";
  }
}
