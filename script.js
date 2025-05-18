const apiUrl = "localhost:/parser";

responseMock = {
  arvore_operacoes: [
    {
      grafo: {
        edges: [
          {
            from: 1,
            to: 2,
            weight: 1,
          },
          {
            from: 2,
            to: 3,
            weight: 1,
          },
          {
            from: 3,
            to: 4,
            weight: 1,
          },
          {
            from: 4,
            to: 5,
            weight: 1,
          },
          {
            from: 5,
            to: 6,
            weight: 1,
          },
          {
            from: 6,
            to: 7,
            weight: 1,
          },
          {
            from: 7,
            to: 8,
            weight: 1,
          },
          {
            from: 5,
            to: 9,
            weight: 1,
          },
          {
            from: 9,
            to: 10,
            weight: 1,
          },
          {
            from: 4,
            to: 11,
            weight: 1,
          },
          {
            from: 11,
            to: 12,
            weight: 1,
          },
          {
            from: 3,
            to: 13,
            weight: 1,
          },
          {
            from: 2,
            to: 14,
            weight: 1,
          },
          {
            from: 14,
            to: 15,
            weight: 1,
          },
        ],
        nodes: [
          {
            label:
              "(Pi)_cliente.nome, pedido.idPedido, pedido.DataPedido, Status.descricao, pedido.ValorTotalPedido, produto.QuantEstoque",
          },
          {
            label:
              "|x| produto.idProduto = pedido_has_produto.Produto_idProduto",
          },
          {
            label: "|x| pedido.idPedido = pedido_has_produto.Pedido_idPedido",
          },
          {
            label: "|x| Status.idstatus = Pedido.status_idstatus",
          },
          {
            label: "|x| cliente.idcliente = pedido.Cliente_idCliente",
          },
          {
            label:
              "(Pi)_nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente",
          },
          {
            label:
              "(Sigma)_((((((cliente.TipoCliente_idTipoCliente = 1) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)",
          },
          {
            label: "Cliente",
          },
          {
            label:
              "(Sigma)_((((((pedido.ValorTotalPedido = 0) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)",
          },
          {
            label: "pedido",
          },
          {
            label:
              "(Sigma)_((Status.descricao = 3) ^ (Status.descricao = 'Aberto')) ^ (Status.descricao = 'Aberto')",
          },
          {
            label: "Status",
          },
          {
            label: "pedido_has_produto",
          },
          {
            label:
              "(Sigma)_((((produto.QuantEstoque > 0) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)",
          },
          {
            label: "produto",
          },
        ],
      },
    },
    15,
  ],
  ast: {
    STATEMENT: {
      JOIN: {
        CONDITION: {
          OPERACAO: {
            value: "EQ",
          },
          VALUE: [
            {
              value: "cliente.idcliente",
            },
            {
              value: "pedido.Cliente_idCliente",
            },
          ],
        },
        JOIN: {
          CONDITION: {
            OPERACAO: {
              value: "EQ",
            },
            VALUE: [
              {
                value: "Status.idstatus",
              },
              {
                value: "Pedido.status_idstatus",
              },
            ],
          },
          JOIN: {
            CONDITION: {
              OPERACAO: {
                value: "EQ",
              },
              VALUE: [
                {
                  value: "pedido.idPedido",
                },
                {
                  value: "pedido_has_produto.Pedido_idPedido",
                },
              ],
            },
            JOIN: {
              CONDITION: {
                OPERACAO: {
                  value: "EQ",
                },
                VALUE: [
                  {
                    value: "produto.idProduto",
                  },
                  {
                    value: "pedido_has_produto.Produto_idProduto",
                  },
                ],
              },
              TABLE: {
                value: "produto",
              },
            },
            TABLE: {
              value: "pedido_has_produto",
            },
          },
          TABLE: {
            value: "Status",
          },
        },
        TABLE: {
          value: "pedido",
        },
      },
      SELECT_LIST: {
        COLUMN: [
          {
            value: "cliente.nome",
          },
          {
            value: "pedido.idPedido",
          },
          {
            value: "pedido.DataPedido",
          },
          {
            value: "Status.descricao",
          },
          {
            value: "pedido.ValorTotalPedido",
          },
          {
            value: "produto.QuantEstoque",
          },
        ],
      },
      TABLE: {
        value: "Cliente",
      },
      WHERE: {
        AND: {
          AND: {
            AND: {
              CONDITION: [
                {
                  OPERACAO: {
                    value: "EQ",
                  },
                  VALUE: [
                    {
                      value: "Status.descricao",
                    },
                    {
                      value: "'Aberto'",
                    },
                  ],
                },
                {
                  OPERACAO: {
                    value: "EQ",
                  },
                  VALUE: [
                    {
                      value: "cliente.TipoCliente_idTipoCliente",
                    },
                    {
                      value: "1",
                    },
                  ],
                },
              ],
            },
            CONDITION: {
              OPERACAO: {
                value: "EQ",
              },
              VALUE: [
                {
                  value: "pedido.ValorTotalPedido",
                },
                {
                  value: "0",
                },
              ],
            },
          },
          CONDITION: {
            OPERACAO: {
              value: "GT",
            },
            VALUE: [
              {
                value: "produto.QuantEstoque",
              },
              {
                value: "0",
              },
            ],
          },
        },
      },
    },
  },
  campos_usados: {
    cliente: [
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
      "nome",
      "idcliente",
    ],
    pedido: [
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
      "idPedido",
      "DataPedido",
      "ValorTotalPedido",
      "idPedido",
      "status_idstatus",
      "Cliente_idCliente",
    ],
    pedido_has_produto: [
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
      "Produto_idProduto",
      "Pedido_idPedido",
    ],
    produto: [
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
      "QuantEstoque",
      "idProduto",
    ],
    status: [
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
      "descricao",
      "idstatus",
    ],
  },
  relacional:
    "(Pi)_cliente.nome, pedido.idPedido, pedido.DataPedido, Status.descricao, pedido.ValorTotalPedido, produto.QuantEstoque((((((Pi)_nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente, nome, idcliente((Sigma)_((((((cliente.TipoCliente_idTipoCliente = 1) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)) ^ (cliente.TipoCliente_idTipoCliente = 1)(Cliente))) |x|_cliente.idcliente = pedido.Cliente_idCliente ((Sigma)_((((((pedido.ValorTotalPedido = 0) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)) ^ (pedido.ValorTotalPedido = 0)(pedido))) |x|_Status.idstatus = Pedido.status_idstatus ((Sigma)_((Status.descricao = 3) ^ (Status.descricao = 'Aberto')) ^ (Status.descricao = 'Aberto')(Status))) |x|_pedido.idPedido = pedido_has_produto.Pedido_idPedido (pedido_has_produto)) |x|_produto.idProduto = pedido_has_produto.Produto_idProduto ((Sigma)_((((produto.QuantEstoque > 0) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)) ^ (produto.QuantEstoque > 0)(produto)))",
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
  //       if (data) {
  //         desenharArvoreBMais(limparResponseMock(data);
  //       } else {
  //         alert("Erro ao processar a consulta.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Erro:", error);
  //       alert("Houve um erro ao enviar a consulta.");
  //     });
  desenharArvoreBMais(limparResponseMock(responseMock));
}

function limparResponseMock(responseMock) {
  const novoMock = JSON.parse(JSON.stringify(responseMock));

  Object.keys(novoMock.campos_usados).forEach((tabela) => {
    const unicos = [...new Set(novoMock.campos_usados[tabela])];
    novoMock.campos_usados[tabela] = unicos;
  });

  if (
    novoMock.arvore_operacoes?.[0]?.grafo?.nodes &&
    Array.isArray(novoMock.arvore_operacoes[0].grafo.nodes)
  ) {
    const vistos = new Set();
    novoMock.arvore_operacoes[0].grafo.nodes =
      novoMock.arvore_operacoes[0].grafo.nodes.filter((node) => {
        if (vistos.has(node.label)) return false;
        vistos.add(node.label);
        return true;
      });
  }

  return novoMock;
}

function desenharArvoreBMais(responseData) {
  const treeData = converterParaArvore(responseData.arvore_operacoes[0].grafo);

  d3.select("#bplusTree").html("");

  const margin = { top: 20, right: 90, bottom: 30, left: 90 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  const svg = d3
    .select("#bplusTree")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const root = d3.hierarchy(treeData);
  const treeLayout = d3.tree().size([height, width]);
  treeLayout(root);

  svg
    .selectAll(".link")
    .data(root.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-width", 2)
    .attr(
      "d",
      d3
        .linkHorizontal()
        .x((d) => d.y)
        .y((d) => d.x)
    );

  svg
    .selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d) => `translate(${d.y},${d.x})`)
    .append("text")
    .attr("transform", "rotate(-100)")
    .attr("dy", 5)
    .attr("x", (d) => (d.children ? -10 : 10))
    .style("text-anchor", (d) => (d.children ? "end" : "start"))
    .text((d) => d.data.label)
    .on("mouseover", function (event, d) {
      d3.select(this).append("title").text(d.data.label);
    });

  const zoom = d3.zoom().on("zoom", function (event) {
    svg.attr("transform", event.transform);
  });

  d3.select("svg").call(zoom);

  if (responseData.campos_usados != null) {
    const params = document.getElementById("camposUsados");
    document.getElementById("hearderParams").innerHTML = "Campos da Consulta";

    const camposUsados = responseData.campos_usados;
    const objToAnalyze = Object.keys(camposUsados);

    for (let i = 0; i < objToAnalyze.length; i++) {
      params.innerHTML += `<strong>Dados do ${objToAnalyze[i]}: </strong>`;
      camposUsados[objToAnalyze[i]].forEach((d) => {
        params.innerHTML += d + ", ";
      });

      params.innerHTML += `<br>`;
    }

    params.innerHTML += `<br>`;
  }

  if (responseData.relacional != null) {
    document.getElementById("hearderRelacional").innerHTML =
      "Algebra Relacional";
    document.getElementById("algebraRelacional").innerHTML =
      responseData.relacional;
  }
}

function converterParaArvore(grafo) {
  const nodes = grafo.nodes.map((n, i) => ({ id: i + 1, label: n.label }));
  const nodeMap = Object.fromEntries(
    nodes.map((n) => [n.id, { ...n, children: [] }])
  );

  grafo.edges.forEach((edge) => {
    if (nodeMap[edge.from] && nodeMap[edge.to]) {
      nodeMap[edge.from].children.push(nodeMap[edge.to]);
    }
  });

  const destinos = new Set(grafo.edges.map((e) => e.to));
  const raiz = nodes.find((n) => !destinos.has(n.id));
  return nodeMap[raiz.id];
}
