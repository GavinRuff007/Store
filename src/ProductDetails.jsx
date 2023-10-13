import { Link, useParams } from "react-router-dom";
import CustomNumeralNumericFormat from "./Price";
import ProductForm from "./ProductForm";
import { Helmet } from "react-helmet";
import { useGetProductQuery } from "./slices/productApi";
import { BiSolidStore } from "react-icons/bi";

const ProductDetails = () => {
  const { productID } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(productID);

  return (
    <div className="ProductList3">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        {isSuccess ? (
          <>
            <Helmet>
              <title>{product.title}</title>
            </Helmet>
            <div className="md:flex flex-col-reverse md:flex-row" style={{color:'#EFE6E6'}}>
              <div className="w-full md:w-1/2 md:max-w-md mb-4 md:mb-0 mx-auto">
                <div className="relative aspect-w-16 aspect-h-16">
                  <img
                    src={`http://localhost:9000/images/${product.sticker}`}
                    className="object-cover w-full h-full transform duration-500 ease-in-out hover:scale-105"
                    alt={product.title}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:max-w-md mx-auto glass-div">

                <div className="font-primary">
                  <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
                    {product.title}
                  </h1>
                  <p className="font-medium text-lg">{product.description}</p>
                  <div className="text-xl text-palette-primary font-medium py-4 px-1">
                    <CustomNumeralNumericFormat
                      value={product.price}
                      thousandSeparator=","
                      prefix={`قیمت : ‍‍‍`}
                      suffix={` تومان `}
                    />
                  </div>
                </div>
                <ProductForm product={product} />
                <Link
                  style={{color: '#EC53B0'}}
                  to="/"
                  className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm mb-4"
                >
                  برگشت به صفحه محصولات
                  <BiSolidStore size={30} color="EC53B0" />
                </Link>
              </div>

            </div>
          </>
        ) : (
          <p> بارگذاری محصول </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
