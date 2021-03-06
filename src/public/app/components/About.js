import React from 'react';

const About = ({ toggleAbout, showAbout }) => (
  <div className="About">
    <div className="aboutSection">
      <div className="aboutHeader">
        About World.FM
      </div>
      <div className="worldfmDesc">
        <div className="about-body">
          World.FM is an international music discovery application. With the use of the Spotify API,
          World.FM is designed to deliver the music of trending and up and coming artists in a specified
          country to it's users. Sign-in using your Spotify credntials and create playists of your favorite tracks.
          World.FM can be experienced on multipe devices. You can use World.FM to control your Spotify on your
          mobile device and vice versa.

        </div>
      </div>
    </div>
    <div>
      <div className="devTeamHeader">Development Team</div>
      <div className="developmentTeam">
        <div className="row devRow">
          <div className="Developer col-sm-2">
            <a href="http://www.cnn.com">
              <img className="profilePicture img-circle" src="https://avatars3.githubusercontent.com/u/22892244?v=3&s=400" alt="Anthony Greenbeck" />
            </a>
            <h4 className="devName">Anthony Greenheck</h4>
            <h5 className="title">Software Engineer</h5>
            <p className="contacts">
              <a href="https://github.com/anthonyemg"><img className="gitIcon" src="https://www.measurementjs.com/icon-images/github-icon.png" alt="Github" /></a>
              <a href="https://www.linkedin.com/in/anthony-greenheck-73933144/"><img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" /></a>
            </p>
          </div>
          <div className="Developer col-sm-2">
            <a href="http://www.cnn.com">
              <img className="profilePicture img-circle" src="https://avatars3.githubusercontent.com/u/16951204?v=3&s=400" alt="Anthony Greenbeck" />
            </a>
            <h4 className="devName">Arturo Ruvalcaba</h4>
            <h5 className="title">Software Engineer</h5>
            <p className="contacts">
              <a href="https://github.com/aruvham"><img className="gitIcon" src="https://www.measurementjs.com/icon-images/github-icon.png" alt="Github" /></a>
              <a href="https://www.linkedin.com/in/anthony-greenheck-73933144/"><img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" /></a>
            </p>
          </div>
          <div className="Developer col-sm-2">
            <a href="http://www.cnn.com">
              <img className="profilePicture img-circle" src="https://avatars3.githubusercontent.com/u/25755829?v=3&s=400" alt="Anthony Greenbeck" />
            </a>
            <h4 className="devName">David Hamberlin</h4>
            <h5 className="title">Software Engineer</h5>
            <p className="contacts">
              <a href="https://github.com/dhamberlin/"><img className="gitIcon" src="https://www.measurementjs.com/icon-images/github-icon.png" alt="Github" /></a>
              <a href="https://www.linkedin.com/in/davidhamberlin/"><img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" /></a>
            </p>
          </div>
          <div className="Developer col-sm-2">
            <a href="http://www.cnn.com">
              <img className="profilePicture img-circle" src="https://avatars3.githubusercontent.com/u/21042131?v=3&s=400" alt="Anthony Greenbeck" />
            </a>
            <h4 className="devName">Pierry Etienne</h4>
            <h5 className="title">Software Engineer</h5>
            <p className="contacts">
              <a href="https://github.com/petienne1"><img className="gitIcon" src="https://www.measurementjs.com/icon-images/github-icon.png" alt="Github" /></a>
              <a href="https://www.linkedin.com/in/pierryetienne/"><img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" alt="LinkedIn" /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
