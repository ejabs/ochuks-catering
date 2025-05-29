
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home since we're using cart drawer
    navigate('/');
  }, [navigate]);

  return null;
};

export default Cart;
