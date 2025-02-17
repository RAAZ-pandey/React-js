import ProfilePic from './assets/pic.jpeg'

function Card(){
    return(
      <div className="card">
        <img className='card-img' src={ProfilePic} alt="pic of Godfather" />
        <h2 className='card-title'>GODFATHER</h2>
        <p className='card-text'>I do what needs to be done and live without regret</p>
      </div>
    );
}

export default Card