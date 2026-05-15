import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
    return (
<footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
               <Image src="/next.svg" alt="Logo" width={100} height={20} style={{ filter: 'invert(1)' }} />
            </div>
            <p>Hệ thống bán lẻ điện thoại Flagship uy tín, cam kết chất lượng và dịch vụ bảo hành hàng đầu Việt Nam.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li><Link href="/">Chính sách đổi trả</Link></li>
              <li><Link href="/">Chính sách bảo hành</Link></li>
              <li><Link href="/">Trả góp 0% lãi suất</Link></li>
              <li><Link href="/">Giao hàng toàn quốc</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Thông tin liên hệ</h4>
            <p>📍 Địa chỉ: Quận 12, TP. Hồ Chí Minh</p>
            <p>📞 Hotline: 097.622.3679 (8h - 22h)</p>
            <p>📧 Email: support@mobilestore.vn</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2026 Mobile Store. All rights reserved. Powered by Next.js</p>
        </div>
      </footer>
    );
}   