import'./product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    return(<div className='product'>
            <h2>{props.title} </h2>
            <img src="https://picsum.photos/200/300" alt="product img" />
            <h3 className='price'> ${props.price}  </h3>
            <p className='color'> Color: {props.color}  </p>
            <p className='stock'> Only {props.stock} left  </p>
            <p className='category'> Shop: {props.category}  </p>
            <QuantityPicker></QuantityPicker>
            <button id='add'>Add</button>
           </div>);
};

export default Product;