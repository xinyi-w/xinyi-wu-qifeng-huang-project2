import { createContext, useState } from "react"

export const CountContext = createContext();


export default function CountProvider(props){

    const[countState, setCountState] = useState(0);

    return(
        // <CountContext.Provider value={[countState, setCountState]}>
        //     {props.children}
        // </CountContext.Provider>
        <CountContext.Provider value={[countState, setCountState]}>
            {props.children}
        </CountContext.Provider>
    )
}

// CountProvider
//  -> App.jsx 
//     -> CountText.jsx 
