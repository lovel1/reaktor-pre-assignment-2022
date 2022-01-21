import { useState } from "react"
import { PlayerItem } from "../list-items/PlayerItem"
import { Pagination } from "../Pagination"

export const PlayersList = ({players}) => {
    const [paginatedPlayers, setPaginatedPlayers] = useState([])

    return (
        <>
            <table className="table-auto min-w-full">
                <thead className="border-b border-slate-800">
                    <tr className="text-left">
                        <th className="py-2">Name</th>
                        <th className="text-center py-2">Matches</th>
                        <th className="text-center py-2">W/L/D</th>
                        <th className="text-center py-2">Hand</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedPlayers.map(player => <PlayerItem player={player} key={player.name}/>)}
                </tbody>  
            </table>

            <Pagination items={players} setPaginatedItems={setPaginatedPlayers} itemsPerPage={10}/>
          </>
    )
}