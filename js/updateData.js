function getMonthName(month) {
   if (month == 0) return "January";
   if (month == 1) return "February";
   if (month == 2) return "March";
   if (month == 3) return "April";
   if (month == 4) return "May";
   if (month == 5) return "June";
   if (month == 6) return "July";
   if (month == 7) return "August";
   if (month == 8) return "September";
   if (month == 9) return "October";
   if (month == 10) return "November";
   if (month == 11) return "December";
}

function getWeekdayName(day) {
   if (day == 0) return "Sunday";
   if (day == 1) return "Monday";
   if (day == 2) return "Tuesday";
   if (day == 3) return "Wednesday";
   if (day == 4) return "Thursday";
   if (day == 5) return "Friday";
   if (day == 6) return "Saturday";
}

function getOrdinarystring(date) {
   if (date == 1 || date == 21 || date == 31) return date +"<sup>st</sup>";
   if (date == 2 || date == 22) return date +"<sup>nd</sup>";
   if (date == 3 || date == 31) return date +"<sup>rd</sup>";
   return date +"<sup>th</sup>";
}
function updatecurrentDayInfo() {
  document.getElementById("cur-date").innerHTML = getOrdinarystring(today.getDate());
  document.getElementById("cur-day").innerHTML =  getWeekdayName(today.getDay() );
  document.getElementById("cur-year").innerHTML = today.getFullYear();
  document.getElementById("cur-month").innerHTML = getMonthName ( today.getMonth() );
  document.getElementById("cal-month").innerHTML = getMonthName ( today.getMonth() );
  document.getElementById("cal-year").innerHTML = today.getFullYear();
}
function fillInMonth(){
  document.getElementById("cal-month").innerHTML = getMonthName( thisMonth );
  document.getElementById("cal-year").innerHTML = thisYear;

  var thisMonthFirstDate = new Date (thisYear, thisMonth,1);
  var thisMonthFirstDay = thisMonthFirstDate.getDay();

  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((thisYear % 4 == 0 && thisYear % 100 !=0) || (thisYear % 400 ==0)) monthDays[1]= 29;

  var dates = document.getElementsByTagName("td");  //取得月曆表格中42個td

  for (let i = 0; i < dates.length; i++){
    if (dates[i].classList.contains("color")) dates[i].classList.remove("color");
}
    if (document.getElementById("current_day")){
    document.getElementById("current_day").removeAttribute("id");
  }

  if (thisMonth == today.getMonth()) {
  thisDate = today.getDate();
  var dates = document.getElementsByTagName("td");
  dates[thisMonthFirstDay + thisDate - 1].setAttribute("id","current_day");
}

  var pm =thisMonth-1;
  if (pm == -1){
    pm ==11;
  }
  var previousMonthLastDay = monthDays[pm];
  for(var i = thisMonthFirstDay - 1; i >=0; i--){
    dates[i].innerHTML = previousMonthLastDay;
    previousMonthLastDay--;
    dates[i].classList.add("color");
  }

  for(var i = 1; i <= monthDays[thisMonth];i++){
    dates[i + thisMonthFirstDay - 1].innerHTML = i;
  }

  var j = 1;
  for (var i = thisMonthFirstDay + monthDays[thisMonth]; i <= 41; i++){
    dates[i].innerHTML = j;
    j++;
    dates[i].classList.add("color");
  }
}
