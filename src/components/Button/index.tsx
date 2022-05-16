import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './style';

type Props = {
    title: string;
} & TouchableOpacityProps /*extenendo a proprieda*/

export function Button ({title}: Props) {
    return <S.Container>
        <S.Title>
            {/**passando o title como parametro: */}
            {title}
            
        </S.Title>
    </S.Container>
}