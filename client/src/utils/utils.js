export function chekingArray(arr, info) {
  if (arr.includes(info)) {
    let n = arr.filter((item) => item !== info);
    console.log("info BAD", info);
    return n;
  } else {
    console.log("info OK", info);
    arr.push(info);
    const arr2 = arr.slice();
    return arr2;
  }
}

function isSubset(array1, array2) {
  // returns true if array2 is a subset of array1
  return array2.every(function (element) {
    return array1.includes(element);
  });
}
export function filterArray(servResp, data) {
  let result = servResp.reduce(function (acc, elem) {
    if (isSubset(elem.genre, data)) {
      acc.push(elem);
    }
    return acc;
  }, []);
  return result;
}
// export function filterArray(servResp, data) {
//   let result = servResp.reduce(function (acc, elem) {
//     if (
//       elem.genre.filter((e) => data.indexOf(e) !== -1).length === data.length
//     ) {
//       acc.push(elem);
//     }
//     return acc;
//   }, []);
//   return result;
// }
