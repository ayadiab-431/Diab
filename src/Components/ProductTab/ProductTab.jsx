import AdminTabHeader from '../AdminTabHeader/AdminTabHeader';
import FormModal from '../FormModal/FormModal';
import GenericTable from '../GenericTable/GenericTable';
import ToastMsg from '../ToastMsg/ToastMsg';
import ProductForm from '../ProductForm/ProductForm';
import useFormHandler from '../../Hooks/useFormHandler';
import { getCategories, getProducts, destroyProduct, postProduct, editProduct } from '../../Services/api';
import { useState,useEffect} from 'react';
import useIsNarrow from '../../Hooks/useIsNarrow';
import ProductCard from '../Card/ProductCard/ProductCard';
export default function ProductTab() {

    const isNarrow = useIsNarrow(700);

    // PRoduct Data
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formMode, setFormMode] = useState(null);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Get All Products From API
        getProducts()
        .then(res => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.error("Fetching Error", err);
        })
        // Get Categories from API
        getCategories()
        .then(res => {
            setCategories(res.data);
        })
        .catch((err) => {
            console.error("Fetching Error", err);
        })
    },[])

    const columnsData = [
        {key: 'thumbnail', label: 'صورة المنتج', render: (val,row) => {
        const afterImg = row.images?.find(img => img.type === 'after');
        return afterImg? <img src={afterImg.url} alt={`product thumbnail after`}/> : <span>لا يوجد صورة</span>
        }},
        {key: 'name', label: 'اسم المنتج'},
        {key: 'description', label: 'الوصف'},
        {key: 'category', label: 'التصنيف', render : (val, row) => {
            const cat = categories.find(c => c.id === row.category);
            return cat ? cat.category_name : 'غير محدد';
        }},
        {key: 'images', label: 'عدد الصور', render: (val, row) => row.images?.length || 0}
    ]

    // Edit Product
    const onEditProduct = (product) => {
        setOpenModal(true);
        setSelectedProduct(product);
        setFormMode('edit');
    }

    // Delete Product
    const onDeleteProduct = (product) => {
        destroyProduct(product.id)
        .then(() => {
            setProducts(products.filter(p => p.id !== product.id));
        })
        .catch(err => console.error("Fetching Error", err));
    }

    const {
            openModal,
            setOpenModal,
            setFormState,
            toast,
            setToast,
            handleSubmit,
            closeModal,
        } = useFormHandler(formMode,selectedProduct, setProducts, {add: postProduct, edit: editProduct});

    return(
        <div className="product-tab w-100 p-2">
            {/* Product Header */}
            <AdminTabHeader title={"المنتجات"} buttonText={"اضف منتج جديد"} onClick = {() => {
                setOpenModal(true);
                setSelectedProduct(null);
                setFormMode('add');
                }}/>
            {/* Products Table */}

            {isNarrow ? 
                (
                    <ProductCard data={products}
                    onEdit = {(product) => onEditProduct(product)}
                    onDelete={(product) => onDeleteProduct(product)}
                    />
                ) 
                : 
                (
                    <GenericTable columns={columnsData} data={products} 
                        onEdit={(product) => onEditProduct(product)}
                        onDelete={(product) => onDeleteProduct(product)}
                    />
                )
                }
            
            {openModal && <FormModal 
                            onClick={closeModal} 
                            submitText={selectedProduct ? 'تعديل':'إضافة المنتج'}
                            formTitle={selectedProduct ? 'تعديل المنتج':'إضافة منتج جديد'}
                            onSubmit = {handleSubmit}
                            formContent={<ProductForm onDataChange={setFormState} initialData={selectedProduct}/>}
                            />}
            {toast && <ToastMsg toast={toast.msg} success={toast.success} setToast={setToast}/>}
        </div>
    );
}