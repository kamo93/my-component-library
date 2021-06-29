import { brown, neutral, yellow, red, green } from "./colors";
import {primaryFont} from './typography'

export const defaultTheme = {
	primaryColor: brown[100],
	primaryColorHover: brown[200],
	primaryColorActive: brown[300],
	textColorOnPrimary: neutral[100],
	textColor: neutral[600],
	textColorInverted: neutral[100],
	disabled: neutral[400],
	textOnDisabled: neutral[300],
	formElementBackground: neutral[100],
	textOnFormElementBackground: neutral[600],
	primaryFont,
	status: {
		warningColor: yellow[100],
		warningColorHover: yellow[200],
		warningColorActive: yellow[300],
		errorColor: red[100],
		errorColorHover: red[200],
		errorColorActive: red[300],
		successColor: green[100],
		successColorHover: green[200],
		successColorActive: green[300]
	}
};

export const darkTheme = {
	primaryColor: neutral[100],
	primaryColorHover: neutral[200],
	primaryColorActive: neutral[100],
	textColorOnPrimary: brown[100],
	textColor: brown[100],
	textColorInverted: neutral[100],
	disabled: neutral[400],
	textOnDisabled: neutral[300],
	formElementBackground: brown[100],
	textOnFormElementBackground: neutral[100],
	primaryFont,
	status: {
		warningColor: yellow[100],
		warningColorHover: yellow[200],
		warningColorActive: yellow[300],
		errorColor: red[100],
		errorColorHover: red[200],
		errorColorActive: red[300],
		successColor: green[100],
		successColorHover: green[200],
		successColorActive: green[300]
	}
}
