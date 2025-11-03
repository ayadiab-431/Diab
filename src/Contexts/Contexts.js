import { createContext } from "react";
// Number of products per page
export const ProductsPerPage = createContext({startIndex : "", endIndex: ""});

// Category Filter
export const CategoryFilter = createContext({onCategoryChange : () => {}, filteredProducts: []});

// Get header hight
export const HeaderHeight = createContext();