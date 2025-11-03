import './ImageUploader.css';
import { useState, useEffect, useRef } from 'react';
export default function ImageUploader({btns= false, onImageChange, maxLength, errMsg}){

    const [images, setImages] = useState([]);
    // const [toast, setToast] = useState('');
    const fileInputUploader = useRef(null);

    // Handle Image Change
    useEffect(() => {
        if (typeof onImageChange === 'function'){
            onImageChange(images)
        }
    }, [images, onImageChange])

    // handle type img change
    const handleImgTypeChange = (index, type) => {
        setImages((prev) =>{
                    const newImages = [...prev]
                    newImages.forEach((img, i) => {
                        if (i !== index && img.type === type) {
                            img.type = 'gallery';
                        }
                    })

                    newImages[index].type = type;
                    return newImages;
                })
            }


    // handle file upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        addImages(files);
    }

    // handle drag & drop
    const handleDrop = (e) => {
        const files = Array.from(e.dataTransfer.files);
        addImages(files);
    }

    // Add Images
    const addImages = (files) => {
        let newImages = [
            ...images,
            ...files.map((file) => ({
                url: URL.createObjectURL(file),
                file,
                type: 'gallery'  // before => 0 after => 1 null => gallery
            }))
        ]

        // Delete any photos more than 4
        if (newImages.length > maxLength) {
            let extra = newImages.slice(maxLength);
            extra.forEach((img) => URL.revokeObjectURL(img.url));
            newImages = newImages.slice(0,maxLength);
        }

        setImages(newImages); 
    }
    
    // Remove thumbnail image
    const handleRemove = (index) => {
        URL.revokeObjectURL(images[index].url);
        setImages((prev) => prev.filter((_, i) => i !== index))
    }
    // When component close
    // useEffect(() => {
    //     return () => {
    //         images.map((img) => URL.revokeObjectURL(img.url));
    //     }
    // }, []);     // add images here when i get the real API

    // handle click
    const handleClickUploader = () => {
        fileInputUploader.current.click();
    }

    // ----- create object and revok will be deleted after i get the real api ----
    
    return(
        <div 
        className="image-uploader-container d-flex flex-column align-items-start justify-content-center">
            <div className="image-uploader mb-3 d-flex flex-column align-items-center justify-content-center w-100"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleClickUploader}
            >
                <i className="fa-solid fa-cloud-arrow-up cloud"></i>
                <p className='m-0'>اسحب وأفلت الملفات هنا</p>
                <p className='or my-2'>أو</p>
                <label className="upload-box">
                    تصفح الملفات
                </label>
                <input type="file" 
                    name="image-upload"
                    id='file-upload' 
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageUpload}
                    ref={fileInputUploader}
                    />
            </div>
            <span className="err mb-1">{errMsg}</span>
            {/* Thumbnails */}
            {images.length > 0 && (<div className="chosen-photos p-2 d-flex align-items-center justify-content-center flex-wrap gap-2 w-100">
                
                {images.map((img, index) => (
                    <div className="product-img" key={index}>
                        <div className="thumbnail">
                            <img src={img.url} alt='preview'/>
                            <i className="fa-solid fa-circle-xmark x-mark"
                            onClick={() => handleRemove(index)}></i>
                        </div>     
                            {btns && (
                                <div className="choose-btns d-flex align-items-center justify-content-center gap-2">
                                    <label className='d-flex align-items-center justify-contnet-center'>
                                        <input type="radio" name={`img-type-${index}`} className='me-1'
                                                value={'before'} checked = {img.type === 'before'} onChange={(e) => handleImgTypeChange(index, 'before')} />خشب</label>
                                    <label className='d-flex align-items-center justify-contnet-center'>
                                        <input type="radio" name={`img-type-${index}`} value={'after'} className='me-1'
                                                    checked = {img.type === 'after'} onChange={(e) => handleImgTypeChange(index, 'after')}/>تنجيد</label>
                                </div>
                            )}
                        </div>
                ))}
            </div>)}
        </div>
    );
}