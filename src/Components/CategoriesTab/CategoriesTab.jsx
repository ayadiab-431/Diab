import AdminTabHeader from '../AdminTabHeader/AdminTabHeader';
import GenericTable from '../GenericTable/GenericTable';
import useFormHandler from '../../Hooks/useFormHandler';
import FormModal from '../FormModal/FormModal';
import CategoriesForm from '../CategoriesForm/CategoriesForm';
import ToastMsg from '../ToastMsg/ToastMsg';
import { postCategories, getCategories, editCategory, destroyCategory } from '../../Services/api';
import { useState, useEffect } from 'react';
import GenericCard from '../Card/GenericCard/GenericCard';
import useIsNarrow from '../../Hooks/useIsNarrow';
export default function CategoriesTab() {

    const isNarrow = useIsNarrow(400);

    const [categories, setCategories] = useState([]);
    const [formMode, setFormMode] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null)
    // Get categories Data
    useEffect(() => {
        getCategories()
        .then(res => {
            setCategories(res.data)
        })
        .catch (err => console.error("Fetching Error", err));
    }, [categories]);

    const columnsData = [
        {key: 'category_name', label: "اسم التصنيف"},
        {key: 'products', label: 'عدد المنتجات'}
    ]

    // Edit Category
    const onEditCategory = (category) => {
        setSelectedCategory(category);
        setFormMode("edit");
        setOpenModal(true);
        }
    
    // Delete Category
    const onDeleteCategory = (category) => {
        destroyCategory(category.id)
        .then(() => {
            setCategories(categories.filter(c => c.id !== category.id))
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
        } = useFormHandler(formMode, selectedCategory, setCategories, {add: postCategories, edit: editCategory});

    return(
        <div className="categories-tab w-100 p-2">
            {/* Categories Header */}
            <AdminTabHeader title={"التصنيفات"} buttonText={"اضف تصنيف جديد"} 
            onClick = {() => {
                setOpenModal(true)
                setSelectedCategory(null)
                setFormMode("add");
                }}/>
            {/* Categories Table */}
            {
                isNarrow ? (
                    <GenericCard
                        data={categories}
                        type="category"
                        onEdit={(category) => onEditCategory(category)}
                        onDelete ={(category) => onDeleteCategory(category)}
                        />
                )
                :
                (
                <GenericTable columns={columnsData} data={categories}
                            onEdit={(category) => onEditCategory(category)}
                            onDelete ={(category) => onDeleteCategory(category)}
                            />
                )
            }
            {openModal && <FormModal 
                            onClick={closeModal} 
                            submitText={selectedCategory? 'تعديل':'إضافة التصنيف'}
                            formTitle={selectedCategory? 'تعديل التصنيف':'إضافة تصنيف جديد'}
                            onSubmit = {handleSubmit}
                            formContent={<CategoriesForm onDataChange={setFormState} initialData={selectedCategory}/>}
                            />}
            {toast && <ToastMsg toast={toast.msg} success={toast.success} setToast={setToast}/>}
        </div>
    );
}