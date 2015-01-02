$(function ()
{
	var manifestUrl = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
	var request = navigator.mozApps.checkInstalled(manifestUrl);
	alert(manifestUrl);
	
	alert(request.result+" result "+request);
	$("#wrap").append("wata");

	//alert(request.onsuccess);
	request.onsuccess = function()
	{
		alert("suces");
		if (request.result)
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
	}
	request.onerror = function()
	{
		$("#wrap").append("<p>Ocurrio un error verificando la instalacion: " + this.error.message + "</p>");
	}

	$("#btnBack").click(function()
	{
		history.back();
	});
});
