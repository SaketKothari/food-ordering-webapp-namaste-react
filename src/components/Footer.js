import { useContext } from 'react';
import UserContext from '../utils/context/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h4 className="p-10 m-10">
      This site is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
