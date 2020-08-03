function loadIn(file, className) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				document.getElementsByClassName(className)[0].innerHTML = allText;
			}
		}
	}
	rawFile.send(null);
}
function getCurrentPage() {
	return location.pathname.split('/').slice(-1)[0].split('.html')[0];
}
$(document).ready(function() {
    //Load the header component
    var curPage = getCurrentPage();
    if(curPage !== 'index') {
       if($(".header").length > 0) {
           loadIn('./components/header.html', 'row header');
       }
       if($(".footer").length > 0) {
           loadIn('./components/footer.html', 'row footer');
       }
       if($('.header .link a').length > 0) {
           $('.header .link a').parent().removeClass('selected');
           $(`.header .link a.${curPage}`).parent().addClass('selected');
	   }
	   let titleList = curPage.split('-');
	   for(let i = 0; i < titleList.length; i++) {
		   if(titleList[i] !== 'and') {
			   titleList[i] = titleList[i].charAt(0).toUpperCase() + titleList[i].slice(1);
		   }
	   }
	   let title = titleList.join(' ');
	   $('#dropdownMenuButton').html(title);
    }
})