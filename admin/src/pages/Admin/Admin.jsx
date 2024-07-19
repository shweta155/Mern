import React from 'react'
import './Admin.css'
import Sidebars from '../../component/Sidebars/Sidebars'
import { Route,Routes } from 'react-router-dom'
import AddProduct from '../../component/AddProduct/AddProduct'
import ListProduct from '../../component/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebars/>
<Routes>
  <Route path='/addproduct' element={<AddProduct/>}/>
  <Route path='/listproduct' element={<ListProduct/>}/>
  
</Routes>

    </div>
  )
}

export default Admin
