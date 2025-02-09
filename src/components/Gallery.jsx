import React from "react";
import "../css/backgroundstyle.css";
import Footer from "./footer.jsx";
import synthesis from './Synthesis.jsx'; //import mảng hình
import h1 from '../img1/ac.png';
import h2 from '../img1/ac1.png';
import h3 from '../img1/ac2.png';
import h4 from '../img1/icu.png';
import h5 from '../img1/icu1.png';
import h6 from '../img1/icu2.png';
import h7 from '../img1/nomal.png';
import h8 from '../img1/nomal1.png';
import h9 from '../img1/nomal2.png';
import h10 from '../img1/nonac.png';
import h11 from '../img1/nonac1.png';
import h12 from '../img1/nonac2.png';
import MyNav from "./NavBar.jsx";
import '../css/Gallery.css';
import newsearch from '../img1/newsearch.jpg'
const Gallery = () => {
    return (
        <>
            <div>
                <MyNav />
            </div>
            <div className="bg">
                <br />
                <div>
                    <div class="box-hover">
                        <img src={newsearch} alt="atention" width={400} />
                        <div href={h2} class="nut1" target="_top">              
                        Images are taken from sources on the internet.
                        </div>
                    </div>
                </div>

                <h1 align='center'>Synthesis</h1>
                <div className="gallery">
                    {synthesis.map((img, index) => (
                        <img key={index} src={img} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className="backgroundstyle">
                <h1 align='center'>Our Services</h1>
                <div className="in">
                    <div className="cantrai">
                        <img src={h1} width={300} height={270} />
                    </div>
                    <div className="cantrai">
                        <img src={h2} width={300} height={270} />

                    </div>
                    <div className="cantrai">
                        <img src={h3} width={300} height={270} />
                    </div>
                </div>
                <div className="in">
                    <div className="cantrai">
                        <img src={h4} width={300} height={270} />
                    </div>
                    <div className="cantrai">
                        <img src={h5} width={300} height={270} />

                    </div>
                    <div className="cantrai">
                        <img src={h6} width={300} height={270} />
                    </div>
                </div>
                <div className="in">
                    <div className="cantrai">
                        <img src={h7} width={300} height={270} />
                    </div>
                    <div className="cantrai">
                        <img src={h8} width={300} height={270} />

                    </div>
                    <div className="cantrai">
                        <img src={h9} width={300} height={270} />
                    </div>
                </div>
                <div className="in">
                    <div className="cantrai">
                        <img src={h10} width={300} height={270} />
                    </div>
                    <div className="cantrai">
                        <img src={h11} width={300} height={270} />

                    </div>
                    <div className="cantrai">
                        <img src={h12} width={300} height={270} />
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default Gallery;