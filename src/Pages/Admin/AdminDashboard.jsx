import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";
import './AdminDashboard.css';
import { useState} from "react";
import ProductTab from "../../Components/ProductTab/ProductTab";
import CategoriesTab from "../../Components/CategoriesTab/CategoriesTab";
import ContactsInfoTab from "../../Components/ContactsInfoTab/ContactsInfoTab";
import BannerTap from "../../Components/BannerTap/BannerTap";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import RecycleBinTap from "../../Components/RecycleBinTab/RecycleBinTab";
import AdminProfileTap from "../../Components/AdminProfileTap/AdminProfileTap";
export default function AdminDashboard(){
    const [activeTab, setActiveTab] = useState("productsTab");
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        // Admin Dashboard
        <div className="admin-dashboard d-lg-flex align-items-start jsutify-content-between flex-lg-row w-100">
            {/* Sidebar in large */}
            <AdminSidebar onSelect = {setActiveTab}
                isOpen = {showSidebar}
                onClose = {() => setShowSidebar(false)}/>
            {/* Header in tablet and mobile */}
            <AdminHeader onMenuToggle = {() => setShowSidebar(!showSidebar)}/>
            {/* Amin Tabs */}
            <div className="dashboard" style={{flex: '1 1 450px'}}>
                {activeTab === 'productsTab' && <ProductTab/>}
                {activeTab === 'categoriesTab' && <CategoriesTab/>}
                {activeTab === 'bannerTap' && <BannerTap/>}
                {activeTab === 'contactTab' && <ContactsInfoTab/>}
                {activeTab === 'recycleBinTap' && <RecycleBinTap/>}
                {activeTab === 'adminProfileTap' && <AdminProfileTap />}
            </div>
        </div>
    );
}