/**
 * 
 */

$(document).ready(function() {
	$("button").onclick(function() {
		console.log("ok");
		var data = {
			"login" : "LOGIN5",
			"password" : "PASSWORD5"
		};
		var url = "http://localhost:9080/loginPage";
		$.ajax({
			type : "POST",
			url : url,
			data : data,
			success : function() {
				console.log("ok");
			}
		});
	});
});

function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function summa() {
	var a = document.getElementById("inputLogin").value;
	var b = document.getElementById("inputPassword").value;
	var xmlhttp = getXmlHttp();
	xmlhttp.open('POST', 'http://localhost:9080/loginPage', false);
	xmlhttp.setRequestHeader('Content-Type', 'application/json');
	xmlhttp.send("inputLogin=" + encodeURIComponent(a) + "&inputPassword="
			+ encodeURIComponent(b));
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				document.getElementById("res").innerHTML = xmlhttp.responseText;
			}
		}
	};
}
