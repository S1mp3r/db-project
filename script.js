const apiUrl = "";

const responseMock = {
  graph: {
    nodes: [{ label: "Node 1" }, { label: "Node 2" }, { label: "Node 3" }],
    edges: [
      { from: 1, to: 2, weight: 1 },
      { from: 2, to: 3, weight: 1 },
    ],
  },
};

const responseMock_ = {
  graph: {
    nodes: [
      { label: "Node 1" },
      { label: "Node 2" },
      { label: "Node 3" },
      { label: "Node 4" },
      { label: "Node 5" },
      { label: "Node 6" },
      { label: "Node 7" },
      { label: "Node 8" },
      { label: "Node 9" },
      { label: "Node 10" },
    ],
    edges: [
      { from: 1, to: 2, weight: 1 },
      { from: 2, to: 3, weight: 1 },
      { from: 3, to: 4, weight: 1 },
      { from: 4, to: 5, weight: 1 },
      { from: 5, to: 6, weight: 1 },
      { from: 6, to: 7, weight: 1 },
      { from: 7, to: 8, weight: 1 },
      { from: 8, to: 9, weight: 1 },
      { from: 9, to: 10, weight: 1 },
      { from: 1, to: 5, weight: 2 },
      { from: 3, to: 7, weight: 2 },
      { from: 6, to: 10, weight: 3 },
    ],
  },
};

function calcularProfundidadeBFS(graphData) {
  const profundidade = Array(graphData.nodes.length).fill(0);
  const adjList = {};

  graphData.edges.forEach((edge) => {
    if (!adjList[edge.from]) adjList[edge.from] = [];
    adjList[edge.from].push(edge.to);
  });

  const queue = [1];
  profundidade[0] = 1;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const currentDepth = profundidade[currentNode - 1];

    if (adjList[currentNode]) {
      adjList[currentNode].forEach((neighbor) => {
        if (profundidade[neighbor - 1] === 0) {
          profundidade[neighbor - 1] = currentDepth + 1;
          queue.push(neighbor);
        }
      });
    }
  }

  return profundidade;
}

function enviarSQL() {
  const sqlQuery = document.getElementById("sqlQuery").value;

  if (!sqlQuery) {
    alert("Por favor, insira uma cláusula SQL.");
    return;
  }

  const data = {
    sql: sqlQuery,
  };

  desenharGrafo(responseMock_.graph);

  //   fetch(apiUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.graph) {
  //         desenharGrafo(data.graph);
  //       } else {
  //         alert("Erro ao processar a consulta.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Erro:", error);
  //       alert("Houve um erro ao enviar a consulta.");
  //     });
}

function desenharGrafo(graphData) {
  const nodes = [];
  const edges = [];

  graphData.nodes.forEach((node, index) => {
    const nodeData = {
      id: index + 1,
      label: node.label,
    };

    if (index === 0) {
      nodeData.color = "green";
    }

    nodes.push(nodeData);
  });

  const profundidade = calcularProfundidadeBFS(graphData);

  const maxDepthNode = profundidade.reduce(
    (maxNode, depth, index) => {
      if (depth > maxNode.depth) {
        return { id: index + 1, depth };
      }
      return maxNode;
    },
    { id: null, depth: 0 }
  );

  graphData.edges.forEach((edge) => {
    edges.push({
      from: edge.from,
      to: edge.to,
      label: edge.weight.toString(),
      value: 1,
    });
  });

  if (maxDepthNode.id) {
    nodes[maxDepthNode.id - 1].color = "red";
  }

  const container = document.getElementById("graph");
  const data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges),
  };
  const options = {
    nodes: {
      shape: "dot",
      size: 10,
    },
    edges: {
      width: 2,
      arrows: "to",
    },
  };

  new vis.Network(container, data, options);
}
