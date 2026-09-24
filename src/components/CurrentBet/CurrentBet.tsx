import { useStore } from "../../store/store";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import "./CurrentBet.css";


/*viser hvor mye spilleren ønsker å satse. Lar spilleren øke eller minske satsen mellom 1 og 5 mynter*/
export default function CurrentBet() {
    const currentBet = useStore((state) => state.currentBet);
    const setCurrentBet = useStore((state) => state.setCurrentBet);

    return(
        <div className="bet-container">
            <button onClick={() => {
                if (currentBet > 1) {
                    setCurrentBet(currentBet - 1);
                }}}>
               <img src={leftArrow}/>
            </button>

            <p>{currentBet}</p>
            
            <button onClick={() => {
                if (currentBet < 5) {
                    setCurrentBet(currentBet + 1)
                }}}>
                <img src={rightArrow}/>
            </button>
        </div>
    )
}