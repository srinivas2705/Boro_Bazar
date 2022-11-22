import "../styles/collections.css"


const Collections = () => {
    return (
        <div className="Curated">
            <h2>Curated collections</h2>
            <p>We have categories the best quality grocery items</p>
            <div className="categories">
                <section className="first">
                    <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F2.png&w=640&q=75"></img>
                    <p>Most popular item for Fast food</p>
                </section>
                <section className="first">
                    <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F3.png&w=640&q=75"></img>
                    <p>Authentic japanese food in real taste</p>
                </section>
                <section className="first"> 
                    <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F1.png&w=640&q=75"></img>
                    <p>Feel the Thirst in summer in anytime </p>
                </section>
            </div>
        </div>
    )
}

export default Collections;