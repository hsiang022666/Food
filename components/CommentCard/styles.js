import { StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        //width: width * 0.9,
        marginVertical: 16,
        marginTop: 45,
        //iOS
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        //Android
        elevation: 9,

    },
    title: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        flex: 1,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: 8
    },
    footerText: {
        color: 'black',
        fontSize: 11,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: -40,
    }
    
});

export default styles;