$(function ()
{
	var manifestUrl = "http://zackheredia.github.io/HostedTimer/manifest.webapp";
	var request = navigator.mozApps.checkInstalled(manifestUrl);
	
	alert("result"+request.result);
	$("#wrap").append("wata");

	$("#btnInstall").click(function()
	{
		request.onsuccess = function()
		{
			if (request.result)
				$("#wrap").append("<p>Esta app Ya esta instalada en su dispositivo</p>");
			else
				install(manifestUrl);
		}
		request.onerror = function()
		{
			$("#wrap").append("<p>Ocurrio un error verificando la instalacion: " + this.error.message + "</p>");
		}
	});

	$("#btnBack").click(function()
	{
		history.back();
	});
});

function install (manifestUrl) 
{
	var request = navigator.mozApps.install(manifestUrl);
	alert(request + "intall " + manifestUrl);

	request.onsuccess = function()
	{
		$("#wrap").append("<p>La app se ha instalado en su dispositivo</p>");
		$("#btnInstall").unbind("click");
	}
	request.onerror = function()
	{
		$("#wrap").append("<p>Ocurrio un error durante la instalacion: " + this.error.name + "</p>");
	}
}
