import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserRoute from './components/UserRoute'
import  Admin from './pages/Admin'
import  Addtask from './pages/AddTask'
import  Tasks from './pages/Tasks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './firebase'
import { setUser } from './redux/actions'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(setUser(authUser));
    }
    else{
      dispatch(setUser(null));
    }
   })
  },[dispatch]);

  return (
    <BrowserRouter>
    <div className="app">
        <Switch>
            <UserRoute path="/" exact component={Home}/>
            <Route path="/Login"  component={Login}/>
            <Route path="/Register"  component={Register}/>
            <Route path="/admin"  component={Admin}/>
            <Route path="/addtask"  component={Addtask}/>
            <Route path="/tasks"  component={Tasks}/>
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App