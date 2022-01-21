import { useState } from "react/cjs/react.development"
import { PlayerMatchItem } from "../list-items/PlayerMatchItem"
import { Pagination } from "../Pagination"

export const PlayerMatchesList = ({matches, name}) => {
    const [paginatedMatches, setPaginatedMatches] = useState([])

    return (
        <>
            <table className="table-auto min-w-full">
                <thead className="border-b border-slate-800">
                    <tr className="text-left">
                        <th className="py-2">Opponent</th>
                        <th className="text-center py-2">Played Hand</th>
                        <th className="text-center py-2">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedMatches.map(match => <PlayerMatchItem match={match} key={match.gameId}/>)}
                </tbody>  
            </table>

            <Pagination items={matches} setPaginatedItems={setPaginatedMatches} itemsPerPage={7} origin={name}/>
        </>

    )
}