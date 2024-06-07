import { Outlet } from 'react-router-dom';

import Navbar from './components/common/navbar/Navbar';

const App = () =>{
    return(
        <>
            <div className='App'>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default App;