import "./Experience.scss"
import spacecraftImage from "../assets/spacecraft.png";

const Experience = () => {
    return (
        <div className="experience-section">
            <h1 className='star-wars'>Experience</h1>
            <div className="timeline">

                <br />
                <div className="timeline-container left">
                    <div className="date">JAN 2024</div>
                    <div className="icon"></div>
                    <div className="content">
                        <h2>Web Developer, San Diego State University</h2>
                        <p>
                            Led the development and maintenance of websites for over 10 academic departments, significantly enhancing their
                            online presence, improving usability and accessibility across the College of Sciences for over 2000 students.
                            Also automated web page creation using Python scripts and Google App Scripts, generating over 300 faculty and student
                            profile pages to improve content management efficiency.
                        </p>
                    </div>
                    <img src={spacecraftImage} alt="spacecraft" className="rocket"/>
                </div>
                <div className="timeline-container right">
                    <div className="date">AUG 2023</div>
                    <div className="icon"></div>
                    <div className="content">
                        <h2>Software Developer, DiLab</h2>
                        <p>
                            Built a web application focused on providing personalized career advice through machine learning and text mining techniques. Also created engaging low-fidelity wireframes and high-fidelity designs tailored to over 10 diverse clients executing end-to-end design processes, from concept ideation and prototyping to delivering polished interfaces.
                        </p>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div className="date">JUL 2022</div>
                    <div className="icon"></div>
                    <div className="content">
                        <h2>Full-stack Developer, Beneathatree</h2>
                        <p>
                            Implemented over 20 diverse features within a web application built to analyze athlete movements in video footage, to
                            enhance overall athlete performance and provide actionable insights. Engineered microservices on AWS leveraging Serverless Framework, Amazon S3, DynamoDB, Postgres, Apache
                            Superset and Puppeteer to automate report generation of athlete performance for various sports agencies.
                        </p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="date">JAN 2022</div>
                    <div className="icon"></div>
                    <div className="content">
                        <h2>Software Developer Intern, Eunoia Innovations</h2>
                        <p>
                        Developed an interactive 3D demo using Three.js and GLTF models to showcase the aqua skimmer technology,
                        allowing users to simulate and engage with the water-cleaning device virtually.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience;