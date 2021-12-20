import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams} from "react-router-dom";
import { getFilteredProductByCategory } from "../../services/products";
import Header from "../../components/Header/Header";
import PuffLoader from "react-spinners/PuffLoader";
import classes from './CategoryPage.module.scss';
import BookItem from "../../components/BookItem/BookItem";


const CategoryPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const getProducts = useCallback(async () => {
    setLoading(true);
    const products = await getFilteredProductByCategory(categoryId);
    setProduct(products.products);
    setLoading(false);
  }, [setProduct]);


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <Header />
    <section className={classes.categoryPage}>
      {isLoading && (
          <div className={classes.categoryPage__loader}>
            <PuffLoader loading={ isLoading } color="purple" size={120} />
          </div>
        )}

      {!isLoading && <div className={classes.categoryPage__textarea}>
          <h3>{ categoryId }</h3>
        </div> }

      <div className={classes.categoryPage__container}>
        

        {!isLoading && product.map((item) => (
          <Link id={item.itemNo} key={item.itemNo} to={`/product/${item.itemNo}`}>
              <BookItem 
                imageSrc={item.imageUrls[1]} 
                price={item.currentPrice} 
                title={item.name}
                author={item.author}
                itemNo={item.itemNo}
                salePrice={item.salePrice}
            />
        </Link>
      ))}
      </div>
    </section>
   </>
  );
}

export default CategoryPage;
