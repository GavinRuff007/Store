import { useState } from "react";

import ReactPaginate from "react-paginate";
import ProductListing from "../ProductListing";

const PaginateItems = ({
    productsPerPage,
    products,
    isLoading,
    isSuccess,
    isError,
}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + productsPerPage;

    const currentProducts = products.slice(itemOffset, endOffset);
    console.log(`currentProducts: ${currentProducts}`);

    const pageCount = Math.ceil(products.length / productsPerPage);

    const handlePageClick = (e) => {
        const newOffset = e.selected * productsPerPage;

        document.documentElement.scrollTop = 0;

        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="ProductList">
            <ProductListing
                currentProducts={currentProducts}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
            />

            </div>
        
        
        <ReactPaginate
                containerClassName="flex justify-center items-center mt-8 mb-4"
                pageClassName="pageActivename"
                activeClassName="pageClassName"
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={null}
                nextLabel={null}
                renderOnZeroPageCount={null}
            />
        
        

        </>
    );
};

export default PaginateItems;
