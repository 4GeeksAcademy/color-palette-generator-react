import React from "react";


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

    const colorsStyles = { width: "18rem", backgroundColor: randonColor };

    const colorList = Array(10)

    for (let i = 0; i < colorList.length; i++) {
        colorList[i] = generateRandomColor()
    }


    return <div className="d-flex flex-column mx-auto p-2 min-vh-100">
        <h1>Colors Generated</h1>
        {
            colorList.map((color, index) => {
                return <div key={index} className="card mt-1" style={{ width: "18rem", backgroundColor: color }}>
                    <div className="card-body">
                        <h5 className="card-title">Color : {color} </h5>
                    </div>
                </div>
            })
        }
    </div>
}

export default Colors;