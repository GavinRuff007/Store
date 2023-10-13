const Header = () => {
    return (
        <div>
            <h1
                className="leading-relaxed font-primary font-extrabold text-4xl text-center
                text-palette-primary mt-4 py-2 sm:py-4"
                style={{color:'#EFE6E6'}}
            >
                فروشگاه اکسسوری من
            </h1>
            <p className="max-w-xl text-center px-2 mx-auto text-base" style={{color:'#EFE6E6'}}>
                🤗به فروشگاه من خوش آمدید این فروشگاه صرفا دارای عملیات CRUD ابتدایی می باشد
            </p>
        </div>
    );
};

export default Header;
