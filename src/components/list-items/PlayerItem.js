import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { countPlayerStats } from "../../actions/playerActions"
import { rpsIcons } from "../../constants/rpsIcons"
import { addLineBreakToName } from "../../utils/addLineBreakToName"
import { convertToUrlFriendly } from "../../utils/convertToUrlFriendly"

export const PlayerItem = ({player}) => {
    const playerStats = countPlayerStats(player)

    return (
        <tr className="border-b border-slate-800 hover:bg-slate-800">
            <td className="py-2 px-1">
                <Link to={'/' + convertToUrlFriendly(player.name)} className="text-blue-500 font-semibold hover:text-blue-400">
                    {addLineBreakToName(player.name)}
                </Link>
            </td>
            <td className="text-center py-2">{playerStats.playerMatches}</td>
            <td className="text-center py-2">{playerStats.playerRatio}</td>
            <td className="text-center py-2">
                <Icon className="w-7 h-7 inline" icon={playerStats.playerFavHand ? rpsIcons[playerStats.playerFavHand] : 'clarity:minus-line'}/>
            </td>
        </tr>
    )
}