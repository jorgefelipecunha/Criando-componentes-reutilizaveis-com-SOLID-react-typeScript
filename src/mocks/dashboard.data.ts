import { Widgets } from "src/components/Dashboard/dashboard.model";

export const widgets: Widgets[] = [
  {
    config: {
      type: "COMPARISON",
      position: "FULL",
      template: "BAR_CHART",
    },
    data: {
      title: "Valor Total de Pedidos",
      current: "Nov de 2021",
      items: [
        {
          name: "Sep",
          data: [10000],
        },
        {
          name: "Oct",
          data: [10000],
        },
        {
          name: "Nov",
          data: [10000],
        },
      ],
    },
  },
  {
    config: {
      type: "METRIC",
      position: "HALF",
      template: "LIST",
    },
    data: {
      title: "Lista de Pedidos",
      current: "abr/2021",
      items: [
        {
          title: "Pedro",
          value: "R$ 32,50",
        },
        {
          title: "Rafael",
          value: "R$ 54,95",
        },
        {
          title: "Ingrid",
          value: "R$ 12,00",
        },
      ],
    },
  },
  {
    config: {
      type: "COMPARISON",
      position: "QUARTER",
      template: "BLOCK",
    },
    data: {
      title: "Numero de Pedidos",
      value: 35698,
      prev: "2019",
      current: "2020",
    },
  },
];
