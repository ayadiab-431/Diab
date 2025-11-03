
import { useCallback, useEffect, useState } from 'react';
export default function ContactInfoForm({onDataChange, initialData}){
    const [formData, setFormData] = useState({
            phone: '',
            isPhone: false,
            isWhatsapp: false
        })
        // Const Inputs Errors
        const [formErr, setFormErr] = useState({
            phone: '',
            phoneType: '' 
        })

        useEffect(() => {
            if (initialData) {
                setFormData(initialData);
            } else {
                setFormData({
                    phone: '',
                    isPhone: false,
                    isWhatsapp: false
                    })
            }
        }, [initialData]);
    
        // Check form validate
        const formValidate = useCallback(() => {
            let isError = false;
            let newErrors = {
                phone: '',
                phoneType: '' 
            }
            if (!formData.phone){
                newErrors.phone = '* ادخل رقم الهاتف';
                isError = true;
            } else if (formData.phone.replace(/\s+/g,'').length !== 11){
                newErrors.phone = '* يجب ان يحتوي رقم الهاتف على 11 رقم';
                isError = true;
            }
            if (!formData.isPhone && !formData.isWhatsapp) {
                newErrors.phoneType = '* يجب اختيار نوع واحد على الأقل';
                isError = true;
            }

            setFormErr(newErrors);
            return isError;
        }, [formData]);
    

    // 
    useEffect(() => {
        if (onDataChange) {
            onDataChange({formData, formValidate});
        }
    }, [formData, onDataChange, formValidate])
        
    return (
        <>
        <div className="inp">
            <label>اسم التصنيف</label>
            <div className='phone-container d-flex align-items-center'>
                <input type="text" name='name' placeholder='01XX  XXX  XXXX' value={formData.phone} 
                onChange={(e) => {
                    const onlyNum = e.target.value.replace(/\D/g, "");
                    let formatted = onlyNum.replace(
                        /^(\d{4})(\d{0,3})(\d{0,4}).*/,
                        (_, g1, g2, g3) => [g1, g2, g3].filter(Boolean).join("  ")
                        );
                    setFormData({...formData, phone: formatted})}}/>
                <span className='fw-bold px-1'>20+</span>    
            </div>
            <span className="err">{formErr.phone}</span>
        </div>
        <div className="inp">
            <label>نوع رقم الهاتف</label>
            <div className="checkboxs d-flex align-items-center justify-content-start gap-3 flex-wrap">
                <label className='d-flex align-items-center gap-2'><input type="checkbox" name="phone" checked={formData.isPhone} onChange={(e) => setFormData({...formData, isPhone: e.target.checked})}/> هاتف</label>
                <label className='d-flex align-items-center gap-2'><input type="checkbox" name="whatsapp" checked={formData.isWhatsapp} onChange={(e) => setFormData({...formData, isWhatsapp: e.target.checked})}/> واتساب</label>
            </div>
            <span className="err">{formErr.phoneType}</span>
        </div>
        </>
    );
}