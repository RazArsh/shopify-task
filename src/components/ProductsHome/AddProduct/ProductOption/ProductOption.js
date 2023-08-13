import "./productOption.css";

function ProductOption() {
    return (
        <div className="option">
            <div className="optionTitle">
                <h2>Options</h2>
            </div>
            <div className="optionColorEdit">
                <div className="optionColor">
                    <h3 className="colorTitle">Color</h3>
                    <div className="colorFlex">
                        <button className="color">Red</button>
                        <button className="color">Blue</button>
                        <button className="color">Green</button>
                        <button className="color">Black</button>
                    </div>
                </div>
                <div className="optionEdit">
                    <button className="editBtn">Edit</button>
                </div>
            </div>
            <div className="optionMemoryEdit">
                <div className="optionMemory">
                    <h3 className="memoryTitle">Color</h3>
                    <div className="memoryFlex">
                        <button className="memory">128</button>
                        <button className="memory">256</button>
                        <button className="memory">64</button>
                    </div>
                </div>
                <div className="optionEdit">
                    <button className="editBtn">Edit</button>
                </div>
            </div>
            <div className="optionAdd">
                <div className="btnAddOption">
                    <button className="btnAddOptionBtnOne">+</button>
                    <button className="btnAddOptionBtn">Add another option</button>
                </div>
            </div>
        </div>
    )
}

export default ProductOption