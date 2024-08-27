import React from 'react';

function Footer() {
  return(
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos</p>
      </footer>
  );
}

  const footerStyle = {
    color: 'white',
    backgroundColor: '#282c34',
    textAlign: 'center',
    padding: '1em 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',

  };


export default Footer;