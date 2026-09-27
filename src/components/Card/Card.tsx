import heart from "../../assets/heart.svg";
import diamond from "../../assets/diamond.svg";
import spade from "../../assets/spade.svg";
import club from "../../assets/club.svg";
import styles from "./Card.module.css";
import type { PlayingCard } from "../../types/PlayingCard"; 

/*Kobler riktig svg-bildet til riktig kort symbol*/
const symbolImages = {
  "hearts": heart,
  "diamonds": diamond,
  "spades": spade,
  "clubs": club
}

interface CardProps {
  card: PlayingCard;
  isHeld?: boolean;
  onClick?: () => void;
}

/*Viser forsiden av et kort. Tar imot et kort (symbol & verdi) som prop, 
og viser riktig symbol og verdi på kortet. isHeld styrer som kortet 
vises som holdt, onClick kalles når kortet klikkes. */
export default function Card({ card, isHeld = false, onClick }: CardProps) {

  return (
  <div className={`${styles.cardContainer} ${isHeld ? styles.held : ""}`} onClick={onClick}>
    <div className={styles.topLeftContainer}>
      <p>{card.value}</p>
      <img src={symbolImages[card.symbol]} alt={card.symbol} />
    </div>
    
    <img src={symbolImages[card.symbol]} alt={card.symbol} className={styles.centerSymbol} />

    <div className={styles.bottomRightContainer}>
      <img src={symbolImages[card.symbol]} alt={card.symbol} className={styles.bottomSymbol}/>
      <p>{card.value}</p>
    </div>
  </div>
)}


/*Viser baksiden av et kort*/
export function CardBack() {
  return <div className={styles.cardBack}/>
}