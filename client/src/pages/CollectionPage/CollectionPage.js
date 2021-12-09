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
import { useHistory } from "react-router-dom";

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsInPage] = useState(15);

  const [genderSelected, setgenderSelected] = useState([]);
  const history = useHistory();
  function getselectedGenre(value) {
    console.log("value", value);
    const selected = chekingArray(genderSelected, value);
    console.log("selected", selected);
    setgenderSelected(selected);
  }

  const getGenderProducts = useCallback(
    async (value) => {
      setLoading(true);
      let params = new URLSearchParams();
      params.append("genre", value);
      let string = params.toString();
      const products = await getFilteredProductByQuery(string);
      const filtered = filterArray(products.products, genderSelected);
      setCollection(filtered);
      setLoading(false);
    },
    [setCollection]
  );

  useEffect(() => {
    let GenString = genderSelected.join();
    getGenderProducts(GenString);
    if (genderSelected.length === 0) {
      getCollection();
    }
    if (genderSelected.length > 0) {
      history.push({
        search: `/filters?genre=${GenString}`,
      });
    }
  }, [genderSelected, getGenderProducts]);

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

        <Filters getselectedGenre={getselectedGenre} />

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
