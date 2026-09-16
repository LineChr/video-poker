import Card, { CardBack } from "./components/Card/Card";
import "./App.css";

function App() {
  return (
  <div>
    <Card card={{symbol: "hearts", value: "2"}}></Card>
    <CardBack></CardBack>
  </div>
)};

export default App;
