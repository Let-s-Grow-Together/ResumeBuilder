// import { useNavigate } from "react-router-dom";
// import '../Header/Header';

// export default function Hero() {
//     const navigate = useNavigate();

//     const handleBrowseTemplates = () => {
//         navigate("/all-templates");
//     };
//     const handleGetStarted = () => {
//         navigate("/resume/7?edit=true");
//     };
//     return (
//         <section className="hero">
//         <div className="heroSec" style={{display:'flex', justifyContent:'center', gap:'1rem', alignItems:'center'}}>
//             <div className="heroContent">
//                 {/* <div className='center'>Allow customization and optimization for different job roles</div> */}
//                     <h1>Build your Resume Instantly</h1>
//                     <p>
//                         Create a professional resume using
//                         beautiful templates and your own data
//                     </p>
//                 <div className="ctaButtons">
//                         <button className="btnPrimary" onClick={handleGetStarted}>Get Started</button>
//                         <button className="btnSecondary" onClick={handleBrowseTemplates}>
//                             Browse Templates
//                         </button>
//                 </div>
//             </div>
//             <div>
//                 <img src="/assets/imagestemplate.jpg" alt="My Image" width='300px' height='330px'/>
//                 <img src="/assets/imagestemplate.jpg" alt="My Image" width='300px' height='330px'/>
//             </div>
//           </div>
//         </section>
//     );
// }


import { useNavigate } from "react-router-dom";
import '../Header/Header';
import './Hero.css';  // Create this file and copy the CSS below

export default function Hero() {
    const navigate = useNavigate();

    const handleBrowseTemplates = () => {
        navigate("/all-templates");
    };
    const handleGetStarted = () => {
        navigate("/resume/7?edit=true");
    };

    return (
        <section className="hero">
            <div className="heroSec" style={{display:'flex', alignItems:'center'}}>
                <div className="heroContent">
                    <h1>Build your Resume Instantly</h1>
                    <p>Create a professional resume using beautiful templates and your own data</p>
                    <div className="ctaButtons">
                        <button className="btnPrimary" onClick={handleGetStarted}>Get Started</button>
                        <button className="btnSecondary" onClick={handleBrowseTemplates}>Browse Templates</button>
                    </div>
                </div>

                <div className="templatesCarousel">
                    <div className="carousel-container">
                        <div className="template-card template-1" style={{ "--rotation": "0deg", "--delay": "0s" }}>
                            <img src="/assets/imagestemplate.jpg" alt="Template 1" />
                        </div>
                        <div className="template-card template-2" style={{ "--rotation": "60deg", "--delay": "0.5s" }}>
                            <img src="/assets/temp1.png" alt="Template 2" />
                        </div>
                        <div className="template-card template-3" style={{ "--rotation": "120deg", "--delay": "1s" }}>
                            <img src="/assets/temp3.jpg" alt="Template 3" />
                        </div>
                        <div className="template-card template-4" style={{ "--rotation": "180deg", "--delay": "1.5s" }}>
                            <img src="/assets/temp4.jpg" alt="Template 4" />
                        </div>
                        <div className="template-card template-5" style={{ "--rotation": "240deg", "--delay": "2s" }}>
                            <img src="/assets/temp5.jpg" alt="Template 5" />
                        </div>
                        <div className="template-card template-6" style={{ "--rotation": "300deg", "--delay": "2.5s" }}>
                            <img src="/assets/temp6.png" alt="Template 6" />
                        </div>
                        

                        <div className="center-template">
                            <img src="/assets/temp7.png" alt="Featured Template" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
