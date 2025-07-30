import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// COLOR PALETTE
export const Colors = {
  dark: {
    primary: '#081023',
    secondary: '#1A2332',
    tertiary: '#2A60A0',
    quaternary: '#8E9CA4',
    white: '#FFFFFF',

    // Green
    green: '#11D811',
    greenSecondary: '#5E205F',
    greenTertiary: '#6AA6AC',
    greenQuaternary: '#579289',

    background: '#0A0A0A',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
  },
  light: {
    primary: '#1F6AF0',
    secondary: '#DEE4ED',
    tertiary: '#377B80',
    quaternary: '#8085A0',
    white: '#FFFFFF',

    // Pink
    pink: '#908354',
    pinkSecondary: '#21C236',
    pinkTertiary: '#5C407A',
    pinkQuaternary: '#B88A65',

    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#000000',
    textSecondary: '#666666',
  },
};

// TYPOGRAPHY
export const Typography = {
  fontFamily: 'Geologica',
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    display: 48,
  },
  lineHeights: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 40,
    display: 56,
  },
};

// SPACING
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// BORDER RADIUS
export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const ComponentStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonPressed: {
    backgroundColor: Colors.light.tertiary,
  },
  primaryButtonDisabled: {
    backgroundColor: Colors.light.secondary,
    opacity: 0.5,
  },
  primaryButtonText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.white,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.primary,
  },
  segmentedButton: {
    flexDirection: 'row',
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xs,
  },
  segmentedButtonItem: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentedButtonItemActive: {
    backgroundColor: Colors.light.primary,
  },
  segmentedButtonText: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.textSecondary,
  },
  segmentedButtonTextActive: {
    color: Colors.light.white,
  },
  textInput: {
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.secondary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.md,
    color: Colors.light.text,
  },
  textInputFocused: {
    borderColor: Colors.light.primary,
    borderWidth: 2,
  },
  textInputLabel: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.text,
    marginBottom: Spacing.xs,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.light.secondary,
    borderRadius: BorderRadius.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Colors.light.secondary,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: Colors.light.primary,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.light.primary,
  },
  toggle: {
    width: 50,
    height: 28,
    borderRadius: BorderRadius.full,
    padding: 2,
    justifyContent: 'center',
  },
  toggleOff: {
    backgroundColor: Colors.light.secondary,
  },
  toggleOn: {
    backgroundColor: Colors.light.primary,
  },
  toggleThumb: {
    width: 24,
    height: 24,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.light.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.light.surface,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.light.secondary,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: Spacing.xs,
  },
  tabLabel: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xs,
    color: Colors.light.textSecondary,
  },
  tabLabelActive: {
    color: Colors.light.primary,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.secondary,
  },
  listItemContent: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  listItemTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.md,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.text,
  },
  listItemSubtitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    color: Colors.light.textSecondary,
    marginTop: Spacing.xs,
  },
  miniPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    margin: Spacing.md,
  },
  miniPlayerContent: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  miniPlayerTitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.fontWeights.medium,
    color: Colors.light.white,
  },
  miniPlayerSubtitle: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.xs,
    color: Colors.light.white,
    opacity: 0.8,
  },
  miniPlayerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    padding: Spacing.lg,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.light.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: Typography.fontFamily,
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.fontWeights.semibold,
    color: Colors.light.text,
    marginTop: Spacing.sm,
  },
  equalizerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: Spacing.lg,
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.md,
  },
  equalizerBar: {
    width: 20,
    backgroundColor: Colors.light.primary,
    borderRadius: BorderRadius.xs,
    marginHorizontal: Spacing.xs,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  card: {
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkCard: {
    backgroundColor: Colors.dark.surface,
  },
});

export const DarkModeStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.dark.primary,
  },
  primaryButtonText: {
    color: Colors.dark.white,
  },
  secondaryButton: {
    borderColor: Colors.dark.primary,
  },
  secondaryButtonText: {
    color: Colors.dark.primary,
  },
  textInput: {
    backgroundColor: Colors.dark.surface,
    borderColor: Colors.dark.secondary,
    color: Colors.dark.text,
  },
  textInputLabel: {
    color: Colors.dark.text,
  },
  listItem: {
    backgroundColor: Colors.dark.background,
    borderBottomColor: Colors.dark.secondary,
  },
  listItemTitle: {
    color: Colors.dark.text,
  },
  listItemSubtitle: {
    color: Colors.dark.textSecondary,
  },
  tabBar: {
    backgroundColor: Colors.dark.surface,
    borderTopColor: Colors.dark.secondary,
  },
  tabLabel: {
    color: Colors.dark.textSecondary,
  },
  tabLabelActive: {
    color: Colors.dark.primary,
  },
});

export const getThemedStyles = (isDark = false) => {
  return isDark ? { ...ComponentStyles, ...DarkModeStyles } : ComponentStyles;
};

export const getThemedColors = (isDark = false) => {
  return isDark ? Colors.dark : Colors.light;
};

