// App theme constants
export const COLORS = {
    primary: '#2ECC40',
    primaryLight: '#29B737',
    primaryDark: '#27A832',
    background: '#122023',
    backgroundLight: '#1a2c30',
    backgroundDark: '#0f1a1c',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    textMuted: '#999999',
  };
  
  // Shared styling functions
  export const getGradient = (direction = 'to-r', from = COLORS.primary, to = COLORS.primaryLight) => {
    return `bg-gradient-${direction} from-[${from}] to-[${to}]`;
  };
  
  export const getButtonStyles = (variant = 'primary') => {
    const styles = {
      primary: `px-4 py-2 bg-[${COLORS.primary}] text-white rounded-lg font-medium hover:bg-[${COLORS.primaryLight}] transition-colors`,
      secondary: `px-4 py-2 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all`,
      white: `px-4 py-2 bg-white text-[${COLORS.background}] rounded-lg font-medium hover:bg-[${COLORS.primary}] hover:text-white transition-colors`,
    };
    
    return styles[variant] || styles.primary;
  };