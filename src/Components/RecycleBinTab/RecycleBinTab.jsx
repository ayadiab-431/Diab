import './RecycleBinTab.css';
import AdminTabHeader from '../AdminTabHeader/AdminTabHeader';
import { useState } from 'react';
import GenericTable from '../GenericTable/GenericTable';
import useIsNarrow from '../../Hooks/useIsNarrow';
import ProductCard from '../Card/ProductCard/ProductCard';
import GenericCard from '../Card/GenericCard/GenericCard';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
// import { getCategories, getProducts } from '../../Services/api';
export default function RecycleBinTap(){

    // Confirm Modal
    const [showConfirm, setShowConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    // Delete Item
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowConfirm(true);
    }

    // Confirm Delete
    // const confirmDelete = () => {
        
    // }

    const isProductNarrow = useIsNarrow(700);
    const isCategoryNarrow = useIsNarrow(400);

    const [activeTab, setActiveTab] = useState("products"); // "products" or "categories"

    const deletedProducts = [
        {
            id: 1,
            name: "طاولة طعام خشبية",
            description: "طاولة مناسبة لغرفة السفرة",
            category: "طاولات",
            images: [{ url: "https://via.placeholder.com/50" }],
        },
        {
            id: 2,
            name: "كرسي أزرق",
            description: "كرسي مريح للاسترخاء",
            category: "كراسي",
            images: [
            { url: "https://via.placeholder.com/50" },
            { url: "https://via.placeholder.com/50" },
            ],
        },
        ];

    const deletedCategories = [
                        { id: 1, category_name: "طاولات", products: 5 },
                        { id: 2, category_name: "كراسي", products: 8 },
                        { id: 3, category_name: "كنب سرير", products: 2 },
                        ];

    const productColumns = [
                        {
                            key: "thumbnail",
                            label: "صورة المنتج",
                            render: (val, row) => (
                            <img
                                src="https://via.placeholder.com/50"
                                alt="product thumbnail"
                                style={{ width: "50px", height: "50px" }}
                            />
                            ),
                        },
                        {
                            key: "name",
                            label: "اسم المنتج",
                        },
                        {
                            key: "description",
                            label: "الوصف",
                        },
                        {
                            key: "category",
                            label: "التصنيف",
                        },
                        {
                            key: "images",
                            label: "عدد الصور",
                            render: (val, row) => row.images?.length || 0,
                        },
                        ];
    const categoryColumns =  [
            { key: "category_name", label: "اسم التصنيف" },
            { key: "products", label: "عدد المنتجات" },
            ];
                                

    return(
        <div className="recycle-bin-tab w-100 p-2">
            {/* Header */}
            <AdminTabHeader title={"سلة المحذوفات"}/>

            <div className="trash-tabs d-flex gap-3 mb-3">
                <button className={`tab-btn ${activeTab === 'products' ? 'selected' : ''}`} onClick={() => setActiveTab("products")}>المنتجات المحذوفة</button>
                <button className={`tab-btn ${activeTab === 'categories' ? 'selected' : ''}`} onClick={() => setActiveTab("categories")}>التصنيفات المحذوفة</button>
            </div>
            {activeTab === "products" ? 
                ( isProductNarrow ? (
                    <ProductCard trash = {true}/>
                ) :
                (
                    <GenericTable columns={productColumns} data={deletedProducts} onForceDelete={(product) => handleDeleteClick(product)} trash = {true}/>
                )
                )
                : 
                (isCategoryNarrow ? 
                    (
                        <GenericCard data={deletedCategories} type={"category"} trash={true}/>
                    )
                    :
                    (<GenericTable columns={categoryColumns} data={deletedCategories} onForceDelete={(category) => handleDeleteClick(category)} trash = {true}/>))}
            {showConfirm && (
                <ConfirmModal 
                    message={"هل أنت متأكد من حذف هذا العنصر نهائيًا ؟"}
                    onConfirm={""}
                    onCancel={() => setShowConfirm(false)}/>
            )}
        </div>
    );
}