import { CSSTransition, TransitionGroup } from "react-transition-group"
import { MatchResultCard } from "../cards/MatchResultCard"

export const MatchResultsSection = ({matchResults}) => {
    return (
        <section className='flex flex-col pt-10'>
          <h1 className='font-semibold text-4xl'>Recent Results</h1>
          <p className='font-semibold text-sm text-slate-400 mt-2'>Results of 5 recent matches</p>
          <TransitionGroup className="match-results-transition-group flex flex-col gap-5 pb-5 mt-8">
            {matchResults.slice(0, 5).map(matchData => (
                <CSSTransition key={matchData.gameId} timeout={500} classNames="match-transition">
                  <MatchResultCard matchData={matchData}/>
                </CSSTransition>
            ))}
          </TransitionGroup>
        </section>
    )
}