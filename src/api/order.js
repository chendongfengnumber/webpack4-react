import axios from 'axios';

export function creatorOrder(creatorOrderPayload) {
  return axios.post('', { json: creatorOrderPayload });
}
