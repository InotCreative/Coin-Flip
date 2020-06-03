function countCoinFlip(Nth) {
    let heads = 0; 
    let tails = 0;
    for (let i = 0; i < Nth; i++) {
        let randomFlip = Math.floor(Math.random() * 2);
        if (randomFlip == 0) heads++
        else if (randomFlip == 1) tails++
    }
    return {
        "heads": heads,
        "tails": tails
    }
}

console.log(countCoinFlip(100))