$(function () {
    //定义加载事件，如果用户已经登录，则直接进行跳转
    $(document).ready(function () {
        var data=Object;
        data.pMode="isLogin";
        $.ajax({
            type: "POST",
            url: "http://1.pandemo.applinzi.com/YiXiu_Order/Active/Submit.php",
            data: data,
            success: function (response) {
                console.log(response);
                if (response != "0") {
                   location = "home.html";
                }
            }
        });
    });
    //定义键盘事件，当按回车时触发登录
    $(document).keydown(function (event) {
        if (event && event.keyCode == 13) {
            $("#sub").click();
        }
    })
    //定义登录事件
    $("#sub").click(function (e) {
        //获取控件默认值，原生写法可行，jquery不可行？
        var a = document.getElementById("uname");
        console.log(a.defaultValue);

        var u = $("#uname").val();
        if (u == "" || u == null) {
            alert("请输入用户名");
            e.preventDefault();
        }
        else {
            var p = $("#upass").val();
            if (p == "" || p == null) {
                alert("请输入密码");
                e.preventDefault();
            }
            else {
                $("#sub").attr("disabled", "disabled");
                var data = Object;
                data.pMode = "CheckLogin";
                data.uname = $("#uname").val();
                data.upass = $("#upass").val();
                $.ajax({
                    type: "POST",
                    url: "http://1.pandemo.applinzi.com/YiXiu_Order/Active/Submit.php",
                    data: data,
                    success: function (response) {
                        console.log(response);
                        if (response == "0") {
                            alert("用户名或密码错误");
                            $("#sub").removeAttr("disabled");
                        }
                        else if (response == "1") {
                            location = "home.html";
                        }
                    }
                });
            }
        }
    });

});
