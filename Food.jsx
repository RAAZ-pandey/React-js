
function Food(){

  const food1 = "Mango";
  const food2 = "Kheer";

  return(
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food