function getChIntv(str) {
	var nowTime = Date.now(); 
	var endTime = Date.parse(str);
	var gap = endTime - nowTime;
	var days = parseInt(gap / (1000 * 60 * 60 * 24));
	var hours = parseInt((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt(((gap % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = parseInt(((gap % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60) / 60);
	return "距离除夕还有" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
}
var str = getChIntv("2017-02-08");
console.log(str);
\d{4}