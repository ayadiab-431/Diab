import { NavLink } from 'react-router-dom';
import './Header.css'
export default function Header({ref}){

    return(
        <header ref={ref} className="header fixed-top">
                <div className="container d-flex gap-1 flex-sm-row flex-column justify-content-center justify-content-sm-between align-items-center">
                    <div className="logo">
                    <h2><NavLink to='/'>دياب</NavLink></h2>
                </div>
                <nav className='nav-scrollable'>
                    <ul className="links px-0 pb-1 mb-1 d-inline-flex justify-content-center align-items-center gap-lg-5 gap-3">
                        <li className="link"><NavLink to='/' className={({isActive}) => isActive? "active" : ""}>الرئيسية</NavLink></li>
                        <li className="link"><NavLink to='/products' className={({isActive}) => isActive? "active" : ""}>المنتجات</NavLink></li>
                        <li className="link"><NavLink to='/about' className={({isActive}) => isActive? "active" : ""}>من نحن</NavLink></li>
                        <li className="link"><NavLink to='/how' className={({isActive}) => isActive? "active" : ""}>كيفية الطلب</NavLink></li>
                        <li className="link"><NavLink to='/contact' className={({isActive}) => isActive? "active" : ""}>اتصل بنا</NavLink></li>
                    </ul>
                </nav>
                </div>
            </header>
    );
}
