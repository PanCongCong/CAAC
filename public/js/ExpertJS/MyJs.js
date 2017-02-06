function JSONQuery(obj, key, value) {
	for (var item in obj) {
		if (item.key == value) {
			return item;
		}
	}
};
$(document).ready(function () {
	if (getCookie("userZ") == "") {
		location = "login.html";
	}
	$('.nav-list').click(function (e) {
		$('.nav-list').removeClass('nav-list-act2');
		$(this).addClass('nav-list-act2');
	});
	$('#lefile').change(function () {
		alert('222');
		$('#photoCover').val($(this).val());
	});
});