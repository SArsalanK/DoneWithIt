import { Platform, StatusBar, StyleSheet } from 'react-native'

import colors from '../config/colors';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,

    },
    headerContainer: {
        position: 'absolute',
        top: 10,
        alignItems: 'center'
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 0,
    },
    logo: {
        width: 100,
        height: 100,
    },
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
                color: 'black'
            },
            android: {
                fontSize: 16,
                fontFamily: "Roboto",
                color: 'black'
            }
        }),
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        marginVertical: 10,
        borderRadius: 25,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    itemListingBackground: {
        width: '100%',
        height: 300,
    },
    listingCard: {
        overflow: 'hidden',
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
    },
    listingCardImage: {
        width: "100%",
        height: 150,
    },
    listingCardDetails: {
        padding: 20,
    },
    listingCardHeader: {
        fontSize: 18,
        fontWeight: '500'
    },
    listingCardItemText: {
        // fontSize:24,
        fontWeight: '500',
    },
    listingCardItemTextSubTxt: {
        color: colors.darkGrey,
    },
    userContainer: {
        marginVertical: 50,
    },
    listingCardDescription: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 5,
    },
    listItemContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    listItemContainerImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.lightGray,
    },
    deleteView: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemContainerText: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center'
    },
    accountContainer: {
        marginVertical: 10,
    },
    parentAccountContainer: {
        backgroundColor: colors.lightGray,
        flex: 1
    },
    listingsScreenContainer: {
        padding: 10,
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: colors.lightGray
    },
    textInputContainer: {
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    textInput: {
        ...Platform.select({
            ios: {
                fontFamily: "Avenir",
            },
            android: {
                fontFamily: "Roboto",
            },
        }),
        width: '90%',
        fontSize: 18,
        color: colors.dark,
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },
    pickerText: {
        flex: 1,
    },
    pickerItem: {
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    errorMessage: {
        color: 'red',
        marginLeft: 10,
    },
    categoryPickerItemContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%',
    },
    categoryPickerItemLabel: {
        marginTop: 5,
        textAlign: 'center',
    },
    imagePicker: {
        width: '100%',
        height: '100%',
    },
    imageInputContainer: {
        width: 100,
        height: 100,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: colors.lightGray,
        borderRadius: 15,
    },
    uploadScreenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    lottieAnimation: {
        width: 150,
    },
    offlineNotice: {
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        position: 'absolute',
        elevation: (Platform.OS === 'android') ? 50 : 0,
        zIndex: 1,
        top: Constants.statusBarHeight,
        color: 'white'
    },
    appActivityIndicatorOverlay: {
        height: '100%',
        width: '100%',
        opacity: 0.8,
        position: 'absolute',
        elevation: (Platform.OS === 'android') ? 50 : 0,
        backgroundColor: 'white',
        zIndex: 1
    }
})

export default styles;