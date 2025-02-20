import PropTypes from 'prop-types';

function List(props){

  const category = props.category;
  const itemList = props.items;

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //for alphabetical sorting
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //for reverse alphabetical sorting
  //fruits.sort((a, b) => a.calories - b.calories); //numeric sorting a/c to calories
  //fruits.sort((a, b) => b.calories - a.calories); //reverse numeric

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

  const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                               <b>{item.calories}</b> 
                                                </li>);
  
  return(<>
  <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>
  </>);
}

List.PropTypes = {
   category: PropTypes.string,
   items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number}))
}

List.defaultProps = {
  category: "category",
  items: [],
}

export default List