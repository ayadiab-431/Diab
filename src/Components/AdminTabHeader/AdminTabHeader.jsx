import './AdminTabHeader.css';
export default function AdminTabHeader({title, buttonText, onClick}) {
    return(
        <div className="tab-header mb-3">
                <h2 className="tab-title m-0">{title}</h2>
                { buttonText && (<button 
                className="add-product-btn d-flex align-items-center justify-content-center"
                onClick={onClick}><i className="fa-solid fa-plus me-2"></i> <span>{buttonText}</span></button>)}
            </div>
    );
}