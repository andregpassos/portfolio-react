import styles from "./styles.module.scss";
import dashboardImg from "../../assets/images/dashboard.png";

function PostCard() {
  return (
    <div className={styles.postCardContainer}>
      <div>
        <div className={styles.topPostCardContainer}>
          <h3 className={styles.textRecentPosts}>Recent posts</h3>
          <a className={styles.linkSmall} href="/">
            View all
          </a>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>
              Making a design system from scratch
            </h3>
            <div className={styles.textCard}>
              <p className={styles.dateCard}>12 Feb 2020</p>
              <p className={styles.dateCard}>|</p>
              <p className={styles.dateCard}>Design, Pattern</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              voluptatum asperiores voluptatem facere impedit sunt, similique ut
              voluptas, rerum nam, quisquam quos maiores tempore nesciunt
              cupiditate. Praesentium sequi error quam?
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>
              Creating pixel perfect icons in Figma
            </h3>
            <div className={styles.textCard}>
              <p className={styles.dateCard}>12 Feb 2020</p>
              <p className={styles.dateCard}>|</p>
              <p className={styles.dateCard}>Figma, Icon Design</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              voluptatum asperiores voluptatem facere impedit sunt, similique ut
              voluptas, rerum nam, quisquam quos maiores tempore nesciunt
              cupiditate. Praesentium sequi error quam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
