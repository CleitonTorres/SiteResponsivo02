import styles from '../CSS/App.module.css';
import bg_banner from '../img/banner-bg.jpg';

function Banner(){
    return(
        <div className={styles.banner}>
            <header>
                <a href="#" className={styles.logo}>Nome da marca</a>
                <div className={styles.toggle}></div>
            </header>
            <img src={bg_banner} alt="" />
            <div className={styles.content}>
                <h2>Design de sucesso!</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nobis! Excepturi 
                    ratione minus illo impedit omnis ipsam corporis, repellendus architecto quia dolorem 
                    perferendis soluta, eos atque et id dicta aliquam.
                </p>
            </div>
        </div>
    )
}
export default Banner;