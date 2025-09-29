import { Edges } from "../edges/Edges.js";
import { Graph } from "../graph/Graph.js";
import { Node } from "../node/Node.js";

const graph = new Graph();

graph.addNode(new Node(1, "Moscow", 300, 150));
graph.addNode(new Node(2, "Tver", 400, 250));
graph.addNode(new Node(2, "Tver", 400, 250));
graph.addNode(new Node(3, "Smolensc", 700, 450));
graph.addNode(new Node(4, "Rostov", 900, 750));

console.log(graph.nodes);

graph.addEdge(new Edges(1, 2, "180km"));
graph.addEdge(new Edges(2, 3, "500km"));
graph.addEdge(new Edges(3, 4, "780km"));
graph.addEdge(new Edges(4, 1, "910km"));

console.log(graph.edges);

console.log(graph.findNode(2));