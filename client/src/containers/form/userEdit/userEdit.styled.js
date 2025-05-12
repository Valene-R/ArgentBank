import styled from 'styled-components';


export const Form = styled.form` 
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Row = styled.div`
	display: flex;
	justify-content: center;
  align-items: center;
  gap: 20px; 
  width: 100%;

	@media (max-width: 440px) {
  	flex-direction: column;
    gap: 10px;
  }
`;

export const WrapperBtn = styled.div` 
  display: flex;
	flex-direction: row;
	justify-content: center;
  gap: 8px;
`;

export const Button = styled.button` 
  background-color: #00bc77;
  color: #FFF;
  border-color: #00bc77;
  width: 130px;
  height: 37px;
  margin: 7px;
  cursor: pointer;
`;

export const Error = styled.p` 
	padding: 5px;
	color: #fff;
	background-color: #e74c3c;
	border-radius: 5px;
	text-align: center;
	margin-top: 10px;
	max-width: 200px;
	font-size: 14px;
`;