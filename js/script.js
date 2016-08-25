
var httpRequest; 
if(window.XMLHttpRequest) {
	httpRequest = new XMLHttpRequest();
} else {
	httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
}

httpRequest.open('GET', 'data/data.xml');

httpRequest.onreadystatechange = function(){
	if((httpRequest.status == 200)&&(httpRequest.readyState==4)) {
	    var data = httpRequest.responseXML.getElementsByTagName('shortname');
	    var result = '<ul>';
	    for (var i = 0; i < data.length; i++) {
	        result += '<li>' + data[i].firstChild.nodeValue + '</li>';
	    }
	    result = '</ul>';
	    document.getElementById('readData').innerHTML = result;
	}
}
httpRequest.send();


