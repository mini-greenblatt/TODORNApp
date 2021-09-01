import { Toast } from 'native-base'

class ShowToast {

    showToast = (message, type, buttonText, buttonStyle, click) => {

        Toast.show({
            text: message,
            type: type,
            duration: 3000,
            buttonText: buttonText,
            backgroundColor:'yellow',
            buttonStyle: { fontFamily: 'Lato-Bold', backgroundColor: 'red',justifyContent:'center'},
            textStyle: { fontFamily: 'Lato-Bold', textAlign: 'center' },
            onClose: click,

        })
    }
}



export default new ShowToast();