import heart from "../../assets/heart.svg";
import diamond from "../../assets/diamond.svg";
import spade from "../../assets/spade.svg";
import club from "../../assets/club.svg";
import "./Card.css";
import "./Card-back.css";

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
  <div className="card-container">
    <div className="top-left-container">
      <p>{card.value}</p>
      <img src={symbolImages[card.symbol]} />
    </div>
    
    <img src={symbolImages[card.symbol]} className="center-symbol" />

    <div className="bottom-right-container">
      <img src={symbolImages[card.symbol]} className="bottomsymbol"/>
      <p>{card.value}</p>
    </div>
  </div>
)}

export function CardBack() {
  return <div className="card-back"/>
}