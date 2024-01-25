// curl -G https://api.editframe.com/v2/videos \
//   -H "Authorization: Bearer { API_TOKEN }" 

  var url = "https://api.editframe.com/v2/videos";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
