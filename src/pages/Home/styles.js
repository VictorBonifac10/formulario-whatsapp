import styled from "styled-components";
import bgImage from '../../assets/background.jpg'

export const Body = styled.body`
    background: linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.78)), url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`; 

export const Card = styled.form`
  width: 100%;
  max-width: 420px;
  background: #ffffffd9;
  border-radius: 24px;
  padding: 24px 20px 32px;

  /* Sombra suave */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  /* Telas maiores (notebooks / desktops) */
  @media (min-width: 900px) {
    max-width: 720px;
    padding: 32px 40px 40px;
  }
`;

export const Header = styled.div`
  background: #c7a0ff;
  color: #fff;
  text-align: center;
  padding: 10px 24px;
  border-radius: 999px;
  font-weight: 500;
  margin-bottom: 28px;
  font-size: 16px;

  @media (min-width: 900px) {
    font-size: 18px;
  }
`;

export const Field = styled.div`
  margin-bottom: 18px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #9b59ff;
  display: block;
  margin-bottom: 6px;

  @media (min-width: 900px) {
    font-size: 15px;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  min-height: 44px;
  resize: none;
  padding: 12px 14px;
  border-radius: 0.5rem;
  border: none;
  background: #f9f9f9ff;
  font-size: 14px;

  &:focus {
    outline: none;
    background: #ededed;
  }
`;

export const BigInput = styled(Input)`
  min-height: 72px;
  border-radius: 18px;

  @media (min-width: 900px) {
    min-height: 90px;
  }
`;

export const Button = styled.button`
  margin-top: 28px;
  width: 100%;
  height: 50px;
  border-radius: 999px;
  border: none;
  background: #c7a0ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
export const HelperText = styled.span`
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 6px;
  line-height: 1.4;

  @media (min-width: 900px) {
    font-size: 13px;
  }
`;
