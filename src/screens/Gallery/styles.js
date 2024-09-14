import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FAEBD7',

    },
    text: {
        marginTop: 24,
        marginLeft: 100,
        alignContent: 'center',
        fontSize: 30,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        marginTop: 24,
    },
    backContainer: {
        position: 'absolute',
        margin: 32,
    },
    backIcon: {
        width: 40,
        height: 40,
    }
  
   
   
});

export default styles;