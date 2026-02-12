import Card from "./components/Card";
import {PEOPLE_LIST} from "./data.js"

function App() {
  return <>{/* Your code  here */
    <main>
      {PEOPLE_LIST.map((ppl, index) => <Card key = {index} props = {ppl}/>)}
    </main>
  }</>;
}

export default App;
