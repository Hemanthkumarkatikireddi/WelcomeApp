// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {count: 'Subscribe'}

  buttonClick = () => {
    const {count} = this.state
    if (count === 'Subscribe') {
      this.setState(() => ({count: 'Subscribed'}))
    } else {
      this.setState(() => ({count: 'Subscribe'}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">Welcome</h1>
          <h1 className="sub-info">Thank you! Happy Learning</h1>
          <div>
            <button className="button" type="button" onClick={this.buttonClick}>
              {count}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
