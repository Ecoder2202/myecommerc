import React, {useState,useEffect} from 'react'
import './Store.css'
import axios from 'axios'
  


const url='https://weekdayape.herokuapp.com/card/'
function Store() {

  const[product, setProduct]=useState([])

  useEffect(() =>{
    axios.get(url)
    .then(res =>{
      console.log(res)
      setProduct(res.data)
    })

    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <div>
     
        <div className="container my-5">
            <div className="row">
            {product.map((products)=>(
              <div className="col-md-4" key={products.id}>
                  <div className="card text-center">
                    <img src={products.upload} alt="" className='card-img-center' />
                    <div className="card-body">
                      <div className="card-title">
                        <h1>{products.title}</h1>
                      </div>
                      <div className="card-text">
                        <p>{products.message}</p>
                      </div>
                      <div className="card-text">
                        <p>{products.price}</p>
                      </div>
                      <div className="card-text">
                        <h6>{products.date}</h6>
                      </div>
                    </div>
                  </div>

               
            </div>
            ))
            }
             
        </div>

    </div>
    </div>

  )
}

export default Store