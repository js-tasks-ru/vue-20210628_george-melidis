import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const Meetup = {
  data() {
    return {
      changeValue: '',
      title: '',
    };
  },
  watch: {
    changeValue: {
      handler(newValue) {
        this.getTitle(newValue);
      },
    },
  },
  methods: {
    getTitle(meetupId) {
      fetchMeetupById(meetupId).then((a) => {
        this.title = a.title;
      });
    },
  },
};

createApp(Meetup).mount('#app');
