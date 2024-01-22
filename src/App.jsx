import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import PlayersList from './components/PlayersList'

function App() {
  const [players, setPlayers] = useState([])
  const [player, setPlayer] = useState({})

  const handleDelete = id => {
    const newPlayers = players.filter(player => player.id !== id)
    setPlayers(newPlayers)
  }

  return (
    <div className='mt-20'>
      <Header />
      <div className="md:flex mt-10">
        <Form
          players={ players }
          setPlayers={ setPlayers }
          player={ player }
        />
        <PlayersList
          players={ players }
          setPlayer={ setPlayer }
          handleDelete={ handleDelete }
        />
      </div>
    </div>
  )
}

export default App
