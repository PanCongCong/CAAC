$(function () {
    //定义加载事件，如果用户已经登录，则直接进行跳转
    baseURL = "http://211.149.149.65:8080/AQBZ/";
    $("#yzm").click(function () {
        $("#yzm").attr("src", "../../public/images/checkcode.php?" + Math.random());
    });
    $(document).ready(function () {
        // 校验是否登录
        if (getCookie("userB") != "") {
            //此处有坑，若仅指定index.html，不明确具体的route，那么进入界面之后虽然会显示默认界面，但是点击界面上元素触发事件时界面会刷新，第二次点击才有效
            //怀疑在点击事件时又会去找一次该界面对应的controller，并记录在一个变量之中。
            // location = "index.html";
            location = "index.html?#/info";
        }
    });
    //定义键盘事件，当按回车时触发登录
    $(document).keydown(function (event) {
        if (event && event.keyCode == 13) {
            $("#sub").click();
        }
    });
    //定义登录事件
    $("#sub").click(function (e) {
        var u = $("#NAME").val();
        if (u == "" || u == null) {
            alert("请输入用户名");
            e.preventDefault();
        }
        else {
            var p = $("#PWD").val();
            if (p == "" || p == null) {
                alert("请输入密码");
                e.preventDefault();
            }
            else {
                //判断验证码是否输入正确
                if (getCookie("verification") != $("#yzmText").val()) {
                    alert("验证码错误");
                    return;
                }
                // console.log(baseURL);
                $("#sub").attr("disabled", "disabled");
                var data = Object;
                data.pMode = "CheckLoginB";
                data.NAME = $("#NAME").val();
                data.PWD = $("#PWD").val();
                data.LX = "6";
                $.ajax({
                    type: "POST",
                    url: baseURL + "Active/SubmitModel.php",
                    data: data,
                    success: function (response) {
                        console.log(response);
                        if (response != "1") {
                            alert("用户名或密码错误");
                            $("#sub").removeAttr("disabled");
                        }
                        else if (response == "1") {
                            console.log($("#remember").is(':checked'));
                            if ($($("#remember").is(':checked'))) {
                                setCookie("userB", data.NAME, 0);
                            }
                            else {
                                setCookie("userB", data.NAME, 0);
                            }
                            location = "index.html?#/info";
                        }
                    }
                });
            }
        }
    });

});
