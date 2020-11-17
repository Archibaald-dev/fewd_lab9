import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class NavBar extends React.Component {
  render(){
    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img alt="logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>
  
      <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a href="/" className="navbar-item">
          Home
        </a>
  
        <a href="/" className="navbar-item">
          Documentation
        </a>
  
        <div className="navbar-item has-dropdown is-hoverable">
          <a href="/" className="navbar-link">
            More
          </a>
  
          <div className="navbar-dropdown">
            <a href="/" className="navbar-item">
              About
            </a>
            <a href="/" className="navbar-item">
              Jobs
            </a>
            <a href="/" className="navbar-item">
              Contact
            </a>
            <hr className="navbar-divider" />
            <a href="/" className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a href="/" className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a href="/" className="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  )
  }
}

class ClickImage extends React.Component {
    constructor() {
        super();
        this.state = {
            clickNum: 0
        };
        this.handleClicks = this.handleClicks.bind(this);
    }
    handleClicks() {
        this.setState(prevState => ({
            clickNum: prevState.clickNum + 1
        }));

    }
    render() {
      
    const srcImg="https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-Library/default/dwff492747/images/content/goose-facts-and-cooking.jpg";
        return (
          <div>
    <NavBar />
    <section className="hero">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Hi, i'm a goose
      </h1>
      <h2 className="subtitle">
        click me
      </h2>
    </div>
  </div>
</section>
            <div>
                <h1>The image has been clicked {this.state.clickNum} times.</h1>
                <img src={srcImg} alt='goose' onClick={this.handleClicks}/>
            </div>
            </div>
        );
    }
}
ReactDOM.render(
    <ClickImage />,
    document.getElementById('root')
);