import List from "../../List.jsx";


function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95},
                  { id: 2, name: "berry", calories: 55},
                  { id: 3, name: "banana", calories: 105},
                  { id: 4, name: "coconut", calories: 159},
                  { id: 5, name: "pineapple", calories: 73}];

  const vegetables = [{ id: 6, name: "potatos", calories: 110},
                    { id: 7, name: "eggplant", calories: 10},
                    { id: 8, name: "carrots", calories: 25},
                    { id: 9, name: "corn", calories: 63},
                    { id: 10, name: "broccoli", calories: 50}];
                  
    return(<>
            {fruits.length > 0 && <List  items={fruits} category="Fruits"/> }
            {vegetables.length > 0 && <List  items={vegetables} category="Vegetables"/>}
          </>);  
}

export default App
