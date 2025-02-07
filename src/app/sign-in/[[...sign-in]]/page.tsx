import { SignIn } from '@clerk/nextjs'
import Navbar from './../../../../components/Navbar';
import Footer from '../../../../components/Footer';

export default function Page() {
  return (
    <>
    <Navbar />
    <div className='h-[80vh] flex justify-center items-center mb-'><SignIn /></div>
    <Footer />
    </>
  )
}



