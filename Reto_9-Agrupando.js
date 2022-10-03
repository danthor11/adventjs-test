export default function groupBy(collection, it) {
  const action = typeof it === "function" ? it : (item) => item[it];

  const elements = collection.map(action);

  const obj = {};

  elements.forEach((item, index) => {
    if (!obj[item]) obj[item] = [];
    obj[item].push(collection[index]);
  });
  return obj;
}
