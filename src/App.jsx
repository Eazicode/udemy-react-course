import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  //   const [name, setName] = useState('Eze');
  //   const [profession, setProfession] = useState('Teaching')
  
  //   const changeDetails = () => {
  //     setName("osha")
  //     setProfession("Driving")
  //   }
  
  //   return (
  //     <>
  //       <div>
  //         <a href="https://vite.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <p>Hi {name}. Do you like {profession}? </p>
  //       <div className="card">
  //         <button onClick = {changeDetails}>
  //           Change name
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  
  //       <div>This is also {name} and he like {profession}</div>
  //     </>
  //   )
  // }
  
  
  // function App () {
  
  //   const [changeInfo, setChangeInfo] = useState(true)
    
  //   const handleChangeInfo = ( ) => {
  //     setChangeInfo(!changeInfo)
  //   }
  
    
  //   return (
  //     <div>
  //       <button onClick={handleChangeInfo}>
  //         {changeInfo ? 'First Info' : 'Second Info'}
  //       </button>
  
  //       {changeInfo && 
  //         <div>
  //           <p>This is Eze</p>
  //           <img src="../Images/Frame 30 (1).svg" alt="" />
  //         </div>
  //       }

  //       {!changeInfo && 
  //         <div>
  //           <p>This is Biola</p>
  //           <img src="../Images/Frame 30.svg" alt="" />
  //         </div>
  //       }
  
  //     </div>
  //   )
  // }
  
  // function App() {
  //   const [isVisible, setIsVisible] = useState(true);
  
  //   const btnHide = () => {
  //     setIsVisible(!isVisible)
  //   }
  
  //   return (
  //     <div>
  //       <button onClick={btnHide}>
  //         {isVisible ? 'Hide' : 'Show'}
  //       </button>
  //       {isVisible && <p>Now you see me!</p>}
  //       {/* {!isVisible && <p>Hidden</p> } */}
  //     </div>
  //   );
  // }

  function App () {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
      setCount(count + 1)
    }
    const decrementCount = () => {
      setCount(count - 1)
    }

    return (
      <>
        <p className='mb-[10px]'>Count: {count}</p>
        
        <button onClick={incrementCount}>
          Increment
        </button>

        <div className='mt-[10px]'>
          <button onClick={decrementCount}>
            Decrement
          </button>
        </div>
      </>
    )
  }

export default App
