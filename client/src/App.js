import Login from "./components/Login";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";
import "./app.css";

function App() {


  return (
    <div className="main">
      <Header></Header>
      <div className="body">
      <Login></Login>
      </div>
    </div>
  );
}

export default App;
