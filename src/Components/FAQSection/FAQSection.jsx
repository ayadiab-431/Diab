import './FAQSEction.css';
export default function FAQSection () {
    return(
        <div className="faq-section py-5 px-4">
            <div className={`sec-address mb-5`}>
                <h2 className='section-header'>أسئلة شائعة</h2>
            </div>
            <div className="accordion container" id="faqExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        ما هي المدة المتوقعة لتصنيع طلبي؟
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqExample">
                    <div className="accordion-body">
                        المدة المتوقعة للتصنيع حوالي أسبوع، وقد تزيد أو تقل حسب طبيعة التصميم المطلوب.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                        هل يمكن طلب تصميم غير موجود؟
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqExample">
                    <div className="accordion-body">
                        نعم، يمكن طلب أي تصميم خاص، وإذا كانت لدينا القدرة على تنفيذه فسوف نقوم بتنفيذه بكل احترافية.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                        ما هي سياسة الشحن والتوصيل؟
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqExample">
                    <div className="accordion-body">
                        تتوفر لدينا خدمة الشحن والتوصيل وفقًا لآليات يتم تحديدها بناءً على المنطقة الجغرافية وطرق النقل المتاحة.
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}