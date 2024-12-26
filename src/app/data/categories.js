import { FaShoppingCart, FaTshirt, FaCouch, FaUtensils, FaTv} from 'react-icons/fa';

export const categories = [
  {
    name: 'Electronics',
    icon:  <FaTv size={40}  color='#6d6d6d'/>,
    color: '#dcf7ed'

  },
  {
    name: 'Fashion',
    icon: <FaTshirt size={40}  color='#6d6d6d'/>,
    color: '#ffeaf1'

  },
  {
    name: 'Home Accessories',
    icon: <FaCouch size={40}  color='#6d6d6d'/>,
    color: '#daefe3'
  },
  {
    name: 'Foods',
    icon: <FaUtensils size={40} color='#6d6d6d'/>,
    color: '#fff8e4'
  },
];
