function JSONQuery(obj, key, value) {
	for (var item in obj) {
		if (item.key == value) {
			return item;
		}
	}
};
$(document).ready(function () {
	if (getCookie("userB") == "") {
		location = "login.html";
	}
	$('.nav-list').click(function (e) {
		$('.nav-list').removeClass('nav-list-act');
		$('.navArrow').css({'display':'none'});
		$(this).addClass('nav-list-act');
		$(this).find('.navArrow').css({'display':'block'});
	});
	$('#lefile').change(function () {
		alert('222');
		$('#photoCover').val($(this).val());
	});
});