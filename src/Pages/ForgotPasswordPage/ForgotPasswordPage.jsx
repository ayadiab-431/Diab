import './ForgotPasswordPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EmailSentMessage from '../../Components/EmailSentMessage/EmailSentMessage';
export default function ForgotPasswordPage(){

    const [emailSent, setEmailSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailSent(true);
    }
    return (
        <div className="forgot-password-page px-4 d-flex align-items-center justify-content-center" style={{'height':'100vh'}}>
        {!emailSent ? (
            <div className="forgot-form-container d-flex flex-column align-items-center justify-content-center gap-3">
                <div className="form-heading d-flex flex-column align-items-center justify-content-center">
                    <h2 className='fs-4 fw-bold text-center mb-3'>هل نسيت كلمة السر ؟</h2>
                    <p className='text-center'>اكتب ايميلك أو اسم المستخدم لإعادة تعيين كلمة السر.</p>
                </div>
                {/* Login Form */}
                <form id="password-form" onSubmit={handleSubmit}>
                    {/* Email/Username*/}
                    <div className="input">
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="الإيميل/ اسم المستخدم"
                        />
                        <span className="err-msg mt-1 ms-2"></span>
                    </div>
                    {/* Submit btn */}
                    <input type="submit" value={'ارسل الرمز'}  name="submit" id="submit-btn" />
                </form>
                {/* General Error */}
                    <span className="err-msg"></span>
                {/* Login Page */}
                <div className="forgot-div">
                    <Link to={'/admin/login'} id="loing">العودة لتسجيل الدخول</Link>
                </div>
            </div>
        )
    :
    (<EmailSentMessage />)
}
        </div>
        
    );
}