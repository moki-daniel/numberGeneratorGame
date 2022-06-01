function addCookie(name, value, days) {
  var dt = new Date;
  dt.setTime(dt.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ dt.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  console.log("Sucessfully created cookie " + name);
}
function getCookie(name) {
  var cname = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}
function checkCookie(name) {
  var username = getCookie(name);
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      addCookie(name, "user", 365);
    }
  }
}
function deleteCookie(name) {
  var expires = -1
  var dt = new Date;
  dt.setTime(dt.getTime() + (expires*24*60*60*1000));
  var expires = "expires="+ dt.toUTCString();
  document.cookie = name + "=" + 0 + ";" + expires + ";path=/";
  console.log("Sucessfully deleted cookie " + name);
}
function changeAndRenewCookie(name, value, expires) {
  addCookie(name, value, expires)
}