import { useState } from "react"
import { filterHandler } from "../../utils/filterHandler"
import { Filter } from "../Filter"
import { PlayersList } from "../lists/PlayersList"

export const StatisticsFragment = ({playersData}) => {
    const [playersFilter, setPlayersFilter] = useState('')
    const filteredPlayers = filterHandler(playersFilter, playersData, 'name').sort((prev, curr) => curr.matches.length - prev.matches.length)

    return (
        <>
            <h1 className='font-semibold text-4xl mb-4'>Players</h1>
            <Filter playersFilter={playersFilter} setPlayersFilter={setPlayersFilter}/>
            <PlayersList players={filteredPlayers}/>
        </>
    )
}