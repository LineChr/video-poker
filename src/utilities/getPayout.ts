import { payoutTable } from "../components/PayoutTable/PayoutTable";
import type { PokerHand } from "../types/PokerHand";

/*Finner gevinstbeløpet for gitt pokerhånd og innsats.
Returnerer 0 om hånden ikke gir noe gevinst.*/
export function getPayout(hand: PokerHand, bet: number): number {
    const row = payoutTable.find((row) => row.hand === hand);

    if (!row) {
        return 0;
    }

    return row.payouts[bet - 1];
}