import heart from "../../assets/heart.svg";
import diamond from "../../assets/diamond.svg";
import spade from "../../assets/spade.svg";
import club from "../../assets/club.svg";
import styles from "./Card.module.css";

type PlayingCard = {
  symbol: "hearts" | "diamonds" | "spades" | "clubs";
  value:  "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
};

const symbolImages = {
  "hearts": heart,
  "diamonds": diamond,
  "spades": spade,
  "clubs": club
}

export default function Card({ card }: { card: PlayingCard}) {


  return (
  <div className={styles.cardContainer}>
    <div className={styles.topLeftContainer}>
      <p>{card.value}</p>
      <img src={symbolImages[card.symbol]} />
    </div>
    
    <img src={symbolImages[card.symbol]} className={styles.centerSymbol} />

    <div className={styles.bottomRightContainer}>
      <img src={symbolImages[card.symbol]} className={styles.bottomSymbol}/>
      <p>{card.value}</p>
    </div>
  </div>
)}

export function CardBack() {
  return <div className={styles.cardBack}/>
}