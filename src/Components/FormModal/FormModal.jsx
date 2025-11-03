import './FormModal.css';

export default function FormModal({formTitle,onClick, submitText, formContent, onSubmit}){

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }
    
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className='fw-bold m-0'>{formTitle}</h3>
                    <i className="fa-solid fa-xmark fs-5" onClick={onClick}></i>
                </div>
                <form className='modal-form' id='form-modal' onSubmit={handleSubmit}>
                    {formContent}
                </form>
                <div className="modal-btns d-flex align-items-center justify-content-end gap-3 pt-3 mt-1">
                    <button className='cancel-btn' onClick={onClick}>إلغاء</button>
                    <input type='submit' value={submitText} className='save-btn' form='form-modal'/>
                </div>
            </div>
        </div>
    );
}