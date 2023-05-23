import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AuthDetails from "./components/AuthDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="logoo">
        <h1>
          Student<span>Flock</span>{" "}
        </h1>
      </div>
      <Signin />
      <Signup />
      <AuthDetails />
    </div>
  );
}

export default App;
