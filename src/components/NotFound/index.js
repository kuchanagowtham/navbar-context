// Write your code h

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="notFound-image"
              />
              <h1 className="heading-text">Lost Your Way?</h1>
              <p className="pera-text">
                We cannot seem to find the page you are looking for
              </p>
            </div>
          ) : (
            <div className="notfound-light-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="notFound-image"
              />
              <h1>Lost Your Way?</h1>
              <p>We cannot seem to find the page you are looking for</p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
