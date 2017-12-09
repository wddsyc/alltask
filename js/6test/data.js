function durition(time) {
	let then = Date.parse(time)
	let now = Date.now()
	let dvalue = Math.round(Math.abs(then - now) / 1000)
	let mins = ((dvalue / 60 / 60) - (parseInt(dvalue / (24 * 60 * 60))) * 24 - parseInt((dvalue / 60 / 60) - (parseInt(dvalue / (24 * 60 * 60))) * 24)) * 60
	let intmins = parseInt(mins)
	let second = parseInt(60 * (mins - intmins))
	return `距离${time}儿童节有${parseInt(dvalue/(24*60*60))}天${parseInt((dvalue/60/60)-(parseInt(dvalue/(24*60*60)))*24)}小时${intmins}分钟${second}秒`
}
var 儿童节 = `2018-6-1`
console.log(durition(儿童节))


function getChsDate(time) {
	time = time.split(`-`)
	let dateArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九',
		'十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九',
		'二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九',
		'三十', '三十一'
	]
	let year = time[0].replace(/\d{1}/g, function (x) {
		var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		var arr1 = `零一二三四五六七八九`
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == x) {
				x = arr1[i]
				return x
			}
		}
	})
	let mon = time[1].replace(/\d{1,2}/, x => dateArr[(+x)])
	let day = time[2].replace(/\d{1,2}/, x => dateArr[(+x)])
	return year + `年` + mon + `月` + day + `日`
}
var str = getChsDate('2015-10-08');
console.log(str);

function friendlyDate(str) {
	let time = {
		now: Date.now(),
		onemin: 1000 * 60,
		threemins: 1000 * 60 * 3,
		onehour: 1000 * 60 * 60,
		eighthours: 1000 * 60 * 60 * 8,
		threedays: 1000 * 60 * 60 * 24 * 3,
		oneday: 1000 * 60 * 60 * 24,
		twomounth: 1000 * 60 * 60 * 24 * 30 * 2,
		onemounth:1000 * 60 * 60 * 24 * 30,
		eightyears: 1000 * 60 * 60 * 24 * 30 * 12 * 8,
		oneyear: 1000 * 60 * 60 * 24 * 30 * 12,
		panDuan: function (str) {
			let offset=Math.abs(str - this.now);
			switch (true) {
				case offset < this.onemin:
					console.log(`刚刚`)
					break;
				case offset < this.threemins:
					console.log(`三分钟之内`)
					break;
				case offset < this.eighthours:
					console.log(`八小时内`)
					break;
				case offset < this.threedays:
					console.log(`三天内`)
					break;
				case offset < this.twomounth:
					console.log(`两个月内`)
					break;
				case offset < this.eightyears:
					console.log(`八年内`)
					break;
				default:
					break;
			}
		}
	}
	console.log(time.panDuan(str))
}
var str = friendlyDate(Date.now()+1000*60*60*9)