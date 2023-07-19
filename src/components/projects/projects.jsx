import React from 'react';
import '../links.css';
import ToHome from '../navigateHome';
import './projects.css'

const RedirectToPacMan = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-my-pacman.netlify.app", "_blank");
  }
};

const RedirectToSortable = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-sortable.netlify.app", "_blank");
  }
};

const RedirectToForum = () => {
  if (typeof window !== "undefined") {
    window.open("https://gowsenys-forum.netlify.app", "_blank");
  }
};



const MyProjects =() => {

    return (
      <>
        <div className="ProjectsHome">
          <div id="MyName">Gowseny D'Souza</div>
          <div id="imageLinks">
            <img
              className="imageLinks"
              onClick={RedirectToPacMan}
              src={require("../../images/pacMan.png")}
            ></img>

            <img
              className="imageLinks"
              src={require("../../images/home.png")}
              alt="Home"
              onClick={ToHome}
            />

            <img
              className="imageLinks"
              src={require("../../images/table.png")}
              alt="Home"
              onClick={RedirectToSortable}
            />

            <img
              className="imageLinks"
              src={require("../../images/forum.png")}
              alt="Home"
              onClick={RedirectToForum}
            />
          </div>
        </div>
      </>
    );
};

export default MyProjects;