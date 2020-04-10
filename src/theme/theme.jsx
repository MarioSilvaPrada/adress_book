const theme = {
  colors: {
    black: (opacity = 1) => `rgba(0,0,0,${opacity})`,
    orange: '#ee9617',
    red: '#fe5858',
  },
  fontSize: {
    small: '9px',
    medium: '17px',
    big: '40px',
  },
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
  sizes: {
    navbarHeight: '4rem',
  },
};

export default theme;
