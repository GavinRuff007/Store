import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "./Price";

const ProductCard = ({ product }) => {
    const { id, title, description, sticker, price } = product;

    return (
        <div className="xenon-border p-4 md:p-0"> 
            <Link to={`/products/${id}`}>
                <div className="bg-white w-full md:w-72 mx-auto rounded-lg shadow-md border border-palette-lighter overflow-hidden">
                    <div className="relative">
                        <img
                            src={`http://localhost:9000/images/${sticker}`}
                            className="w-full transform duration-500 ease-in-out hover:scale-105"
                            alt={title}
                        />
                    </div>
                    <div className="p-4">
                        <div className="font-primary text-palette-primary text-lg font-semibold">
                            {title}
                        </div>
                        <div className="text-base text-gray-600 font-primary font-light mt-2">
                            {description}
                        </div>
                        <div className="text-palette-dark font-primary font-medium text-base mt-2">
                            <CustomNumeralNumericFormat
                                value={price}
                                thousandSeparator=","
                                prefix={`قیمت : ‍‍‍`}
                                suffix={` تومان `}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
