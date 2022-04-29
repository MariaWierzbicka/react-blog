
const dateToString = date => {

  if (!date){
    return null;
  }

  const formattedDate = date.toLocaleDateString().replaceAll('.', '/');
  
  return formattedDate;
}
export default dateToString;