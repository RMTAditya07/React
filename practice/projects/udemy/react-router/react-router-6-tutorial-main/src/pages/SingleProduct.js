import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const {productId}  = useParams()
  // console.log(useParams())
  console.log(productId)
  const product = products.find((prod) => prod.id === productId);
  // const {image,name} = product;
  console.log(product)
  return (
    <section className='section product'>
      <p>{productId}</p>
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
