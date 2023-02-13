import Profile from './ProfileClass';
import { Component } from 'react';
import UserContext from '../utils/context/UserContext';

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    // console.log("Parent - componentDidMount");
  }
  render() {
    // console.log("Parent - render");
    return (
      <div className="about-container">
        <h1 className="about-title">About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p className="about-text">Class Based Component 🚀</p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 */
