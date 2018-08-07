const os = {mac:false,windows: false, linux:false,ios:false,android:false,other:false}
const broswer = {ie6:false,ie7:false,ie8:false,ie9:false,ie10:false,ie11:false,edge:false,ie:false,chrome:false,firefox:false,qq:false,_2345:false,sogou:false,safari:false,other:false}
const macPlatform = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
const windowsPlatform = ['Win32', 'Win64', 'Windows', 'WinCE']
const iosPlatform = ['iPhone', 'iPod', 'iPad']
const platform = window.navigator.platform
const userAgent = window.navigator.userAgent.toLowerCase()


if (platform.toUpperCase().indexOf('MAC') >= 0) {
  os.mac = true
}else if(windowsPlatform.indexOf(platform) !== -1){
  os.windows = true
}else if(/Linux/.test(platform)){
  os.linux = true
}else if(iosPlatform.indexOf(platform) !== -1){
  os.ios = true
}else if(/Android/.test(userAgent)){
  os.android = true
}else{
  os.other = true
}

broswer.ie6 = /msie 6/.test(userAgent)
broswer.ie7 = /msie 7/.test(userAgent)
broswer.ie8 = /msie 8/.test(userAgent)
broswer.ie9 = /msie 9/.test(userAgent)
broswer.ie10 = /msie 10/.test(userAgent)
broswer.ie11 = /rv\:11/.test(userAgent)
broswer.edge = /edge/.test(userAgent)
broswer.ie = broswer.ie6 || broswer.ie7 || broswer.ie8 || broswer.ie9 || broswer.ie10 || broswer.ie11
broswer.firefox = /firefox/.test(userAgent)
broswer.safari = /safari/.test(userAgent) && !(/chrome/.test(userAgent))
broswer.chrome = /chrome/.test(userAgent) && /safari/.test(userAgent)
broswer.qq = /qqbrowser/.test(userAgent)
broswer._2345 = /2345explorer/.test(userAgent)
broswer.sogou = /se/.test(userAgent) &&  /metasr/.test(userAgent)
broswer.other = !(broswer.ie || broswer.edge || broswer.firefox || broswer.safari || broswer.chrome || broswer.qq || broswer._2345 || broswer.sogou)

export  {os, broswer}