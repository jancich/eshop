import Link from "next/link";
import Container from "../container";

const NavBar = () => {
    return (
    <div className="
    sticcky
    top-0
    w-full
    bg-black
    z-30
    shadow-sm

    
    "
        >
            <div className="py-4 border-b-[1px]">
                 <container>
                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md-gap-0
                    ">
                        <Link href="/" className="font-bold text-2x1 text-orange-500">GUSTO</Link>
                        <div className="hidden md:block text-orange-500">Search</div>  
                        <div className="flex items-center gap-8 md:gap-12 text-orange-500">
                            <div className="text-orange-500">CartCount</div>
                            <div className="text-orange-500">UserMenu</div>
                        </div>
                    </div>
                 </container> 
            </div>
        </div> 
        );
};
 
export default NavBar;