import styles from "./Cards.module.css";
import Card from "../Card/Card";
const Cards = ({ videogames }) => {
  return (
    <div className={styles.gamer_cards}>
      {videogames.map((game, index) => (
        <Card
          key={index}
          id={game.id}
          name={game.name}
          rating={game.rating}
          released={game.released}
          image={game.image}
          origin={game.origin}
          genres={game.genres}
        />
      ))}
    </div>
  );
};

export default Cards;
