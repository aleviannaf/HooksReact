import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import UseCallBackPage from '../pages/UseCallBackPage';
import UseContextPage from '../pages/UseContextPage';
import UseEffectPage from '../pages/UseEffectPage';
import UseLayoutPage from '../pages/UseLayoutEffectPage';
import UseMemoPage from '../pages/UseMemoPage';
import UseReducerPage from '../pages/UseReducerPage';
import UseRefPage from '../pages/UseRefPage';
import UseStatesPage from '../pages/UseStatesPage';


const MainRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/usestate'  element={<UseStatesPage/>}/>
            <Route path='/useref'  element={<UseRefPage/>}/>
            <Route path='/usereducer'  element={<UseReducerPage/>}/>
            <Route path='/usememo'  element={<UseMemoPage/>}/>
            <Route path='/uselayouteffect'  element={<UseLayoutPage/>}/>
            <Route path='/useeffect'  element={<UseEffectPage/>}/>
            <Route path='/usecontext'  element={<UseContextPage/>}/>
            <Route path='/usecallback'  element={<UseCallBackPage/>}/>
            
        </Routes>
    )
}

export default MainRoutes;