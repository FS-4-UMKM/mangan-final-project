import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Products from "./products"
import ProductProvider from "../context/product-provider"
import PaketList from "./paket-list"
import RegistesSeller from "./registerSeller"
import Keuangan from "./keuangan"
import PesananMasuk from "./pesanan-masuk"
import DetailPesanan from "./detail.pesanan.jsx"
import Review from "./review.jsx"


function Seller() {
    return (
        <ProductProvider>
            <Routes >
                <Route path="/dashboard" element={<Sidebar />} />
                <Route path="/products" element={<Products />} />
                <Route path="/list-products" element={<PaketList />} />
                <Route path="/register-seller" element={<RegistesSeller />} />
                <Route path="/payment" element={<Keuangan />} />
                <Route path="/pesanan-masuk" element={<PesananMasuk />} />
                <Route path="/detail-pesanan" element={<DetailPesanan />} />
                <Route path='/review/seller' element={<Review />} />
            </Routes>
        </ProductProvider>
    )
}

export default Seller