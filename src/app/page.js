import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { productsData } from "./idsanpham.js";

// 1. MẢNG DỮ LIỆU CHỨA TẤT CẢ 7 SẢN PHẨM


// 2. COMPONENT PRODUCTCARD (KHUÔN MẪU CHUNG)
function ProductCard({ sp }) {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <Image 
          src={sp.image} 
          alt={sp.name} 
          width={200} 
          height={200} 
          style={{ objectFit: 'contain' }} 
        />
        <span className={styles.percent}>{sp.discount}</span>
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productName}>
          <h5>{sp.name}</h5>
        </div>

        <div className={styles.productPrice}>
          <strong className={styles.price}>{sp.price}</strong>
          <span className={styles.oldPrice}>{sp.oldPrice}</span>
        </div>

        <div className={styles.productRemain}>
          <span>{sp.status}</span>
        </div>

        <div className={styles.buyButton}>
          <Link href={`/chitietsanpham/${sp.id}`}>Mua ngay</Link>
        </div>
      </div>
    </div>
  );
}

// 3. TRANG CHỦ CHÍNH
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.item2}>
        <h3 className={styles.sectionTitle}>Sản phẩm mới nhất</h3>
        <div className={styles.mainContent}>
          
          {/* LẶP QUA MẢNG 7 SẢN PHẨM */}
          {productsData.map((item) => (
            <ProductCard key={item.id} sp={item} />
          ))}

          <div className={styles.productPlaceholder}>Đang cập nhật...</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}