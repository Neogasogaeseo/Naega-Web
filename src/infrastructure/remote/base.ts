import axios from 'axios';

const BASEURL = 'https://asia-northeast3-neogasogaeseo-9aaf5.cloudfunctions.net/api';
const getAccessToken = () => localStorage.getItem('token') ?? '';

const getBasePrivateHeaders = () => ({
  Accept: `*/*`,
  'Content-Type': `application/json`,
  accesstoken: getAccessToken(),
});

const basePublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
};

interface Request {
  url: string;
  headers?: object;
  isPrivate: boolean;
  method: 'get' | 'post' | 'put' | 'delete';
}

interface RequestWithParams extends Request {
  params?: object;
}

interface RequestWithData extends Request {
  data?: object;
}

const sendRequest = ({ url, params, method, headers, isPrivate }: RequestWithParams) => {
  const baseHeaders = isPrivate ? getBasePrivateHeaders() : basePublicHeaders;
  return axios[method](BASEURL + url, {
    headers: { ...baseHeaders, ...headers },
    params,
  }).then((response) => {
    return response.data;
  });
};

const sendRequestForData = ({ url, data, method, headers, isPrivate }: RequestWithData) => {
  const baseHeaders = isPrivate ? getBasePrivateHeaders() : basePublicHeaders;
  return axios[method](BASEURL + url, data, {
    headers: { ...baseHeaders, ...headers },
  }).then((response) => {
    return response.data;
  });
};

export const privateAPI = {
  get: ({ url, params, headers }: { url: string; params?: object; headers?: object }) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: true }),
  post: ({ url, data, headers }: { url: string; data?: object; headers?: object }) =>
    sendRequestForData({ url, data, method: 'post', headers, isPrivate: true }),
  put: ({ url, data, headers }: { url: string; data?: object; headers?: object }) =>
    sendRequestForData({ url, data, method: 'put', headers, isPrivate: true }),
  delete: ({ url, params, headers }: { url: string; params?: object; headers?: object }) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: true }),
};

export const publicAPI = {
  get: ({ url, params, headers }: { url: string; params?: object; headers?: object }) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: false }),
  post: ({ url, data, headers }: { url: string; data?: object; headers?: object }) =>
    sendRequestForData({ url, data, method: 'post', headers, isPrivate: false }),
  put: ({ url, data, headers }: { url: string; data?: object; headers?: object }) =>
    sendRequestForData({ url, data, method: 'put', headers, isPrivate: false }),
  delete: ({ url, params, headers }: { url: string; params?: object; headers?: object }) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: false }),
};
