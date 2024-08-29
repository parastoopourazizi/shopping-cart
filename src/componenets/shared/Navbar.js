import styles from "./Navbar.module.css";
import shopCart from "../../assets/icons/shop.svg"

function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className="styles.productLink" to="/">
          product
        </div>
        <div className="styles.iconContainer">
            <div to="/">
            <img src={shopCart} alt="shop" />

            </div>

        </div>
      </div>
    </div>
  );
}
export default Navbar;
