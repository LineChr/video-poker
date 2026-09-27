import Footer from "../components/Footer/Footer";
import Hand from "../components/Hand/Hand";
import PayoutTable from "../components/PayoutTable/PayoutTable";
import HandResult from "../components/PokerHand/HandResult";
import "./Game.css";

/*Samler komponentene som utgjør pokerspillet*/
export default function Game() {

    return (
        <div className="game-page">
            <PayoutTable/>
            <HandResult/>
            <Hand/>
            <Footer/>
        </div>
    )
}