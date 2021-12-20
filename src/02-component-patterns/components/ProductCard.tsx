import { CSSProperties, ReactElement } from "react";
import { ProductContext } from "../contexts";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces";
import styles from "../styles/styles.module.css";

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider value={{ count, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
