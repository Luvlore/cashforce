<template>
  <header class="header">
    <img src="../assets/logo-cashforce.svg" alt="cashforce-logo"/>
    <nav class="menu" v-for="(item, index) in menuItems" v-bind:key="index">
      <div class="menu-item" v-on:click="selectItem" v-bind:class="[ index == 0 ? 'selected' : '' ]">
        <img v-bind:src="item.icon" v-bind:alt="item.alt" />
        <p>
          {{item.title}}
        </p>
      </div>
    </nav>
  </header>
</template>


<script>
  export default {
    data: () => ({
      menuItems: [
        {
          icon: require('../assets/icon-invoice.png'),
          alt: 'icon-invoice',
          title: 'Notas fiscais'
        },
      ],
    }),
    methods: {
      selectItem({ target }) {
        const items = this.$el.getElementsByClassName('menu-item');

        for (let i = 0; i < items.length; i += 1) {
          if (target === items[i] || target.parentElement === items[i]) {
            items[i].classList.add('selected');
          } else {
            items[i].classList.remove('selected');
          }
        }
      }
    }
  }
</script>

<style>
  .header {
    background-color: #FBFDFE;
    height: 100vh;
    width: 288px;
  }
  
  .header img {
    padding: 25px;
    width: 150px;
  }

  .menu-item {
    height: 64px;
    display: flex;
    align-items: center;
    font-size: 13px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .menu-item img {
    height: 14px;
    width: 24px;
    filter: brightness(0);
    transition: 0.2s;

  }
  
  .selected {
    border-left: 4px solid #00AD8C;
    color: #00AD8C;
  }
  
  .selected img {
    filter: brightness(100%);
  }
</style>
