import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import Card, { CardBack } from "../Card/Card";
import "./Hand.css";

/*Viser kortene på hånden. Viser baksiden av kortet i en kort periode 
når man klikker deal/draw(flipp animasjon). Lar spilleren holde kort 
ved klikk, men kun i "drawing" fasen. 
Ved første side-besøk og ved ny bruker vises baksiden av kortene helt til brukeren klikker deal*/
export default function Hand() {
    const currentHand = useStore((state) => state.currentHand);
    const heldCards = useStore((state) => state.heldCards);
    const toggleHold = useStore((state) => state.toggleHold);
    const gamePhase = useStore((state) => state.gamePhase);

    const [showBack, setShowBack] = useState(true);

    useEffect(() => {
        setShowBack(true);
        const timer = setTimeout(() => setShowBack(false), 400);
        return () => clearTimeout(timer);
    }, [currentHand]);

    if (gamePhase === "betting") {
        return (
            <div className="hand-container">
                {[0, 1, 2, 3, 4].map((i) => (
                    <CardBack key={i}/>
                ))}
            </div>
        )
    }

    return(
        <div className="hand-container">
            {currentHand.map((card, i) => {
                const isCardHeld = heldCards.includes(i);

                if (showBack && !isCardHeld) {
                    return <CardBack key={`back-${i}`}/>
                }

                return (
                <Card 
                    key={`${card.symbol}-${card.value}-${i}`} 
                    card={card}
                    isHeld={heldCards.includes(i)}
                    onClick={gamePhase === "drawing" ? () => toggleHold(i) : undefined} />
                )
            })}
        </div>
    )
}