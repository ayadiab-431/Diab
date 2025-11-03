import './ContactUS.css';
import { useContext } from "react";
import { HeaderHeight } from "../../Contexts/Contexts";

export default function ContactUS() {
    // Get Header Height
    const {headerHeight} = useContext(HeaderHeight);

    return(
        <div className="contact-us-sec" style={{ '--padding-top': `${headerHeight}px` }}>
            <div className="address">
                <div className="sec-address mb-5">
                    <h2 className='section-header'>كيفية الطلب</h2>
                    <p className="discreption">نطبع عملية بسيطة ومباشرة لنضمن لك الحصول على قطعة فنية خشبية فريدة تلبي طموحاتك.</p>
                </div>
            </div>
            
            <div className="contact-us-details py-4 px-3 d-flex flex-wrap align-items-stretch justify-content-between">
                <div className="contact-info-container d-flex flex-column justify-content-between mb-md-4">

                    <div className="contact-card mb-3">
                        <h4 className="contact-title">أرقام الهواتف</h4>
                        <div className="phones">
                            <div className="phone-item d-flex align-items-center mb-2">
                                <div className="icons-container">
                                    <i className="fa-solid fa-phone me-2"></i>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <span className="phone-number">01099692767</span>
                            </div>
                            <div className="phone-item d-flex align-items-center mb-2">
                                <div className="icons-container">
                                    <i className="fa-solid fa-phone me-2"></i>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <span className="phone-number">01014467843</span>
                            </div>
                            <div className="phone-item d-flex align-items-center mb-2">
                                <div className="icons-container">
                                    <i className="fa-solid fa-phone me-2"></i>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <span className="phone-number">01024891099</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card mb-3">
                        <h4 className="contact-title">التواصل الاجتماعي</h4>
                        <div className="social">
                            <div className="social-item d-flex align-items-center mb-2">
                                <i className="fa-brands fa-facebook me-2"></i>
                                <span className='facebook'>فيسبوك</span>
                            </div>
                            <div className="social-item d-flex align-items-center">
                                <i className="fa-brands fa-whatsapp me-2"></i>
                                <span className='whatsapp'>واتساب</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card mb-3">
                        <h4 className="contact-title">المقاول</h4>
                        <div className="address-text">
                            الورشة شارع مثال - مدينة مثال - مدناخته القاهرة
                        </div>
                    </div>

                    <div className="contact-card">
                        <h4 className="contact-title">مواعيد العمل</h4>
                        <div className="work-time">
                            من السبت إلى الخميس 9 صباحًا - 9 مساءً<br />
                            الجمعة إجازة
                        </div>
                    </div>
                </div>

                <div className="map-container ms-md-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2681.96667043623!2d31.795458999999997!3d31.426629000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzM1LjkiTiAzMcKwNDcnNDMuNyJF!5e1!3m2!1sar!2seg!4v1756675126164!5m2!1sar!2seg"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '450px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Diab Workshop Location"
                        className='map'
                    ></iframe>
                </div>
            </div>
        </div>
    );
}