export const theme = {
    colors: {
      primary: '#68c6f1',    // Azul claro
      white: '#ffffff',      // Blanco
      gray: '#d9d9d9',      // Gris claro
      mint: '#b5e3d8',      // Verde menta
      textDark: '#2d3748',  // Color texto oscuro
      textLight: '#718096', // Color texto claro
    },
    spacing: {
      headerHeight: '80px',
      sectionPadding: '80px',
      mobilePadding: '20px',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    transitions: {
      fast: '0.2s ease',
      medium: '0.3s ease',
      slow: '0.5s ease',
      bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    shadows: {
      sm: '0 1px 3px rgba(0,0,0,0.12)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.1)',
      xl: '0 20px 25px rgba(0,0,0,0.1)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #68c6f1 0%, #b5e3d8 100%)',
      light: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)',
      dark: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    },
    animation: {
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.87, -0.41, 0.19, 1.44)',
    }
  };