import { useState, useEffect } from "react";

export default function useFetchCategories () {

    // Call Categories
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch(`${process.env.PUBLIC_URL}/data/categories.json`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error("Fetching Error", err))
        .finally(() => setLoading(false));
    }, []);

    return {categories, loading}
}