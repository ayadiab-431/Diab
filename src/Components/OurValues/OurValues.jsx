import './OurValues.css';
import SectionHeader from '../SectionHeader/SectionHeader';
export default function OurValues (){
    return (
        <section className="our-values py-5">
            <div className='container d-flex flex-column align-items-center justify-content-center gap-3'>
                <SectionHeader header = {"ما يميزنا"}/> 
                <div className='values-container w-100 d-flex align-items-center justify-content-around gap-3 flex-wrap'>
                    <div className='value'>
                        <i class="fa-solid fa-star"></i>
                        <p>الجودة أولاً</p>
                    </div>
                    <div className='value'>
                        <i class="fa-solid fa-hourglass-half"></i>
                        <p>الإلتزام بالمواعيد</p>
                    </div>
                    <div className='value'>
                        <i class="fa-solid fa-palette"></i>
                        <p>التصميم حسب ذوقك</p>
                    </div>
                    <div className='value'>
                        <i class="fa-solid fa-wallet"></i>
                        <p>أسعار مناسبة</p>
                    </div>
                </div>
            </div>
        </section>
    );
}