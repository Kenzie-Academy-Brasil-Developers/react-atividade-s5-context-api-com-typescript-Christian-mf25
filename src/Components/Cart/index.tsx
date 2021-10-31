import { useCart } from "../../Providers/Cart";
import { ProductCard } from "../ProductCard";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <ul>
      {cart.map((item, index) => (
        <ProductCard item={item} index={index} remove="true" />
      ))}
    </ul>
  );
};
