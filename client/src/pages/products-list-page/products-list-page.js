import React, { useState, useEffect } from "react";
import ProductsItem from "../../components/Products/Products-item/Products-item";
import classes from "./products-list-page.module.scss";
import Pagination from "../../components/Products/Pagination/Pagination";
import { getAllProducts } from "../../api/productsApi";



function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsInPage] = useState(12);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await getAllProducts();
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);
  const lastProductIndex = currentPage * productsInPage;
  const firstProductIndex = lastProductIndex - productsInPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={classes.content}>
      <h2>Manga</h2>
      <ProductsItem products={currentProduct} loading={loading} />
      <Pagination
        productsInPage={productsInPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductsList;
