import axios from 'axios';
import slotsResponse from './slotsResponse.json';

const apiBuyUrl = 'https://reqres.in/api/products';

const sleep = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default {
  async LOAD_SLOTS() {
    await sleep(500);
    return slotsResponse;
  },
  async BUY_SLOT(slotId) {
    try {
      const apiUrl = `${apiBuyUrl}/${slotId}`;
      const response = await axios.get(apiUrl);
      return response.status === 200;
    }
    catch {
      return false;
    }
  }
};
