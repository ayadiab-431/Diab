import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useNavigate } from 'react-router-dom';
export default function EmailSentMessage(){
    const navigate = useNavigate()
    return (
            <div className="forgot-form-container d-flex flex-column align-items-center justify-content-center gap-3">
                <div className="form-heading d-flex flex-column align-items-center justify-content-center">
                    <CheckCircleOutlineIcon className='check-icon' style={{color: 'green', fontSize: '4rem'}}/>
                    <h2 className='fs-4 fw-bold text-center mb-3'>تم إرسال رابط إعادة تعيين كلمة السر</h2>
                    <p className='text-center'>تحقق من بريدك الإلكتروني أو مجلد الرسائل غير المرغوب فيها.</p>
                </div>
                {/* Login Page */}
                <button onClick={() => navigate('/admin/login')}>العودة إلى تسجيل الدخول</button>
                <div className="forgot-div">
                    <span>لم تستلم البريد الإلكتروني؟</span>
                    <Link to={'/admin/login'} id="loing">إعادة إرسال الرابط</Link>
                </div>
            </div>
    );
}