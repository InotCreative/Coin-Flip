function countCoinFlip(Nth) {
    let heads = 0; 
    let tails = 0;
    for (let i = 0; i < Nth; i++) {
        (Math.floor(Math.random() * 2)) ? heads++ : tails++
    }
    return {
        "heads": heads,
        "tails": tails
    }
}

console.log(countCoinFlip(100))
