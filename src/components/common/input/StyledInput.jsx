import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
	padding: 0.7rem 0.5rem;
	font-size: 0.9rem;
	outline: none;
	border-radius: 6px;
	border: none;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 50%);
	background-color: transparent;
`;

const StyledInput = (props) => {
	return (
		<Input
			type={props.type ? props.type : `text`}
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange} 
		/>
	)
}; export default StyledInput