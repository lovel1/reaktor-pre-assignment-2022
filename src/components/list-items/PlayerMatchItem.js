import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { rpsIcons } from "../../constants/rpsIcons"
import { convertToUrlFriendly } from "../../utils/convertToUrlFriendly"
import { matchResultColorPicker } from "../../utils/matchResultColorPicker"

export const PlayerMatchItem = ({match}) => {
    const resultColor = matchResultColorPicker(match.result)

    return (
        <tr className="border-b border-slate-800 hover:bg-slate-800">
            <td className="py-2 px-1">
                <Link to={'/' + convertToUrlFriendly(match.opponent)} className="text-blue-500 font-semibold hover:text-blue-400">
                    {match.opponent}
                </Link>
            </td>
            <td className="text-center py-2"><Icon className="w-7 h-7 inline" icon={rpsIcons[match.played]}/></td>
            <td className={"text-center py-2 font-semibold " + resultColor}>{match.result}</td>
        </tr>
    )
}