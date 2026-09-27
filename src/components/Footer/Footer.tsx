import CurrentBet from "../CurrentBet/CurrentBet"
import TotalCoins from "../TotalCoins/TotalCoins"
import "./Footer.css";
import { useStore } from "../../store/store"

/*Viser footer på game siden: spilleren + dems saldo, deal knapp og 
myntene man satser. Knappen deler ut kort eller bytter ikke-holdte 
kort avhengig av hvilken fase spillet er i.*/
export default function Footer() {
    const gamePhase = useStore((state) => state.gamePhase);
    const dealHand = useStore((state) => state.dealHand);
    const drawCards = useStore((state) => state.drawCards);

    const isDrawing = gamePhase === "drawing";

    return(
        <footer>
            <div className="footer-container">
                <TotalCoins/>
                <button 
                    className="button-deal"
                    onClick={isDrawing ? drawCards : dealHand}>{isDrawing ? "DRAW" : "DEAL"}</button>
                <CurrentBet/>
                
            </div>
        </footer>
    )
}