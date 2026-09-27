import type { PlayingCard } from "../types/PlayingCard"; 

const symbols: PlayingCard["symbol"][] = [
    "hearts",
    "diamonds",
    "spades",
    "clubs"
];

const values: PlayingCard["value"][] = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
]

/*Lager en full, ustokket kortstokk med alle 52 komibnasjoner av symbol og verdi.*/
export function createDeck(): PlayingCard[] {
    const deck: PlayingCard[] = [];

    symbols.forEach((symbol) => {
        values.forEach((value) => {
            deck.push({
                symbol, value
            })
        })
    })

    return deck;
}

/*Tar imot en kortstokk og returnerer en ny og stokket kopi.*/
export function shuffleDeck(deck: PlayingCard[]): PlayingCard[] {
    return [...deck].sort(() => Math.random() - 0.5);
}