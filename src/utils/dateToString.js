
const dateToString = date => {
  const formattedDate = date.toLocaleDateString().replaceAll('.', '/');
  
  return formattedDate;
}
export default dateToString;