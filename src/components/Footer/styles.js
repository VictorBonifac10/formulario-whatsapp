import styled from "styled-components";

//-----------------Footer
export const ContainerFooter = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0.5rem 2rem;
    margin-top: 40px;

    
//-----------------Sections
    ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;
    max-width: 300px;
  }

//-----------------Icon Section
    section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a{ //Link
          text-decoration: none;
    }
    
//-----------------Social Media Icons
    svg{ 
    color: white;
    background-color: rgba(188, 117, 255, 1);
    padding: 0.5rem;
    border-radius: 50px;
    transition: 0.5s;
    cursor: pointer;
    transition: 1s all;
    width: 2.3rem;
    height: 2.3rem;

    &:hover{ //Effect
    color: rgba(188, 117, 255, 1);
    background-color: white;
    }
    }
  }
  
//-----------------Waves
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    z-index: 0;
    min-height: 100px;
    max-height: 150px;

    use{ //Animated Waves
    fill: rgba(188, 117, 255, 0.7);
    }
}

    .content { //Animated Waves
    position: relative;
    height: 20vh;
    text-align: center;
    }

    .parallax>use { //Animated Waves
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }

    .parallax>use:nth-child(1) { //Animated Waves
    animation-delay: -2s;
    animation-duration: 7s;
    }

    .parallax>use:nth-child(2) { //Animated Waves
    animation-delay: -3s;
    animation-duration: 10s;
    }

    .parallax>use:nth-child(3) { //Animated Waves
    animation-delay: -4s;
    animation-duration: 13s;
    }

    @keyframes move-forever { //Animated Waves
    0% {
    transform: translate3d(-90px, 0, 0);
    }
    100% {
    transform: translate3d(85px, 0, 0);
    }
    }

    @media (max-width: 768px) {
    .waves {
    height: 40px;
    min-height: 40px;
    }

    .content {
    height: 30vh;
    }

    h1 {
    font-size: 24px;
    }
  }
`;

//-----------------Atributtes
export const Text = styled.div`
    font-size: 0.9rem;

    p{
    margin-bottom: 5.5rem;
    }

    @media(min-width: 910px){
      max-width: 50%;
    }

`;
