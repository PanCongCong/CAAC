$(function() {
    //定义加载事件，如果用户已经登录，则直接进行跳转
    baseURL = "http://211.149.149.65:8080/AQBZ/";
    $(document).ready(function() {
        // 校验是否登录
        if (getCookie("userJ") != "") {
            location = "index.html";
        }
    });
    //定义键盘事件，当按回车时触发登录
    $(document).keydown(function(event) {
        if (event && event.keyCode == 13) {
            $("#sub").click();
        }
    });
    //定义登录事件
    $("#sub").click(function(e) {
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
                // console.log(baseURL);
                $("#sub").attr("disabled", "disabled");
                var data = Object;
                data.pMode = "CheckLoginB";
                data.NAME = $("#NAME").val();
                data.PWD = $("#PWD").val();
                data.LX = "2";
                $.ajax({
                    type: "POST",
                    url: baseURL + "Active/SubmitModel.php",
                    data: data,
                    success: function(response) {
                        console.log(response);
                        if (response == "0") {
                            alert("用户名或密码错误");
                            $("#sub").removeAttr("disabled");
                        }
                        else if (response == "1") {
                            setCookie("userJ", data.NAME, 1);
                            location = "index.html";
                        }
                    }
                });
            }
        }
    });

});
