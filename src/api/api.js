import axios from 'axios';

const RESULTS_LENGTH = 100;

export default axios.create({
  baseURL: `https://randomuser.me/api/?results=${RESULTS_LENGTH}`,
});
