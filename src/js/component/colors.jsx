import React, { useState } from "react";

const ColorCard = (props) => {
    return <div className="card mt-1" style={{ width: "18rem", backgroundColor: props.color }}>
        <div className="card-body">
            <h5 className="card-title">Color : {props.color} </h5>
        </div>
    </div>
}


const Colors = () => {

    const generateRandomColor = () => {

        const hexColors = "0123456789ABCDEF";

        let newColor = "#"

        for (let i = 0; i < 6; i++) {
            newColor = newColor + hexColors[Math.floor(Math.random() * hexColors.length)]
        }

        return newColor;
    }

    const randonColor = generateRandomColor();

    const [colorList, setColorList] = useState([])

    const addColorToList = () => {


        const newColorList = [];

        const newColor = generateRandomColor()

        for (let color of colorList) {
            newColorList.push(color);
        }

        newColorList.push(newColor);

        setColorList(newColorList);

    }


    return <div className="d-flex flex-column mx-auto p-2 min-vh-100">
        <h1>Colors Generated</h1>
        <button className="btn btn-lg btn-light" onClick={addColorToList} >Add Color</button>
        {
            colorList.map((colorGenerated, index) => {
                return <ColorCard key={index} color={colorGenerated} />
            })
        }
    </div>
}

export default Colors;