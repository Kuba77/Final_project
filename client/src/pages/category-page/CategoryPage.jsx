import React, { useEffect, useState, useCallback } from "react";

import { useParams, Link } from "react-router-dom";

import { getFilteredProductByCategory } from "../../api/productsApi";

function CategoryPage() {
  let { categoryId } = useParams();
  const [product, setProduct] = useState([]);

  const getProducts = useCallback(async () => {
    const products = await getFilteredProductByCategory(categoryId);
    console.log(products);
    setProduct(products.products);
  }, [setProduct]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>{categoryId}</h1>
      {product.map((item) => (
        <Link id={item.itemNo} key={item.itemNo} to={`/product/${item.itemNo}`}>
          <h5>{item.name}</h5>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
