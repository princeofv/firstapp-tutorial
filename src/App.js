import logo from "./logo.svg";
import "./App.css";
import SecondPage from "./SecondPage";
import NavBar from "./NavBar";
function App() {
  //State , Props
  // State -> within a Component
  //Props => External COmponents too
  const styles = {
    head: {
      color: "blue",
    },
  };
  const user = "Vijay";
  const jsonData = [
    {
      name: "Vijay",
    },
    {
      name: "Pradeep",
    },
  ];
  return (
    // External Css
    <div className="App">
      <NavBar />
      {/* internal Css */}
      <h1 style={styles.head}> heading</h1>
      {/* Inline Css */}
      <h2 style={{ color: "green" }}>Heading 2 Inline Css</h2>
      <h4>UserName :{user}</h4>
      {user ? <SecondPage name={user} data={jsonData} /> : <Sample />}
    </div>
  );
}
//Function
const Sample = () => {
  return (
    <div>
      <h2> Try again Function</h2>
      <h2> Try again Function</h2>
    </div>
  );
};
export default App;
