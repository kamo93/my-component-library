import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import { typeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0.0, 0, 0.2);
	background-color: ${props => props.theme.formElementBackground};
	color: ${props => props.theme.textOnFormElementBackground};
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-self: center;
	position: relative;
	border-radius: 2px;
`;

const SignUpForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const SignUpHeader = styled.h3`
	font-size: ${typeScale.h3};
`;

const SignUpText = styled.p`
	font-size: ${typeScale.p};
	max-width: 70%;
	text-align: center;
`;

const CloseModalButton = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	position: absolute;
	right: 40px;
	top: 40px;
`

export const SignUpModal = ({showModal, setShowModal}) => {
	const animation = useSpring({
		opacity: showModal ? 1 : 0,
		transform: showModal ? 'translateY(0)' : 'translateY(-200%)'
	})
	return (
		<animated.div style={animation}>
			<ModalWrapper>
				<img src={Illustrations.SignUp} alt="Sign up for an account " aria-hidden={true} width="40%"/>
				<SignUpForm>
					<SignUpHeader>Sign Up</SignUpHeader>
					<SignUpText>Sign up today to get access!</SignUpText>
					<PrimaryButton>Sign Up :)</PrimaryButton>
				</SignUpForm>
				<CloseModalButton aria-label="Close modal">
					<CloseIcon/>
				</CloseModalButton>
			</ModalWrapper>
		</animated.div>
	)
}
