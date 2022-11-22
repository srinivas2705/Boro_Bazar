import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/data1.css";

const Products = () => {

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
            <div className="images">
                <section className="image1"><img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.png&w=1080&q=100"></img></section>
                <section className="image2"><img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-9.png&w=1080&q=100"></img></section>
            </div>
        </div>
    )
}


export default Products;