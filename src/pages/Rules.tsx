import PayoutTable from "../components/PayoutTable/PayoutTable";
import "./Rules.css";

//viser regel-siden med en beskrivelse av spillet, 
//en ordered list med hvordan man spiller, og henter inn gevinsttabellen
export default function Rules() {
        return(
            <main className="rules-container">
                <h1>rules</h1>
                <p>video poker uses the same hands and rules as five card draw poker, but there's no dealer and no other players to beat, you're just trying to make the best hand you can. You're dealt five cards from a standard deck, and you choose which ones to keep. Any cards you don't keep are swapped for new ones. You can keep all five cards, swap all five or anything in between. Each round gives you exactly one chance to swap before your final hand is scored and paid out.</p>
                <h2>how to play video poker</h2>
                <ol>
                    <li>pick how much you want to bet, you only bet once per round</li>
                    <li>press "deal" to get 5 cards</li>
                    <li>pick which cards to keep and which to swap out</li>
                    <li>the cards you swap out are replaced with new ones</li>
                    <li>you get paid automatically if your final hand wins</li>

                </ol>
                <h2>paytable</h2>
                <div className="paytable-wrapper">
                    <PayoutTable/>
                </div>
                
            </main>
        )
}