export class Graph {
    constructor(){
        this.nodes = [];
        this.edges = [];
    }

    addNode(node){this.nodes.push(node)}
    addEdge(edge){this.edges.push(edge)}
    findNode(id){return this.nodes.find(node => node.id == id)}
}