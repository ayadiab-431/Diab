import { Link } from "react-router-dom";
import './LoginPage.css';
// import {getAdmins} from '../../Services/api';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { postAdmin } from "../../Services/api";
export default function LoginPage(){

    // state for username/email/phone input
    const [identifier, setIdentifier] = useState('')
    // state for password input
    const [password, setPassword] = useState('');

    const [form, setForm] = useState({
        input: "",
        password: "",
        remember: '1'
    })

    // Form Errors
    const [errors, setErrors] = useState({
        identifier: '',
        password: '',
        general : ''
    });

    // Use Navigate
    const navigate = useNavigate();


    // Validate Inputs
    const validate = () => {
        let valid = true;
        let newErrors = {identifier:'', password:'', general:''};

        // Check identifier (email/username/phone)
        if (!form.input.trim()) {
            newErrors.identifier = '* من فضلك ادخل الإيميل أو اسم المستخدم أو رقم الهاتف';
            valid = false;
        }
        else if (form.input.includes('@')) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(identifier)){
                newErrors.identifier = '* من فضلك ادخل ايميل صحيح';
                valid = false;
            }
        }

        if (!form.password.trim()){
            newErrors.password = '* من فضلك ادخل كلمة السر';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }
    // handle login submit form
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const res = await postAdmin(form);
            if (res) {
                console.log(res);
            }
        } catch {
            console.log("Error");
        }

        // getAdmins()
        // .then((res) => {

        //     const admins = res.data; // list of all admins

        //     // find the admin with the matching identifier and password
        //     const admin = admins.find((ad) => 
        //         (ad.username === identifier || 
        //             ad.email === identifier || 
        //             ad.phone === identifier)
        //     )

        //     if (!admin) {
        //         setErrors({identifier: '', general:'* المستخدم غير موجود', password:''});
        //         return;
        //     }

        //     if (admin.password !== password) {
        //         setErrors({password : '* كلمة السر غير صحيحة', identifier:'', general:''});
        //         return;
        //     }

        //     setErrors({password : '', identifier:'', general:''});
        //     navigate('/admin/dashboard')
        // })
        // .catch((err) => {
        //     console.log(err);
        // })

    }
    
    return (
        <div className="login-page px-4 d-flex align-items-center justify-content-center" style={{'height':'100vh'}}>
            <div className="login-form-container">
                {/* Logo */}
                <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/logo-light.png`} alt="" />
                </div>
                {/* Login Form */}
                <form onSubmit={handleLogin} id="login-form">
                    {/* Email/Username/Phone input */}
                    <div className="input">
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="الإيميل/ اسم المستخدم/ رقم الهاتف"
                        value={form.input}
                        onChange={(e) => setForm({...form, input: e.target.value})}/>
                        {errors.identifier && <span className="err-msg mt-1 ms-2">{errors.identifier}</span>}
                    </div>

                    {/* Password Input */}
                    <div className="input">
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="كلمة السر"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}/>
                        {errors.password && <span className="err-msg mt-1 ms-2">{errors.password}</span>}
                    </div>
                    {/* Submit btn */}
                    <input type="submit" value={'تسجيل دخول'}  name="submit" id="submit-btn"/>
                </form>
                {/* General Error */}
                {errors.general && <span className="err-msg">{errors.general}</span>}
                {/* Forget Password? */}
                <div className="forgot-div">
                    <Link to={'/forgot-password'} id="forgot-password">هل نسيت كلمة السر؟</Link>
                </div>
                {/* Another Login Options */}
                <div className="another-login-container">
                    <p className="or position-relative mt-2 mb-4" style={{color: 'var(--dark-coffee)'}}>أو</p>
                    <div className="another-login mt-3 d-flex align-items-center gap-3">
                        <a href="google"><img src={`${process.env.PUBLIC_URL}/assets/icons/google.png`} alt="Google" /></a>
                        <a href="facebook"><img src={`${process.env.PUBLIC_URL}/assets/icons/facebook.png`} alt="Facebook" /></a>
                        <a href="insta"><img src={`${process.env.PUBLIC_URL}/assets/icons/instagram.png`} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}