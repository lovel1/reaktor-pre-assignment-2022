import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import { processMatch, sortMatchesByPlayers } from './actions/matchActions'
import { ws } from './constants/webSocket';
import Navbar from './components/Navbar';
import { PlayersSection } from './components/sections/PlayersSection';
import { LiveMatchesSection } from './components/sections/LiveMatchesSection';
import { MatchResultsSection } from './components/sections/MatchResultsSection';

function App() {

  const [history, setHistory] = useState([])
  const [playersData, setPlayersData] = useState([])
  const [liveMatches, setLiveMatches] = useState([])
  const [matchResults, setMatchResults] = useState([])
  const [showStatistics, setShowStatistics] = useState(false)

  ws.onopen = () => {
    console.log('connected to bad-api')
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(JSON.parse(event.data))
    if (data.type === 'GAME_BEGIN') {
      setLiveMatches([data, ...liveMatches])
    } else {
      const processedMatch = processMatch(data)
      setLiveMatches([...liveMatches.filter(match => match.gameId !== data.gameId)])
      setMatchResults([processedMatch, ...matchResults])
      setHistory([data, ...history])
    }
  }

  useEffect(() => {
    axios.get('https://bad-api-assignment.reaktor.com/rps/history')
      .then(res => setHistory(res.data.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const playersRes = sortMatchesByPlayers(history)
    setPlayersData(playersRes)
  }, [history])

  return (
    <div className="App bg-gray-900 text-slate-50 min-h-screen">
      <Navbar setShowStatistics={setShowStatistics} showStatistics={showStatistics}/>
      <div className="flex flex-col lg:flex-row">
        <PlayersSection playersData={playersData} showStatistics={showStatistics}/>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center lg:w-2/3 gap-x-10'>      
          <LiveMatchesSection liveMatches={liveMatches}/>
          <MatchResultsSection matchResults={matchResults}/>
        </div>
      </div>
    </div>
  );
}



export default App;
