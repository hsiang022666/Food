import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        margin: 32,
    },
    mainImage: {
        width: '100%',
        height: height / 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 4,
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        color: '#000',
    },
    city: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400',
        marginTop: 8,
    },
    price: {
        color: 'red',
        fontSize: '20',
    },
    mapText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4681A3',
        textAlign: 'center',
        padding: 16,
    }

   
});

export default styles;