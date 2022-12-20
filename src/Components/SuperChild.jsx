import {useContext} from "react"
import {GlobalInfo} from "../App"
const SuperChild = () => {
    const {appColor,getDay} = useContext(GlobalInfo)
    const day = "sunday"
    return (
    <div>

<h1 style={{color:appColor}}>SuperChild component</h1>
    <button onClick={()=>getDay(day)}>Click me</button>
    </div>
  )
}

export default SuperChild
