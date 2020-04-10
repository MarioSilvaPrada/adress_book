const theme = {
  colors: {
    black: (opacity = 1) => `rgba(0,0,0,${opacity})`,
    orange: '#ee9617',
  },
  fontSize: {
    small: '9px',
    medium: '17px',
    big: '40px',
  },
  boxShadow: '0 0px 25px -5px rgba(0, 0, 0, 0.1), 0 0px 10px -5px rgba(0, 0, 0, 0.04)',
  sizes: {
    navbarHeight: '4rem',
  },
};

export default theme;
