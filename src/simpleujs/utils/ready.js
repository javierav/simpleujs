export default function ready(handler) {
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', handler);
  } else {
    handler.call(this);
  }
};
