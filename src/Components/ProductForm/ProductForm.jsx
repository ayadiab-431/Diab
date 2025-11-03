import ImageUploader from '../ImageUploader/ImageUploader';
import { useCallback, useEffect, useState } from 'react';
import { getCategories } from '../../Services/api';
export default function ProductForm({onDataChange, initialData}){
    const [formData, setFormData] = useState({
            name: '',
            description: '',
            category: '',
            images: []
        })
        // Const Inputs Errors
        const [formErr, setFormErr] = useState({
            name: "",
            description: "",
            category: '',
            images: []
        })

        // if editing the product
        useEffect(() => {
            if (initialData) {
                setFormData(initialData);
            } else {
                setFormData({
            name: "",
            description: "",
            category: '',
            images: []
        })
            }
        }, [initialData])
    
        // Check form validate
        const formValidate = useCallback(() => {
            let isError = false;
            let newErrors = {
            name: "",
            description: "",
            category: '',
            images: ''
        }
            if (!formData.name){
                newErrors.name = '* ادخل اسم المنتج';
                isError = true;
            }
            if (!formData.description){
                newErrors.description = '* ادخل وصف للمنتج';
                isError = true;
            }
            if (!formData.category) {
                newErrors.category = '* اختر تصنيف للمنتج';
                isError = true;
            }
            if (formData.images.length < 2) {
                newErrors.images = '* يجب اختيار صورتين ع الاقل';
                isError = true;
            } else if (formData.images.length > 5){
                newErrors.images = '* الحد الأقصى للصور 5 فقط';
                isError = true;
            }

            const hasOneBefore = formData.images.filter(img => img.type === 'before').length === 1;
            const hasOneِAfter = formData.images.filter(img => img.type === 'after').length === 1;

            if (!hasOneBefore || !hasOneِAfter) {
                newErrors.images = '* يجب اختيار صورة واحده قبل وصورة واحدة بعد';
                    isError = true;
            }
            
            setFormErr(newErrors);
            return isError;
        }, [formData]);
    
        // get categories from api
        const [categories, setCategories] = useState([])
        useEffect(()=> {
            getCategories()
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error("Error fetching categories", err);
            })
        },[])

        // handle images changes
    const handleImagesChange = useCallback((imgs) => {
        setFormData(prev => ({...prev, images: imgs}))

    }, [])

    // 
    useEffect(() => {
        if (onDataChange) {
            onDataChange({formData, formValidate});
        }
    }, [formData, onDataChange, formValidate])
        
    return (
        <>
        <div className="inp">
                        <label>اسم المنتج</label>
                        <input type="text" name='name' placeholder='مثال: ركنة مودرن' value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value})}}/>
                        <span className="err">{formErr.name}</span>
                    </div>
                    <div className="inp">
                        <label>الوصف</label>
                        <textarea name="description" placeholder='صف المنتج ومميزاته...' 
                                value={formData.description} onChange={(e) => {setFormData({...formData, description: e.target.value})}}></textarea>
                                <span className="err">{formErr.description}</span>
                    </div>
                    <div className="inp">
                        <label>التصنيف</label>
                        <select name="category" size={1} value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                <option value="" disabled>--اختر تصنيف--</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.category_name}</option>
                                ))}
                        </select>
                        <span className="err">{formErr.category}</span>
                    </div>
                    <div className="gallery">
                        <ImageUploader btns={true} onImageChange={handleImagesChange} maxLength={5} errMsg={formErr.images}/>
                    </div>
        </>
    );
}