export function chekingArray(arr, info) {
  if (arr.includes(info)) {
    let n = arr.filter((item) => item !== info);
    return n;
  } else {
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
    } else {
      return item;
    }
  });
  return updateItem;
};
export const decreaseItemQuantity = (arr, _id) => {
  let updateItem = arr.map((item) => {
    if (item._id === _id) {
      return { ...item, cartQuantity: item.cartQuantity - 1 };
    } else {
      return item;
    }
  });
  return updateItem;
};

export const calcTotalPriceOneProd = (item) => {
  return item.product.currentPrice * item.cartQuantity;
};

export const calcTotalPrice = (items) => {
  const sum = items.reduce((acc, item) => {
    acc += item.product.currentPrice * item.cartQuantity;
    return acc;
  }, 0);
  return sum;
};
export const calcPromoTotalPrice = (price) => {
  return price - (price * 13) / 100;
};

export const prepToMove = (arr) => {
  let newArr = arr.reduce((acc, item) => {
    acc.push(
      Object.assign({
        ["product"]: item.product["_id"],
        ["cartQuantity"]: item["cartQuantity"],
      })
    );
    return acc;
  }, []);
  return { products: newArr };
};
