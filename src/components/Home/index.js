// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="dark-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
              <h1 className="dark-heading">Home</h1>
            </div>
          ) : (
            <div className="light-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
              <h1 className="light-heading">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
