import styles from '../CSS/App.module.css';

function About(){
    return(
        <section className={styles.about}>
            <div className={styles.contentBx}>
                <h2 className={styles.heading}>Design de sucesso!</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nobis! Excepturi 
                    ratione minus illo impedit omnis ipsam corporis, repellendus architecto quia dolorem 
                    perferendis soluta, eos atque et id dicta aliquam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nobis! Excepturi 
                    ratione minus illo impedit omnis ipsam corporis, repellendus architecto quia dolorem 
                    perferendis soluta, eos atque et id dicta aliquam.
                </p>
            </div>
            <div className={styles.imgBx}></div>
        </section>
    )
}
export default About;