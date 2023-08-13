import { useState } from "react";
import "./productImg.css";

function ProductImg(props) {
    const {imagesRef} = props

    const [img, setImg] = useState();
    const [openImg, setOpenImg] = useState(false);
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
        console.log(e,555);
        setOpenImg(true)
    }
    return (
        <div className="photoUploader">
            <div className="photoUploaderBlock">
                <div className="media">
                    <h2>Media</h2>
                </div>
                <div className="photoContainer">
                    {
                        openImg && <img src={img} alt="" className="img__tel" />
                    }
                    <form className="photoBlock">
                        <label class="input-file">
                            <input type="file"  name="file" onChange={onImageChange} ref={imagesRef} />
                            <span class="input-file-btn">Add</span>
                            <a href="#" class="input-file-text">Add from URL</a>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ProductImg;
