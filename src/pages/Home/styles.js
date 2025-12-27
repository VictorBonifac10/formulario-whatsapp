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

  .questionsContainer{
      padding: 24px 20px 32px;

    @media (min-width: 900px) {
      padding: 32px 40px 40px;
    }
  }

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);

  @media (min-width: 900px) {
    max-width: 720px;
  }
`;

export const Header = styled.div`
  background: rgba(188, 117, 255, 1);
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
  color:rgba(188, 117, 255, 1);
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
  background: rgba(188, 117, 255, 1);
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

export const TopSection = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
  margin-bottom: 28px;

  @media (min-width: 900px) {
    height: 220px;
  }
`;

export const TopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TopGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(188, 117, 255, 0.95),
    rgba(188, 117, 255, 0.55),
    rgba(188, 117, 255, 0.15)
  );
`;

export const TopContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const TopTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;

  @media (min-width: 900px) {
    font-size: 22px;
  }
`;

export const TopDescription = styled.p`
  font-size: 13px;
  line-height: 1.4;
  max-width: 90%;
  padding: 0rem 1rem ;

  @media (min-width: 900px) {
    font-size: 14px;
    max-width: 70%;
  }
`;

