<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/11/16
 * Time: 19:39
 */
define("ROOT", $_SERVER['DOCUMENT_ROOT']);
define('APPID','wxfb6cf6f49909335b');
define('APPSECRET','db9c9c2e1d98935279e47df16b912d17');

define('AK','lE0ZnqIn5VqlaiEhBX4F8AbE');//百度地图AK

define('SAEUrl','http://1.yixiugekj.sinaapp.com/');//新浪SAE域名http://1.yixiugekj.sinaapp.com/

//微米短信UID、密码
define('DXUID','pZmcVLP10pi9');
define('DXPASS','buecwbay');

//微信支付
//受理商ID，身份标识
define('MCHID','1292965901');
//商户支付密钥Key。审核通过后，在微信发送的邮件中查看
define('KEY','123590750yixiugekejiyouxiangongs');
//=======【JSAPI路径设置】===================================
//获取access_token过程中的跳转uri，通过跳转将code传入jsapi支付页面
define('JS_API_CALL_URL','http://www.xxxxxx.com/demo/js_api_call.php');
//=======【证书路径设置】=====================================
//证书路径,注意应该填写绝对路径
define('SSLCERT_PATH',ROOT.'/WxPayPubHelper/cacert/apiclient_cert.pem');
define('SSLKEY_PATH',ROOT.'/WxPayPubHelper/cacert/apiclient_key.pem');


//=======【异步通知url设置】===================================
//异步通知url，商户根据实际开发过程设定
define('NOTIFY_URL','http://1.yixiugekj.sinaapp.com/WeiXiuLi/page/DingDanXQ.php');

//=======【curl超时设置】===================================
//本例程通过curl使用HTTP POST方法，此处可修改其超时时间，默认为30秒
define('CURL_TIMEOUT','30');
