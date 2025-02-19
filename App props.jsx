import Student from "../../student.jsx";

function App() {
    return(
      <>
      <Student name="rahul" age={28} isStudent={true}/>
      <Student name="Yash" age={23} isStudent={true}/>
      <Student name="tanupriya" age={48} isStudent={false}/>
      <Student />
      </>
     );  
}

export default App
