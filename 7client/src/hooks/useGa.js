import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../ga';

const usePageTracking = () => {
  const location = useLocation();

  console.log("use location", location);
  
  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;