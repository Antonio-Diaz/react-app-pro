import { ProductContext } from "../contexts";
import { Props } from "../interfaces";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};


