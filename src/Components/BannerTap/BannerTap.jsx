import GenericTable from '../GenericTable/GenericTable';
import ImageUploader from '../ImageUploader/ImageUploader';
import './BannerTap.css';
export default function BannerTap(){

    const data = [];
    
    const columnData = [
        {key: 'image', label: "الصورة"}
    ]
    return (
        <div className="banner-tap">
            <div className="add-new-photo mb-3">
                <h2>إضافة صورة جديدة</h2>
                <div className="add-new-photo-input">
                    <ImageUploader/>
                </div>
            </div>
            <div className="current-photos">
                <h2>الصور الحالية</h2>
                <GenericTable columns={columnData} data={data}/>
            </div>
        </div>
    );
}