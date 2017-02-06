<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="public/css/bootstrap.min.css">
    <title>接口说明</title>
</head>
<body> <!-- ng-app="homeApp" -->
    <div class="container">
        <div class="row">
            <h3>获取通知公告</h3>
            <strong>请求URL：</strong><span>http://211.149.149.65:8080/AQBZ/Active/Query.php</span><br>
            <strong>参数：</strong>
            <ul>
                <li>pMode:getTZ-----请求模式</li>
                <li>size:3-----获取多少条数据，若参数为空，则获取所有数据</li>
            </ul>
            <strong>返回值：</strong><span>{"TableList":[{"ID":"1","LX":"1","ZT":"主题1","FBT":"副标题1","CJSJ":"2016-12-14 23:18:51","NR":"dsadas"},{"ID":"2","LX":"1","ZT":"231231","FBT":"23132","CJSJ":"2016-12-13 23:19:08","NR":"\u6e29\u6cc9\u533a\u4e8c\u7fa4\u4e8c\u7fa4\u4e8c"}]}</span>

            <span></span>
        </div>
        <div class="row">
            <h3>获取新闻动态</h3>
            <strong>请求URL：</strong><span>http://211.149.149.65:8080/AQBZ/Active/Query.php</span><br>
            <strong>参数：</strong>
            <ul>
                <li>pMode:getXWDT-----请求模式</li>
                <li>size:3-----获取多少条数据，若参数为空，则获取所有数据</li>
            </ul>
            <strong>返回值：</strong><span>{"TableList":[{"ID":"1","LX":"1","ZT":"主题1","FBT":"副标题1","CJSJ":"2016-12-14 23:18:51","NR":"dsadas"},{"ID":"2","LX":"1","ZT":"231231","FBT":"23132","CJSJ":"2016-12-13 23:19:08","NR":"\u6e29\u6cc9\u533a\u4e8c\u7fa4\u4e8c\u7fa4\u4e8c"}]}</span>

            <span></span>
        </div>
    </div>
</body>
</html>
<script>

</script>