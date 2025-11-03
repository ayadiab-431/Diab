import './AdminSidebar.css';
import { useState } from 'react';
export default function AdminSidebar ({onSelect, isOpen, onClose}) {

    // Active Use state
    const [activeIndex, setActiveIndex] = useState(0);

    // menu items 
    const menuItems = [
        { key:"productsTab",name: "المنتجات", icon: "fa-box" },
        { key:"categoriesTab",name: "التصنيفات", icon: "fa-tags" },
        { key:"bannerTap",name: "البانر الرئيسي", icon: "fa-image" },
        { key:"contactTab",name: "معلومات الاتصال", icon: "fa-address-card" },
        { key:"recycleBinTap",name: "سلة المحذوفات", icon: "fa-trash" },
        { key:"adminProfileTap",name: "الملف الشخصي", icon: "fa-user" },
    ]
    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}></div>
            )}
            <div className={`admin-sidebar py-3 pe-3 ps-2 ${isOpen ? 'open' : ''}`}>
                <div className="logo d-flex align-items-center justify-content-center">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} alt='logo'/>
                </div>
                <ul className="sidebar-menu mt-5 ps-0">
                    {
                        menuItems.map((item, index) => (
                            <li 
                            key={index}
                            className={`menu-item  py-2 ps-3 mb-2 ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => {
                                setActiveIndex(index)
                                onSelect(item.key)
                                onClose();
                                }}>
                                <i className={`fa ${item.icon} me-2`}></i> <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="log-out py-2 ps-3">
                    <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                    <span>تسجيل الخروج</span>
                </div>
            </div>
        </>
    );
}