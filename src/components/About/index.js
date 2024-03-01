// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="about-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
              <h1 className="dark-heading">About</h1>
            </div>
          ) : (
            <div className="about-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
              <h1 className="light-heading">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
