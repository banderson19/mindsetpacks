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
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <img style={{ width: "100%" }} src={product.img} alt={product.img} />
                    </div>
                    <div className="col-6">
                        <h1>{product.title}</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed unde maxime consectetur corrupti at quia. Recusandae illum quae eveniet, voluptates aperiam fugit commodi veniam beatae saepe quidem? Placeat, id similique!</p>
                        <hr></hr>
                        <h3><strong>{product.cost}</strong></h3>
                        <hr></hr>
                        <button className="btn btn-primary">Add to Cart</button>
                        <hr></hr>
                        <h6 className=" p-3 mb-2 bg-dark text-light">Specifications</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda suscipit perspiciatis et reprehenderit mollitia voluptate eius aspernatur, perferendis est sunt eos blanditiis error voluptatum labore modi! Delectus, iusto dolore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;