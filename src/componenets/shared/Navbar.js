import styles from "./Navbar.module.css";

import shopCart from "../../assets/icons/shop.svg"

function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.productLink}>products</div>
        
        <div className="styles.iconContainer">

          <div><img src={shopCart} alt="" /></div>
           

        </div>
      </div>
      </div>
    
  );
}
export default Navbar;
