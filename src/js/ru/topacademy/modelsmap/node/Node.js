// var nodes = [
//     {id: 1, label: "Moscow"},
//     {id: 2, label: "Saratov"},
//     {id: 3, label: "Rostov"},
// ]

// var edges = [
//     {from: 1, to: 2, label: "180km"},
//     {from: 2, to: 3, label: "180km"},
//     {from: 3, to: 1, label: "180km"},
// ]
// export class Edges {
//     constructor(from, to, label) {
//         this.from = from;
//         this.to = to;
//         this.label = label;
//     }
// }

export class Node {
    constructor(id, label, x, y) {
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
    }
}
