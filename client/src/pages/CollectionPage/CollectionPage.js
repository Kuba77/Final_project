import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import classes from "./CollectionPage.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import { getAllProducts } from "../../services/products";
import CollectionList from "./CollectionList/CollectionList";
import Pagination from "./Pagination/Pagination";

import Filters from "../../components/Filters/Filters";
import { chekingArray, filterArray } from "../../utils/utils";
import { getFilteredProductByQuery } from "../../services/products";

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsInPage] = useState(15);

  const [genderSelected, setgenderSelected] = useState([]);
  const [sort, setSort] = useState("");

  function getselectedGenre(value) {
    const selected = chekingArray(genderSelected, value);
    setgenderSelected(selected);
  }

  function sortProductByPrice(value) {
    setSort(value);
  }

  const getGenderProducts = useCallback(async () => {
    setLoading(true);
    let params = new URLSearchParams();
    if (genderSelected.length > 0) {
      params.append("genre", genderSelected);
    }
    if (sort) {
      params.append("sort", sort);
    }
    let string = params.toString();
    const products = await getFilteredProductByQuery(string);
    const filtered = filterArray(products.products, genderSelected);
    setCollection(filtered);
    setLoading(false);
  }, [setCollection, genderSelected, sort]);

  useEffect(() => {
    setLoading(true);
    if (genderSelected.length === 0 && sort === "") {
      getCollection();
    }
    getGenderProducts(genderSelected, sort);
    setLoading(false);
  }, [genderSelected, sort]);

  const getCollection = async () => {
    setLoading(true);
    const response = await getAllProducts();
    setCollection(response);
    setLoading(false);
  };
  useEffect(() => {
    getCollection();
  }, []);

  const lastProductIndex = currentPage * productsInPage;
  const firstProductIndex = lastProductIndex - productsInPage;
  const currentProduct = collection.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber, setLoading) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <section className={classes.collection}>
        {isLoading && (
          <div className={classes.collection__loader}>
            <PuffLoader loading={isLoading} color="purple" size={120} />
          </div>
        )}

        {!isLoading && (
          <Filters
            getselectedGenre={getselectedGenre}
            sortProductByPrice={sortProductByPrice}
          />
        )}

        <div className={classes.collection__container}>
          {!isLoading && <CollectionList collection={currentProduct} />}
        </div>

        <Pagination
          productsInPage={productsInPage}
          totalProducts={collection.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default CollectionPage;
