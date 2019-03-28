import styled from 'styled-components';

const Button = styled.button`
box-sizing: border-box;
border: none;
border-radius: 4px;
padding: 0 16px;
margin-top: 16px;
min-width: 64px;
height: 36px;
text-align: center;
text-overflow: ellipsis;
text-transform: uppercase;
color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
  0 1px 5px 0 rgba(0, 0, 0, 0.12);
font-family: var(
  --pure-material-font,
  "Roboto",
  "Segoe UI",
  BlinkMacSystemFont,
  system-ui,
  -apple-system
);
font-size: 14px;
font-weight: 500;
line-height: 36px;
overflow: hidden;
outline: none;
cursor: pointer;

&:hover {
  filter: brightness(110%);
}
`;

export default Button;