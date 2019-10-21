class TicTacToe {
    constructor() {

        this.isX_Turn = true;
        this.isO_Turn = false;
        this.gameMatrix = [];
        this.tryCount = 0;
    }

    getCurrentPlayerSymbol() {

        //console.log('getCurrentPlayerSymbol')

        if (this.isX_Turn) {
            //console.log('x')
            return 'x';
        }

        //console.log('o')

        return 'o';

    }

    nextTurn(rowIndex, columnIndex) {

        //console.log('nextTurn')
        //console.log('rowIndex = ' + rowIndex)
        //console.log('columnIndex = ' + columnIndex)
        //console.log(' current cell value' + this.gameMatrix[3 * rowIndex + columnIndex])

        if ((this.gameMatrix[3 * rowIndex + columnIndex] === 'x') ||
            (this.gameMatrix[3 * rowIndex + columnIndex] === 'o')) {

            //console.log('filled cell!!!!')
            //console.log(this.gameMatrix[3 * rowIndex + columnIndex])

        } else if (this.isX_Turn) {
            this.isX_Turn = false
            this.isO_Turn = true
            this.gameMatrix[3 * rowIndex + columnIndex] = 'x';
            this.tryCount = this.tryCount + 1;
        } else {
            this.isX_Turn = true
            this.isO_Turn = false
            this.gameMatrix[3 * rowIndex + columnIndex] = 'o';
            this.tryCount = this.tryCount + 1;
        }
    }

    isFinished() {
        if (this.tryCount < 5) {
            return false
        } else if (this.tryCount >= 5) {

            for (var i = 0; i <= 2; i++) {

                if (this.gameMatrix[4 * i] === undefined) {
                    continue;
                }

                var firstCol_iRow = this.gameMatrix[3 * i + 0];
                var secondtCol_iRow = this.gameMatrix[3 * i + 1];
                var thirdtCol_iRow = this.gameMatrix[3 * i + 2];

                if (firstCol_iRow === secondtCol_iRow) {
                    if (secondtCol_iRow == thirdtCol_iRow) {
                        return true;
                    }
                }

                var firstRow_iCol = this.gameMatrix[3 * 0 + i];
                var secondtRow_iCol = this.gameMatrix[3 * 1 + i];
                var thirdtRow_iCol = this.gameMatrix[3 * 2 + i];

                if (firstRow_iCol === secondtRow_iCol) {
                    if (secondtRow_iCol == thirdtRow_iCol) {
                        return true;
                    }
                }

            }

            //diagonal check
            var cell00 = this.gameMatrix[0];
            var cell11 = this.gameMatrix[4];
            var cell22 = this.gameMatrix[8];

            if (cell00 === cell11) {
                if (cell11 == cell22) {
                    return true;
                }
            }

            var cell02 = this.gameMatrix[2];
            var cell11 = this.gameMatrix[4];
            var cell20 = this.gameMatrix[6];

            if (cell02 === cell11) {
                if (cell11 == cell20) {
                    return true;
                }
            }

            if (this.tryCount == 9) {
                return true;
            }

        }

        return false;
    }

    getWinner() {

        if (this.tryCount < 5) {
            return null
        } else if (this.tryCount >= 5) {

            for (var i = 0; i <= 2; i++) {

                if (this.gameMatrix[4 * i] === undefined) {
                    continue;
                }

                var firstCol_iRow = this.gameMatrix[3 * i + 0];
                var secondtCol_iRow = this.gameMatrix[3 * i + 1];
                var thirdtCol_iRow = this.gameMatrix[3 * i + 2];

                if (firstCol_iRow === secondtCol_iRow) {
                    if (secondtCol_iRow == thirdtCol_iRow) {
                        return secondtCol_iRow;
                    }
                }

                var firstRow_iCol = this.gameMatrix[3 * 0 + i];
                var secondtRow_iCol = this.gameMatrix[3 * 1 + i];
                var thirdtRow_iCol = this.gameMatrix[3 * 2 + i];

                if (firstRow_iCol === secondtRow_iCol) {
                    if (secondtRow_iCol == thirdtRow_iCol) {
                        return secondtRow_iCol;
                    }
                }

            }

            //diagonal check
            var cell00 = this.gameMatrix[0];
            var cell11 = this.gameMatrix[4];
            var cell22 = this.gameMatrix[8];

            if (cell00 === cell11) {
                if (cell11 == cell22) {
                    return cell11;
                }
            }

            var cell02 = this.gameMatrix[2];
            var cell11 = this.gameMatrix[4];
            var cell20 = this.gameMatrix[6];

            if (cell02 === cell11) {
                if (cell11 == cell20) {
                    return cell11;
                }
            }

            if (this.tryCount == 9) {
                return null;
            }

        }

        return null;
    }

    noMoreTurns() {
        if (this.tryCount == 9) {
            return true
        }

        return false
    }

    isDraw() {

        let isDawed = false;

        if (this.tryCount < 5) {
            return isDawed
        } else if (this.tryCount >= 5) {

            for (var i = 0; i <= 2; i++) {

                if (this.gameMatrix[4 * i] === undefined) {
                    continue;
                }

                var firstCol_iRow = this.gameMatrix[3 * i + 0];
                var secondtCol_iRow = this.gameMatrix[3 * i + 1];
                var thirdtCol_iRow = this.gameMatrix[3 * i + 2];

                if (firstCol_iRow === secondtCol_iRow) {
                    if (secondtCol_iRow == thirdtCol_iRow) {
                        return false;
                    }
                }

                var firstRow_iCol = this.gameMatrix[3 * 0 + i];
                var secondtRow_iCol = this.gameMatrix[3 * 1 + i];
                var thirdtRow_iCol = this.gameMatrix[3 * 2 + i];

                if (firstRow_iCol === secondtRow_iCol) {
                    if (secondtRow_iCol == thirdtRow_iCol) {
                        return false;
                    }
                }

            }

            //diagonal check
            var cell00 = this.gameMatrix[0];
            var cell11 = this.gameMatrix[4];
            var cell22 = this.gameMatrix[8];

            if (cell00 === cell11) {
                if (cell11 == cell22) {
                    return false;
                }
            }

            var cell02 = this.gameMatrix[2];
            var cell11 = this.gameMatrix[4];
            var cell20 = this.gameMatrix[6];

            if (cell02 === cell11) {
                if (cell11 == cell20) {
                    return false;
                }
            }

            if (this.tryCount == 9) {
                return true;
            }

        }

        return isDawed;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.gameMatrix[3 * rowIndex + colIndex] === undefined) {
            return null
        } else {
            return this.gameMatrix[3 * rowIndex + colIndex];
        }
    }
}

module.exports = TicTacToe;