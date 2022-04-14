//柯理化校验能力
function curryingReg(reg) {
  return function (txt) {
    return reg.test(txt);
  };
}

export const checkPhone = curryingReg(/^1\d{10}/);

function add(...args) {
  return args.reduce((pre, next) => {
    return pre + next;
  });
}

function curryingCount(...args) {
  const _args = [args];
  function fn(...params) {
    _args.push(...params);
    return fn;
  }
  fn.toString = () => {
    return add(..._args);
  };
  return fn;
}
