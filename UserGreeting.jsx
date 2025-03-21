import PropTypes from 'prop-types';

function UserGreeting(props){

  const welcomeMessage =  <h2 className="Welcome-massage">
                            Welcome {props.username}
                          </h2>

  const loginPrompt =   <h2 className="login-prompt">
                            Please log in to continue
                        </h2>

  return(props.isLoggedIn  ? welcomeMessage : loginPrompt );
                               


}

UserGreeting.proptypes ={
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string

}

UserGreeting.defaultprops = { 
  isLoggedIn: false ,
  username: "Unknown",
}

export default UserGreeting