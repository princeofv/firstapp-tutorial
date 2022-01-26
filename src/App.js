import logo from "./logo.svg";
import "./App.css";
import SecondPage from "./SecondPage";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <StyledComponent />
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

const StyledComponent = () => {
  return (
    <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
      <div class="row d-flex justify-content-center px-3">
        <div class="card">
          <h2 class="ml-auto mr-4 mt-3 mb-0">Toronto</h2>
          <p class="ml-auto mr-4 mb-0 med-font">Snow</p>
          <h1 class="ml-auto mr-4 large-font">-20&#176;</h1>
          <p class="time-font mb-0 ml-4 mt-auto">
            08:30 <span class="sm-font">AM</span>
          </p>
          <p class="ml-4 mb-4">Wednesday, 18 October 2019</p>
        </div>
      </div>
    </div>
  );
};
export default App;
