import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import {PrimaryButton,SecondaryButton, TertiaryButton, SignUpModal} from './components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils'
const App = () => {

	const [useDarkTheme, setUseDarkTheme] = useState(false);
	const [showModal, setShowModal] = useState(false);

	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<p>Actual theme: {useDarkTheme ? 'dark' : 'light'}</p>
			<button onClick={()=> setUseDarkTheme(prevState => !prevState)}>Change theme</button>
			<button onClick={()=> setShowModal(prevState => !prevState)}>Toggle Modalk</button>
			<div style={{background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor}}>
				<h1>Normal</h1>
				<PrimaryButton>Sign In</PrimaryButton>
				<SecondaryButton>Secondary Button</SecondaryButton>
				<TertiaryButton>Tertiary Button</TertiaryButton>
				<hr/>
				<h1>Disabled</h1>
				<PrimaryButton disabled>Sign In</PrimaryButton>
				<SecondaryButton disabled>Secondary Button</SecondaryButton>
				<TertiaryButton disabled>Tertiary Button</TertiaryButton>
				<hr/>
				<h1>Modifiers</h1>
				<PrimaryButton modifiers="small">Sign In</PrimaryButton>
				<SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Secondary Button</SecondaryButton>
				<TertiaryButton modifiers={["error", "tertiaryButtonError"]}>Tertiary Button</TertiaryButton>
				<hr/>
				<SignUpModal showModal={showModal} setShowModal={setShowModal}/>
			</div>
			<GlobalStyle/>
		</ThemeProvider>
	)
}
ReactDOM.render(<App/>, document.querySelector('#root'));
