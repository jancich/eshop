import './globals.css'
import type { Metadata } from 'next'
import { Poppins as PoppinsFont } from 'next/font/google'
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';
import CartProvider from '@/Providers/CartProvider';
import { Toaster } from 'react-hot-toast';


const Poppins = PoppinsFont({ subsets: ['latin'], weight:['400', '700'] });

export const metadata: Metadata = {
  title: 'Gusto Skate',
  description: 'Ecommerce app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className={`${Poppins.className} text-slate-700`}>
        <Toaster toastOptions={{
          style:{
            background: 'rgb(51 65 85)',
            color:'#fff',
          }
        }}/>
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-grow'>{children}</main>
            <Footer/>
          </div>
        </CartProvider>       
      </body>
    </html>
  );
}
