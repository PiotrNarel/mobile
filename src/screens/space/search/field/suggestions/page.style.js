import styled from 'styled-components/native'
import SafeAreaView from 'react-native-safe-area-view'

export const Wrap = styled(SafeAreaView).attrs({
    forceInset: {
        vertical: 'never'
    }
})`
    background: ${({theme})=>theme.background.regular};
    flex: 1;
`

export const Scroll = styled.ScrollView.attrs({
    keyboardShouldPersistTaps: 'always',
    contentContainerStyle: {
        paddingBottom: 30
    }
})`
    flex: 1;
`

export const Items = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${({theme})=>theme.padding.medium - theme.padding.micro}px;
`