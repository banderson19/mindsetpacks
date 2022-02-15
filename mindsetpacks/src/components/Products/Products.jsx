import React from 'react'
import { Link } from 'react-router-dom';

import bag1 from '../../assets/images/bag1.jpeg';
import bag2 from '../../assets/images/bag2.jpeg';
import bag3 from '../../assets/images/bag3.jpeg';
import bag4 from '../../assets/images/bag4.jpeg';
import bag5 from '../../assets/images/bag5.jpeg';


const Products = () => {

  const products = [
    {
      id: 1,
      title: 'bag 1',
      img: bag1,
      cost: "$100.00"
    },
    {
      id: 2,
      title: 'bag 2',
      img: bag2,
      cost: "$150.00"
    },
    {
      id: 3,
      title: 'bag 3',
      img: bag3,
      cost: "$200.00"
    },
    {
      id: 4,
      title: 'bag 4',
      img: bag4,
      cost: "$200.00"
    },
    {
      id: 3,
      title: 'bag 5',
      img: bag5,
      cost: "$200.00"
    }
  ]

  return (
    <div>
      <h1>ProductPage</h1>
      <div className="container">
        <div className="row justify-content-center">
          {products.map((product, i) =>  {
            return (
            <div className="col-3 mb-5 mx-2 py-2 justify-content-spacebetween border border-dark" key={product.id} >
              <img className="card-img-top" style={{width: "7rem"}} src={product.img} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">cost: {product.cost}</p>
                </div>
                <Link to={{pathname: `/products/${product.id}`}}><button className="btn btn-primary">View Details</button></Link>
            </div>
            )}
          )}
        </div>
      </div>
    </div>
  )
}

export default Products;