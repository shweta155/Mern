import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAllproducts(data);
    } catch (error) {
      console.error('Error fetching the products:', error);
    }
  };


  const remove_product = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/removeproducts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result.success) {
        await fetchInfo();
      } else {
        console.error('Error removing product:', result.message);
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };



  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>

      <div className='list-product'>
        <h1>All Product List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>

        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((product) => {
            return (
              <div key={product.id} className="listproduct-format-main listproduct-format">
                <img src={product.image} alt={product.name} className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => { remove_product(product.id) }}
                  src={cross_icon}
                  className='listproduct-remove-icon'
                  alt="remove icon"
                />
              </div>
            );
          })}

          {/* {allproducts.map((product, index) => {
            return <>
              <div key={index} className="listproduct-format-main listproduct-format">
                <img src={product.image} alt={product.name} className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={() => { remove_product(product.id) }} src={cross_icon} className='listproduct-remove-icon' alt="remove icon" />
              </div>
              <hr />

            </>
          })} */}

        </div>
      </div>
    </>
  );
}

export default ListProduct;