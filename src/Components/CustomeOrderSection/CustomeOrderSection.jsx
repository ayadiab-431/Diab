import { useNavigate } from 'react-router-dom';
import './CustomeOrderSection.css';
export default function CustomeOrderSection() {

    const navigate = useNavigate();

    return (
        <section className='custome-order-sec py-5 px-3'>
            <div className='container py-3 d-flex flex-column justify-content-center align-items-center'>
                <h2 className="m-2">هل لديك تصميم خاص في ذهنك ؟</h2>
                <p>يمكنك التواصل معنا لتنفيذ تصميمك بدقة وجودة عالية.</p>
                <div className='content-btns mb-2 d-flex justify-content-center align-items-center flex-wrap gap-4'>
                    <button className="" onClick={() => navigate('/how-to-order')}>طريقة الطلب</button>
                    <button className="" onClick={() => navigate('/contact')}>تواصل معنا</button>
                </div>

            </div>
        </section>
    );
}