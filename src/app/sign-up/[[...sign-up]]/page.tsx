import { SignUp } from '@clerk/nextjs'
import Navbar from './../../../../components/Navbar';
import Footer from '../../../../components/Footer';

export default function Page() {
  return (
    <>
    <Navbar />
    <div className='h-[90vh] flex justify-center items-center mb-5'><SignUp /></div>
    <Footer />
    </>
  )
}
