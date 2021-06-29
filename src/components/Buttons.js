import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
	small: () => `
		font-size: ${typeScale.helperText};
		padding: 8px;
	`,
	large: () => `
		font-size: ${typeScale.h5};
		padding: 16px 24px;
	`,
	warning: ({theme}) => `
    background: none;
    color: ${theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
	primaryButtonWarning: ({theme}) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
	secondaryButtonWarning: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
	error: ({theme}) => `
    background: none;
    color: ${theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
	primaryButtonError: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
	secondaryButtonError: ({props}) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
	success: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
	primaryButtonSuccess: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
	secondaryButtonSuccess: ({props}) => `
    border: 2px solid ${props.theme.status.warningColor};
  `
}

const Button = styled.button`
	padding: 12px 24px;
	font-size: ${typeScale.p};
	border-radius: 8px;
	min-width: 100px;
	cursor: pointer;
	font-family: ${props => props.theme.primaryFont};
	transition: background-color 0.2s linear;
	
	&:hover, &:focus {
		background-color: ${props => props.theme.primaryColorHover};
		color: ${props => props.theme.textColorOnPrimary};
	}
	
	&:focus {
		outline: 3px solid ${props => props.theme.primaryColorHover};
		outline-offset: 2px;
	}
	
	&:active {
		background-color: ${props => props.theme.primaryColorActive};
		color: ${props => props.theme.textColorOnPrimary};
	}
	
	&:disabled {
		cursor: not-allowed; 
	}
`

export const PrimaryButton = styled(Button)`
	background-color: ${props => props.theme.primaryColor};
	border: none;
	color: white;
	
	&:disabled {
		background-color: ${props => props.theme.disabled};
		color: ${props => props.theme.textOnDisabled};
	}
	
	${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
	background-color: transparent;
	border: ${props => props.theme.primaryColor} 1px solid;
	color: ${props => props.theme.primaryColor};
	
	&:hover, &:focus {
		border-color: ${props => props.theme.textColorOnPrimary};
	}
	
	&:disabled {
		background-color: transparent;
		border-color: ${props => props.theme.disabled};
		color: ${props => props.theme.textOnDisabled};
	}

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
	background-color: transparent;
	border: none;
	color: ${props => props.theme.primaryColor};
	
	&:disabled {
		background-color: transparent;
		color: ${props => props.theme.textOnDisabled};
	}

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

