import Link from "next/link";
import MainNav from "./MainNav";
import TopNav from "./TopNav";


const Header = () => (
<>
    <header className="w-full h-52 grid grid-cols-4 bg-teal-900 sticky top-0 z-50">
        <div className="logo h-28 px-12 pt-3 col-start-1 col-end-2">
            <a href="index.html" className="flex justify-start items-center no-underline ">
                <img src="image/logo.png" alt="NestHotle 로고" className="w-24 h-24 object-cover"/>
                <h1 className="text-5xl font-black text-yellow-100">Nest Hotel</h1>
            </a>
        </div>  
        <span></span>
        <span></span>              
        <TopNav/>
        <MainNav/>
    </header>
</>
);

export default Header;