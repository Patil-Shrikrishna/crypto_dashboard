import DropDown from "./components/DropDown";
import Search from "./components/Search";

function App() {
  return (
    <main>
      
      <DropDown  value1={"Chart types"} value2={"Line"} 
      value3={"Bar chart vertical"} value4={"Bar chart horizontal"}/>
      <Search/>
    </main>
  );
}

export default App;
