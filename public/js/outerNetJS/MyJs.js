function JSONQuery(obj,key,value){
	for(var item in obj){
		if(item.key==value){
			return item;
		}
	}
};
$(document).ready(function(){
	//校验是否登录
	// $.ajax({
	// 	type:'post',
	// 	url:"http://1.yixiugekj.sinaapp.com/New/Active/SubmitModel.php",
	// 	data:{pMode:"CheckLogin"},
	// 	dataType:'json',
	// 	success:function(da){
	// 		console.log(da);
	// 		if(da==false){
	// 			console.log("111");
	// 			location='http://1.yixiugekj.sinaapp.com/New/page/GuanLi/login.php';

	// 		}
	// 		else{
	// 			console.log("22");
	// 		}
	// 	}
	// });

	$('ul.nav>li').click(function(e){
		$('ul.nav>li').removeClass('active');
		$(this).addClass('active');
	});
});