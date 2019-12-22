export default {
  baseUrl: undefined,

  parseMetadata() {
    this.baseUrl = this.getMetaContent(this.metaBaseUrlSelector);
  },

  getMetaContent(selector) {
    const metaElement = document.querySelector(selector);

    if (metaElement) {
      return metaElement.getAttribute('content');
    }

    return null;
  }
};
