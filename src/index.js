export default function orderByProps(obj, [keys, value]) {
  const Arr = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if ((prop === keys) || (prop === value)) {
        Arr.push({ key: prop, value: obj[prop] });
        delete obj[prop];
      }
    }
  }
  const otherPropArr = Object.entries(obj).sort();
  otherPropArr.forEach((el) => Arr.push({ key: el[0], value: el[1] }));
  return Arr;
}
