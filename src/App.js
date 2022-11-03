import Gallery from "./Gallery";
import "./styles.css";
import { sculptureList } from "./data";

export default function App() {
  console.log(sculptureList);
  return (
    <div className="App">
      <Gallery sculptureList={sculptureList} />
    </div>
  );
}
