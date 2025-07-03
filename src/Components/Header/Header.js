import { Link } from 'react-router-dom';
import './Header.css'
export default function Header(){
    return(
        <header className="header pt-2 pb-2 fixed-top">
                <div className="container d-flex gap-3 flex-wrap justify-content-center justify-content-sm-between align-items-center">
                    <div className="logo">
                    <h2><Link to='/'>دياب</Link></h2>
                </div>
                <nav>
                    <ul className="links p-0 m-0 d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-3">
                        <li className="link"><Link to='/'>الرئيسية</Link></li>
                        <li className="link"><Link to='/'>المنتجات</Link></li>
                        <li className="link"><Link to='/'>من نحن</Link></li>
                        <li className="link"><Link to=''>كيفية الطلب</Link></li>
                        <li className="link"><Link to=''>اتصل بنا</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
    );
}