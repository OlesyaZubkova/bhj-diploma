/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
 const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    options.method === 'GET';
        let address = `${options.url}` + '?';
            for (let i in options.data) {
                address +=`${i}=${options.data[i]}&`;
        }
    
      const formData = new FormData;
      for (let i in options.data) {
        formData.append(`${i}`, `${options.data[i]}`);
      }

      try {
        xhr.open(`${options.method}`, `${address}`);
        xhr.send(formData);
      }
      catch (err) {
        // перехват сетевой ошибки
        console.log(err);
      }

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
        options.callback(xhr.err, xhr.response);
      }
    };

    xhr.onerror = () => {
      options.callback(xhr.response.error, xhr.response);
    };
};