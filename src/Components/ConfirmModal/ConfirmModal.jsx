import "./ConfirmModal.css";

export default function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="confirm-modal-overlay">
            <div className="confirm-modal">
                <h3 className="confirm-title">تأكيد الإجراء</h3>
                <p className="confirm-message">{message}</p>
                <div className="confirm-actions">
                    <button className="confirm-btn danger" onClick={onConfirm}>
                        نعم، احذف
                    </button>
                    <button className="confirm-btn cancel" onClick={onCancel}>
                        إلغاء
                    </button>
                </div>
            </div>
        </div>
    );
}
