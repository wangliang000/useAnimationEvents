import { Children, memo } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import StoreByImmer from './components/storeByImmer';
import { checkPhone } from './utils.js';
console.log(checkPhone(12345678910), 'checkPhone');
const App = () => {
  const Components = [A, B, C].reduce((Pre, Next) => {
    console.log(Pre, Next);
    return ({ children }) => (
      <Pre>
        <Next>{children}</Next>
      </Pre>
    );
  });
  // TODO 使用Provider 传递全局信息 user config authority;
  return <Components>1212</Components>;
};

export default memo(App);
