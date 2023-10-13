import { Helmet } from "react-helmet";
import MainLayout from "./layouts/MainLayout";
import Header from "./Header";
import PaginateItems from "./common/PaginateItems";
import { useGetProductsQuery } from "./slices/productApi";

const App = () => {
    const {
        data: products = [],
        isLoading,
        isSuccess,
        isError,
    } = useGetProductsQuery();

    return (
        <MainLayout>
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>

            <div className="mx-auto max-w-6xl">
                <Header />

                <PaginateItems
                    productsPerPage={6}
                    products={products}
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    isError={isError}
                />
            </div>
        </MainLayout>
    );
};

export default App;
