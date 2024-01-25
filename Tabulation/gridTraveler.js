function gridTraveler(x, y) {

    let table = Array(x + 1).fill().map(() => Array(y + 1).fill(0))


    let col = 0
    let row = 0
    while (col <= x && row <= y) {

        if (col == 0 || row == 0) {
            table[col][row] = 0
        } else if (col == 1 && row == 1) {
            table[col][row] = 1
        } else {
            table[col][row] = table[col - 1][row] + table[col][row - 1]
        }

        if (col == x) {
            col = 0
            row++
        } else {
            col++
        }

    }

    return table[x][y]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))