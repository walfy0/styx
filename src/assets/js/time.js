function show () {
  var now = new Date()
  var year = now.getFullYear() // 得到年份
  var month = now.getMonth() + 1// 得到月份
  var date = now.getDate()// 得到日期
  // var day = now.getDay();//得到周几
  var hour = now.getHours()// 得到小时数
  var minute = now.getMinutes()// 得到分钟数
  var second = now.getSeconds()// 得到秒数

  document.getElementById('y').innerHTML = year

  document.getElementById('mo').innerHTML = month

  document.getElementById('s').innerHTML = date
  document.getElementById('h').innerHTML = hour

  document.getElementById('m').innerHTML = minute

  document.getElementById('s').innerHTML = second
  setTimeout(show, 1000)// 定时器一直调用show()函数
  return ''
}
export {show}
