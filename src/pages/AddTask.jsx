import React from 'react'
import Nav from "../pages/Nav"
const AddTask = () => {
  return (
    <>
    <Nav/>
    <div className="container pt-1">
      <div className="col-lg-12 "><h1>Add a task</h1></div>
    <form>
    <div className="mb-3">
      <label className="form-label">Add Title</label>
      <input  type="text" className="form-control"  />
    </div>
    <div className="mb-3">
      <label  className="form-label">Add Description</label>
      <input  type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Add Status</label>
      <input  type="text" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Save</button>
  </form>
  </div>
  </>
  )
}

export default AddTask