import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className='ui menu'>
      <div className='ui container center'>
        <Link to='/'>
        <h2> Contact Manager </h2>
        </Link>
      </div>
    </div>
  );
};
