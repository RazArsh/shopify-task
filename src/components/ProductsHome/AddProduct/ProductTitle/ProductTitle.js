import "./productTitle.css";


function ProductTitle(props) {
const {titleRef} = props;
const {body__htmlRef} = props;
const {addHandler} = props;

    return (
        <div className="title">
            <form onSubmit={addHandler} className="formTitle" >
                <label for="fname">Title</label>
                <input ref={titleRef} type="text" id="fname" className="titleinp"></input>
                <p className="descreption">Descreption</p>
                <textarea ref={body__htmlRef} className="comment"></textarea>
                <button type="submit" >Add</button>
            </form>
        </div>

    )

}

export default ProductTitle