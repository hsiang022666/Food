import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C18C00',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',

    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
})

export default styles;