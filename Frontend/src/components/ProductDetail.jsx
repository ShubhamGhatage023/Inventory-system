import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function InsertProduct() {
    const [product, setProduct] = useState({});

    const {barcode} = useParams("");

    useEffect(() => { 
        
        const getProduct = async () => {
          try {
            const res = await fetch(`http://localhost:3001/product/${barcode}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
           
            const data = await res.json(); 

            if (res.status === 201) {
              setProduct(data[0])
            } else {
              console.log("Something went wrong. Please try again.");
            }
          } catch (err) {
            console.log(err);
          }
        };
      
        getProduct();
    }, [barcode]);


    return (
        <div className='container-fluid p-5'>
            <h1 className='fw-bold'>Product Information</h1>
            <div className="mt-5 col-lg-6 col-md-6 col-12">
                <label htmlFor="product_name" className="form-label fs-4 fw-bold">Product Name</label>
                <input type="text"  disabled readOnly value={product.ProductName} className="form-control fs-5" id="product_name" />
            </div>
            <div className="mt-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="product_price" className="form-label fs-4 fw-bold">Product Price</label>
                <input type="number"  disabled readOnly value={product.ProductPrice} className="form-control fs-5" id="product_price" />
            </div>
            <div className="mt-3 mb-5 col-lg-6 col-md-6 col-12">
                <label htmlFor="product_barcode" className="form-label fs-4 fw-bold">Product Barcode</label>
                <input type="number"  disabled readOnly value={product.ProductBarcode}  className="form-control fs-5" id="product_barcode" />
            </div>
        </div>
    )
}
