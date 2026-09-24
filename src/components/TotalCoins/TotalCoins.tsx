import { useStore } from "../../store/store";
import "./TotalCoins.css";


/*viser navn og antall mynter til den aktive spilleren*/
export default function TotalCoins() {
    const activePlayer = useStore((state) => state.activePlayer);

    return (
        <div className="total-coin-container">
            <p>{activePlayer?.name}</p>
            <p>{activePlayer?.coins}🪙</p>
        </div>
    )
}