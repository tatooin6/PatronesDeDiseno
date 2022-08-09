class Api {
  constructor() {
    this.operations = function (url, opts, verb) {
      switch (verb) {
        case 'get':
          // return fetch
        case 'post':
          // return fetch
        default:
          return;
      }
    };
  }
}

// Nueva API, nueva version
class Api2 {
  constructor() {
    this.get = function(url, opts) {
      // return axios.get
    };
    this.post = function(url, opts) {
      // return axios.post
    };
  }
}

// Adaptador llamara a la version 2 al utilizar la misma semantica de llamada que usa la API1
class ApiAdapter {
  constructor() {
    const api2 = new Api2();

    this.operations = function(url, opts, verb) {
      switch(verb) {
        case 'get':
          return api2.get(url, opts);
        case 'post':
          return api2.post(url, opts);
        default:
          return;
      }
    }
  }
}

const api = new Api()
api.operations('www.google.com', { q:1 }, 'get');

const api2 = new Api2();
api2.get('www.google.com', { q:1 });

// Usando por debajo la nueva api
const adapter = new ApiAdapter();
adapter.operations('www.google.com', { q:1 }, 'get')

