import HomeSidebar from './atoms/sidebar/home-sidebar';
import PaketSidebar from './atoms/sidebar/paket-sidebar';
import ProfileSidebar from './atoms/sidebar/profile';
import PesananSidebar from './atoms/sidebar/pesanan-sidebar';
import PelangganSidebar from './atoms/sidebar/pelanggan-sidebar';
import PaymentSidebar from './atoms/sidebar/payment-sidebar';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


function Sidebar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -450 }}
            animate={{ opacity: 1, x: -10 }}
            transition={{ scale: 1.5, duration: 1 }}
            className='w-32 md:w-2/4 md:relative md:z-0 fixed z-10 top-0  bg-accent-200 h-[100vh] overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
            <div className='py-3 px-8'>
                <img className='md:w-28 md:h-12 w-14 h-24  -my-4 md:m-auto' src="/logo-mangan-white.svg" alt="" />
                <ProfileSidebar />
                <NavLink to="/dashboard">
                    <HomeSidebar />
                </NavLink>
                <NavLink to="/products">
                    <PaketSidebar />
                </NavLink>
                <NavLink to="/products">
                    <PesananSidebar />
                </NavLink>
                <NavLink to="/products">
                    <PelangganSidebar />
                </NavLink>
                <NavLink to="/payment">
                    <PaymentSidebar />
                </NavLink>
            </div>
        </motion.div>
    )
}

export default Sidebar
