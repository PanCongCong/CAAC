<?php
ob_start();//控制您的浏览器cache，加在setcookie代码之前，一般加在页面顶部 
ob_get_clean();//输出浏览器cache，看看结果是否存在cookie，加在setcookie代码之后，一般加在页面最后 
@ header("Content-Type:image/png");
session_start();
function random() {
    $srcstr = "123456789";
    mt_srand();
    $strs = "";
    $one=(int)$srcstr[mt_rand(0, 8)];
    return $one;
    // for ($i = 0; $i < $len; $i++) {
    //     $strs .= $srcstr[mt_rand(0, 8)];
    // }
    // return $strs;
}

//随机生成的字符串
$str1 = random();
$str2 = random();
$str=$str1."+".$str2;
//选择 cookie，必须在文本输出之前
SetCookie("verification", $str1+$str2, time() + 7200, "/");

//验证码图片的宽度
$width  = 50;

//验证码图片的高度
$height = 31;

//声明需要创建的图层的图片格式


//创建一个图层
$im = imagecreate($width, $height);

//背景色
$back = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);

//模糊点颜色
$pix  = imagecolorallocate($im, 187, 230, 247);

//字体色
$font = imagecolorallocate($im, 41, 163, 238);

//绘模糊作用的点
mt_srand();
for ($i = 0; $i < 1000; $i++) {
    imagesetpixel($im, mt_rand(0, $width), mt_rand(0, $height), $pix);
}

//输出字符
imagestring($im, 5, 7, 5, $str, $font);

//输出矩形
imagerectangle($im, 0, 0, $width -1, $height -1, $font);

//输出图片
imagepng($im);

imagedestroy($im);

$str = md5($str);


//选择 Session
// $_SESSION["verification"] = $str;
?>