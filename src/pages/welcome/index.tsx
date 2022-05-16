import React from 'react';
import * as S from './styles';
import pokemonAnimation from './pokemon.json';
import AnimatedLottieView from 'lottie-react-native';
import { Button } from '../../components/Button';

export function Welcome() {
    //criando a estrutura do projeto
    return <S.Container>
    <S.Content> 
        <S.WrapperAnimation>
        <S.WrapperImage>
            <AnimatedLottieView style = {{width: 200}} autoPlay source={pokemonAnimation} />
        </S.WrapperImage>
        </S.WrapperAnimation>
    <S.Title>Bem vindo!</S.Title>
    <S.SubTitle>Encontre todos os pokemons em um só lugar.</S.SubTitle>
    </S.Content>
    <S.Footer>
        {/*Importando o button criado no src/components*/}
        <Button title='Iniciar' />
    </S.Footer>
    </S.Container>
}