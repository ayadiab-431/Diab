import { useParams } from "react-router-dom";
import useFetchProducts from "../../Hooks/useFetchProducts";
import { HeaderHeight } from "../../Contexts/Contexts";
import { useContext } from "react";
import OrderBox from "../../Components/OrderBox/OrderBox";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import './ProductDetails.css';

// دالة تجهيز البيانات
function formatProductDetails(product) {
  const { id, name, description, price, product_categories, product_images } = product;
  return {
    id,
    name,
    description,
    price,
    category : product_categories?.category_id,
    productImages : product_images.map((img) => img.image_url)
  };
}

export default function ProductDetails() {
  const { productsDet, loading } = useFetchProducts();
  const { productId } = useParams();


  // Get Header Height
  const {headerHeight }= useContext(HeaderHeight);

  if (loading) return <div>Loading...</div>;

  const found = productsDet.find((p) => p.id === Number(productId));
  if (!found) return <div>المنتج غير موجود</div>;

  const productDetails = formatProductDetails(found);

  return (
    <div className="product-details-sec container gap-5 d-flex justify-content-between align-items-stretch flex-column-reverse flex-md-row" 
        style={{'--padding-top' : `${headerHeight}px`}}>

      <div className="product-details d-flex flex-column justify-content-start align-items-start">
        <h1 className="product-name">{productDetails.name}</h1>
        <div className="details-style">
          <span className="mb-2">تفاصيل المنتج :</span>
          <p>{productDetails.description}</p>
          </div>
        <div className="details-style">
          <span className="mb-2">السعر:</span>
          <p>يتم تحديد السعر حسب الطلب والمقاسات الخاصة بك.</p>
          </div>
        <div className="details-style" >
          <span className="mb-2">اطلب الآن:</span> 
          <OrderBox/>
          </div>
      </div>

        <ImageCarousel images_urls={productDetails.productImages} name={productDetails.name}/>
    </div>
  );
}
