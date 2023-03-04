
import React, { useState } from 'react'
import AddProduct from '../Components/AddProduct';
import UsersList from '../Components/UsersList';

import './css/DashBoard.css'

import Products from './Products';

const DashBoard = () => {

    const [editData, setEditData] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [navLink, setNavLink] = useState('products')

    const setEdit = (item, flag) => {
        setIsEdit(flag)
        setEditData(item)

    }
    const admin = true;
    return (
        <div className='dashboard-container'>
            <div className="dashboard">
                <div className="left">
                    <p className={navLink==='products'?'active':''} onClick={() => setNavLink('products')}>Products</p>
                    <p className={navLink==='users'?'active':''}onClick={() => setNavLink('users')}>Users</p>
                    <p className={navLink==='orders'?'active':''}onClick={() => setNavLink('orders')}>Orders</p>
                </div>
                <div className="right">
                    {
                        navLink === 'products' ? <>
                            <AddProduct isEdit={isEdit} editData={editData} setEdit={setEdit} />
                            <div className="product-viewer">
                                <h2> Products</h2>
                                <Products admin={admin} setEdit={setEdit} setEditData={setEditData} />
                            </div>

                        </>
                            : navLink === 'users' ? <>
                            <UsersList/>
                            </>
                                : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoard