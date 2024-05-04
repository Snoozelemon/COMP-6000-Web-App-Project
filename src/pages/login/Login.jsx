import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/img/bg.jpg';
import './login.css';

export default function Login() {
  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='card'>
        <div className="left">
          <h2> -<br /> CHYLLUP Login<br />-</h2>
          <p>
            Join the community – login and thrive.
          </p>
          <span>Don't Have An Account?</span>
          <Link to='/signup'>
            <button className='btn btn-primary'>Register</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder='username' />
          <input type="password" required placeholder='password' />
          <button type='submit' className='btn'>Login</button>
        </form>
      </div>
    </div>
  );
}
