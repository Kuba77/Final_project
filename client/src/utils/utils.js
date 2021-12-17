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

export const addItemQuantity = (arr, _id) => {
  let updateItem = arr.map((item) => {
    if (item._id === _id) {
      return { ...item, cartQuantity: item.cartQuantity + 1 };
    }
    return item;
  });
  console.log("updateItem", updateItem);
  return updateItem;
};
