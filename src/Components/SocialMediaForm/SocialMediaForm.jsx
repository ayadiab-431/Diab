import { useCallback, useEffect, useState } from 'react';
export default function SocialMediaForm({onDataChange, initialData}){
    const [formData, setFormData] = useState({
            stage: '',
            link: '',
        })
        // Const Inputs Errors
        const [formErr, setFormErr] = useState({
            stage: '',
            link: ''
        })

        // if editing the product
        useEffect(() => {
            if (initialData) {
                setFormData(initialData);
            } else {
                setFormData({
            stage: '',
            link: ''
        })
            }
        }, [initialData])
    
        // Check form validate
        const formValidate = useCallback(() => {
            let isError = false;
            let newErrors = {
            stage: '',
            link: ''
        }
            if (!formData.link){
                newErrors.link = '* ادخل رابط المنصة';
                isError = true;
            }
            if (!formData.stage) {
                newErrors.stage = '* اختر المنصة';
                isError = true;
            }
            
            setFormErr(newErrors);
            return isError;
        }, [formData]);
    
        // get social stages
        const socials = [
            { "id": "1", "name": "فيسبوك", value: "facebook" },
            { "id": "2", "name": "انستجرام", value: "instagram" },
            { "id": "3", "name": "ماسنجر", value: "messenger" },
            { "id": "4", "name": "تيك توك", value: "tiktok" }
        ]


    // 
    useEffect(() => {
        if (onDataChange) {
            onDataChange({formData, formValidate});
        }
    }, [formData, onDataChange, formValidate])
        
    return (
        <>
            <div className="inp">
                <label>المنصة</label>
                <select name="stage" size={1} value={formData.stage} onChange={(e) => setFormData({...formData, stage: e.target.value})}>
                        <option value="" disabled>--اختر منصة--</option>
                        {socials.map((social) => (
                            <option key={social.id} value={social.value}>{social.name}</option>
                        ))}
                </select>
                <span className="err">{formErr.stage}</span>
            </div>
        <div className="inp">
                <label>رابط المنصة</label>
                <input type="text" name='link' placeholder="ex: https://www.facebook.com/" value={formData.link} onChange={(e) => {setFormData({...formData, link: e.target.value})}}/>
                <span className="err">{formErr.link}</span>
            </div>
        </>
    );
}