// Below items will be passed to index.js (class)
module.exports = class {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }

    _calculateAdd() {
        return `Result: ${this.first + this.second}.`;
    }
}