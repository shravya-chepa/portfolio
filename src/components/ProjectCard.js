import "./ProjectCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project, onClose }) {
    return (
        <div className="project-card">
            <div className="project-card-content">
                <img src={project.imageLink} alt={project.title} className="project-image" />
                <h2 className="project-card-title">{project.title}</h2>
                <span className={"project-hr"}></span>
                <p>{project.description}</p>
                <div className="links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faGithub}
                        />GitHub
                    </a>
                    { project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faLink}
                        />Website
                    </a>}
                </div>
            </div>
            <button onClick={onClose} className="close-button">Close</button>
        </div>
    );
}

export default ProjectCard;