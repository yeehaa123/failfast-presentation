import React from 'react';
import R from 'ramda';

class Profile extends React.Component {

  render(){
    let { presenter } = this.props;
    let profileData = R.values(presenter);
    let createProfile = R.mapIndexed((value, index) => (
      <li key={ index }><p>{ value }</p></li>
    ));
    let profile = createProfile(profileData);
    return (
      <ul className="profile">
        { profile }
      </ul>
    )
  }
}
Profile.propTypes = {
  presenter: React.PropTypes.object.isRequired
}


export default Profile;
