import { Icon } from "@iconify/react"
import { rpsIcons } from "../../constants/rpsIcons"
import { addLineBreakToName } from "../../utils/addLineBreakToName"

export const MatchResultCard = ({matchData}) => {
    const playedA = matchData.playerA.played
    const playedB = matchData.playerB.played
    const resultA = matchData.playerA.result
    const resultB = matchData.playerB.result

    return (
        <div className='flex justify-center items-center font-semibold bg-slate-800 rounded-lg text-md py-4 whitespace-pre-wrap outline outline-offset-2 outline-blue-500 w-80 px-3' key={matchData.gameId}>
            <div className='flex-none'>
                <Icon className={"w-7 h-7 " + (resultA === 'WIN' ? 'text-blue-500' : 'text-slate-400')} icon={rpsIcons[playedA]}/>
            </div>
            <p className={'text-right flex-1 ' + (resultA === 'LOSE' && 'text-slate-400')}>{addLineBreakToName(matchData.playerA.name)}</p>
            <p className='mx-3 text-blue-500 flex-none'>vs</p>
            <p className={'text-left flex-1 ' + (resultB === 'LOSE' && 'text-slate-400')}>{addLineBreakToName(matchData.playerB.name)}</p>
            <div className='flex-none'>
                <Icon className={"w-7 h-7 " + (resultB === 'WIN' ? 'text-blue-500' : 'text-slate-400')} icon={rpsIcons[playedB]} />
            </div>
        </div>
    )
}