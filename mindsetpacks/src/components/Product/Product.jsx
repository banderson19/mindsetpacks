import React from 'react';
import { useLocation } from 'react-router-dom';


const Product = (props) => {
    const location = useLocation();
    const product = location.state.product
    console.log(product)
    // console.log('product',  props.location);
    // const { id:id, title:title,  image:image, cost:cost } = props;
    console.log(props.id)
    // <Product key={product.id} props={product}/>
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="" style={{ width: "100%" }} src={product.img} alt="Card image cap" />
                    </div>
                    <div className="col-6 align-self-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">cost: {product.cost}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                <div>
                    <h3>Product Description</h3>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde maxime consectetur corrupti at quia. Recusandae illum quae eveniet, voluptates aperiam fugit commodi veniam beatae saepe quidem? Placeat, id similique!</h5>
                </div>
            </div>
        </div>
    )
}

export default Product;