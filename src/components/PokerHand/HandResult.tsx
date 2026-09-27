import { useStore } from "../../store/store";
import { calculateHand } from "../../utilities/calculateHand";

import "./HandResult.css";

/*Viser hvilken pokerhånd hånden utgjør mens spillet pågår med 
teksten "current hand" og bytter til teksten "You got" når 
spillfasen byttes til finished*/
export default function HandResult() {
    const currentHand = useStore((state) => state.currentHand);
    const gamePhase = useStore((state) => state.gamePhase);

    if(currentHand.length < 5) {
        return null;
    }
    const resultHand = calculateHand(currentHand);

        if (gamePhase === "finished") {
            return (
                <div className="hand-status-container">
                    <p className="result-hand">You got: {resultHand}</p>
                </div>
            )
        }
    return (
        <div className="hand-status-container">
            <p className="current-hand">Current hand: {resultHand}</p>
        </div>
    )
}