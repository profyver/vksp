if (window.location.host != "profyver.github.io" && window.location.host != "vksp.tk") {
  window.location.replace("http://natribu.org");
}
window.dataC = [];
window.stop = true;
window.cap = [];
window.userArr = [];
window.postArr = [];
window.tokenArr = [];
window.accUsed = 1;
window.comm_send = 0;
window.timing = 5;
if (window.location.host == "www.vksp.tk") {
  window.location.replace("https://vksp.tk/")
}
if(getCookie("accs")){
  let q = getCookie("accs");
  for (i=1; i<q;i++) addAcc();
  if(getCookie("tokens")){
    let json = getCookie("tokens");
    json = JSON.parse(json);
    for(i=0; i<json.length;i++) $("input[name='token" + (i+1) + "']").val(json[i]);
  }
}
function saveTokens(){
  setCookie("accs",window.accUsed,{expires: 2147483647});
  var json = [];
  for (i=1; i<(accUsed+1); i++) json[json.length]=$("input[name='token" + i + "']").val();
  json = JSON.stringify(json);
  setCookie("tokens", json, {expires: 2147483647});
}
function addAcc() {
  accUsed++
  var accPrev = accUsed - 1;
  $("tr:contains('" + "Аккаунт " + accPrev + "')").after('<tr><td><p class="control-label">Аккаунт ' + accUsed + ' (<a href="https://oauth.vk.com/authorize?client_id=2685278&redirect_uri=https://api.vk.com/blank.html&display=page&scope=offline%2Cfriends&response_type=token" target="_blank">получить токен</a>)</p><input type="text" name="token' + accUsed + '" class="form-control" placeholder="от = до &"></td><td><p class="control-label">Ссылка</p><input type="text" name="url' + accUsed + '" class="form-control" placeholder="vk.com/wall-45745333_34298175"></td></tr>');
  $("#infoust" + accPrev).after('<div id="infoust' + accUsed + '"></div>');
}

function setTiming() {
  var a = +$("#timing").val();
  window.timing = a;
}

function delAcc() {
  if (accUsed > 1) {
    $("tr:contains('" + "Аккаунт " + accUsed + "')").remove();
    $("#infoust"+ accUsed).remove();
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
  document.getElementById('infoust'+id).innerHTML = '<div class="alert alert-dismissable alert-' + type2 + '" style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);"><i class="fa fa-check"></i>&nbsp; <strong>' + title + '</strong> ' + text + '</div>';
}

function setButton() {
  if(!window.stop){
    window.stop=true;
    return;
  }
  changeDataM();
  window.stop = false;
  window.userArr = [];
  window.postArr = [];
  window.tokenArr = [];
  for (i = 1; i <= accUsed; i++) {
    let url = $("input[name='url" + i + "']").val();
    let token = $("input[name='token" + i + "']").val();
    if (url == ''){
      showNot('Ошибка!', 'Ссылка для аккаунта '+i+' не задана!', 'error', 'danger', i);
      window.stop=true;
      return;
    }
    if (token == ''){
      showNot('Ошибка!', 'Токен для аккаунта '+i+' не задана!', 'error', 'danger', i);
      window.stop=true;
      return;
    }
    url = url.split('wall')[1].split('_');
    userArr[userArr.length] = url[0];
    postArr[postArr.length] = url[1];
    tokenArr[tokenArr.length] = token;
    window.eval('function checkFri' + i + '(data){checkFri(data, ' + i  + ')}');
    cap[i - 1] = false;
    checkFriends(token, i)
  }
}

function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  console.log(document.head.appendChild(elem));
}

function checkToken(token) {
  
}

function checkFriends(token, id) {
  if (!cap[id] && !stop) {
    var token = token;
    var stic = $("input[name='stic']").val();
    if (window.dataC.length == 0) {
      addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + userArr[(id-1)] + ', "post_id":' + postArr[(id-1)] + ', "sticker_id":' + stic + '});') + '&access_token=' + token + '&callback=checkFri' + id  + '&v=5.69');
    } else {
      var rand = Math.floor(Math.random() * window.dataC.length);
      if (typeof dataC[rand] == "object") {
        var text = dataC[rand].comment;
      } else {
        var text = dataC[rand];
      }
      addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + userArr[(id-1)] + ', "post_id":' + postArr[(id-1)] + ', "message": "' + text + '"});') + '&access_token=' + token + '&callback=checkFri' + id  + '&v=5.69');
    }
  }
  setTimeout(function() {
    checkFriends(token, id)
  }, timing * 1000 + 2000 * Math.random());
}

function checkFri(data, id) {
  if (data.error) {
    if (data.error.error_code == 14) {
      document.getElementById('sound1').play();
      result.value += `${'CAPTCHA'}\n`;
      result.value += `${'Всего отправлено: '+window.comm_send}\n`
      cap[id] = true;
      var rucaptcha_token = $("input[name='rucaptcha']").val();
      if (rucaptcha_token == "" || rucaptcha_token == null) {
        var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        document.getElementById('infoust' + id).innerHTML = '<p align=center>Капча для аккаунта '+id+'</p><img id="img" src="' + data.error.captcha_img + '" alt="каптча"><p><div class="col-xs-4"><input type="text" name="captext' + id + '" class="form-control" placeholder="токен"></div><center><button type="button" class="btn btn-danger btn-raised" onclick="sendCapKnop(' + userArr[(id-1)] + ',' + postArr[(id-1)] + ',' + stic + ',' + data.error.captcha_sid + ', ' + id + ')">Отправить капчу!</button></center><br>'
        window.eval('function onAjaxSuccess'+id+'(data){onAjaxSuccess(data, '+id+')}')
        $.get(
          "vksp.tk/capt.php", {
            "url": encodeURIComponent(data.error.captcha_img),
            "key": rucaptcha_token
          }, window.eval('onAjaxSuccess'+id+'()'));
      }
    }
  } else {
    result.value += `${"Отправили коммент: " +data.response.comment_id}\n`;
    window.comm_send = window.comm_send + 1;
  }
}

function onAjaxSuccess(data, id) {
  var code = data;
  var capt = window.capt;
  sendCap(capt['user'], capt['post'], capt['sticker'], capt['sid'], code, id);
  console.log(code);
}

function sendCap(owner_id, post_id, sticker_id, captcha_sid, code, id) {
  console.log("Сервер разгадал капчу " + code);
  result.value += `${"капча: " + code}\n`;
  var captcha_key = code.trim();
  var token = $("input[name='token']").val();
  console.log(code);
  addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});') + '&access_token=' + token + '&callback=checkFri' + id + '&v=5.69');
  cap[id] = false;
}

function sendCapKnop(owner_id, post_id, sticker_id, captcha_sid, id) {
  console.log(captcha_sid);
  var captcha_key = $("input[name='captext" + id + "']").val();
  var token = $("input[name='token" + id + "']").val();

        var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        var rucaptcha_token = $("input[name='rucaptcha']").val();
        console.log('Отправили: ' + data.error.captcha_sid);
        window.capt = {
          'user': userArr[id-1],
          'post': postArr[id-1],
          'sticker': stic,
          'sid': data.error.captcha_sid
        };
  if (window.dataC.length == 0) {
    addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});') + '&access_token=' + token + '&callback=checkFri' + id  + '&v=5.69');
  } else {
    var rand = Math.floor(Math.random() * window.dataC.length);
    if (typeof dataC[rand] == "object") {
      var text = dataC[rand].comment;
    } else {
      var text = dataC[rand];
    }
    addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "message": "' + text + '", "captcha_key":"'+captcha_key+'", "captcha_sid":"'+captcha_sid+'"});') + '&access_token=' + token + '&callback=checkFri' + id  + '&v=5.69');
  }
  cap[id] = false;
  $('#infoust' + id).empty();
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
