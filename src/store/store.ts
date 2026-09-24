import { create } from "zustand";

type Player = {
    name: string;
    coins: number;
}

type Store = {
    players: Player[];
    addPlayer: (name: string) => boolean;

    activePlayer: Player | null;
    setActivePlayer: (player: Player) => void;

    currentBet: number;
    setCurrentBet: (bet: number) => void;
};

export const useStore = create<Store>((set, get) => ({
    players: [
        { name: "Gløer", coins: 100 },
        { name: "Vegar", coins: 79 },
        { name: "Karlmorten", coins: 56 }
    ],


    /*legger til en ny spiller med 100 mynter. Tar imot navnet spilleren skrev og 
    formaterer det(stor forbokstav og resten liten). Avviser tomme eller 
    allerede eksiterende navn. Returnerer true om spilleren ble lagt til*/
    addPlayer: (name) => {
        const trimmed = name.trim();
        const playerName = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();

         if (playerName === "") {
            return false;
        }

        const playerAlreadyExists = get().players.some(
            (player) => player.name === playerName
        );

        if (playerAlreadyExists) {
            return false;
        }

        set((state) => ({
            players: [...state.players, { name: playerName, coins: 100}]
        }));

        return true;
    },


    activePlayer: null,

    /*setter hvilken spiller som er aktiv. Tar imot spilleren som skal være aktiv og lagrer den i activePlayer  */
    setActivePlayer: (player) => {
        set({ activePlayer: player })
    },


    currentBet: 1,

    /*endrer hvor mye spilleren ønsker å satse. Tar i mot antall mynter spilleren ønsker å satse og lagrer det i currentBet*/
    setCurrentBet: (bet) => {
        set({ currentBet: bet })
    },


}));