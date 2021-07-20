import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const Counter = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
      increment () {
    	this.count += 1;
    },
  }
}

createApp(Counter).mount('#app')