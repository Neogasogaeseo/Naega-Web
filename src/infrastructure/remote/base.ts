import axios from 'axios';

const BASEURL = 'https://asia-northeast3-neogasogaeseo-9aaf5.cloudfunctions.net/api';
const getAccessToken = () => localStorage.getItem('token') ?? '';

const getBasePrivateHeaders = () => ({
  Accept: `*/*`,
  'Content-Type': `application/json`,
  accesstoken: getAccessToken(),
});

const getBasePrivateMultipartHeaders = () => ({
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
  accesstoken: getAccessToken(),
});

const basePublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
};

const basePublicMultipartHeaders = {
  Accept: `*/*`,
  'Content-Type': `multipart/form-data`,
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
  type?: 'multipart' | 'json';
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

const sendRequestForData = ({ url, data, method, headers, isPrivate, type }: RequestWithData) => {
  const baseHeaders = isPrivate
    ? type === 'json'
      ? getBasePrivateHeaders()
      : getBasePrivateMultipartHeaders()
    : type === 'json'
    ? basePublicHeaders
    : basePublicMultipartHeaders;
  return axios[method](BASEURL + url, data, {
    headers: { ...baseHeaders, ...headers },
  }).then((response) => {
    return response.data;
  });
};

export const privateAPI = {
  get: ({ url, params, headers }: Omit<RequestWithParams, 'isPrivate' | 'method'>) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: true }),
  post: ({ url, data, headers, type }: Omit<RequestWithData, 'isPrivate' | 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'post',
      headers,
      isPrivate: true,
      type: type ?? 'json',
    }),
  put: ({ url, data, headers, type }: Omit<RequestWithData, 'isPrivate' | 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'put',
      headers,
      isPrivate: true,
      type: type ?? 'json',
    }),
  delete: ({ url, params, headers }: Omit<RequestWithParams, 'isPrivate' | 'method'>) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: true }),
};

export const publicAPI = {
  get: ({ url, params, headers }: Omit<RequestWithParams, 'isPrivate' | 'method'>) =>
    sendRequest({ url, params, method: 'get', headers, isPrivate: false }),
  post: ({ url, data, headers, type }: Omit<RequestWithData, 'isPrivate' | 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'post',
      headers,
      isPrivate: false,
      type: type ?? 'json',
    }),
  put: ({ url, data, headers, type }: Omit<RequestWithData, 'isPrivate' | 'method'>) =>
    sendRequestForData({
      url,
      data,
      method: 'put',
      headers,
      isPrivate: false,
      type: type ?? 'json',
    }),
  delete: ({ url, params, headers }: Omit<RequestWithParams, 'isPrivate' | 'method'>) =>
    sendRequest({ url, params, method: 'delete', headers, isPrivate: false }),
};