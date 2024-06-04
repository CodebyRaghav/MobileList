import "./App.css";
import ObjectList from "./components/ObjectList";
function App() {
  return (
    <>
      <nav className="navbar border-2">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <h1 className="text-center font-bold text-lg">Mobile List</h1>

      <ObjectList></ObjectList>
      {/* <ViewButton /> */}
    </>
  );
}

export default App;
