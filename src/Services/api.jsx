import axios from "axios";

// // create an axios instance
// const apii = axios.create({
//     baseURL: "http://localhost:5000",  // API base URL
//     timeout: 8000  // waiting time for response
// })
// create an axios instance
const api = axios.create({
    baseURL: "https://nonspiritually-unawarded-gibson.ngrok-free.dev/api",  // API base URL
    timeout: 8000  // waiting time for response
})


// ===================== Admins =====================

export const getAdmins = () => api.get('/admins');
export const postAdmin = async (data) => {
    try {
        const res = await api.post('/login', data)
        return res.data
    } catch (err) {
        console.error ('Login Error',err.response?.data || "");
        throw err
    }
};

// =================================================
// ===================== products =====================

export const getProducts = () => api.get('/products');
export const postProduct = (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category_id', data.category);

    data.images.forEach((img) => {
        formData.append("positions[]", img.type);
        formData.append('image paths[]', img.file);
    })
    return api.post('/products', formData, {
        headers: {
            "Content-Type" : 'multipart/form-data'
        }
    })
};
export const editProduct = (id, data) => api.put(`/products/${id}`,data);
export const destroyProduct = (id) => api.delete(`/products/${id}`);

// =================================================
// ===================== Categories =====================

export const getCategories = () => api.get('/categories');
export const postCategories = (data) => api.post('/categories',data)
export const editCategory = (id,data) => api.put(`/categories/${id}`,data)
export const destroyCategory = (id) => api.delete(`/categories/${id}`);

// =================================================

// ===================== Contacts =====================
export const postContact = (data) => api.post('/contacts',data)
export const getContacts = () => api.get('/contacts')
export const editContact = (id, data) => api.put(`/contacts/${id}`, data);
export const destroyContact = (id) => api.delete(`/contacts/${id}`);
// =================================================
// ===================== Social =====================
export const postSocial = (data) => api.post('/socials',data)
export const getSocilas = () => api.get('/socials')
export const editSocial = (id, data) => api.put(`/socials/${id}`, data);
export const destroySocial = (id) => api.delete(`/socials/${id}`);
// =================================================