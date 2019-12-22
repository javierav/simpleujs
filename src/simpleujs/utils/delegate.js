export default {
  delegate(element, selector, eventType, handler) {
    element.addEventListener(eventType, (e) => {
      const dataTarget = e.target.closest(selector);

      if (dataTarget) {
        handler.call(this, dataTarget, e);
      }
    });
  }
};
