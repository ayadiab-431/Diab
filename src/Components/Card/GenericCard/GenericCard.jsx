// ملف GenericCard.jsx
import './GenericCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreIcon from '@mui/icons-material/Restore';

export default function GenericCard({ data, type, onEdit, onDelete, trash = false}) {

    // if data is empty
  if (!data || data.length === 0) {
    return (
      <div className="generic-card-container d-flex align-items-center justify-content-center flex-wrap gap-3">
        <div className="generic-card empty-card flex-grow-1 d-flex align-items-center justify-content-center p-4">
          <p className='no-data-text m-0'>لا توجد بيانات للعرض</p>
        </div>
      </div>
    );
  }
  
  const renderContent = (item) => {
    switch (type) {
      case "category":
        return (
          <>
            <div className="category-name d-flex align-items-center gap-1">
              <h4 className="m-0">اسم التصنيف:</h4> <span>{item.category_name}</span>
            </div>
            <div className="product-length d-flex align-items-center gap-1">
              <h4 className="m-0">عدد المنتجات: </h4>
              <span>5</span>
            </div>
          </>
        );

      case "contact":
        return (
          <>
          
            <div className="phone-number d-flex align-items-center gap-1">
              <h4 className='m-0'>رقم الهاتف: </h4>
              <span>{item.phone}</span>
            </div>
            <div className="phone-type d-flex align-items-center gap-1">
              <h4 className="m-0">نوع الرقم: </h4>
              <span>واتساب / هاتف</span>
            </div>
          </>
        );

      case "social":
        return (
          <>
          {console.log(item)}
            <div className="phone-number d-flex align-items-center gap-1">
              <h4 className='m-0'>المنصة: </h4>
              <span>{item.stage}</span>
            </div>
            <div className="phone-type d-flex align-items-center gap-1">
              <h4 className="m-0">الرابط: </h4>
              <span>{item.link}</span>
            </div>
          </>
        );

      default:
        return <p className='no-data'>لا توجد بيانات</p>;
    }
  };


  return (
    <div className="generic-card-container d-flex align-items-center justify-content-center flex-wrap gap-3">
      {data.map((item, index) => (
        <div key={index} className="generic-card flex-grow-1 p-3">
          <div className="generic-card-body">{renderContent(item)}</div>
          <div className="generic-card-actions d-flex align-items-center justify-content-end">
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
      ))}
    </div>
  );
}
