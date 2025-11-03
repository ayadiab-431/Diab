import AdminTabHeader from '../AdminTabHeader/AdminTabHeader';
import GenericTable from '../GenericTable/GenericTable';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import FormModal from '../FormModal/FormModal';
import ToastMsg from '../ToastMsg/ToastMsg';
import { postContact, getContacts, editContact, destroyContact, postSocial, editSocial, getSocilas, destroySocial } from '../../Services/api';
import useFormHandler from '../../Hooks/useFormHandler';
import { useState, useEffect } from 'react';
import SocialMediaForm from '../SocialMediaForm/SocialMediaForm';
import GenericCard from '../Card/GenericCard/GenericCard';
import useIsNarrow from '../../Hooks/useIsNarrow';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
export default function ContactsInfoTab() {

    const isNarrow = useIsNarrow(510)

    // Confirm Modal
    const [showConfirm, setShowConfirm] = useState(false);
    const[itemToDelete, setItemToDelete] = useState(null);

    // Delete Item
    const handleDeleteClick = (item, type) => {
        setItemToDelete(item);
        setModalType(type);
        setShowConfirm(true);
    };

    // Confirm Delete
    const confirmDelete = () => {
        const deleteFn = modalType === "contact" ? destroyContact : destroySocial;
        const state = modalType === "contact" ? contacts : socials;
        const setState = modalType === "contact" ? setContacts : setSocials;

        deleteFn(itemToDelete.id)
            .then(() => {
                setState(state.filter((el) => el.id !== itemToDelete.id));
                setShowConfirm(false);
                setToast({ msg: "تم الحذف بنجاح", success: true });
            })
            .catch((err) => {
                console.error("Fetching Error", err);
                setToast({ msg: "حدث خطأ أثناء الحذف", success: false });
            });
    };

    // Contacts info
    const [contacts, setContacts] = useState([]);
    // Soical Media Info
    const [socials, setSocials] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [formMode, setFormMode] = useState(null);
    const [updataState, setUpdateState] = useState(() => {});
    const [apiFns, setApiFns] = useState({});
    const [modalType, setModalType] = useState(null);

    useEffect(() => {
        getContacts()
        .then((res) => setContacts(res.data))
        .catch((err) => console.error("Fetching Error", err));

        getSocilas()
        .then((res) => setSocials(res.data))
        .catch((err) => console.error("Fetching Error", err));
    },[]);

    const contactsData = [
        {key: 'phone', label: 'رقم الهاتف', direction: 'ltr'},
        {key: 'type', label: 'النوع'},
        {key: 'primary', label: 'الأولوية'},
    ]
    const socialData = [
        {key: 'stage', label: 'المنصة'},
        {key: 'link', label: 'الرابط'},
    ]

    // Edit Function
    const onEdit = (element, type, apiFunctions, setState) => {
        setOpenModal(true);
        setModalType(type)
        setSelectedItem(element);
        setApiFns(apiFunctions)
        setFormMode("edit");
        setUpdateState(() => setState);
    }
    
    // Contact Us
    const {
            openModal,
            setOpenModal,
            setFormState,
            toast,
            setToast,
            handleSubmit,
            closeModal,
        } = useFormHandler(formMode, selectedItem, updataState, apiFns);

    return(
        <div className="contacts-info-tab w-100 p-2">
            <div className="contacts mb-5">
                {/* Contacts Header */}
                <AdminTabHeader title={"أرقام الهواتف"} buttonText={"اضف رقم جديد"} onClick={() => {
                    setOpenModal(true)
                    setModalType('contact')
                    setSelectedItem(null);
                    setApiFns({add: postContact, edit: editContact})
                    setFormMode("add");
                    setUpdateState(() => setContacts);
                    }}/>
                {/* Contacts Table */}
                {
                    isNarrow ? (<GenericCard data={contacts} type = {"contact"}/>)
                    :
                    (
                        <GenericTable columns={contactsData} data={contacts}
                            onEdit = {(contact) => onEdit(contact, "contact", {add: postContact, edit: editContact}, setContacts)}
                            onDelete={(contact) => handleDeleteClick(contact, "contact")}
                        />
                    )
                }
            </div>
            <div className="social-media">
                {/*Social Header */}
                <AdminTabHeader title={"وسائل التواصل الاجتماعي"} buttonText={"اضف حساب جديد"}
                onClick={() => {
                    setOpenModal(true)
                    setModalType('social')
                    setSelectedItem(null)
                    setFormMode("add")
                    setApiFns({add: postSocial, edit: editSocial})
                    setUpdateState(() => setSocials)
                }}
                />
                {/* Social Table */}
                {
                    isNarrow ? (<GenericCard data={socials} type={"social"}/>)
                    :
                    (
                <GenericTable columns={socialData} data={socials}
                    onEdit = {(social) => onEdit(social, "social", {add: postSocial, edit: editSocial}, setSocials)}
                    onDelete={(social) => handleDeleteClick(social, "social")}
                />
                    ) }
            </div>
            {openModal && (
                <FormModal
                    onClick={closeModal}
                    submitText={
                    selectedItem
                        ? (modalType === "contact" ? "تعديل الرقم" : "تعديل الرابط")
                        : (modalType === "contact" ? "إضافة الرقم" : "إضافة الرابط")
                    }
                    formTitle={
                    selectedItem
                        ? (modalType === "contact" ? "تعديل الرقم" : "تعديل الرابط")
                        : (modalType === "contact" ? "إضافة رقم جديد" : "إضافة رابط جديد")
                    }
                    onSubmit={handleSubmit}
                    formContent={
                    modalType === "contact"
                        ? <ContactInfoForm onDataChange={setFormState} initialData={selectedItem} />
                        : <SocialMediaForm onDataChange={setFormState} initialData={selectedItem} />
                    }
                />
                )}
            {toast && <ToastMsg toast={toast.msg} success={toast.success} setToast={setToast}/>}
            {showConfirm && (<ConfirmModal message={"هل أنت متأكد من حذف هذا الرقم نهائيًا؟"}
                            onConfirm={confirmDelete}
                            onCancel={() => setShowConfirm(false)} />)}
        </div> 
    );
}