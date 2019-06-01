var ruCaptcha = {

    getAnswer: function(callback){

        var captchaId = ruCaptcha.captchaID;
        var apiKey = ruCaptcha.apikey;
        $.ajax ({
            type: "GET",
            url: "https://rucaptcha.com/res.php",
            data: 'key=h' + apiKey + '&action=get&id=' + captchaId + "&json=true&header_acao=1",

            success: function(answer){
                if(answer.status && answer.status == 1){
                    ruCaptcha.securityCode = answer.request;
                    ruCaptcha.actions.message("Ну вроде справились, код на картинке : " + answer.request);
                    if (callback){
                        callback(null);
                        return;
                    }
                }else if(answer.status == 0 && answer.request == "CAPCHA_NOT_READY"){
                    ruCaptcha.actions.message("Не готово, отдохни чутка ©: ");

                    setTimeout(function(){
                        ruCaptcha.getAnswer(callback);
                    }, 1000);
                    return;
                }else if(answer.status == 0 && answer.request == "ERROR_CAPTCHA_UNSOLVABLE"){
                    ruCaptcha.actions.message("Моя не уметь читать такие цифры :( ");

                    setTimeout(function(){
                        ruCaptcha.getCode(callback);
                    }, 1000);
                    return;
                }
            },
            error: function(xhr, error){
                ruCaptcha.actions.message("Что-то опять пошло не так... ");
                setTimeout(function(){
                    ruCaptcha.getAnswer(callback);
                }, 1000);
            }
        });


    },
    getBallance: function(callback){

        var apiKey = ruCaptcha.apikey;
        $.ajax ({
            type: 'GET',
            url: 'http://rucaptcha.com/res.php',
            data: 'key=' + apiKey + '&action=getbalance&json=true&header_acao=1&json=1',
            crossDomain: true,
            dataType: "jsonp",
            success: function(answer){
                if(answer.status && answer.status == 1){
                    ruCaptcha.actions.message("Ваш балланс составляет : " + answer.request);

                    if (callback){
                        callback(null);
                        return;
                    }
                }else{
                    ruCaptcha.actions.message("Неизвестная ошибка");

                }
            },
            error: function(xhr, error){
                ruCaptcha.actions.message("Что-то опять пошло не так... ");
                setTimeout(function(){
                    ruCaptcha.getBallance(callback);
                }, 1000);
            }
        });


    },
    getImage: function(callback){
        var url = ruCaptcha.url;

        ruCaptcha.convertFileToBase64viaFileReader(url, function(base64img){
            ruCaptcha.base64img = base64img;
            if(callback){
                callback(null);

            }
        });


    },
    uploadFile:  function(callback){

        var base64img = ruCaptcha.base64img;
        var apiKey = ruCaptcha.apikey;
        var softID = ruCaptcha.soft_id;
        $.ajax ({
            type: 'POST',
            url: 'http://rucaptcha.com/in.php',
            data: 'method=base64&key=' + apiKey + '&body=' + base64img + '&json=true&header_acao=1&soft_id=' + softID,

            success: function(answer){
                if(answer.status && answer.status == 1){
                    ruCaptcha.captchaID = answer.request;
                    ruCaptcha.actions.message("Поставлено в обработку под номером : " + answer.request);


                    if (callback){
                        callback(null)
                    };


                }else if (answer.status == 0 && answer.request == "ERROR_ZERO_CAPTCHA_FILESIZE"){
                    ruCaptcha.actions.message("Не картинка, а безвкусица!!!...");

                    setTimeout(function(){
                        ruCaptcha.getCode(callback);
                    }, 5000);
                    return;

                }else if (answer.status == 0 && answer.request == "ERROR_NO_SLOT_AVAILABLE"){
                    ruCaptcha.actions.message("Никто не хочет работать за такие копейки, ждем.....");
                    setTimeout(function(){
                        ruCaptcha.getCode(callback);
                    }, 5000);
                    return;

                }else if (answer.status == 0 && answer.request == "ERROR_ZERO_BALANCE") {
                    ruCaptcha.actions.stop(callback);
                    ruCaptcha.actions.message("Нулевой балланс. Есть мелочь?");
                    return;
                }

            },
            error: function(xhr, error){
                ruCaptcha.actions.message("Что-то опять пошло не так...");

                setTimeout(function(){
                    ruCaptcha.uploadFile(callback);
                }, 1000);
            }

        });

    },
    complaint: function(callback){
        var captchaId = ruCaptcha.captchaID;
        var apiKey = ruCaptcha.apikey;
        $.ajax ({
            type: 'GET',
            url: 'http://rucaptcha.com/res.php',
            data: 'key=' + apiKey + '&action=reportbad&id=' + captchaId + "&json=true&header_acao=1",

            success: function(answer){
                if (callback){
                    callback(null)
                };
            },
            error: function(){
                ruCaptcha.actions.stop(callback);
            }
        });
    },
    getCode: function(callback){

        async.series([

                ruCaptcha.getImage,
                ruCaptcha.uploadFile,
                ruCaptcha.getAnswer

            ],
            function(err, results){
                if(callback){
                    callback(null);
                }
            }
        );

    },
    convertFileToBase64viaFileReader: function(url, callback){

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
            var reader  = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
    }
    ,
    actions: {
        stop: function(callback){
            /*Действия при остановке*/
        },
        message:function(text){
            /*Сделать обертку для логирования*/
            console.log(text);

        }
    },
    securityCode:"",
    base64img:"",
    captchaID:"",
    soft_id:"",
    url:"",
    apikey:""

};
