import axios from "axios";
import { useState, useEffect } from "react";


const Products2 = () => {

    const [data, setData] = useState();
    const product = async () => {
        try {
            const result = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668790059/React%20Class/Sreenivas/best_seller_vzl7xe.json");
            setData(result.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        product()
    }, [])

    return (
        <div className="Grocery">
            <h2>Best seller grocery near you</h2>
            <p>We provide best quality & fresh grocery items near your location</p>
            <div className="Container">
                {data && data.map((e) => {
                        console.log(e);
                        return (
                            <div className="img">
                                <img src={e.image.thumbnail} />
                                <p>{e.name}</p>
                                <p>{e.price}</p>
                                <p className="Buttons"><button className="add">Add </button><button className="plus">+</button></p>

                            </div>
                        );
                    })}
            </div>
            </div>
    )
}

export default Products2;