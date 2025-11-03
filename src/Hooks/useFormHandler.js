import { useState, useCallback } from "react";
export default function useFormHandler(formMode, selectedItem, updateState, apiFns) {
  const [openModal, setOpenModal] = useState(false);
  const [formState, setFormState] = useState(null);
  const [toast, setToast] = useState(null);

  const showToastMsg = (toastObj) => {
    setToast(toastObj);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = useCallback(async () => {
    if (!formState) return;
    const { formData, formValidate } = formState;

    if (formValidate()) return;
    console.log(selectedItem);
    console.log(formData);

    try {
      let res, messageContent = '';
      if (formMode === 'edit' && selectedItem) {
        res = await apiFns.edit(selectedItem.id,formData);
        updateState(prev => prev.map(p =>
          p.id === selectedItem.id ? res.data : p
        ))
        messageContent = 'تم التعديل بنجاح'
      }
      else {
        res = await apiFns.add(formData);
        updateState(prev => [...prev, res.data])
        messageContent = 'تمت الإضافة بنجاح';
      }
      console.log(res.data);

      closeModal();
      showToastMsg({ msg: messageContent, success: true });
    } catch (err) {
      closeModal();
      showToastMsg({ msg: "خطأ أثناء الإرسال", success: false });
    }
  }, [formState, formMode, selectedItem, updateState, apiFns]);

  return {
    openModal,
    setOpenModal,
    formState,
    setFormState,
    toast,
    setToast,
    handleSubmit,
    closeModal,
  };
}
