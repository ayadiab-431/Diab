import { useContext } from "react";
import {HeaderHeight} from '../../Contexts/Contexts';
// import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import './OrderSteps.css';
export default function OrderSteps () {

    // Get Header Height
        const {headerHeight} = useContext(HeaderHeight);

    return (
        <div className="order-steps px-4 d-flex align-items-center justify-content-center flex-column" style={{'--padding-top': `${headerHeight}px`}}>
                <div className={`sec-address mb-5`}>
                    <h2 className='section-header'>كيفية الطلب</h2>
                <p className="discreption">نطبع عملية بسيطة ومباشرة لنضمن لك الحصول على قطعة فنية خشبية فريدة تلبي طموحاتك.</p>
                </div>
            <div className="steps-row gap-3 w-100 d-flex align-items-stretch justify-content-evenly flex-wrap">
                <div className="order-step">
                    <i className="fa-solid fa-couch"></i>
                    <div className="step-content">
                        <h4 className="mb-2">1. اختيار المنتج</h4>
                        <p>تصفح تشكيلتنا المتنوعة من الركنات، الكنب السرير، البفات وغيرها، واختر القطعة اللي تناسب ذوقك ومساحتك.</p>
                    </div>
                </div>
                <div className="order-step">
                    <i className="fa-solid fa-tools"></i>
                    <div className="step-content">
                        <h4 className="mb-3">2. تخصيص الطلب</h4>
                        <p>اختر الألوان، المقاسات والخامات حسب رغبتك عشان تطلع القطعة بالشكل اللي تحبه.</p>
                    </div>
                </div>
                <div className="order-step">
                    <i className="fa-solid fa-phone"></i>
                    <div className="step-content">
                        <h4 className="mb-3">3. تواصل معنا</h4>
                        <p>اتواصل مع فريقنا سواء عبر الهاتف أو الواتساب لتأكيد التفاصيل والرد على استفساراتك.</p>
                    </div>
                </div>
                <div className="order-step">
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <div className="step-content">
                        <h4 className="mb-3">4. الدفع</h4>
                        <p>نوفر لك طرق دفع مرنة وآمنة (كاش أو تحويل) بما يناسبك.</p>
                    </div>
                </div>
                <div className="order-step">
                    <i className="fa-solid fa-truck"></i>
                    <div className="step-content">
                        <h4 className="mb-3">5. التنفيذ والتسليم</h4>
                        <p>يبدأ الحرفيون في تنفيذ طلبك بدقة، وبعد الانتهاء يتم تسليمه لحد باب بيتك في الموعد المتفق عليه.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}