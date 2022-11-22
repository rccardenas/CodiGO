import './App.css';
import Header from "./components/Header";

// COMPONENTE: Bloque de vista que combina HTML y JS
function App() {
  function saludar() {
    console.log("Hola mundo");
  }

  return (
    <div className="container">
        <div className="section-1">
            <h4 className="title">devfinder</h4>
            <button className="btn-mode"> 
                <img width="20" src="./images/sun.png" alt=""/>LIGHT
            </button>
        </div>
        <div className="search-container">
            <div className="input-container">
                <img width="20" src="./images/search_1.png" alt=""/>
                <input className="input-search" type="text" placeholder="Search GitHub username..."/>
            </div>
            <div>
                <button className="btn-search">Search</button>
            </div>
        </div>
        <div className="information-container">
            <div className="image-container">
                <img width="120" src="./images/profile.jpg" alt=""/>
            </div>
            <div className="description-container">
                <div className="user-date-container">
                    <h2>The Octocat</h2>
                    <p>Joined 25 Jun 2011</p>
                </div>
                <div className="user-bio-container">
                    <p>@Octocat</p>
                    <p>This profile has no bio</p>
                </div>
                <div className="card-information">
                    <div>
                        <h5>Repos</h5>
                        <h2>8</h2>
                    </div>
                    <div>
                        <h5>Follower</h5>
                        <h2>3938</h2>
                    </div>
                    <div>
                        <h5>Following</h5>
                        <h2>9</h2>
                    </div>
                </div>
                <div className="info-container">
                    <div>
                        <p><img width="15" src="./images/pin.png" alt=""/>&nbsp;San Francisco</p>
                        <p><img width="15" src="./images/twitter.png" alt=""/>&nbsp;Not avaible</p>
                    </div>
                    <div>
                        <p><img width="15" src="./images/link.png" alt=""/>&nbsp;https://github.blog</p>
                        <p><img width="15" src="./images/hotel.png" alt=""/>&nbsp;@rccardenas</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
