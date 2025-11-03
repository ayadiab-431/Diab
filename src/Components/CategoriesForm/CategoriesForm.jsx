
import { useCallback, useEffect, useState } from 'react';
export default function CategoriesForm({onDataChange, initialData}){
    const [formData, setFormData] = useState({
        category_name: ''
    })
        // Const Inputs Errors
        const [nameErr, setNameErr] = useState('')
    
        // Check form validate
        const formValidate = useCallback(() => {
            let isError = false;
            if (!formData.category_name){
                setNameErr('* ادخل اسم التصنيف');
                isError = true;
            }
            return isError;
        }, [formData]);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                category_name: ''
            });
        }
    }, [initialData]);
    
        
    // 
    useEffect(() => {
        if (onDataChange) {
            onDataChange({formData , formValidate});
        }
    }, [formData, onDataChange, formValidate])
        
    return (
        <>
        <div className="inp">
                        <label>اسم التصنيف</label>
                        <input type="text" name='name' placeholder='مثال: ركنة بسحارة' value={formData.category_name} onChange={(e) => {setFormData({category_name: e.target.value})}}/>
                        <span className="err">{nameErr}</span>
                    </div>
        </>
    );
}