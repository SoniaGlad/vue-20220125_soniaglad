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
const app = createApp({
  data() {
    return {
      meetups: null,
      title: 'MEETUP_TITLE',
    };
  },

  mounted() {
    fetchMeetupById(meetupId).then((meetups) => {
      this.meetups = meetupId;
    });
  },

  watch: {},
});

const vm = app.mount('#app');
