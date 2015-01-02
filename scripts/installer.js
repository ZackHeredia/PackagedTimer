$(function ()
{
	var manifestUrl = location.href.replace("index.html", "manifest.webapp");
	var request = navigator.mozApps.checkInstalled(manifestUrl);

	$("#btnInstall").click(function ()
	{
		request.onsuccess = function ()
		{
			if (request.result)
				$("#wrap").append("<p>Esta app Ya esta instalada en su dispositivo</p>");
			else
				install(manifestUrl);
		}
		request.onerror = function ()
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

	request.onsuccess = function ()
	{
		$("#btnInstall").unbind("click");
		$("#wrap").append("<p>La app se ha instalado en su dispositivo</p>")
	}
	request.onerror = function ()
	{
		$("#wrap").append("<p>Ocurrio un error durante la instalacion: " + this.error.name + "</p>")
	}
}