import "./style.css";
import { useCart } from "../../Providers/Cart";

interface ProductCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
  index: number;
  remove?: string;
}

export const ProductCard = ({ item, index, remove }: ProductCardProps) => {
  const { addProduct, deleteProduct } = useCart();
  return (
    <li key={index}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>R$ {item.price}</span>

      {remove ? (
        <button onClick={() => deleteProduct(item)}>Remover do carrinho</button>
      ) : (
        <button onClick={() => addProduct(item)}>Adicionar ao carrinho</button>
      )}
    </li>
  );
};
