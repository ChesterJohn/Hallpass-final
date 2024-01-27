import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        top: -20,
        paddingHorizontal: 20,  
    },
    headerView: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subheaderView: {
        position: 'absolute',
        top: '40%',
        left: -80,
        transform: [{ rotate: '-90deg' }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyView: {
        flex: 1,
        bottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerView: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    input: {
        width: '80%',
        flex: 0.08,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
        fontSize: 16,
        fontFamily: 'ChalkboardSE-Regular',  
      },
    
    button: {
        backgroundColor: '#ffcc00',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#ff9900',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'ChalkboardSE-Regular',  
        marginLeft: 10,
    },
    pressedButton: {
        backgroundColor: '#ff9900',  
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: 'orange',  
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'ChalkboardSE-Regular',
    },
    subHeaderText: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'ChalkboardSE-Regular',

    },
    bodyText: {
        fontSize: 18,
        fontFamily: 'ChalkboardSE-Regular', 
        marginBottom: 10, 
        lineHeight: 50,
    },
    dynamicText: {
        fontSize: 18,
        fontFamily: 'ChalkboardSE-Regular', 
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 10, 
        lineHeight: 56,
    },

    signatureText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'ChalkboardSE-Regular', 
        color: '#333',  
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
    },

    signatureBox: {
        position: 'absolute',
        bottom: 20,  
        left: 20, 
        width: '100%', 
        height: 180,  
        borderWidth: 2,
        borderColor: 'black', 
        padding: 10,
        backgroundColor: 'white',  
    },

    signatureText: {
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'ChalkboardSE-Regular',  
        color: '#333'
    },

    clearButton: {
        position: 'absolute',
        width: 60,
        top: 5,  
        right: 10,  
        borderRadius: 15,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        borderWidth: 2,
        borderColor: '#ff9900',
    },

    clearButtonText: {  
        fontFamily: 'ChalkboardSE-Regular' 
    },


});

export default styles;