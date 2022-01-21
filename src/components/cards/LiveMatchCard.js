import { addLineBreakToName } from "../../utils/addLineBreakToName"

export const LiveMatchCard = ({matchData}) => {
    return (
        <div className='flex justify-center items-center font-semibold bg-slate-800 rounded-lg text-md py-4 whitespace-pre-wrap w-80' key={matchData.gameId}>
            <p className='text-right flex-1'>{addLineBreakToName(matchData.playerA.name)}</p>
            <p className='mx-3 text-blue-500 flex-none'>vs</p>
            <p className='text-left flex-1'>{addLineBreakToName(matchData.playerB.name)}</p>
        </div>
    )
}