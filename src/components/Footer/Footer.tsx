import CurrentBet from "../CurrentBet/CurrentBet"
import TotalCoins from "../TotalCoins/TotalCoins"
import "./Footer.css";

export default function Footer() {

    return(
        <footer>
            <div className="footer-container">
                <TotalCoins/>
                <button className="button-deal">DEAL</button>
                <CurrentBet/>
                
            </div>
        </footer>
    )
}