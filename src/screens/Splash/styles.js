import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: { 
        width: '100%', 
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 60,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center', 
        fontWeight: '500',

    },
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 12,
    },
    bigTitle: {
        fontSize: 50,
        color: 'white',
        paddingHorizontal: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 36,
    },
})

export default styles;