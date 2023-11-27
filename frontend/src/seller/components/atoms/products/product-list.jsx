import React, { useState } from 'react'
import { motion } from 'framer-motion'

import ProductInput from './product-input';

function ProductList() {
    const [image, setImage] = useState(null);
    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    return (
        <motion.div className={`h-full flex items-center pl-9 pt-24 gap-8 min-[500px]:gap-28 duration-200`}
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }} >

            <div className='flex flex-col items-center'>

                <div className='w-20 h-20 min-[500px]:w-40 min-[500px]:h-40 md:w-56 md:h-56 shadow-xl bg-white rounded-[10px] border-[0.5px] border-accent-200 overflow-hidden'>
                    {image && <img src={image} alt="Uploaded" className="w-full h-full object-cover" />}
                </div>

                <div className='mt-6 mr-2' >
                    <motion.input type="file" id="upload" hidden onChange={handleUpload} />
                    <label htmlFor="upload"
                        className="cursor-pointer md:text-base  w-1 text-xs bg-accent-200 text-white rounded-xl p-3 hover:bg-accent-100 hover:duration-300">
                        Upload
                    </label>
                </div>

            </div>
            <ProductInput />

        </motion.div>
    )
}

export default ProductList
