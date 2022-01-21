import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PlayerFragment } from "../fragments/PlayerFragment"
import { StatisticsFragment } from "../fragments/StatisticsFragment"

export const PlayersSection = ({playersData, showStatistics}) => {
    
    return (
      <section className={'bg-gray-1000 lg:w-2/6 px-5 pt-10 lg:block lg:pl-16 lg:pr-10 xl:pr-16 pb-10 ' + (!showStatistics ? 'hidden' : '')}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StatisticsFragment playersData={playersData} />} />
              <Route path="/:name" element={<PlayerFragment playersData={playersData} />} />
            </Routes>
          </BrowserRouter>          
        </section>
    )
}