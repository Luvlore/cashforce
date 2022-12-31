<template>
  <section class="section-content">
    <div class="bar" />

    <div class="content">
      <div class="head">
        <div class="title">
          <img src="../assets/icon-invoice.png" />
          <h1>Notas fiscais</h1>
        </div>
        <p>Visualize as notas fiscais que você tem.</p>
      </div>

      <TableInvoice />
    </div>
  </section>
</template>

<script>
  import TableInvoice from './TableInvoice.vue';

  export default {
    name: 'ContentSection',
    components: {
      TableInvoice,
    }
  }
</script>

<style>
  .section-content {
    width: 100%;
    box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
    background-color: white;
  }

  .bar {
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #DFE2EB;
  }

  .content {
    padding: 40px;
  }
  
  .title img {
    filter: brightness(0);
  }
  
  .title {
    display: flex;
    align-items: center;
    width: 180px;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #021B51;
  }

  .head p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #727D94;
  }
</style>