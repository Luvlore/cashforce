<template>
  <div>
    <table>
      <thead class="thead">
        <tr>
          <th>nota fiscal</th>
          <th>sacado</th>
          <th>cedente</th>
          <th>emissão</th>
          <th>valor</th>
          <th>status</th>
        </tr>
      </thead>

      <tbody class="tbody" v-for="item in orders" v-bind:key="item.nNf">
        <tr>
          <td>{{ item.nNf }}</td>
          <td>{{ item.buyers.name}}</td>
          <td>{{ item.providers.name }}</td>
          <td>{{ formatDate(item.emissionDate) }}</td>
          <td class="accent">{{ formatValue(item.value) }}</td>
          <td class="accent status">{{ statusCode[item.orderStatusBuyer] }}</td>
          <td>
            <button>
              Dados do cedente
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import api from '@/services/api';

  export default {
    data: () => ({
      statusCode: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado'
      ],
      orders: [],
    }),
    mounted() {
      api.get('/orders').then(({ data }) => this.orders = data);
    },
    methods: {
      formatDate: (emissionDate) => new Date(emissionDate).toLocaleDateString(),
      formatValue: (value) => Number(value).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL' 
      }),
    },
  }
</script>

<style>
  table { 
    border-collapse: separate; 
    border-spacing: 0 16px; 
    width: 100%;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    color: #4D5566;
  }

  .thead th {
    font-family: 'DM Sans';
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;

    text-transform: uppercase;

    text-align: left;

    color: #A1A8B8;

    border-radius: 4px;
  }

  .thead th:first-child {
    padding-left: 30px;
  }

  .tbody td {
    border: 1px solid #DFE2EB;
    border-style: solid none;
    height: 48px;
  }

  .tbody td:first-child {
    padding-left: 30px;
    border-left-style: solid;
    border-top-left-radius: 6px; 
    border-bottom-left-radius: 6px;
  }
  .tbody td:last-child {
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    align-items: center;
    border-right-style: solid;
    border-bottom-right-radius: 6px; 
    border-top-right-radius: 6px; 
  }

  .tbody button {
    cursor: pointer;

    box-sizing: border-box;

    background-color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 165px;
    height: 32px;

    border: 1px solid #CAD3FF;
    border-radius: 24px;

    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    color: #727D94;

    transition: 0.4s;
  }

  .tbody button:hover {
    background-color: #00AD8C;
    border: 1px solid #00AD8C;

    color: white;
  }

  .accent {
    color: #00AD8C;
  }

  .status {
    font-size: 12px;
    font-weight: 700;
  }
</style>