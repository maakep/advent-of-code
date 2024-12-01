const input = process.argv[4] == 't' ? require('./input-test') : require('./input');

module.exports = () => {
  const list1 = input[0].sort();
  const list2 = input[1].sort();

  const res = list1.map((x, i) => Math.abs(x - list2[i])).reduce((acc, curr) => curr + acc);

  return res;
};
