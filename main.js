if (window.location.host != "profyver.github.io" && window.location.host != "vkflooder.ga") {
  window.location.replace("http://natribu.org");
}
window.api = 'https://api.vk.com/method/execute?code=';
window.foc = true;
window.dataC = [];
window.stop = true;
window.cap = [];
window.userArr = [];
window.postArr = [];
window.accUsed = 1;
window.comm_sendArr = [];
window.coms_betweenCap = [];
window.banArr = [];
window.capsArr = [];
window.timing = 5;
window.theme= 'white';
window.sound = 'def';
window.capt = [];
window.settings = false;
$("#hidden").hide();
var audio1 = new Audio();
audio1.preload = 'auto';
audio1.src = '/yoursound.wav';
var audio2 = new Audio();
audio2.preload = 'auto';
audio2.src = '/st1.mp3';
if (window.location.host == "www.vksp.tk") {
  window.location.replace("https://vksp.tk/")
}
if (getCookie("accs")) {
  let q = getCookie("accs");
  for (i = 1; i < q; i++) addAcc();
  if (getCookie("tokens")) {
    let json = getCookie("tokens").replace("+", '');;
    json = JSON.parse(json);
    for (i = 0; i < json.length; i++) $("input[name='token" + (i + 1) + "']").val(json[i]);
  }
}
if (getCookie("rucaptcha")) $("input[name='rucaptcha']").val(getCookie("rucaptcha"));
if (getCookie("theme")) setTheme(getCookie("theme"));
function clearThemes(){
  if(window.theme=='black'){
    $("body").removeClass("black");
    $(".panel").removeClass("black");
  } else if (window.theme=='pink') {
    $("body").removeClass("pink");
    $(".panel").removeClass("pink");
  } else if (window.theme=='blue') {
    $("body").removeClass("blue");
    $(".panel").removeClass("blue");
  } else if (window.theme=='yellow') {
    $("body").removeClass("yellow");
    $(".panel").removeClass("yellow");
  } else if (window.theme=='gay') {
    $("body").removeClass("gay");
    $(".panel").removeClass("gay");
  }
  window.theme="white";
}
function setTheme(theme){
  clearThemes();
  $("body").addClass(theme);
  $(".panel").addClass(theme);
  window.theme=theme;
}
function saveTokens() {
  setCookie("accs", window.accUsed, {
    expires: 2147483647
  });
  var json = [];
  for (i = 1; i < (accUsed + 1); i++) json[json.length] = $("input[name='token" + i + "']").val();
  json = JSON.stringify(json);
  var rucapt = $("input[name='rucaptcha']").val();
  setCookie("tokens", json, {
    expires: 2147483647
  });
  setCookie("rucaptcha", rucapt, {
    expires: 2147483647
  });
  setCookie("theme", theme, {
    expires: 2147483647
  });
}

function addAcc(token = "") {
  accUsed++;
  var accPrev = accUsed - 1;
  $("tr:contains('" + "Аккаунт " + accPrev + "')").after('<tr><td><p class="control-label">Аккаунт ' + accUsed + ' (<a href="https://oauth.vk.com/authorize?client_id=2685278&redirect_uri=https://api.vk.com/blank.html&display=page&scope=offline%2Cfriends&response_type=token" target="_blank">получить токен</a>)</p><input type="text" name="token' + accUsed + '" class="form-control" placeholder="от = до &" value="' + token + '"></td><td><p class="control-label">Ссылка</p><input type="text" name="url' + accUsed + '" class="form-control" placeholder="vk.com/wall-45745333_34298175"></td></tr>');
  $("#infoust" + accPrev).after('<div id="infoust' + accUsed + '"></div>');
  $("#log" + accPrev).after('<div id="log' + accUsed + '"></div>');
}

function addPass() {
  document.getElementById("auth").innerHTML = '<p>Введите логин ВК</p><br><input id="login"><br><p>Введите пароль ВК</p><br><input id="password" type="password"><br><button type="button" id="addVK" class="btn btn-danger btn-raised">Добавить аккаунт</button>';
  $("#addVK").click(function() {
    var login = $("#login").val();
    var password = $("#password").val();
    $.get("get_token.php", {
      "login": login,
      "password": password
    }, function(data) {
      addAcc(data)
    })
  });
  $("#auth").empty();
}

function setTiming() {
  var a = +$("#timing").val();
  if (a<0) return alert("Неверная задержка!");
  window.timing = a;
}

function delAcc() {
  if (accUsed > 1) {
    $("tr:contains('" + "Аккаунт " + accUsed + "')").remove();
    $("#infoust" + accUsed).remove();
    $("#log" + accUsed).remove();
    accUsed--;
  }
}

function changeDataM() {
  var json = $("#mess").val();
  if (json !== "") {
    try {
      var json = JSON.parse(json);
      window.dataC = json;
    } catch (e) {
      showNot('Ошибка!', 'Неверные данные. Проверьте, что массив имеет квадратные скобки в начале и в конце, а так же убедитесь, что между элементами есть запятые!');
    }
  }
}

function showNot(title, text, type, type2, id) {
  document.getElementById('infoust' + id).innerHTML = '<div class="alert alert-dismissable alert-' + type2 + '" style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);"><i class="fa fa-check"></i>&nbsp; <strong>' + title + '</strong> ' + text + '</div>';
}

function setButton() {
  if (!window.stop) {
    window.stop = true;
    $("#work").text("Работать!");
    return;
  }
  window.comm_send = 0;
  $("#work").text("Остановить работу!");
  changeDataM();
  window.stop = false;
  window.userArr = [];
  window.postArr = [];
  window.goal = $('#goal').val()
  for (i = 1; i <= accUsed; i++) {
    let url = $("input[name='url" + i + "']").val();
    let token = $("input[name='token" + i + "']").val();
    if (token == '') {
      showNot('Ошибка!', 'Токен для аккаунта ' + i + ' не задан!', 'error', 'danger', i);
      continue;
    }
    if (url == '' && typeof userArr[0] == 'undefined'&& typeof postArr[0] == 'undefined') {
      showNot('Ошибка!', 'Ссылка для аккаунта ' + i + ' не задана!', 'error', 'danger', i);
      continue;
    } else if (url!= '') {
      try{
        url = url.split('wall')[1].split('_');
        userArr[userArr.length] = url[0];
        postArr[postArr.length] = url[1];
      } catch(e){
        showNot('Ошибка!', 'Ссылка для аккаунта ' + i + ' не верна!', 'error', 'danger', i);
        continue;
      }
    } else {
      userArr[userArr.length] = userArr[0];
      postArr[postArr.length] = postArr[0];
    }
    window.coms_betweenCap[i] = 0;
    window.comm_sendArr[i] = 0;
    window.capsArr[i] = 0;
    window.banArr[i] = 0;
    window.eval('function checkFri' + i + '(data){checkFri(data, ' + i + ')}');
    cap[i - 1] = false;
    checkFriends(token, i);
  }
}

function addScript(code, token, id) {
  var elem = document.createElement("script");
  elem.src = window.api + encodeURIComponent(code) + '&access_token=' + token + '&callback=checkFri' + id + '&v=5.69';
  document.head.appendChild(elem);
}

function checkFriends(token, id) {
  if (!cap[id] && !stop) {
    var token = token;
    var stic = $("input[name='stic']").val();
    if (window.dataC.length == 0) {
      addScript('API.wall.createComment({"owner_id":' + userArr[(id - 1)] + ', "post_id":' + postArr[(id - 1)] + ', "sticker_id":' + stic + '});return API.wall.getComments({"owner_id":' + userArr[(id - 1)] + ', "post_id":' + postArr[(id - 1)] + '}).count;', token, id);
    } else {
      var rand = Math.floor(Math.random() * window.dataC.length);
      if (typeof dataC[rand] == "object") {
        var text = dataC[rand].comment;
      } else {
        var text = dataC[rand];
      }
      addScript('API.wall.createComment({"owner_id":' + userArr[(id - 1)] + ', "post_id":' + postArr[(id - 1)] + ', "message": "' + text + '"});return API.wall.getComments({"owner_id":' + userArr[(id - 1)] + ', "post_id":' + postArr[(id - 1)] + '}).count;', token, id);
    }
  }
  if (!stop) {
    setTimeout(function() {
      checkFriends(token, id)
    }, timing * 1000 + 100 * Math.random());
  }
}
function checkFri(data, id) {
  if (stop) return;
  if (data.error) {
    if (data.error.error_code == 14) {
      cap[id] = true;
      window.capsArr[id]++;
      if (window.coms_betweenCap[id]<5 && window.coms_betweenCap[id]>0){
        window.banArr[id]++;
      } else if (window.coms_betweenCap[id]>5) {
        window.banArr[id] = 0;
      }
      window.coms_betweenCap[id] = 0;
      var rucaptcha_token = $("input[name='rucaptcha']").val();
      if (rucaptcha_token == "" || rucaptcha_token == null) {
        if (window.sound=="def"){
          audio1.play();
        } else if (window.sound=="st1") {
          audio2.play();
        } else {

        }
        var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        document.getElementById('infoust' + id).innerHTML = '<form onsubmit="sendCapKnop(' + userArr[(id - 1)] + ',' + postArr[(id - 1)] + ',' + stic + ',' + data.error.captcha_sid + ', ' + id + '); return false;"><div align="center" style="width: 50%;"><p>Капча для аккаунта ' + id + '</p><br><img id="img" src="' + data.error.captcha_img + '" alt="каптча"><input type="text" onfocus="window.foc = false;" autocomplete="off" name="captext' + id + '" class="form-control" placeholder="токен"><button type="submit" class="btn btn-danger btn-raised" >Отправить капчу!</button></div></form>';
        if (window.foc) $("input[name='captext" + id + "']").focus();
      } else {
        //var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        var rucaptcha_token = $("input[name='rucaptcha']").val();
        //console.log('Отправили: ' + data.error.captcha_sid);
        window.capt[id] = {
          'sticker': stic,
          'sid': data.error.captcha_sid
        };
        $.get(
          "capt.php", {
            "url": encodeURIComponent(data.error.captcha_img),
            "key": rucaptcha_token
          },
          function(data) {
            onAjaxSuccess(data, id);
          });
      }
    } else if (data.error.error_code == 15) {
      document.getElementById('infoust' + id).innerHTML = '<div align="center" style="width: 50%;"><p>Ошибка 15! Токен аккаунта ' + id + ' устарел. (Вам нужно обновить токен)</p></div>';
      cap[id] = true;
    } else if (data.error.error_code == 5) {
      document.getElementById('infoust' + id).innerHTML = '<div align="center" style="width: 50%;"><p>Ошибка 5! Токен аккаунта ' + id + ' не верный. (Вам нужно обновить токен)</p></div>';
      cap[id] = true;
    } else {
      document.getElementById('infoust' + id).innerHTML = '<div align="center" style="width: 50%;"><p>Ошибка ' + data.error.error_code + '! Произошла неизвестная ошибка при работе с аккаунтом ' + id + '. Обратитесь к разработчику за дополнительными разъяснениями.</p></div>';
      //cap[id]=true;
    }
  } else {
    if (window.banArr[id] > 1) {
      document.getElementById('infoust' + id).innerHTML = '<div align="center" style="width: 50%;"><p>Спам с аккаунта ' + id + ' временно отключен. (Причина: лимит)</p></div>';
      cap[id] = true;
    }
    window.comm_sendArr[id]++;
    window.comm_send++;
    $("#total").html("<p>Всего отправили: " + window.comm_send+"</p>");
    $("#log" + id).html("<p>С аккаунта "+id+": " +window.comm_sendArr[id]+"</p>");
    window.coms_betweenCap[id]++;
    window.count = data["response"];
    $("#total_post").html("<p>Всего на посте: "+count+"</p>");
    $("#total_str").html("<p>Чужих комменатариев: "+(window.count - window.comm_send)+"</p>");
    if (window.count >= window.goal && window.goal!=0) setButton();
  }
}

function onAjaxSuccess(data, id) {
  var code = data;
  var capt = window.capt[id];
  sendCap(userArr[id - 1], postArr[id - 1], capt['sticker'], capt['sid'], code, id);
  //console.log(code);
}

function sendCap(owner_id, post_id, sticker_id, captcha_sid, code, id) {
  if (stop) return;
  //console.log("Сервер разгадал капчу " + code);
  var token = $("input[name='token" + id + "']").val();
  var captcha_key = code.trim();
  if (window.dataC.length == 0) {
    addScript('API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});return API.wall.getComments({"owner_id":' + owner_id + ', "post_id":' + post_id + '}).count;', token, id);
  } else {
    var rand = Math.floor(Math.random() * window.dataC.length);
    if (typeof dataC[rand] == "object") {
      var text = dataC[rand].comment;
    } else {
      var text = dataC[rand];
    }
    addScript('API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "message":"' + text + '","captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});return API.wall.getComments({"owner_id":' + owner_id + ', "post_id":' + post_id + '}).count;', token, id);
  }
  cap[id] = false;
  $('#infoust' + id).empty();
}

function sendCapKnop(owner_id, post_id, sticker_id, captcha_sid, id) {
  //console.log(captcha_sid);
  var captcha_key = $("input[name='captext" + id + "']").val();
  var token = $("input[name='token" + id + "']").val();
  if (window.dataC.length == 0) {
    addScript('API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});return API.wall.getComments({"owner_id":' + owner_id + ', "post_id":' + post_id + '}).count;', token, id);
  } else {
    var rand = Math.floor(Math.random() * window.dataC.length);
    if (typeof dataC[rand] == "object") {
      var text = dataC[rand].comment;
    } else {
      var text = dataC[rand];
    }
    addScript('API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "message":"' + text + '","captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});return API.wall.getComments({"owner_id":' + owner_id + ', "post_id":' + post_id + '}).count;', token, id);
  }
  cap[id] = false;
  window.foc = true;
  $('#infoust' + id).empty();
  $('input[name*="captext"]').first().focus();
}
//cookies
function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;
  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }
  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;
  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
