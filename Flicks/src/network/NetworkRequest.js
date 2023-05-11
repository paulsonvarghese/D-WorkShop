/* 

Network request 

*/

import {DEMO_BASE_URL} from '../utils/Constants';

// Get Request handling method
async function getMethodRequest(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response;
    })

    .catch(error => {
      console.error(error, 'EROROR');
      return error;
    });
}

export async function getRequestedData(requestMethod, requestUrl) {
  if (requestMethod === 'GET') {
    let url = DEMO_BASE_URL + requestUrl;
    return getMethodRequest(url);
  }
}
