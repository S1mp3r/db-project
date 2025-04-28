const apiUrl = "";

responseMock = {
  graph: {
    nodes: [{ label: "Node 1" }, { label: "Node 2" }, { label: "Node 3" }],
    edges: [
      { from: 1, to: 2, weight: 1 },
      { from: 2, to: 3, weight: 1 },
    ],
  },
};

function enviarSQL() {
  const sqlQuery = document.getElementById("sqlQuery").value;

  if (!sqlQuery) {
    alert("Por favor, insira uma cláusula SQL.");
    return;
  }

  const data = {
    sql: sqlQuery,
  };

  desenharGrafo(responseMock.graph);

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

  // Preparar os nós e as arestas a partir da resposta da API
  graphData.nodes.forEach((node, index) => {
    nodes.push({
      id: index + 1,
      label: node.label,
    });
  });

  graphData.edges.forEach((edge, index) => {
    edges.push({
      from: edge.from,
      to: edge.to,
      label: edge.weight.toString(),
      value: edge.weight,
    });
  });

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
