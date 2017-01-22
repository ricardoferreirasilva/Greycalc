'use strict';

var React = require('react-native');

var myStyles = React.StyleSheet.create({
   topBar: {
       backgroundColor : "#424242",
       /*justifyContent: 'center'*/
    },
   calculationText: {
       color: "white",
       fontSize: 40,
       alignSelf: 'center',
   },
   middleBar: {
       backgroundColor : "#616161",
       padding: 2
    },
    middleColumn: {
        backgroundColor : "#757575",
        borderColor : "#616161",
        borderWidth: 2,
        

    },
    middleRow: {
        backgroundColor : "#757575",
        borderBottomColor : "#616161",
        borderBottomWidth: 4,
        flex: 1,
        justifyContent: 'center',    
    },
    middleRowBottom: {
        backgroundColor : "#757575",
        flex: 1,
        justifyContent: 'center',    
    },
    numericButton: {
        alignSelf: 'center',
        
        
    },
    bottomBar: {
        backgroundColor : "#757575",
     }
})
module.exports = myStyles;