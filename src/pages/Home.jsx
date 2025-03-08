import React from 'react'
import Navbar from '../components/Navbar'
import video from "../assests/video.mp4"
import aboutUs from "../assests/aboutUs.jpg"

export default function Home() {

    const homeContainerStyle = {
        position: "absolute", // Ensures it overlaps
        top: 0, // Adjust positioning as needed
        left: 0,
        width: "1300px", // Ensures it spans the entire video width
        height: "710px", // Ensures it spans the entire video height
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with 50% opacity
        color: "#ffffff", // Text color to contrast the background
        display: "flex", // Centers content (optional)
        alignItems: "center", // Centers vertically (optional)
        justifyContent: "center", // Centers horizontally (optional)
        zIndex: 10, // Ensures it stays above the video


        fontSize: '2.5rem', // Slightly larger text
        textAlign: 'center', // Center the text
        padding: '20px', // Add some space inside
        border: "1px solid black",
        marginTop: '80px',
        borderRadius: '8px', // Rounded corners

        // maxWidth: '600px', // Restrict width
    };

    const videoContainer = {

        marginTop: '35px',
    }
    const AboutUs = {
        marginTop: "-70px",
        position: "relative", // Ensures it overlaps
        zIndex: 10, // Ensures it stays above the video
    
        display: "flex"
    }

    return (
        <>
            <Navbar />

            <div>
                <div style={homeContainerStyle}>
                    <div>Welcome  to  <span style={{ color: `#f97010` }}> MAHARASHTRA </span></div>
                    {/* this below div should be under the above div  */}
                    <div style={{ marginLeft: "-300px", marginTop: "120px" }}><span style={{ color: `#042680` }}>INFORMATICS</span>, Empowering digital needs.</div>
                </div>
                {/* put the video here  */}
                <div style={videoContainer}>
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        width='100%'
                        height='30%'

                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            {/* about us  */}
            <div style={AboutUs}>
                {/* this is div for an image */}
                <div>
                    <img style={{ width: "400px", height: "590px", borderRadius: '15px', marginLeft:"70px",display: "inline-block" }}
                        src={aboutUs} alt="image file" />
                </div>
                {/* this is div for about us full header  */}
                <div style={{marginTop:"10%", marginLeft:"80px"}}>
                    <h2 style={{ color: "red" }}>About Us</h2>
                    <div style={{letterSpacing: '0.9px', lineHeight:'1.5rem', color:'rgba(34, 32, 32, 0.7)'}}>
                        Maharashtra Informatics Opc Pvt Ltd . is a Company that offers ,<br/> IT Development  
                        Digital Marketing ,Legal & Gst-Taxtion Services.<br/>One of the Upcoming Program Provider
                         Company that is Initiated by <br/>Young and Dynamic Software Professionals from Hinjewadi
                          IT Park<br/> , Pune , India. We have Started this Company <br/> in 2013 but we are in IT sector from 2018 .


                          <ul>
                            <li>Specialized in digital marketing</li>
                            <li>Web Development And All Types Of Government Legal Services<br/> zones that assists in enhancing our online presence.</li>
                            <li>Our business primarily focuses on helping consulting business<br/> with accomplishing results</li>
                          </ul>
                          <button style={{color: "#ff680a" , backgroundColor:'white', padding:"0px 6px" , border:'collapse'}}>
                            <h4>Read More</h4>
                          </button>
                    </div>
                </div>

            </div>
        </>
    )
}
