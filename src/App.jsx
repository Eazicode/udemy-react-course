import { useEffect, useState } from 'react'
import MonsterList from './Components/List/List'
import FilterMonsters from './Components/SearchBox/SearchBox'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

// function App() {
//     const [name, setName] = useState('Eze');
//     const [profession, setProfession] = useState('Teaching')
  
//     const changeDetails = () => {
//       setName("osha")
//       setProfession("Driving")
//     }
  
//     return (
//       <>
//         <div>
//           <a href="https://vite.dev" target="_blank">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>
//         <h1>Vite + React</h1>
//         <p>Hi {name}. Do you like {profession}? </p>
//         <div className="card">
//           <button onClick = {changeDetails}>
//             Change name
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
  
//         <div>This is also {name} and he like {profession}</div>
//       </>
//     )
//   }
  
// function App () {
//   const monsters = [
//     {
//       name: 'Emma',
//       id: '123d',
//       position: 'first'
//     },
//     {
//       name: 'Ruth',
//       id: '123f',
//       position: 'second'
//     },
//     {
//       name: 'jerry',
//       id: '123a',
//       position: 'Third'
//     },
//     {
//       name: 'Mayor',
//       id: '123o',
//       position: 'fourth'
//     }
//   ]

  
//   return (
//     <>
//       {monsters.map((monster) => {
//         return <h1 key={monster.id}  className='mb-5'>{monster.name}, This is my position {monster.position.toLocaleUpperCase()}</h1>
//       })}
//     </>
//   )
// }

  // function App () {
  //   const [input, setInput] = useState('')

  //   const displayText = (e) => {
  //     setInput(e.target.value)
  //   }

  //   return (
  //     <>
  //       <p className='text-white' >
  //         {input}
  //       </p>
  //       <input onChange={displayText} className='bg-white text-blue-500 py-2' placeholder='Type your name'/>
  //     </>
  //   )
  // }

  // function App () {
  //   const [monsters, setMonsters] = useState([]) 

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => {
  //         return res.json()
  //       }
  //       )
  //       .then (data => {
  //         return(setMonsters(data))
  //       })
  //   }, [])

  //   return (
  //     <>
  //       <div>
  //         {monsters.map(data => (
  //           <div className='mb-5' key={data.id}>
  //             <p className='text-2xl'>{data.name}</p>
  //             <p className='text-xl'>{data.username}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   )
  // }

  function App () {
    const [monsters, setMonsters] = useState([]);
    const [filtername, setFilterName] = useState('')

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json()
      }).then( data => {
        return (setMonsters(data))
        
      })
    }, [])

   const searchMonsters = (e) => {
     setFilterName(e.target.value.toLowerCase())
   }

   const filteredMonsters = monsters.filter(data => {
    return data.name.toLowerCase().includes(filtername)
   })


    return (
      <>
         <FilterMonsters filtername={searchMonsters}/> 
          
         <MonsterList monsters={filteredMonsters}/>
      </>
    )
  }

export default App

  // function App () {
  
  //   const [changeInfo, setChangeInfo] = useState(true)
    
  //   const handleChangeInfo = ( ) => {
  //     setChangeInfo(!changeInfo)
  //   }
  
  //   return (
  //     <div>
  //       <button className='mb-5' onClick={handleChangeInfo}>
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


  // function App () {
  //   const [count, setCount] = useState(0)

  //   const incrementCount = () => {
  //     setCount(count + 1)
  //   }
  //   const decrementCount = () => {
  //     setCount(count - 1)
  //   }

  //   return (
  //     <>
  //       <p className='mb-[10px]'>Count: {count}</p>
        
  //       <button onClick={incrementCount}>
  //         Increment
  //       </button>

  //       <div className='mt-[10px]'>
  //         <button onClick={decrementCount}>
  //           Decrement
  //         </button>
  //       </div>
  //     </>
  //   )
  // }
