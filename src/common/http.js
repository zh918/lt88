import fetch from 'isomorphic-fetch'

class Http {
  static post(url,parms,header={}) {
    try {

      return fetch(url);

    } catch (e) {
      return Promise.resolve({status:-100,msg:''})
    } finally {

    }
  }

  static get(url,parms,header={}) {
    try {

    } catch (e) {

    } finally {

    }
  }
}

if (typeof window.$Http === 'undefined') window.$Http = Http;
