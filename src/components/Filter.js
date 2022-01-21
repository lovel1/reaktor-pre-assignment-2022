export const Filter = ({playersFilter, setPlayersFilter}) => {
    return (
        <div className="flex items-center mb-3">
            <input type='text' 
                   className="bg-slate-800 rounded pl-2 font-semibold text-sm h-7 w-full hover:bg-slate-600 text-slate-400 focus:outline-none focus:bg-slate-600" 
                   placeholder="Search by name"
                   value={playersFilter}
                   onChange={event => setPlayersFilter(event.target.value)}
            />
        </div>
    )
}