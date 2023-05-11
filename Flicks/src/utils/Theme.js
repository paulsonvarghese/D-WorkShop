/* Theme class is used  to specify color and fonts used in the system 
and it can be updated easily. By changing the primary and secondary color 
we can change the theme of application */

const DefaultColor = {
  primary: '#1A1A2E',
  secondary: '#16213E',
  alternate: '#0F3460',
  complimentary: '#E94560',
  lightShade: '#FFF5FD',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#454bd5',
  dark: '#2c1c82',
  black: '#000',
  grey: 'grey',
  lightGrey: '#D3D3D3',
  transparent: 'transparent',
};

export const ThemeColor = DefaultColor;

// Custom font TitilliumWeb added
export const ThemeFonts = {
  primary: 'TitilliumWeb-Black',
  secondary: 'TitilliumWeb-Light',
  alternate: 'TitilliumWeb-SemiBold',
};
