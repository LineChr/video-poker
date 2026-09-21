import styles from "./Paytable.module.css";

type PaytableRow = {
    hand: string;
    payouts: number[];
};

//data for gevinsttabellen. Hver rad har et navn og et array med gevinstbeløp for antall mynter satset(1-5)
const paytable: PaytableRow[] = [
    { hand: "royal flush", payouts: [250, 500, 750, 1000, 4000] },
    { hand: "straight flush", payouts: [50, 100, 150, 200, 250] },
    { hand: "four of a kind", payouts: [25, 50, 75, 100, 125] },
    { hand: "full house", payouts: [9, 18, 27, 36, 45] },
    { hand: "flush", payouts: [6, 12, 18, 24, 30] },
    { hand: "straight", payouts: [4, 8, 12, 16, 20] },
    { hand: "three of a kind", payouts: [3, 6, 9, 12, 15] },
    { hand: "two pair", payouts: [2, 4, 6, 8, 10] },
    { hand: "jacks or better", payouts: [1, 2, 3, 4, 5] }
];

//går gjennom dataen til paytable og genererer en rad per pokerhånd. 
//Hver rad viser håndens navn og gevinstbeløp for hvert antall mynter satset
export default function Paytable() {
    return(
        <div className={styles.paytable}>
            {paytable.map((row) => (
               <div className={styles.paytableRow} key={row.hand}>
                    <div className={styles.paytableHand}>{row.hand}</div>
                    {row.payouts.map((payout, i) => (
                        <div className={styles.paytablePayouts} key={i}>
                            {payout}
                        </div>
                    ))}
               </div> 
            ))}
        </div>
    )
}