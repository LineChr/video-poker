import type { PlayingCard } from "../types/PlayingCard";
import type { PokerHand } from "../types/PokerHand";


const valueOrder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

/*Tar imot 5kort og teller hvor mange ganger hver verdi finnes i hånda. */
function countValues(hand: PlayingCard[]): Record<string, number> {
    const counts: Record<string, number> = {};

    for (const card of hand) {
        if (counts[card.value]) {
            counts[card.value] = counts[card.value] + 1;
        } else {
            counts[card.value] = 1;
        }
    }
    return counts;
}

/*Sjekker om alle 5 kort har samme symbol*/
function isFlush(hand: PlayingCard[]): boolean {
    const firstSymbol = hand[0].symbol;
    return hand.every((card) => card.symbol === firstSymbol);
}

/*Sjekker om de 5 kortenes verdi ligger 5 på rad*/
function isStraight(hand: PlayingCard[]): boolean {
    const indexes = hand.map((card => valueOrder.indexOf(card.value)));
    const sorted = [...indexes].sort((a, b) => a - b);

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i - 1] + 1) {
            return false;
        }
    }
    return true;
}

/*Sjekker om alle 5 korts verdier er blant 10, J, Q, K, A.*/
function isRoyalValues(hand: PlayingCard[]): boolean {
    const royalValues = ["10", "J", "Q", "K", "A"];
    return hand.every((card) => royalValues.includes(card.value));
}

/*Sjekker om et par i hånden er av høy verdi(J, Q, K, A)*/
function isHighPair(valueCounts: Record<string, number>): boolean {
    const highValues = ["J", "Q", "K", "A"];
    return highValues.some((value) => valueCounts[value] === 2);
}

/*Analyserer kortene på hånda og avgjør hvilken pokerhånd de utgjør. Returnerer "nothing" hvis ingen gevinstgivende hånd ble funnet.*/
export function calculateHand(hand: PlayingCard[]): PokerHand {
    const valueCounts = countValues(hand);
    const counts = Object.values(valueCounts);
    const flush = isFlush(hand);
    const straight = isStraight(hand);
    const royal = isRoyalValues(hand);
    const highPair = isHighPair(valueCounts);

    const hasFourOfAKind = counts.includes(4);
    const hasThreeOfAKind = counts.includes(3);
    const hasPair = counts.filter((count) => count === 2).length;

    if (flush && straight && royal) {
        return "royal flush"
    }

    if (flush && straight) {
        return "straight flush"
    }

    if (hasFourOfAKind) {
        return "four of a kind"
    }

    if (hasThreeOfAKind && hasPair === 1) {
        return "full house"
    }

    if (flush) {
        return "flush"
    }

    if (straight) {
        return "straight"
    }

    if (hasThreeOfAKind) {
        return "three of a kind"
    }

    if (hasPair === 2) {
        return "two pair"
    }

    if (hasPair === 1) {
        if (highPair) {
            return "jacks or better"
        }
        return "nothing";
    }

    return "nothing";
}

