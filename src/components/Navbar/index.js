// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeToggle = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-dark-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo"
              />
              <ul className="ul-container">
                <Link className="link" to="/">
                  <li className="li-item">Home</li>
                </Link>
                <Link className="link" to="/about">
                  <li className="li-item">About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                type="button"
                className="theme-button"
                onClick={onChangeToggle}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo"
              />
              <ul className="ul-container">
                <Link className="link" to="/">
                  <li className="li-item-light">Home</li>
                </Link>
                <Link className="link" to="/about">
                  <li className="li-item-light">About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                type="button"
                className="theme-button"
                onClick={onChangeToggle}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
