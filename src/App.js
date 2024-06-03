import "./App.css";
import ObjectList from "./components/ObjectList";
function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <h1 className="Mobile">Mobile List</h1>
      <ObjectList></ObjectList>
    </>
  );
}

export default App;
