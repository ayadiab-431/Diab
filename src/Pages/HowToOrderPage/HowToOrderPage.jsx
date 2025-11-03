import FAQSection from '../../Components/FAQSection/FAQSection';
import OrderSteps from '../../Components/OrderStpes/OrderSteps';
import './HowToOrder.css';
export default function HowToOrderPage () {

    return (
        <div className="how-to-order-page">
            <OrderSteps/>
            <FAQSection/>
        </div>
    );
}