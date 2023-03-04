import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import { storage } from '../FireBase/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import axios from 'axios';



const AddProduct = ({ editData, isEdit , setEdit }) => {
    const { user } = JSON.parse(localStorage.getItem('fishbeatsuser'))
    const userId = user.id
    const initialState = {
        id: '',
        name: '',
        desc: '',
        category: '',
        price: '',
        quantity: '',
        imgUrl: ''
    }

    const [imguploaded, setImguploaded] = useState(0)
    const [addProduct, setAddProduct] = useState(initialState)
    const [imgUrl , setImgUrl] = useState(editData.imgUrl);
    

    const admin = true;
  

    const uploadImg = (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setImguploaded(progress)
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        )
    }

    const addProductHandler = (e) => {
        e.preventDefault()
        if (imguploaded === 100) {
            axios.post('https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/addproduct', { ...addProduct, id: uuid(),imgUrl })
                .then((res) => console.log(res.data))
                .catch((e) => console.log(e))
            setAddProduct(initialState)
            
        }
    }
    const editProductHandler = (e) => {
        e.preventDefault()
            console.log('hey')

            if(imgUrl === ''){
               setImgUrl(editData.imgUrl)
            }
            console.log(editData)
            axios.put(`https://fishbeats-backend-hz0piqmxp-dipak9767.vercel.app/editproduct/${editData._id}`,{editData,imgUrl,userId})
                .then((res) => console.log(res.data))
                .catch((e) => console.log(e))
                setEdit(initialState, false)
                
    }
    return (
        <div className="add-products">
            {
                isEdit ?
                    <>
                        <h2>Edit Product</h2>
                        <form>
                            <input type="text" placeholder='name' value={editData.name} onChange={(e) => setEdit({ ...editData, name: e.target.value },true)} />
                            <textarea type="text" rows={5} placeholder='desc' value={editData.desc} onChange={(e) => setEdit({ ...editData, desc: e.target.value },true)} />
                            <input type="text" placeholder='category' value={editData.category} onChange={(e) => setEdit({ ...editData, category: e.target.value },true)} />
                            <input type="text" placeholder='price' value={editData.price} onChange={(e) => setEdit({ ...editData, price: e.target.value },true)} />
                            <input type="text" placeholder='quantity' value={editData.quantity} onChange={(e) => setEdit({ ...editData, quantity: e.target.value },true)} />
                            <input type="file" className='file' placeholder='img' accept='image/*'  onChange={uploadImg} />
                            <span>{imguploaded}</span>
                            <button className={imguploaded === 100 || editData.imgUrl !== '' ? "" : 'disabled'} onClick={editProductHandler}>Save</button>
                        </form>
                    </> : <>
                        <h2>Add Products</h2>
                        <form>
                            <input type="text" placeholder='name' value={addProduct.name} onChange={(e) => setAddProduct({ ...addProduct, name: e.target.value })} />
                            <textarea type="text" rows={5} placeholder='desc' value={addProduct.desc} onChange={(e) => setAddProduct({ ...addProduct, desc: e.target.value })} />
                            <input type="text" placeholder='category' value={addProduct.category} onChange={(e) => setAddProduct({ ...addProduct, category: e.target.value })} />
                            <input type="text" placeholder='price' value={addProduct.price} onChange={(e) => setAddProduct({ ...addProduct, price: e.target.value })} />
                            <input type="text" placeholder='quantity' value={addProduct.quantity} onChange={(e) => setAddProduct({ ...addProduct, quantity: e.target.value })} />
                            <input type="file" className='file' placeholder='img' accept='image/*' onChange={uploadImg} />
                            <span>{imguploaded}</span>
                            <button className={imguploaded === 100 ? "" : 'disabled'} onClick={addProductHandler}>Add</button>
                        </form>
                    </>
            }

        </div>
    )
}

export default AddProduct