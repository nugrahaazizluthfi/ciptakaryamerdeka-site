import axios from 'src/configs/axios';
export default {
  vissionmission: () => axios.get(`/vission-and-mission`).then((res) => res),
  ourteams: () => axios.get(`/our-teams`).then((res) => res),
  articles: () => axios.get(`/articles`).then((res) => res),
  article: (options) => axios.get(`/articles`, options).then((res) => res),
  profile: () => axios.get(`/company-profile`).then((res) => res),
};
