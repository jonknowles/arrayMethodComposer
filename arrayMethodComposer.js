const fnAdapters = {
  filter: fn => {
    return (acc, curr, i, arr) => {
      if (fn(curr, i, arr)) {
        acc.push(curr);
      }
      return acc;
    };
  },
  map: fn => {
    return (acc, curr, i, arr) => {
      acc.push(fn(curr, i, arr));
      return acc;
    };
  },
  reduce: fn => fn
};

const identityReducer = (acc, curr) => [ ...acc, curr ];

const toAdapted = ({fn, method = ''}) => {
  const adapter = fnAdapters[method.toLowerCase()];
  return adapter
    ? adapter(fn)
    : identityReducer;
};

const toInitialAccumulator = ({acc}) => acc !== undefined ? acc : [];

const toComposedArrayFns = (...fns) => targetArray => {
  const internalFns = fns.map(toAdapted);
  const initAcc = fns.map(toInitialAccumulator);
  return targetArray.reduce((acc, curr, i, arr) => {
    return acc.map((subAcc, slot) => internalFns[slot](subAcc, curr, i, arr));
  }, initAcc);
};

const testArr = Array.from({length: 3000000}, () => Math.floor(Math.random() * 1000000));

const toSum = {
  method: 'reduce',
  fn: (acc, curr) => acc + curr,
  acc: 0
};

const onlyEvens = {
  method: 'filter',
  fn: num => num % 2 === 0
};

const toDoubled = {
  method: 'map',
  fn: num => num * 2
};

const onePass = () => {

  const start = new Date();
  toComposedArrayFns(
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
    toSum,
    onlyEvens,
    toDoubled,
    toDoubled,
  )(testArr);

  console.log(new Date() - start);
}


const manyPasses = () => {

  const start = new Date();

  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);
  testArr.map(toDoubled.fn);
  testArr.map(toDoubled.fn);
  testArr.reduce(toSum.fn, 0);
  testArr.filter(onlyEvens.fn);

  console.log(new Date() - start);
};

console.log('Starting');

manyPasses();
onePass();

