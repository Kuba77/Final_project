import React, { useState, useEffect, useCallback } from "react";
import ProductsItem from "../../components/Products/Products-item/Products-item";
import classes from "./products-list-page.module.scss";
import Pagination from "../../components/Products/Pagination/Pagination";
import {
  getAllProducts,
  getFilteredProductByQuery,
} from "../../api/productsApi";

import { chekingArray } from "../../utils/test";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsInPage] = useState(12);

  const [genderSelected, setgenderSelected] = useState([]);

  function getselectedGenre(value) {
    const selected = chekingArray(genderSelected, value);
    console.log(selected);
    setgenderSelected(selected);
  }

  const getGenderProducts = useCallback(
    async (value) => {
      let params = new URLSearchParams();
      params.append("genre", value);
      let string = params.toString();
      const products = await getFilteredProductByQuery(string);
      setProducts(products.products);
    },
    [setProducts]
  );

  useEffect(() => {
    let GenString = genderSelected.join();
    getGenderProducts(GenString);
  }, [genderSelected]);

  const getProducts = useCallback(async () => {
    setLoading(true);
    const products = await getAllProducts();
    setProducts(products);
    setLoading(false);
  }, [setProducts]);

  useEffect(() => {
    if (genderSelected.length === 0) {
      getProducts();
    }
  }, [genderSelected]);

  const lastProductIndex = currentPage * productsInPage;
  const firstProductIndex = lastProductIndex - productsInPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={classes.content}>
      <div>
        <label>
          action
          <input
            type="checkbox"
            name="Action"
            onChange={(e) => {
              getselectedGenre(e.target.name);
            }}
          />
        </label>
        <label>
          drama
          <input
            type="checkbox"
            name="Drama"
            onChange={(e) => {
              getselectedGenre(e.target.name);
            }}
          />
        </label>
        <label>
          romance
          <input
            type="checkbox"
            name="Romance"
            onChange={(e) => {
              getselectedGenre(e.target.name);
            }}
          />
        </label>
        <label>
          Supernatural
          <input
            type="checkbox"
            name="Supernatural"
            onChange={(e) => {
              getselectedGenre(e.target.name);
            }}
          />
        </label>
        <label>
          Adventure
          <input
            type="checkbox"
            name="Adventure"
            onChange={(e) => {
              getselectedGenre(e.target.name);
            }}
          />
        </label>
      </div>
      <h2
        onClick={() => {
          console.log(genderSelected);
        }}
      >
        Manga
      </h2>
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
