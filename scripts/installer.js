$(function ()
{
	var manifestUrl = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
	var request = navigator.mozApps.checkInstalled(manifestUrl);
	alert(manifestUrl);

/*	request.onsuccess = function()
	{
		alert("suces");
		if (request.result)
			
		else
		{
			
		}
	}
	request.onerror = function()
	{
	
	}*/

	if (request.error)
		$("#wrap").append("<p>Ocurrio un error verificando la instalacion: " + request.error.message + "</p>");
	else if (request.result)
		$("#wrap").append("<p>Esta app Ya esta instalada en su dispositivo</p>");
	else
	{
		$("#btnInstall").click(function()
		{
			var req = navigator.mozApps.install(manifestUrl);
			alert(req + "intall " + manifestUrl);

			req.onsuccess = function()
			{
				$("#wrap").append("<p>La app se ha instalado en su dispositivo</p>");
				$("#btnInstall").unbind("click");
			}
			req.onerror = function()
			{
				$("#wrap").append("<p>Ocurrio un error durante la instalacion: " + this.error.name + "</p>");
			}
		});
	}
	
	$("#btnBack").click(function()
	{
		history.back();
	});
});
