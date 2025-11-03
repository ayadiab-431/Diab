import './AdminHeader.css';
export default function AdminHeader({onMenuToggle}){
    return(
        <div 
        className="admin-header container-fluid d-flex 
                    align-items-center justify-content-between 
                    py-2 px-5 d-lg-none">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} alt="" />
            </div>
            <div className="menu-bar" onClick={onMenuToggle}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}