import PropTypes from "prop-types";
import "./Profile.css"


const Profile = props => {

  let name = props.fullName
  let bio = props.bio
  let profession = props.profession
  const handleName = (name) => alert(`Hello ${name}`)

  const styleTitle = {textAlign: 'center', color: '#0978e8'}
  const profileContainer = {
    width: '80%',
    backgroundColor: '#14253d',
    borderRadius: '5px',
    boxShadow: 'rgba(15, 15, 15, 0.35) 0px 5px 15px'
  }

  return (
  <div>
    <div className="profile_container" style={profileContainer} onClick={handleName(name)}>
      {props.children}
      <h1 style={styleTitle}>{name}</h1>
      <h3>{bio}</h3>
      <h3>{profession}</h3>
    </div>
  </div>
  )
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}

Profile.defaultProps = {
  fullName : "empty",
  bio : "empty",
  profession : "empty"
}

export default Profile;