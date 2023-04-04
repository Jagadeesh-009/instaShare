import {Component} from 'react'

import Cookies from 'js-cookie'

import {FaSearch} from 'react-icons/fa'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu,
    }))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {showMobileMenu} = this.state
    return (
      <header className="header-section">
        <nav className="logo-header-container">
          <div className="link-text">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dvmp5vgbm/image/upload/v1662634898/InstaShare/Insta_share_logo_pm2btx.png"
                alt="website logo"
                className="image-logo"
              />
            </Link>
            <h1 className="nav-heading">Insta Share</h1>
          </div>
          <input placeholder="Search Caption" type="search" />
          <button type="button" data-testId="searchIcon">
            <FaSearch />
          </button>
        </nav>

        <div className="home-menu-container">
          <div className="list-items-section">
            <Link to="/">
              <p className="list-item">Home</p>
            </Link>

            <p className="list-item">Search</p>
            <Link to="/my-profile">
              <p className="list-item">Profile</p>
            </Link>

            <button
              type="button"
              className="logout-button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>
          <button
            type="button"
            className="menu-close-button"
            onClick={this.onClickHamburgerMenu}
          >
            .
          </button>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
