/**
 * SimpleUJS - unobtrusive javascript actions using HTML attributes
 **/

import ajax from './simpleujs/features/ajax';
import confirmations from './simpleujs/features/confirmations';
import delegate from './simpleujs/utils/delegate';
import ready from './simpleujs/utils/ready';
import selectors from './simpleujs/selectors';
import start from './simpleujs/start';

const simpleujs = {};

Object.assign(simpleujs, selectors);
Object.assign(simpleujs, ajax);
Object.assign(simpleujs, delegate);
Object.assign(simpleujs, confirmations);
Object.assign(simpleujs, start);

export default {
  start() {
    simpleujs.start();
  }
}

ready(() => {
  simpleujs.start();
});
