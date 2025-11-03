import './VerifyOTPPage.css';
import { Link } from 'react-router-dom';
export default function VerifyOTPPage(){
    return (
        <div className="forgot-password-page px-4 d-flex align-items-center justify-content-center" style={{'height':'100vh'}}>
            <div className="forgot-form-container d-flex flex-column align-items-center justify-content-center gap-3">
                <div className="form-heading d-flex flex-column align-items-center justify-content-center">
                    <h2 className='fs-4 fw-bold mb-3'>التحقق من الرمز</h2>
                    <p className='text-center'>الرجاء إدخال الرمز المكون من 6 أرقام الذي تم إرساله إالى بريد الإلكتروني.</p>
                </div>
                {/* Verify OTP Form */}
                <form id="password-form">
                    {/* OTP */}
                    <div className="otp-container w-100 d-flex align-items-center justify-content-center flex-wrap gap-1" style={{direction: 'ltr'}}>
                        {[...Array(6)].map ((_, i) => (
                            <input 
                                key={i}
                                type='text'
                                maxLength={1}
                                className='otp-box'
                                onInput={(e) => {
                                    const next = e.target.nextElementSibling;
                                    if (e.target.value && next) next.focus();
                                }}/>
                        ))}
                        {/* المشكلة هنا */}
                        <span className="err-msg mt-1 ms-2"></span>
                    </div>
                    {/* Submit btn */}
                    <input type="submit" value={'التحقق'}  name="submit" id="submit-btn" />
                </form>
                {/* General Error */}
                    <span className="err-msg"></span>
                {/* Login Page */}
                <div className="forgot-div">
                    <Link to={'/admin-login'} id="loing">إعادة إرسال الرمز</Link>
                </div>
                <div className="forgot-div">
                    <Link to={'/admin/login'} id="loing">العودة لتسجيل الدخول</Link>
                </div>
            </div>
        </div>
    );
}