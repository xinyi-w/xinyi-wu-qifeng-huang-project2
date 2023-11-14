import { useContext } from "react"
import { CountContext } from "./CountProvider"

export default function CountText(props){

    console.log("This is the props of CountText.jsx")
    console.log(props)

    const [countState, setCountState] = useContext(CountContext)

    function resetCount(){
        setCountState(0);
    }

    return(
        <div>
            {/* {props.children} */}
            <button onClick={() => resetCount()}>Reset</button>
            <div>You have clicked this box {countState} times</div>
        </div>
    )

}

// function topLevelFunction(){
//     console.log("first");
//     secondLevelFunction;
// }

// function secondLevelFunction(){
//     console.log("second");
//     thirdLevelFunction;
// }

// function thirdLevelFunction(){
//     console.log("thrid");
// }

// topLevelFunction()