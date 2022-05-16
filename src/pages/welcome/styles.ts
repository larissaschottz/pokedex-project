import styled, {css} from 'styled-components/native'

//importando com o S para sabermos que se trata de componente de filiação
import * as S from './styles'

//recriando as variáveis que foram criadas no index

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`;
export const Content = styled.View`
    height: 70%;
`;
export const WrapperAnimation = styled.View`
    ${({theme}) => css`
    width: 200px;
    height: 300px;
    background-color: ${theme.colors.types.water};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg);
    `}
`;
export const WrapperImage = styled.View`
    transform: rotate(-30deg);

`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 40px;
        color: ${theme.colors.textWhite};
        margin-top: 20px;
    `

}
`;
export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.textWhite};
    `

}
`;

export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        padding: 20px;
        background-color: ${theme.colors.backgroundWater};
    `}
`;


