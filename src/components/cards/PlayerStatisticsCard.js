import { Icon } from "@iconify/react"
import { countPlayerStats } from "../../actions/playerActions"
import { rpsIcons } from "../../constants/rpsIcons"

export const PlayerStatisticsCard = ({player}) => {
    const playerStats = countPlayerStats(player)

    return (
        <div className="flex bg-slate-800 w-full rounded-lg py-4 px-10 justify-between mb-3">
            <div className="flex flex-col justify-center text-center">
                <p className="text-4xl font-semibold text-blue-500 flex-1">{playerStats.playerMatches}</p>
                <p className="text-sm font-semibold flex-1">Total<br/>Matches</p>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="text-4xl font-semibold text-blue-500 flex-1">{playerStats.playerRatio}</p>
                <p className="text-sm font-semibold flex-1">W/L/D</p>
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="text-4xl font-semibold text-blue-500">
                    {playerStats.playerFavHand ? <Icon className="w-10 h-10 inline" icon={rpsIcons[playerStats.playerFavHand]}/> : '-'}
                </p>
                <p className="text-sm font-semibold">Favourite<br/>Hand</p>
            </div>
        </div>
    )
}