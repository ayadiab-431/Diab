import './Footer.css';

export default function Footer() {
    return(
        <footer className='footer mt-5 mb-0 pt-4'>
            <div className='container px-4 px-sm-0 d-flex flex-column justify-content-cenetr align-items-center'>
                <div className='footer-content w-100 flex-column flex-sm-row d-flex justify-content-around align-items-start gap-sm-4'>
                    <div className='footer-description'>
                        <h3 className='footer-title'>دياب</h3>
                        <p className='px-2'>نُقدّم لكم تصميمات خشبية مميزة، وتنفيذ حسب الطلب بجودة عالية وخدمة مُرضية.</p>
                    </div>
                <div className='footer-contact mb-3'>
                    <h4 className='social-contact'>وسائل التواصل</h4>
                    <ul className='m-0 px-2'>
                        <li><a href="https://wa.me/201014467843"><i className="fa-brands fa-whatsapp"></i> واتساب</a></li>
                        <li><a href="https://www.facebook.com/share/1G1NbS7gaT/"><i className="fa-brands fa-facebook-f"></i> فيسبوك</a></li>
                        <li><span><i className="fa-solid fa-phone"></i> هاتف: 01024891099</span></li>
                        <li><i className="fa-solid fa-location-dot"></i> دمياط القديمة - السنانية - شارع مركز الشباب</li>
                    </ul>
                </div>
                </div>
                <div className='copyright py-2'>
                    <p className='m-0'>جميع الحقوق محفوظة لدياب &copy;</p>
                </div>
            </div>
        </footer>

    );
}