import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Product = (props) => {
    const location = useLocation();
    const product = location.state.product;
    // const [active, setActive] = useState(true)



    console.log(product)
    // console.log('product',  props.location);
    // const { id:id, title:title,  image:image, cost:cost } = props;
    console.log(props.id)
    // <Product key={product.id} props={product}/>
    return (
        <div>
            <div className="container mt-5">
                <Link to="/products"><button className="btn btn-secondary mb-3">Back to Products</button></Link>
                <div className="row">
                    <div className="col-6">
                        <img style={{ width: "100%" }} src={product.img} alt={product.img} />
                        <div className="row">
                            {/* <ul>
                                <li>
                                    <img  style={{width: "5rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"/>
                                    <img  style={{width: "5rem"}} src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"/>
                                    <img  style={{width: "5rem"}} src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"/>
                                </li>
                            </ul> */}
                        </div>
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