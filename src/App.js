import {createContext,useState} from "react"
import Child from "./Components/Child"
import OtherChild from "./Components/OtherChild"
export const GlobalInfo = createContext()
function App() {
  const [color,setColor] = useState("red")
  const [day,setDay] = useState("Monday")
  const getDay =(item)=>{
    setDay(item)
  }
  return (
    <GlobalInfo.Provider value={{appColor:color,getDay:getDay}}>
    <div className="App">
     <h1>App component {day}</h1>
     <Child/>
     <OtherChild/>
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
