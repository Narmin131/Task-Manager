import React from 'react'
import Nav from "../pages/Nav"
import { Link } from 'react-router-dom'
const Tasks = () => {
  return (
    <div>
      <Nav/>
      <div className='container mt-5'>
        <Link to="/addblog" className='btn btn-primary'>Add</Link>
        <table className="table">
    <thead>
      <tr>
        <th scope="col">#Id</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Status</th>
        <th scope="col">Edit</th>
      </tr>
    </thead>
  </table>
</div>
    </div>
  )
}

export default Tasks