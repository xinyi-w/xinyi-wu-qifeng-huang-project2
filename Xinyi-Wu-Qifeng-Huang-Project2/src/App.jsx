import { useContext, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CountText from './CounterText';
import './App.css'
import { CountContext } from './CountProvider';
import Header from './Header';

export default function App(){

  const [blackedOutState, setBlackedOutState] = useState(false);
  // const [countState, setCountState] = useState(0);
  const [countState, setCountState] = useContext(CountContext) //use context


  // let isBlackedOut = false;



  function reverseIsBlackedOut(){
    setBlackedOutState(!blackedOutState);
    // -result in App() getting rerun
    // isBlackedOut = !isBlackedOut;
    // console.log(isBlackedOut) //debug
    setCountState(countState + 1);
  }

  function reset(){
    setCountState(0);
  }

  useEffect(function() {
    // console.log("I have been rerendered")
    if(countState%10 === 0) console.log("Count state is divisible by 10")
  }, [countState]);

  let boxClassName = ''
  if (blackedOutState) {
    boxClassName = 'box boxBlackBackground';
  } else {
    boxClassName = 'box';
  }

  return(
    <div>
      <Header />
      <CountText color = 'red' nickname = 'Bobby' countAmount ={countState} >
        <botton onClick ={() => reset()}>Click to reset</botton>
      </CountText>
      {/* <div>This box has been clicked: {countState} times.</div> */}
      <div className={boxClassName} onClick={() => reverseIsBlackedOut()}>
      </div>
    </div>
  )

}




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App