$(function ()
{
	var manifestUrl = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
	var request = navigator.mozApps.checkInstalled(manifestUrl);
	
	if (request.error)
		$("#wrap").append("<p>Ocurrio un error verificando la instalacion: " + request.error.message + "</p>");
	else if (request.result)
		$("#wrap").append("<p>Esta app ya esta instalada en su dispositivo</p>");
	else
	{
		$("#btnInstall").click(function()
		{
			var req = navigator.mozApps.install(manifestUrl);

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
