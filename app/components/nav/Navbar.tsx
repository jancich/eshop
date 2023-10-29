import Link from "next/link";
import Container from "../container";

const NavBar = () => {
    return (
        <div className="
        sticcky
        top-0
        w-full
        bg-gradient-to-r from-orange-300 to-orange-400
        z-30
        shadow-sm
        "
        >
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md-gap-0
                    ">
                        <Link href="/" className="font-bold text-3xl text-black">GUSTO</Link>
                        <div className="hidden md:block text-black text-xl">Search</div>  
                        <div className="flex items-center gap-8 md:gap-12 text-black">
                            <div className="text-black text-xl">CartCount</div>
                            <div className="text-black text-xl">UserMenu</div>
                        </div>
                    </div>
                </Container> 
            </div>
        </div> 
    );
};
 
export default NavBar;
