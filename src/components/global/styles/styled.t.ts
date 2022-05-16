import 'styled-components'
//importando o tema criado
import theme from './theme'
declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}
//criando referenciamento dos estilos criados no tema (tipagem dinâmica)