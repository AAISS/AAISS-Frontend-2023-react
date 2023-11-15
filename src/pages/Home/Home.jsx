import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import banner from '../../assets/Brain.png';
import '../../css/Home.css';

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/workshops');
  };

  return (
    <div className="home">
      <img src={banner} alt="brain-artificial-intelligence" />
      <div id="home-content">
        <h1 id="home-title">Amirkabir Artificial Intelligence Student Summit</h1>
        <Button variant="contained" size="large" id="call-to-action-btn" onClick={routeChange}>
          Register now
        </Button>
      </div>
    </div>
  );
};

export default Home;