import { useEffect, useState } from "react";
import './ToastMsg.css';
export default function ToastMsg({ toast, setToast, success}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (toast) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setToast('');
            }, 2000); // اختفاء بعد 2 ثواني
            return () => clearTimeout(timer);
        }
    }, [toast, setToast]);

    return (
        <div className={`toast-msg ${visible ? 'show' : ''} ${success ? '' : 'error'}`}>
            {toast}
        </div>
    );
}
