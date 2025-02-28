

function Hello(props){

  const{name,massage,day}=props;
  return(
    <h1>
      {massage} {name} <br />
       {day}
    </h1>
  );
}

export default Hello;