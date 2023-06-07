import "./Home.scss";
import profile from "../assets/profile_photo.png";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home_intro">
        <h1>Hello, </h1>
        <br />
        <h1>I am</h1>
        <h1 class="home_intro-name cursive">Shravya</h1>
        <h4>A developer</h4>
      </div>

      <img src={profile} alt="profile" className="home_profile-photo" />
    </div>
  );
}

export default Home;
