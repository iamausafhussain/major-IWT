import React from "react";
import logo from "../assets/logo.png";
import dev1 from "../assets/dev1.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="nav__left">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="logo__name">
              <p>Vide</p>
            </div>
          </div>
        </div>
        <div className="nav__mid">
          <div className="nav__mid__lists">
            <div className="nav__min__list">
              <p>Student</p>
            </div>
            <div className="nav__min__list">
              <p>Faculty</p>
            </div>
            <div className="nav__min__list">
              <p>Browse Faculty</p>
            </div>
            <div className="nav__min__list">
              <p>Browse Student</p>
            </div>
            <div className="nav__min__list">
              <p>Student Login</p>
            </div>
            <div className="nav__min__list">
              <p>Faculty Login</p>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__right__signIn">
            <button>Sign In</button>
          </div>
          <div className="nav__right__demoBtn">
            <button>Request a demo</button>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="faculty__card">
          <div className="faculty__card__header">
            <p>Faculty</p>
          </div>
          {/* Faculty card body */}
          <div className="faculty__cards__body">
            <Card className="faculty__cards__main">
              <CardContent className="faculty__card__body">
                <div className="faculty__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="faculty__card__info">
                    <h5>Remy Sharp</h5>
                    <p>Computer Science and Engineering</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="faculty__card__body">
                <div className="faculty__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="faculty__card__info">
                    <h5>Remy Sharp</h5>
                    <p>Electrical and Communication Engineering</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="faculty__card__body">
                <div className="faculty__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="faculty__card__info">
                    <h5>Remy Sharp</h5>
                    <p>Computer Science and Engineering</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="faculty__card__body">
                <div className="faculty__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="faculty__card__info">
                    <h5>Joe Milly</h5>
                    <p>Electrical and Communication Engineering</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="student__card">
          <div className="student__card__header">
            <p>Student</p>
          </div>
          {/* Student card body */}
          <div className="student__cards__body">
            <Card className="student__cards__main">
              <CardContent className="student__card__body">
                <div className="student__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="student__card__info">
                    <h5>Student 1</h5>
                    <p>3rd</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="student__card__body">
                <div className="student__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="student__card__info">
                    <h5>Student 2</h5>
                    <p>4th</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="student__card__body">
                <div className="student__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="student__card__info">
                    <h5>Joe Milly</h5>
                    <p>1st</p>
                  </div>
                </div>
              </CardContent>
              <CardContent className="student__card__body">
                <div className="student__card__details">
                  <Avatar alt="Remy Sharp" src={dev1} />
                  <div className="student__card__info">
                    <h5>Student 4</h5>
                    <p>3rd</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
