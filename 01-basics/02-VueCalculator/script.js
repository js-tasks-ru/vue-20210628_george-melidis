import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const Calculator = {
  data() {
    return {
      num1: 0,
      num2: 0,
      operand: 'sum',
    };
  },
  computed: {
    result() {
      switch (this.operand) {
        case 'sum':
          return this.num1 + this.num2;
        case 'subtract':
          return this.num1 - this.num2;
        case 'multiply':
          return this.num1 * this.num2;
        case 'divide':
          return this.num1 / this.num2;
      }
    },
  },
};

createApp(Calculator).mount('#app');
