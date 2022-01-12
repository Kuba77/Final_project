import { getCustomerCart, moveCartToDB, updateCart } from "../services/cart";

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
  return updateItem.filter((item) => item.cartQuantity !== 0);
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
export const calcPromoTotalPrice = (price, promocode) => {
  return price - (price * promocode.interest) / 100;
};

export const customerCartMovement = async (arr) => {
  const customerCart = await getCustomerCart();
  if (customerCart === null && arr.products.length > 0) {
    const response = await moveCartToDB(arr);
    return response.products;
  }
  if (customerCart !== null && arr.products.length > 0) {
    const response = await updateCart(arr);
    return response.products;
  }
  return customerCart.products;
};

export const removeDublikateObj = (arr) => {
  const resultArray = [];
  arr.map((item) => {
    if (
      resultArray.find((object) => {
        if (object.product._id === item.product._id) {
          object.cartQuantity = object.cartQuantity + item.cartQuantity;
          return true;
        } else {
          return false;
        }
      })
    ) {
    } else {
      resultArray.push(item);
    }
  });
  return resultArray;
};

export const qwe = (arr) => {
  const copyArr = Object.assign({}, arr);
  ["paymentInfo", "shipping", "status"].forEach((el) => {
    delete copyArr[el];
  });
  return copyArr;
};
export const addRemoveQuantity = (arr, _id, operation) => {
  if (operation === "minus") {
    return decreaseItemQuantity(arr, _id);
  } else {
    return addItemQuantity(arr, _id);
  }
};
