import { Outlet } from 'react-router-dom';

import Navbar from './components/common/navbar/Navbar';

const App = () =>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default App;