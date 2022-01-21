import { Icon } from "@iconify/react"
import { useNavigate, useParams } from "react-router-dom"
import { convertToUrlFriendly } from "../../utils/convertToUrlFriendly"
import { PlayerStatisticsCard } from "../cards/PlayerStatisticsCard"
import { PlayerMatchesList } from "../lists/PlayerMatchesList"

export const PlayerFragment =  ({playersData}) => {
    const playerFromUrl = useParams().name
    const playerData = playersData.filter(player => convertToUrlFriendly(player.name) === playerFromUrl)[0]
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center mb-8">
                <button onClick={() => navigate('/')}><Icon className="w-7 h-7 mr-2 hover:text-blue-500" icon="ic:baseline-arrow-back-ios-new"/></button>
                <h1 className='font-semibold text-4xl'>{playerData && playerData.name}</h1>
            </div>
            {playerData && <PlayerStatisticsCard player={playerData}/>}
            <h1 className='font-semibold text-4xl mt-6 mb-3'>Matches</h1>
            {playerData && <PlayerMatchesList matches={playerData.matches} name={playerData.name}/>}
        </>
    )
}