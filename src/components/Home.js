import "./Home.scss";
import astronautDog from "../assets/astro-dog.png";
import profile from "../assets/profile_photo.png";

function Home() {
  return (
    <div className="home-container">
      <div className="astronaut-dog">
        <img src={astronautDog} alt="astro-dog" />
      </div>

      <div className="home_intro">
        <div className="salutation">
          <h1>Hello, </h1>
        </div>
        <br />
        <div className="self-intro">
          <h1>I am</h1>
          <h1 className="home_intro-name cursive">Shravya</h1>
        </div>

        <div className="role-intro">
          <h4>A developer</h4>
        </div>
      </div>
      <div className="profile-cartoon">
        <img src={profile} alt="profile" className="home_profile-photo" />
      </div>
    </div>
  );
}

export default Home;
