import React, { useState } from 'react'

const App = () => {
  const [team1Score,setTeam1Score]=useState('');
  const [team1Overs,setTeam1Overs]=useState('');
  const [team2Score,setTeam2Score]=useState('');
  const [team2Overs,setTeam2Overs]=useState('');
  const [target,setTarget]=useState('');
  const calculateAdjustedTarget = (e)=>{
      e.preventDefault();
      setTarget (Math.ceil((team1Score * (team2Overs/team1Overs))));
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-bl from-zinc-700 to-zinc-900 text-white'>
        <div className='w-80'>
          <h1 className='text-2xl text-center font-bold text-blue-500 mb-3'>DLS Calculator App</h1>
            <form action="" className='flex flex-col h-70 justify-evenly'>
              <input
              onChange={(e)=>setTeam1Score(e.target.value)} 
              type='number' placeholder="Team 1's Score " className='bg-zinc-700 p-2 rounded-md outline-none' />
              <input
              onChange={(e)=>setTeam1Overs(e.target.value)}
              type="number" placeholder="Team 1's Overs played" className='bg-zinc-700 p-2 rounded-md outline-none' />
               <input
              onChange={(e)=>setTeam2Score(e.target.value)}
              type="number" placeholder="Team 2's Score" className='bg-zinc-700 p-2 rounded-md outline-none' />
              <input
              onChange={(e)=>setTeam2Overs(e.target.value)}
              type="number" placeholder="Team 2's Overs played" className='bg-zinc-700 p-2 rounded-md outline-none' />
              <input
              onClick={(e)=>calculateAdjustedTarget(e)}
              type="submit" value="Calculate Adjusted Target" className='bg-gradient-to-b from-blue-600 to-violet-600 p-2 rounded-md text-sm cursor-pointer  hover:from-blue-800 hover:to-violet-800' />
            </form>
            <h1 className='text-xl text-center text-orange-400 mb-1'>{target && `DLS Par Score is ${target}`}</h1>
            <h1 className='text-xl text-yellow-400 text-center'>{(target) && (target>team2Score && `Team 1 won by ${target-team2Score} ${target-team2Score>1?'runs':'run'} ` || team2Score>target && `Team 2 won by ${team2Score-target} ${team2Score-target>1?'runs':'run'} `)}</h1>
          </div>      
    </div>
  )
}

export default App
