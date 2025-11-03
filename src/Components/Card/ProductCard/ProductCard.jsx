import './ProductCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreIcon from '@mui/icons-material/Restore';

export default function ProductCard({data,onEdit, onDelete,trash = false}){

    // If data is empty
    if (!data || data.length === 0) {
        return (
            <div className='product-cards-container d-flex align-items-center justify-content-center flex-wrap gap-3'>
                <div className="product-card empty-card flex-grow-1 d-flex align-items-center justify-content-center p-4">
                    <p className='no-data-text m-0'>لا توجد بيانات</p>
                </div>
            </div>
        );
    }
    return (
        <div className='product-cards-container d-flex align-items-center justify-content-center flex-wrap gap-3'>
            {data.map((item, index) => (
                <div key={index} className="product-card flex-grow-1 d-flex align-items-start justify-content-between gap-3 p-3">
                <div className="card-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/products/img7.jpg`} alt="product thumbnail" />
                </div>
                <div className="card-content">
                    <div className="card-heading d-flex align-items-start justify-content-between flex-wrap mb-2">
                        <h4 className="name m-0">{item.name}</h4>
                        <div className="actions d-flex align-items-center">
                            {trash ? (
                                    <>
                                    <RestoreIcon className='me-2 text-success'/>
                                    <DeleteForeverIcon className='action-delete ms-2'/>
                                    </>
                                ) : (
                                    <>
                                    <i className="action-edit fa-regular fa-pen-to-square me-2" onClick={() => onEdit(item)}></i> 
                                    <i className="action-delete fa-regular fa-trash-can ms-2" onClick={() => onDelete(item)}></i>
                                    </>
                                )}
                        </div>
                    </div>
                    <p className="description m-0">{item.description}</p>
                    <div className='card-meta d-flex align-items-center flex-wrap'>
                        <span className='category px-1'>التصنيف: ركنة مودرن</span>
                        <span className='images px-1'>عدد الصور: 5 صور</span>
                    </div>
                </div>
        </div>
            ))}
        </div>
        
    );
}