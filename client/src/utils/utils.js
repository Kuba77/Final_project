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

export function filterArray(servResp, data) {
  let result = servResp.reduce(function (acc, elem) {
    if (
      elem.genre.filter((e) => data.indexOf(e) !== -1).length === data.length
    ) {
      acc.push(elem);
    }
    return acc;
  }, []);
  return result;
}
