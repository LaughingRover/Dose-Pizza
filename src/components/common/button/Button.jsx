import React from 'react'
import styled, { css } from 'styled-components';
import { Colors } from '../../../utils/Colors'

const Button = styled.button`
	width: 5.5rem;
	padding: 0.7rem 0.9rem;
	font-size: 0.65rem;
	text-align: center;
	color: white;
	text-decoration: none;
	outline: none;
	border: none;
	border-radius: 15px;
	background-color: ${Colors.grey_background};

	&:active,
  &:focus,  
  &:hover {
    cursor: pointer;
		color: ${Colors.hover};
  }

	${props => props.primary && css`
		padding: 0.6rem;
		width: 7rem
		border-radius: 4px;
    background-color: ${Colors.torquoise};
  `};
`;

export const StyledButton = (props) => {
	return (
		<Button type={props.type}>
			{props.children}
		</Button>
	)
};