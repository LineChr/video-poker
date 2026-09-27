import { useStore } from "../../store/store";
import "./TotalCoins.css";


/*Viser navn og antall mynter til den aktive spilleren*/
export default function TotalCoins() {
    const activePlayer = useStore((state) => state.activePlayer);

    if (!activePlayer) {
        return <p className="total-coin-container">No player selected</p>
    }

    return (
        <div className="total-coin-container">
            <p>{activePlayer?.name}</p>
            <p>{activePlayer?.coins}🪙</p>
        </div>
    )
}