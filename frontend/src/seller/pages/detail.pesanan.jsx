import React, { useState } from 'react'
import Hamburger from 'hamburger-react';
import Sidebar from '../components/sidebar';
import { Icon } from '@iconify/react';


function DetailPesanan() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className={`flex items-start bg-bg-300 h-screen  transition-all ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-1'}`}>
            <div className="flex  h-full">
                {isOpen && <Sidebar />}
                <button className='z-20 w-9 h-9  rounded-full transition-colors ' onClick={toggleSidebar}>
                    <Hamburger size={20} easing="ease-in" color='black' toggled={isOpen} toggle={setIsOpen} />
                </button>
            </div>
            <div className='overflow-auto h-full w-full'>
                <div className='flex flex-col mb-8 '>
                    <div className='mt-[10px] ml-7'>
                        <button className='flex items-center gap-1 text-accent-200 font-semibold text-lg'>
                            <p>user view</p>
                            <Icon icon="line-md:clipboard-arrow-twotone" />
                        </button>
                    </div>


                    <h1 className='ml-6 mt-9 font-semibold text-accent-200'>Detail pesanan</h1>
                    <div className='flex  ml-6 gap-5 md:gap-44 mt-4 md:mr-8 bg-white p-3 md:p-6 rounded-xl shadow-xl md:text-base text-[8px]'>
                        <div>
                            <h1 className='text-accent-200 font-semibold'>Nama Pemesan</h1>
                            <p className='mt-5 font-semibold'>Budi Budiman</p>
                        </div>
                        <div>
                            <h1 className='text-accent-200 font-semibold'>Tanggal Pemesanan</h1>
                            <p className='mt-5 font-semibold'>15:00 15 juli 2023</p>
                        </div>
                        <div>
                            <h1 className='text-accent-200  font-semibold'>Nomor Pemesanan</h1>
                            <p className='mt-5 font-semibold'>13442211433</p>
                        </div>
                    </div>

                    <div className='flex  ml-6  justify-between mt-4  md:mr-8 bg-white p-3 md:p-6 rounded-xl shadow-xl md:text-base text-[8px]'>
                        <div className='flex gap-3 h-auto'>
                            <div className='w-[83px] h-[78px] shadow-xl bg-slate-950 rounded-[10px]  overflow-hidden'>
                                <img src='' alt="Uploaded" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-accent-200'>Paket Nasi Box Bakaran</h1>
                                <p className='font-medium'>Menu A</p>
                                <h1 className='font-semibold mt-2'> <span className='text-accent-200'>Total:</span> Rp 1.000.000</h1>
                            </div>
                        </div>

                        <div className=''>
                            <h1 className='font-semibold text-accent-200'>Isi Menu A:</h1>
                            <ul className='list-disc list-outside  ml-5  '>
                                <li>nasi</li>
                                <li>Capcay</li>
                                <li>Ayam Bakar</li>
                                <li>sambal</li>
                                <li>Tempe</li>
                                <li>Lalapan</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='font-semibold text-accent-200'>Catatan</h1>
                            <p>Tolong Ya Mas jangan hitam hitam cuminya</p>
                        </div>
                    </div>

                    <div className='flex  ml-6  md:gap-5 mt-4 mr-4  md:mr-8 bg-white p-3 md:p-6 rounded-xl shadow-xl md:text-base text-[8px]'>
                        <div className='md:w-2/3'>
                            <h1 className='text-accent-200 font-semibold'>Info Pesanan</h1>
                            <div className='flex md:gap-[56px]'>
                                <p className='text-accent-200 font-semibold'>Acara</p>
                                <div className='flex'>
                                    <p>:</p>
                                    <p>15 Des 2022 09:00 WIB</p>
                                </div>
                            </div>
                            <div className='flex md:gap-2'>
                                <p className='text-accent-200 font-semibold'>Jumlah Porsi</p>
                                <div className='flex'>
                                    <p>:</p>
                                    <p>150</p>
                                </div>
                            </div>
                            <div className='flex md:gap-[40px]'>
                                <p className='text-accent-200 font-semibold'>Catatan</p>
                                <div className='flex'>
                                    <p>:</p>
                                    <p> Kirim Katering 2 jam sebelum acara</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-semibold text-accent-200'>Pengirim</h1>
                            <h1 className='font-bold md:text-base'>Catering Haji Ruslan</h1>
                            <p>Jl Mawar No. 76, Jakarta Barat
                                WA. 086756675676
                                ruslancatering@mail.com</p>
                        </div>

                        <div>
                            <h1 className='font-semibold text-accent-200'>Pengirim</h1>
                            <h1 className='font-bold md:text-base'>Budi Budiman</h1>
                            <p>Jl Bumi Agung No. 04, Mentang, Jakarta Barat
                                WA. 086756675676 ruslancatering@mail.com</p>
                        </div>
                    </div>

                    <div className='flex  ml-6  justify-between mt-4  md:mr-8 bg-white p-3 md:p-6 rounded-xl shadow-xl md:text-base text-[8px]'>
                        <p className='font-semibold text-accent-200'>Total pembayaran</p>
                        <p className='font-bold'>Rp 3.000.000.000</p>
                    </div>
                </div>

                <div>
                    <button className='bg-red-600 text-white py-3 font-semibold mb-9 ml-7 rounded-[10px] shadow  px-4'>
                        hubungi Pelanggan
                    </button>
                    <button className='bg-accent-200  text-white py-3 font-semibold mb-9 ml-7 rounded-[10px] shadow  px-4'>
                        Proses pesanan ini
                    </button>
                </div>
            </div>
        </div >
    )
}

export default DetailPesanan
