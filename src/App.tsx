import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        // onNext={() => console.log("Maybe next now.")}
        word="drink"
        translation={["drikker", "drak", "har drukket"]}
      />
    </div>
  );
}

export default App;
