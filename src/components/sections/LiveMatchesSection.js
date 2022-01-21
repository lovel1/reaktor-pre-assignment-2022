import { CSSTransition, TransitionGroup } from "react-transition-group"
import { LiveMatchCard } from "../cards/LiveMatchCard"

export const LiveMatchesSection = ({liveMatches}) => {
    return (
        <section className='flex flex-col min-h-700px pt-10'>
          <h1 className='font-semibold text-4xl'>Ongoing Matches</h1>
          <p className='font-semibold text-sm text-slate-400 mt-2'>Games being played right now</p>
            <TransitionGroup className="live-matches-transition-group flex flex-col gap-5 pb-5 mt-8">
                {liveMatches.map(matchData => (
                    <CSSTransition key={matchData.gameId} timeout={500} classNames="match-transition">
                        <LiveMatchCard matchData={matchData}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    )
}