import { StyleSheet, Dimensions } from "react-native";

// import { Nunito_500_Regular } from '@react-native-google-fonts';

export const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
    highlight : "bold"
};

export const COLORS = {
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",
    common : "rgba(0,0,0,0.8)",
    webkitTheme : '-webkit-linear-gradient(to right, #FF4B2B, #FF416C)',
    theme : "#FF416C",
	  backgroundTheme: 'linear-gradient(#FF4B2B, #FF4B2B, #FF416C)',
    shadow : '0 10px 25px 0 rgba(0,0,40,.2)',
    gray: "#83829A",
    gray2: "#C1C0C8",
    danger : '#D22B2B',
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
};
export const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};


const styles = StyleSheet.create({
    body: {
        // width: 300,
        padding : 0,
        // flex : 1,
        margin : 0,
        position : 'relative',
        // height : 300,
        fontFamily : FONT.medium,
        fontSize : "100%",
        color : COLORS.common,
        
        // fontWeight : "400"
    },
    themeBackground : {
        backgroundColor : "#FF4B2B !important"
    },
    themeColor : {
        color : "#FF4B2B !important"
    },
    chocolate : {
        // height : 40,
        width : '98%',
        margin : '1%',
        borderRadius : 2
        // border : 'none'
    },
    highlight: {
        fontWeight: "700",
    },
    center : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    left : {
        justifyContent : 'flex-start',
        alignItems : 'flex-start'
    },
    right : {
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    },
    imageCenter : {
        // height : 250,
        width : 350,
        // top : '1%',
        // left : '5%',
        objectFit : 'contain'
    },
    backgroundCenter : {
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        webkitBackgroundSize : 'cover'
    },
    wallStuck : {
        position : "fixed",
        top : 5,
        left : 5
    },
    tempStuck : {
        position : "absolute",
        top : 5,
        left : 5
    },
    wall: {
        height: 650,
        width: 380
        // margin : "1%"
    },
    coverWall : {
        width :'100%',
        height : "100%"
        // overflowY : 'auto'
        // margin : '1%'
    },
    mediumWall: {
        height: "auto",
        width: "80%",
        top : "1%",
        bottom : '1%',
        left : '5%'
    },
    minimumWall : {
        height: "auto",
        width: "45%",
        marginRight : "1%",
        marginTop : "1%"        
    },
    horizontalWallFlat : {
        display : 'flex',
        flexDirection: 'column',
        flexWrap : 'no-wrap',
        overflowX : 'auto',
        overflowY : 'hidden',
        height : 'auto',
        width : '98%',
        gap: 5
    },
    horizontalWallDisplay : {
        display : 'flex',
        flexDirection: 'row',
        flexWrap : 'wrap',
        overflowX : 'auto',
        overflowY : 'hidden',
        // height : 500,
        // width : 400
        // gap: 10
    },
    centerStandardWall : {
        height : 'auto',
        width : '48%',
        margin : '1%',
        borderRadius : 6,
        // alignItems : 'center'
    },
    danger : {
      color : COLORS.danger
      // backgroundColor : COLORS.danger
    },
    border : {
      borderColor : '#ccc',
      borderWidth : 1,
      borderStyle : 'dotted'
    },
    shadow : {
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow offset (x, y)
      shadowOpacity: 0.25, // Shadow opacity
      shadowRadius: 5, // Shadow radius
      backgroundColor: 'white'
    },
    verticalWall: {
        display : 'flex',
        flexDirection: 'column',
        flexWrap : 'wrap',
        overflowY : 'auto',
        height : 'auto',
        width : 400,
        margin : '1%'
        // gap: 10
    },
    hide : {
        display : 'none'
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.common,
        width : 'auto',
        height : 'auto'
    },
    h1 : {
        fontSize: SIZES.xLarge, // Adjust the font size as needed
        fontWeight: FONT.highlight,
        width : 'auto',
        height : 'auto',
        fontWeight : 'bold'
    },
    h2 : {
        fontSize : SIZES.large,
        width : 'auto',
        height : 'auto',
        fontWeight : 'bold'

    },
    p : {
        fontSize : SIZES.medium,
        width : 'auto',
        height : 'auto',
    },
    a : {
        textDecorationLine : 'underline',
        color : '#FF4B2B',
        width : 'auto',
        height : 'auto',
        fontSize : SIZES.medium
    },
    pushTop : {
      top : '-25%'
    },
    container: {
        flex: 1,
        position: 'relative',
        padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
      bigCircle: {
        width: Dimensions.get('window').height * 0.7,
        height: Dimensions.get('window').height * 0.7,
        backgroundColor: '#ff6b81',
        borderRadius: 1000,
        position: 'absolute',
        right: Dimensions.get('window').width * 0.25,
        top: -50,
      },
      smallCircle: {
        width: Dimensions.get('window').height * 0.4,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#ff7979',
        borderRadius: 1000,
        position: 'absolute',
        bottom: Dimensions.get('window').width * -0.2,
        right: Dimensions.get('window').width * -0.3,
      },
      centerizedView: {
        width: '100%',
        top: '15%',
      },
      authBox: {
        width: '80%',
        backgroundColor: '#fafafa',
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      logoBox: {
        width: 100,
        height: 100,
        backgroundColor: '#eb4d4b',
        borderRadius: 1000,
        top: -50,
        left : 80,
        marginBottom: -50,
        elevation: 2,
      },
      loginTitleText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
      },
      hr: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#444',
        marginTop: 6,
      },
      firstBox: {
        marginTop: 10,
        marginBottom: 10,
        height : 60
        // backgroundColor : 'red'
      },
      inputBox: {
        marginBottom: 10,
        height : 60
        // backgroundColor : 'red'
      },
      inputTransparent : {
        backgroundColor : 'transparent',
        borderWidth : 0,
        borderBottomWidth : 2,
        borderBottomColor : COLORS.white,
        height : 60,
        zIndex : 1
      },
      inputLabel: {
        // fontSize: 18
        width : 'auto',
        height : 30,
        // backgroundColor : 'yellow',
        marginTop : 30,
        position : 'absolute',
        zIndex : 2 
        // padding : 10,
        // overflow : 'hidden'

      },
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#dfe4ea',
        borderRadius: 4,
        paddingHorizontal: 10,
      },
      loginButton: {
        backgroundColor: '#ff4757',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 4,
      },
      loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      loginMain : {
        width : '80%',
        height : 50,
        marginLeft : '5%',
        margin : '1%',
        // borderShadow : COLORS.shadow,
        // border : 'none',
        zIndex : 5
      },
      registerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
      },
      forgotPasswordText: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 16,
      },
      carouselItem: {
        width: 300,
        height: 300,
        position: 'relative',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      button: {
        backgroundColor: COLORS.theme,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
      },
      buttonText: {
        color: COLORS.gray,
        fontWeight: 'bold',
      },
      paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: COLORS.theme,
      },
      paginationInactiveDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: COLORS.gray,
      },
});

export default styles;
