import delegate from './utils/delegate';

export default {
  started: false,

  start() {
    if (!this.started) {
      this.delegateEvents();
      this.started = true;
    }
  },

  delegateEvents() {
    this.delegate(document, this.ajaxSelector, 'click', this.onClick);
  }
};
