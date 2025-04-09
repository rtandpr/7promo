import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-JMX4765G3D'; 

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageview = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};
