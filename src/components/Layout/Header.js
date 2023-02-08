import classes from "./Header.module.css";

import mealImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>YummyFoods</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Table of food" />
      </div>
    </>
  );
};

export default Header;
