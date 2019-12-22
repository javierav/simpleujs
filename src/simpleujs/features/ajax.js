export default {
  onClick(dataTarget, evt) {
    let method, url = null;

    // get method and url

    if (dataTarget.dataset.suGetFrom) {
      method = 'GET';
      url = dataTarget.dataset.suGetFrom;
    } else if (dataTarget.dataset.suPostTo) {
      method = 'POST';
      url = dataTarget.dataset.suPostTo;
    } else if (dataTarget.dataset.suPutTo) {
      method = 'PUT';
      url = dataTarget.dataset.suPutTo;
    } else if (dataTarget.dataset.suPatchTo) {
      method = 'PATCH';
      url = dataTarget.dataset.suPatchTo;
    } else if (dataTarget.dataset.suDeleteFrom) {
      method = 'DELETE';
      url = dataTarget.dataset.suDeleteFrom;
    }

    // options

    const options = {method: method};

    // get params

    const params = dataTarget.dataset.suParams;
    let formData = null;

    if (params && this.allowToSendData(method)) {
      const query = new URLSearchParams(params);
      formData = new FormData();
      options.body = formData;

      query.forEach((value, key) => {
        formData.append(key, value);
      });
    }

    // perform operation

    fetch(this.resourceUrl(url), options).then((response) => {
      if (response.ok) {
        this.afterOkResponse(dataTarget, evt, response);
      } else {
        this.afterErrorResponse(dataTarget, evt, response);
      }
    });
  },

  resourceUrl(url) {
    if (this.baseUrl) {
      return this.baseUrl + url;
    }

    return url;
  },

  allowToSendData(method) {
    return method == 'POST' || method == 'PUT' || method == 'PATCH';
  },

  afterOkResponse(dataTarget, evt, response) {},
  afterErrorResponse(dataTarget, evt, response) {}
};
