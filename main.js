window.dataC = [];
window.cap = false;
window.accUser = '';
window.accPost = '';

window.userArr = [];
window.postArr = [];
window.tokenArr = [];
window.accUsed = 1;
window.comm_send = 0;
if (window.location.host=="www.vksp.tk"){
  window.location.replace("https://vksp.tk/")
}
function addAcc(){
  accUsed ++
  var accPrev = accUsed - 1;
  $("tr:contains('" + "Аккаунт " + accPrev + "')").after('<tr><td><p class="control-label">Аккаунт ' + accUsed + ' (<a href="https://oauth.vk.com/authorize?client_id=2685278&redirect_uri=https://api.vk.com/blank.html&display=page&scope=offline%2Cfriends&response_type=token">получить токен</a>)</p><input type="text" name="token'+ accUsed +'" class="form-control" placeholder="от = до &"></td><td><p class="control-label">Ссылка</p><input type="text" name="url'+accUsed+'" class="form-control" placeholder="vk.com/wall-45745333_34298175"></td></tr>');
  $("#foust"+ accPrev).after('div id="foust'+accUsed+'"></div>');
}
function delAcc(){
  if (accUsed > 1) {
      $("tr:contains('" + "Аккаунт " + accUsed + "')").remove();
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

function showHide(element_id) {
  if (document.getElementById(element_id)) {
    var obj = document.getElementById(element_id);
    if (obj.style.display != "block") {
      obj.style.display = "block";
    } else obj.style.display = "none";
  } else console.log("Элемент с id: " + element_id + " не найден!");
}

function showNot(title, text, type, type2) {
  document.getElementById('infoust').innerHTML = '<div class="alert alert-dismissable alert-' + type2 + '" style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);"><i class="fa fa-check"></i>&nbsp; <strong>' + title + '</strong> ' + text + '</div>';
}

function setButton() {
    for(i=1; i <= accUsed; i++){
      let url= $("input[name='url" + i + "']").val();
      url = url.split('wall')[1].split('_');
      userArr[userArr.length] = url[0];
      postArr[postArr.length] = url[1];
      let token = $("input[name='token"+ i +"']").val();
      tokenArr[tokenArr.length] = token;
      window.eval('function checkFri'+i+'(data){checkFri(data, '+(i-1)+')}');
      checkFriends(token, (i-1))
    }

  //var url = $("input[name='url']").val();
  //if (!url){
  //  showNot('Внимание!', 'Загрузите ссылку', 'info', 'info');
  //} else {
  //  url = url.split('wall')[1];
  //  url = url.split('_');
  //  accUser = url[0];
  //  accPost = url[1];
  //  changeDataM();
  //  var token = $("input[name='token']").val();
  //  if (token) {
 //     addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.users.get({})[0].id;') + '&access_token=' + token + '&callback=checkToken&v=5.34');
  //  } else showNot('Внимание!', 'Загрузите «ACCESS_TOKEN» Получить токен можно <a target="_blank" href="https://oauth.vk.com/authorize?client_id=2685278&redirect_uri=https://api.vk.com/blank.html&display=page&scope=offline%2Cfriends&response_type=token">здесь</a>', 'info', 'info');
//  }
}

function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  console.log(document.head.appendChild(elem));
}

function checkToken(date) {
  if (date.response) checkFriends();
  else showNot('Ошибка!', '«ACCESS_TOKEN» НЕ ВАЛИДНЫЙ! Попробуйте загрузить его снова.', 'error', 'danger');
}

function checkFriends(token, id) {
  if (!cap) {
    var token = token;
    var stic = $("input[name='stic']").val();
    if (window.dataC.length == 0) {
      addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + userArr[id] + ', "post_id":' + postArr[id] + ', "sticker_id":' + stic + '});') + '&access_token=' + token + '&callback=checkFri'+id+'&v=5.69');
    } else {
      var rand = Math.floor(Math.random() * window.dataC.length);
      if (typeof dataC[rand] == "object") {
        var text = dataC[rand].comment;
      } else {
        var text = dataC[rand];
      }
      addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + userArr[id] + ', "post_id":' + postArr[id] + ', "message": "' + text + '"});') + '&access_token=' + token + '&callback=checkFri'+id+'&v=5.69');
    }

  }
  setTimeout(function(){checkFriends(token, id)}, 1000 + 1000 * Math.random());
}

function checkFri(data, id) {
  if (data.error) {
    if (data.error.error_code == 14) {
      document.getElementById('sound1').play();
      result.value += `${'CAPTCHA'}\n`;
      result.value += `${'Всего отправлено: '+window.comm_send}\n`
      cap = true;
      var rucaptcha_token = $("input[name='rucaptcha']").val();
      if (rucaptcha_token == "" || rucaptcha_token == null) {
        var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        document.getElementById('infoust' + id).innerHTML = '<img id="img" src="' + data.error.captcha_img + '" alt="каптча"><p><div class="col-xs-4"></div><div class="col-xs-4"><input type="text" name="captext'+id+'"  class="form-control"  placeholder="токен"></div><div class="col-xs-4"></div><br><br><center><button type="button" class="btn btn-danger btn-raised" onclick="sendCapKnop(' + userArr[id] + ',' + postArr[id] + ',' + stic + ',' + data.error.captcha_sid + ', '+id+')">Отправить капчу!</button></center><br>';
      } else {
        var capKey = $("input[name='captext']").val();
        var stic = $("input[name='stic']").val();
        var rucaptcha_token = $("input[name='rucaptcha']").val();
        console.log('Отправили: ' + data.error.captcha_sid);
        window.capt = {
          'user': accUser,
          'post': accPost,
          'sticker': stic,
          'sid': data.error.captcha_sid
        };
        $.get(
          "/capt.php", {
            "url": encodeURIComponent(data.error.captcha_img),
            "key": rucaptcha_token
          }, onAjaxSuccess);
      }
    }
  } else {
    result.value += `${"Отправили коммент: " +data.response.comment_id}\n`;
    window.comm_send = window.comm_send + 1;
  }
}

function onAjaxSuccess(data) {
  var code = data;
  var capt = window.capt;
  sendCap(capt['user'], capt['post'], capt['sticker'], capt['sid'], code);
  console.log(code);
}

function sendCap(owner_id, post_id, sticker_id, captcha_sid, code, id) {
  console.log("Сервер разгадал капчу " + code);
  result.value += `${"капча: " + code}\n`;
  var captcha_key = code.trim();
  var token = $("input[name='token']").val();
  console.log(code);
  addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});') + '&access_token=' + token + '&callback=checkFri&v=5.69');
  window.cap = false;
  //alert(cap);
  //result.value += `${data.response}\n`;
}

function sendCapKnop(owner_id, post_id, sticker_id, captcha_sid) {
  console.log(captcha_sid);
  var captcha_key = $("input[name='captext"+id+"']").val();
  var token = $("input[name='token"+id+"']").val();
  addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":' + owner_id + ', "post_id":' + post_id + ', "sticker_id":' + sticker_id + ',"captcha_key":"' + captcha_key + '","captcha_sid":"' + captcha_sid + '"});') + '&access_token=' + token + '&callback=checkFri&v=5.69');
  window.cap = false;
  //result.value += `${data.response}\n`;
}
