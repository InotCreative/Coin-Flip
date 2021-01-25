function countCoinFlip(flips) {
    let heads = 0, tails = 0;
    for (let coins = 0; coins < flips; coins++) {
        (Math.floor(Math.random() * 2)) ? heads++ : tails++
    }
    return {
        heads,
        tails
    }
}

console.log(countCoinFlip(100))
