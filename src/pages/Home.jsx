import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logoutInitiate } from '../redux/actions';
import { Link } from 'react-router-dom';
const Home = () => {

  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const handleAuth =()=>{
   if(currentUser){
    dispatch(logoutInitiate());
   }
  }

  return (
    <div>
        <h2 style={{textAlign:"center",fontWeight:"bold",marginTop:"30px"}}>Welcome</h2>
        <br />
        <div className="button d-flex justify-content-center" style={{textAlign:"center",fontWeight:"bold"}}>
        <button 
        className='btn btn-danger m-1'
        onClick={handleAuth}>Log Out</button>
        <Link className='btn btn-primary m-1' to="/admin"><i class="fa-solid fa-user"></i> Admin Panel</Link>
        </div>
    </div>
  )
}

export default Home