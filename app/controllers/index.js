// Objective: Focus textfiled(Numeric) with keypad when rendered html5 webpages via titanium webview.
$.index.open();

function init() {
	$.webView.addEventListener('focus', function (e) {
		Ti.API.info('focus event triggered.');	
	});
	
	$.webView.addEventListener('load', function (e) {
		Ti.API.info('load event triggered.');
	});
}

(function () {
	$.webView.setUrl("http://rnagella.github.io/test.html");
	$.webView.focus();
	init();
})();


function focusButtonClicked(e) {
	Ti.API.info('focus button clicked.');
	// Solution try 1
	// set soft keyboard via properties.
	$.webView.softKeyboardOnFocus  = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.webView.focusable = true;
	// This property doesn't exist but as suggested here @ http://developer.appcelerator.com/question/148773/keyboard-not-popup-on-input-focus-in-webview-on-android-2x#comment-160431
	$.webView.focus();
	
	// Solution try 2
	// set soft keyboard via properties - reverse order
	// $.webView.focusable = true;
	// $.webView.softKeyboardOnFocus  = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	// $.webView.focus();
	
	// Solution try 3
	// set soft keyboard via methods.
	// $.webView.setSoftKeyboardOnFocus(Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS);
	// $.webView.setFocusable(true);
	// This property doesn't exist but as suggested here @ http://developer.appcelerator.com/question/148773/keyboard-not-popup-on-input-focus-in-webview-on-android-2x#comment-160431
	// $.webView.focus(); 
	
	// Solution try 4
	// set soft keyboard via methods - reverse order
	// $.webView.setFocusable(true);
	// $.webView.setSoftKeyboardOnFocus(Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS);
	
	// Solution try 5
	// Rendering keypad via InputMethodManager 
	var keyboard = require('con.familydollar.androidkeyboard');
	keyboard.showKeyboard();
}
