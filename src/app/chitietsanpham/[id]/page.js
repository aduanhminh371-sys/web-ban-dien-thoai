"use client";

import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { productsData } from "../../idsanpham";
import SimpleSlider from "../../components/slider/slider";

export default function ProductPage() {
  const params = useParams();

  const product = productsData.find(
    (p) => String(p.id) === String(params.id)
  );

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>

        {/* LEFT */}

        <div className={styles.image}>
          <SimpleSlider
            images={product.images || [product.image]}
          />
        </div>

        {/* RIGHT */}

        <div className={styles.info}>

          <h1 className={styles.name}>
            {product.name}
          </h1>

          <div className={styles.priceBox}>

            <span className={styles.price}>
              {product.price}
            </span>

            <span className={styles.oldPrice}>
              {product.oldPrice}
            </span>

          </div>

          <p className={styles.status}>
            🔥 {product.status}
          </p>

          <div className={styles.specs}>

            <h3>Thông số kỹ thuật</h3>

            <ul>
              {product.specs?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <button className={styles.button}>
            MUA NGAY
          </button>

        </div>

      </div>

    </div>
  );
}