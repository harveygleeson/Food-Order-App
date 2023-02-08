import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You.</h2>
      <p>
        Choose your favourite meal from our broad selection of dishes, and enjoy
        a yummy lunch or dinner without having to leave your home.
      </p>
      <p>
        All our meals are cooked with delicious, high-quality ingredients,
        delivered to your door just when you need it most!
      </p>
    </section>
  );
};

export default MealsSummary;
