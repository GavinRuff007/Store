import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNumeralNumericFormat from "./Price";
import { selectAll } from "./slices/cartSlice";
import {BsFillCartFill} from "react-icons/bs";
import { BiSolidHomeSmile} from "react-icons/bi"
const Navbar = () => {
    // const { cartItems } = useSelector((state) => state.cart);
    const cart = useSelector(selectAll);

    return (
<header className="sticky top-0 z-20 " style={{ backgroundColor: '#713ABE', boxShadow: '0 5px 5px 0 rgba(236, 83, 176, 0.7)' }}>
            
            <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6" >
                <Link to="/" className="cursor-pointer">
                    <h1 className="flex no-underline">
                        <span className="text-xl font-primary font-bold tracking-tight pt-1">
                                <span className="Text1">
                                    خانه
                                </span>
                                
                        </span>
                       < BiSolidHomeSmile size={30} color="EC53B0"/>
                    </h1>
                </Link>
                <div>
                    <Link to="/cart" className="relative">

                        <BsFillCartFill size={30} color="#EC53B0"/>
                        {cart.length === 0 ? null : (
                            <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                                <CustomNumeralNumericFormat
                                    value={cart.length}
                                    thousandSeparator=","
                                />
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
