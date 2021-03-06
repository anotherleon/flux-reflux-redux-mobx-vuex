import {addProxy} from './util';
import stores from './stores';
import callReactHooks from './useReactHooks';

export default addProxy(
  {},
  {
    get(target, key) {
      //   if (!stores[key]) throw new Error(`Not found the store: ${key}.`);
      if (!stores[key]) {
        return {};
      }
      callReactHooks(key);
      return stores[key];
    },
  },
);
