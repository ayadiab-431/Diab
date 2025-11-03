import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';
export default function ErrorPage(){

        const navigate = useNavigate();
    return (
        <div className="error-page d-flex align-items-center justify-content-center">
            <div className="error-container p-3">
                <div className="error-img w-100 p-3 mb-3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/error404.png`} alt="Error 404" />
                </div>
                <div className="error-content d-flex flex-column align-items-center justify-content-center gap-2">
                    <h2 className='fw-bold'>الصفحة غير موجودة</h2>
                    <p className='text-center'>نعتذر، يبدو أن الصفحة التي تبحث عنها تم نحتها بعيداً. يرجى العودة إلى الصفحة الرئيسية.</p>
                    <button className='back-to-home' onClick={() => navigate('/')}>العودة إلى الصفحة الرئيسية</button>
                </div>
            </div>
        </div>
    );
}