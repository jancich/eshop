import './globals.css'
import type { Metadata } from 'next'
import { Poppins as PoppinsFont } from 'next/font/google'
import Navbar from './components/nav/Navbar';
import Footer from './components/Footer/Footer';

const Poppins = PoppinsFont({ subsets: ['latin'], weight:['400', '700'] });

export const metadata: Metadata = {
  title: 'Gusto Skate',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${Poppins.className} text-slate-700'}>
        <div className='flex flex-col min-h-screen'>
          <Navbar/>
         <main className='flex-grow'>{children}</main>
         <Footer/>
        </div>
     </body>
    </html>
  );
}
