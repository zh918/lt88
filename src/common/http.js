import fetch from 'isomorphic-fetch'

class Http {

  /**
   * post请求，
   */
  static post(url,parms,header) {
    try {
      Object.assign({
        'Content-Type': 'application/json',
        'timeout':1000 * 60,
      },header);

      let fetchHeader =  {
        method: 'POST',
        headers: header,
        body: JSON.stringify(parms)
      };

      return fetch(url,fetchHeader).then(result => {
        return result;
      })
      .catch(result => {
        if (result.message.indexOf('timeout') != -1) {
          $Log('超时了',url);
        }
      });

    } catch (e) {
      return Promise.resolve({status:-100,msg:''});
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
