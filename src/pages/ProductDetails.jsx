import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { getProductById } from "../fakeAPI";

const ProductDetails = () => {
  //  useParams - Returns an object with all dynamic parameters present in the current URL. 
  // The name of the parameter will be the name of the property in the object, and its current value in the address will be the value of the property. 
  // For example, if the following route /products/:itemId is declared, and the user is at /products/h-2.
  const { id } = useParams();
  const product = getProductById(id);
  // stored current URL
  const location = useLocation();
  // return from item page to products page
  const backLinkHref = location.state?.from ?? "/products";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;
