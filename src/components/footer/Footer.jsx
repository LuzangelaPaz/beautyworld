import { styled } from 'styled-components';
import './Footer.css';
import logo from '../../assets/logo.svg';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: #f4c4bd;
    padding: 2%;
    box-sizing: border-box;
    border-top: 4px solid #772035;
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 10rem;
        height: auto;
        background-color: #f4c4bd;
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 15px;
    color: #772035;
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <FooterText className='text'>
                Desarrollado por Luzangela Paz © 2024
            </FooterText>
            
        </StyledFooter>
    );
}

export default Footer