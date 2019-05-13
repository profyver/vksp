window.array = [];
window.arr = [];
window.error = 0;
window.success = 0;
window.cap = false;
window.accUser = '';
window.accPost = '';
            function showHide(element_id) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(element_id)) {
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(element_id);
                    //Если css-свойство display не block, то:
                    if (obj.style.display != "block") {
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else console.log("Элемент с id: " + element_id + " не найден!");
            }
function showNot(title,text,type,type2) {
	document.getElementById('infoust').innerHTML = '<div class="alert alert-dismissable alert-'+ type2 +'" style="visibility: visible; opacity: 1; display: block; transform: translateY(0px);"><i class="fa fa-check"></i>&nbsp; <strong>'+ title +'</strong> '+ text +'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>';
}
function setButton() {
	var url = $("input[name='url']").val();
	if(!url) showNot('Внимание!','Загрузите ссылку','info','info');
	url = url.split('wall')[1];
	url = url.split('_');
	accUser = url[0];
	accPost = url[1];
	var token = $("input[name='token']").val();
	if (token) {
		addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.users.get({})[0].id;') + '&access_token=' + token + '&callback=checkToken&v=5.34');
		} else showNot('Внимание!','Загрузите «ACCESS_TOKEN» Получить токен можно <a target="_blank" href="https://oauth.vk.com/authorize?client_id=2685278&redirect_uri=https://api.vk.com/blank.html&display=page&scope=offline%2Cfriends%2Cmessages&response_type=token">здесь</a>','info','info');
	}
function addScript(src) {
    var elem = document.createElement("script");
    elem.src = src;
    console.log(document.head.appendChild(elem));
}
function checkToken(date) {
	if (date.response) checkFriends();
	else showNot('Ошибка!','«ACCESS_TOKEN» НЕ ВАЛИДНЫЙ! Попробуйте загрузить его снова.','error','danger');
}
function getDialogs() {
if (token) {
	addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.messages.get({"out":1, "count":1}).items@.id;') + '&access_token=' + token + '&callback=checkFriends&v=5.69');
	} else showNot('Внимание!','Загрузите «ACCESS_TOKEN»','info','info');
}
function checkFriends(test) {
	//console.log(test);
	if(!cap) {
		var token = $("input[name='token']").val();
		var stic = $("input[name='stic']").val();
		addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":'+ accUser +', "post_id":'+ accPost +', "sticker_id":'+ stic +'});') + '&access_token=' + token + '&callback=checkFri&v=5.69');
		setTimeout(checkFriends, 1000);
	}
}
function checkFri(data) {
	if(data.error) {
		if(data.error.error_code == 14) {
			document.getElementById('sound1').play();
			result.value += `${'CAPTCHA'}\n`;
			cap = true;
			var rucaptcha_token = $("input[name='rucaptcha']").val();
			if(rucaptcha_token == "" || rucaptcha_token == null) {
				var capKey = $("input[name='captext']").val();
				var stic = $("input[name='stic']").val();
				document.getElementById('infoust').innerHTML = '<img src="'+ data.error.captcha_img +'" alt="каптча"><p><div class="col-xs-4"></div><div class="col-xs-4"><input type="text" name="captext"  class="form-control"  placeholder="токен"></div><div class="col-xs-4"></div><br><br><center><button type="button" class="btn btn-danger btn-raised" onclick="sendCapKnop('+ accUser +','+ accPost +','+ stic +','+data.error.captcha_sid+')">Отправить капчу!</button></center><br>';
			} else {
				var capKey = $("input[name='captext']").val();
				var stic = $("input[name='stic']").val();
				var rucaptcha_token = $("input[name='rucaptcha']").val();
				console.log('Отправили: ' + data.error.captcha_sid);
				$.post(
				  "/zakaz1/cap.php",
				  {
					url: data.error.captcha_img,
					sid: data.error.captcha_sid,
					user: accUser,
					post: accPost,
					sticker: stic,
					rucaptcha: rucaptcha_token
				  },
				  onAjaxSuccess
				);
			}
		}
	} else {
		result.value += `${"Отправили стикер: " +data.response.comment_id}\n`;
	}
}
function onAjaxSuccess(data) {
	var myObject = JSON.parse(data);
	sendCap(myObject['user'],myObject['post'],myObject['sticker'],myObject['sid'],myObject['code']);
	console.log(myObject);
}
function sendCap(owner_id,post_id,sticker_id,captcha_sid,code) {
	console.log("Разгадали капчу " + code);
	result.value += `${"Разгадали капчу: " + code}\n`;
	var captcha_key = code;
	var token = $("input[name='token']").val();
	console.log(code);
	addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":'+ owner_id +', "post_id":'+ post_id +', "sticker_id":'+ sticker_id +',"captcha_key":"'+ captcha_key +'","captcha_sid":"'+ captcha_sid +'"});') + '&access_token=' + token + '&callback=checkFriends&v=5.69');
	cap = false;
	//result.value += `${data.response}\n`;
}
function sendCapKnop(owner_id,post_id,sticker_id,captcha_sid) {
	console.log(captcha_sid);
	var captcha_key = $("input[name='captext']").val();
	var token = $("input[name='token']").val();
	addScript('https://api.vk.com/method/execute?code=' + encodeURIComponent('return API.wall.createComment({"owner_id":'+ owner_id +', "post_id":'+ post_id +', "sticker_id":'+ sticker_id +',"captcha_key":"'+ captcha_key +'","captcha_sid":"'+ captcha_sid +'"});') + '&access_token=' + token + '&callback=checkFriends&v=5.69');
	cap = false;
	//result.value += `${data.response}\n`;
}