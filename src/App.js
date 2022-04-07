import './style.css'
import './App.css';
import imgsrc from './imageInSrc.jpg';

function App() {
  return (
    <div className="App">
        <div style={{border:'1px solid black', maxWidth:'100vw'}}>

              <h1 className="title red">Your name here</h1>

              <br />
              <div className="Image">
                <img src={imgsrc} />

                <br />

                <img src="/imageInPublic.jpg" />
              </div>
        </div>

        <video width="320" height="240" controls>

                <source src="myVideo.mp4" type="video/mp4" />

        </video>
    </div>
  );
}

export default App;
