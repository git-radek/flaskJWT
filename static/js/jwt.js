function getToken() {
  var loginUrl = "https://<url>/token/auth"
  var xhr = new XMLHttpRequest();
  var userElement = document.getElementById('username');
  var passwordElement = document.getElementById('password');
  var tokenElement = document.getElementById('result');
  var user = userElement.value;
  var password = passwordElement.value;

  xhr.open('POST', loginUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
    if (responseObject.login) {
      tokenElement.innerHTML = "Token is valid: "+responseObject.login;
    } else {
      tokenElement.innerHTML = "No token received";
    }
  });

  var sendObject = JSON.stringify({username: user, password: password});

  console.log('going to send', sendObject);

  xhr.send(sendObject);
}
function testFunction() {

  var url = "https://<url>/api/envowners"
  var xhr = new XMLHttpRequest();
  var tokenElement = document.getElementById('result');
  var resultElement = document.getElementById('result');
  xhr.open('GET', url, true);
//  xhr.setRequestHeader("Authorization", "JWT " + tokenElement.innerHTML);
  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
//    resultElement.innerHTML = JSON.stringify(this.responseText, null, 2);
    document.querySelector('code').innerHTML = JSON.stringify(responseObject, null, "  ");
    return hljs.highlightBlock(document.querySelector('code'));

//   hljs.initHighlighting.called = false;
//    hljs.initHighlighting();
  });

  xhr.send(null);
}

function logout() {

  var url = "https://<url>/token/logout"
  var xhr = new XMLHttpRequest();
  var tokenElement = document.getElementById('result');
  var resultElement = document.getElementById('result');
  xhr.open('GET', url, true);
//  xhr.setRequestHeader("Authorization", "JWT " + tokenElement.innerHTML);
  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
    resultElement.innerHTML = JSON.stringify(responseObject,  null, "  ");
  });

  xhr.send(null);
}
