
// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';



// const AddProduct = () => {
//     const [image, setImage] = useState(false);

//     const [productDetail, setProductDetail] = useState({
//         name: "",
//         image: "",
//         category: "",
//         old_price: "",
//         new_price: ""
//     });

//     const imageHandler = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const changeHandle = (e) => {
//         setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
//     };

//     const add_product = async () => {
//         // console.log(productDetail);
//         let responseData;
//         let product = productDetail;

//         let formData = new FormData();
//         formData.append('product', image);

//         await fetch('http://localhost:4000/upload', {
//             method: "POST",
//             body: formData,
//         })
//             .then((resp) => resp.json())
//             .then((data) => { responseData = data });

//         if (responseData && responseData.success) {
//             product.image = responseData.image_url;
//             console.log(product);
//             await fetch('http://localhost:4000/addproducts', {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     "Content-Type": 'application/json',
//                 },
//                 body: JSON.stringify(product),

//             }).then((resp) => resp.json()).then((data) => {
//                 data.success ? alert("Product Addedd successfully") : alert("failed")
//             })
//             // Add the code to save the product details to your backend
//         } else {
//             console.log('Error uploading image');
//         }

//     };

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input value={productDetail.name} onChange={changeHandle} type="text" name="name" placeholder='Type Here' />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input value={productDetail.old_price} onChange={changeHandle} type="text" name="old_price" placeholder='Type Here' />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p> Offer Price</p>
//                     <input value={productDetail.new_price} onChange={changeHandle} type="text" name="new_price" placeholder='Type Here' />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Category</p>
//                 <select value={productDetail.category} onChange={changeHandle} name="category" className='addproduct-selector' >
//                     <option value="women">Women</option>
//                     <option value="men">Men</option>
//                     <option value="kid">Kid</option>
//                 </select>
//             </div>
//             <div className="addproduct-itemfield">
//                 <label htmlFor="file-input">
//                     <img src={image ? URL.createObjectURL(image) : upload_area} alt="upload_area_image" className='addproduct-thumbnail-img' />
//                 </label>
//                 <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
//             </div>
//             <button onClick={add_product} className='addproduct-btn'>ADD</button>
//         </div>
//     );

// }
// export default AddProduct;






import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);

    const [productDetail, setProductDetail] = useState({
        name: "",
        image: "",
        category: "",
        old_price: "",
        new_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandle = (e) => {
        setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
    };

    const add_product = async () => {
        let responseData;
        let product = productDetail;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: "POST",
            body: formData,
        })
            .then((resp) => resp.json())
            .then((data) => { responseData = data });

        if (responseData && responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproducts', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added successfully") : alert("Failed to add product");
            });
        } else {
            console.log('Error uploading image');
        }
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetail.name} onChange={changeHandle} type="text" name="name" placeholder='Type Here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetail.old_price} onChange={changeHandle} type="text" name="old_price" placeholder='Type Here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetail.new_price} onChange={changeHandle} type="text" name="new_price" placeholder='Type Here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetail.category} onChange={changeHandle} name="category" className='addproduct-selector' >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt="upload_area_image" className='addproduct-thumbnail-img' />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={add_product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;
