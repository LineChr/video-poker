import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlayingCard } from "../types/PlayingCard"; 
import { createDeck, shuffleDeck } from "../utilities/deck";
import { calculateHand } from "../utilities/calculateHand";
import { getPayout } from "../utilities/getPayout";

type Player = {
    name: string;
    coins: number;
}

type GamePhase = "betting" | "drawing" | "finished";

type Store = {
    players: Player[];
    addPlayer: (name: string) => boolean;

    activePlayer: Player | null;
    setActivePlayer: (player: Player) => void;

    currentBet: number;
    setCurrentBet: (bet: number) => void;

    deck: PlayingCard[];

    currentHand: PlayingCard[];
    dealHand: () => void;
    drawCards: () => void;

    gamePhase: GamePhase;
    heldCards: number[];
    toggleHold: (index: number) => void;
};

export const useStore = create<Store>()(
    persist( 
        (set, get) => ({
        players: [
            { name: "Gløer", coins: 100 },
            { name: "Vegar", coins: 79 },
            { name: "Karlmorten", coins: 56 }
    ],


    /*Legger til en ny spiller med 100 mynter. Tar imot navnet spilleren skrev og 
    formaterer det(stor forbokstav og resten liten). Avviser tomme eller allerede 
    eksiterende navn. Returnerer true om spilleren ble lagt til*/
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

    /*Setter hvilken spiller som er aktiv. Tar imot spilleren som skal være aktiv og lagrer den i activePlayer  */
    setActivePlayer: (player) => {
        set({ activePlayer: player })
    },


    currentBet: 1,

    /*Endrer hvor mye spilleren ønsker å satse. Tar i mot antall mynter spilleren ønsker å satse og lagrer det i currentBet*/
    setCurrentBet: (bet) => {
        set({ currentBet: bet })
    },

    currentHand: [],

    deck: [],

    /*Stokker en ny kortstokk og trekker de 5 første kortene til currentHand*/
    dealHand: () => {
        const { activePlayer, currentBet, players} = get();
        if (!activePlayer) {
            return;
        }

        if (activePlayer.coins < currentBet) {
            return;
        }

        const shuffled = shuffleDeck(createDeck());
        const hand = shuffled.slice(0, 5);
        const remainingDeck = shuffled.slice(5);

        set({ 
            currentHand: hand, 
            deck: remainingDeck, 
            heldCards: [], 
            gamePhase: "drawing",

            players: players.map((player) =>
                player.name === activePlayer.name
                    ? { ...player, coins: player.coins - currentBet }
                    : player 
            ),

            activePlayer: {
                ...activePlayer,
                coins: activePlayer.coins - currentBet
            }
        });
    },


    gamePhase: "betting",

    heldCards: [],

    /*Veksler et kort mellom holdt og ikke holdt. Hvis kortet allerede er holdt, 
    fjernes det fra listen og omvendt. Tar imot indeksen(0-4) til kortet som ble klikket.*/
    toggleHold: (index) => {
        set((state) => {
        if (state.heldCards.includes(index)) {
            return { heldCards: state.heldCards.filter((i) => i !== index)};
        } else {
            return { heldCards: [...state.heldCards, index]}
        }
    });
},


    /*Bytter ut alle kort som ikke er holdt, med kort fra samme kortstokken 
    som resten av runden bruker. Regner ut hvilken pokerhånd resultat gir og 
    utbetaler riktig gevinst til aktiv spiller basert på gevinsttabellen. 
    Endrer til slutt spillfasen til "finished".*/
    drawCards: () => {
        const { currentHand, heldCards, deck, currentBet, activePlayer, players } = get();
        let deckIndex = 0;        

        const newHand = currentHand.map((card, i) => {
            if (heldCards.includes(i)) {
                return card;
            } else {
                const replacement = deck[deckIndex];
                deckIndex++;
                return replacement;
            }
        })

        const remainingDeck = deck.slice(deckIndex);
        const hand = calculateHand(newHand);
        const payout = getPayout(hand, currentBet);

        set({ 
            currentHand: newHand, 
            deck: remainingDeck, 
            gamePhase: "finished", 
            players: players.map((player) =>
                activePlayer && player.name === activePlayer.name
                    ? {...player, coins: player.coins + payout}
                    : player
            ),
            activePlayer: activePlayer
                ? {...activePlayer, coins: activePlayer.coins + payout}
                : activePlayer,
        });
    },
}),
{
    name: "video-poker-storage"
}
));