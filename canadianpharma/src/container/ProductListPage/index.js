import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import { generatePublicUrl } from "../../urlConfig";
import "./style.css";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    console.log(props);
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <div> Medicines</div>
              <button>View ALL</button>
            </div>
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <div className="productContainer">
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    ></img>
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <span>13.64</span>&nbsp;
                      <span>1231</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductListPage;
