import Image from "next/image";
import styles from "./header.module.css";

// 1. Phải đặt code vào trong một hàm (Component)
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
      <nav className={styles.nav}>
        <ul>
          {/* Lưu ý: styles.active chỉ hoạt động nếu trong file header.module.css có lớp .active */}
          <li className={styles.active}>Home</li>
          <li>Phân loại</li>
          <li>Blog</li>
          <li>Liên hệ</li>
        </ul>
      </nav>
    </div>
  );
}