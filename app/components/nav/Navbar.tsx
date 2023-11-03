import Link from "next/link";
import Container from "../container";
import CartCount from "./CartCount";
import Image from "next/image";
import UserMenu from "./UserMenu";
import { getCurrentUser } from '@/actions/getCurrentUser';


const NavBar = async () => {

const currentUser = await getCurrentUser()

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
                        <Link href="/" className="font-bold text-3xl text-black">
                        <Image
                                src="/LOGO GUSTO.png"
                                alt="Banner"
                                width={200}
                                height={50}
                            />

                        </Link>
                        <div className="hidden md:block text-black text-xl">Search</div>  
                        <div className="flex items-center gap-8 md:gap-12 text-black">
                            <CartCount/>
                            <UserMenu currentUser = {currentUser}/>
                        </div>
                    </div>
                </Container> 
            </div>
        </div> 
    );
};
 
export default NavBar;
