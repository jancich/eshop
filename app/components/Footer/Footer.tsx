import React from "react";
import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import { MdFacebook} from "react-icons/md";
import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-black-800 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">T-shirt</Link>
                        <Link href="#">Hats</Link>
                        <Link href="#">Stickers</Link>
                        <Link href="#">Sweaters</Link>
                        <Link href="#">Gadgets</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policy</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">About Us</h3>
                    <p className="mb-2">I am a young entrepreneur who wanted to extend my passion for skateboarding beyond just the skatepark. That's why I launched my own skate clothing line, where I transform my coolest ideas into stickers, t-shirts, caps, and much more.</p>
                    <p>&copy; {new Date().getFullYear()} Gusto. All rights reserved.</p>
                    </div>
                    <FooterList>
                    <h3 className="text-base font-bold mb-2">Follow Us</h3>
                      <div className="flex gap-2">
                      <Link href="#">
                      <MdFacebook size={24}/> 
                      </Link>
                      <Link href="#">
                      <AiFillInstagram size={24}/> 
                      </Link>
                      <Link href="#">
                      <AiFillTwitterCircle size={24}/> 
                      </Link>
                      <Link href="#">
                      <AiFillYoutube size={24}/> 
                      </Link>
                      </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
