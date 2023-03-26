import {Component} from 'react'
import UserPosts from '../UserPosts'
import UserStories from '../UserStories'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <UserStories />
          <UserPosts />
        </div>
      </>
    )
  }
}

export default Home
