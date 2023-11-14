import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Principal from '../pages/Principal'
import CadastrarVeiculo from '../pages/CadastrarVeiculo'
import OferecerCarona from '../pages/OferecerCarona'
import MinhasCaronas from '../pages/MinhasCaronas'
import IrUVV from '../pages/IrUVV'
import VoltarUVV from '../pages/VoltarUvv'
import DetalheCarona from '../pages/DetalheCarona'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="CadastrarVeiculo"
                component={CadastrarVeiculo}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="OferecerCarona"
                component={OferecerCarona}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="MinhasCaronas"
                component={MinhasCaronas}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="IrUVV"
                component={IrUVV}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="VoltarUVV"
                component={VoltarUVV}
                options={{ headerShown: false}}

            />
            <Stack.Screen
                name="DetalheCarona"
                component={DetalheCarona}
                options={{ headerShown: false}}

            />
        </Stack.Navigator>
    )
}