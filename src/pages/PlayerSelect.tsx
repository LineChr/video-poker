import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router";
import "./PlayerSelect.css";


/*siden som viser hvor man kan opprette ny spiller 
og bytte til annen spiller*/
export default function PlayerSelect() {
    const players = useStore((state) => state.players);
    const addPlayer = useStore((state) => state.addPlayer);
    const [newPlayerName, setNewPlayerName] = useState("");
    const setActivePlayer = useStore((state) => state.setActivePlayer);
    const navigate = useNavigate();

    /*her hentes addPlayer fra useStore med navnet i input-feltet.
    addPlayer returnerer true eller false. Om den returnerer true 
    så tømmes input-feltet, om den returnerer false popper det opp en 
    alert om navnet var tomt eller allerede i bruk.*/
    function handleNewPlayer() {
        const success = addPlayer(newPlayerName);
        if (success) {
            setNewPlayerName("");
        }else {
            alert("Name is empty or already taken.");
        }
    }

        return(
            <main className="player-select">
                <div className="create-player">
                    <label htmlFor="newPlayerName">create new player</label>
                    <input 
                        type="text" 
                        id="newPlayerName"
                        name="newPlayerName" 
                        maxLength={10} 
                        value={newPlayerName} 
                        onChange={(event) => setNewPlayerName(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleNewPlayer();
                            }}}/>
                    <button onClick={handleNewPlayer}>create</button>
                </div>
                <h2>select player</h2>

                <div className="player-list">
                    {players.map((player) => (
                        <button 
                            className="player" 
                            key={player.name}
                            onClick={() => {
                                setActivePlayer(player);
                                navigate("/");
                        }}
                        >
                                <p>{player.name}</p>
                                <p>{player.coins}🪙</p>
                        </button>
                    ))}
                </div>
            </main>
        )
}