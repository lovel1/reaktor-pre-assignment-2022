import { Icon } from '@iconify/react';

const Navbar = ({setShowStatistics, showStatistics}) => (
    <div className='navbar sticky bg-gray-1000 flex justify-between p-5 lg:px-16 lg:pt-5 lg:w-2/6'>
        <h1 className='font-semibold text-2xl'><span className='text-blue-500 font-bold'>RPS.</span>game</h1>
        <button onClick={() => setShowStatistics(prev => !prev)} className={'lg:hidden transition-all' + (showStatistics ? ' scale-125' : '')}>
            <Icon className='text-blue-500 w-6 h-6' icon="ion:stats-chart-sharp"/>
        </button>
    </div>
)

export default Navbar