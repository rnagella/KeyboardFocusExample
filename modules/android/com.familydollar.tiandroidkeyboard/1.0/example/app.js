//This module is to force the keyboard on android.
/*
 * Below steps ensure you to access the module and 
 * call necessary method to show the keyboard.
 * Methods: showKeyboard
 */

// Require module
var tiandroidkeyboard = require('com.familydollar.tiandroidkeyboard');
Ti.API.info("module is => " + tiandroidkeyboard);
// show the keyboard
tiandroidkeyboard.showKeyboard();
