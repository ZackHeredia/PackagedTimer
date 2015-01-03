$(function ()
{
	var manifestUrl = location.href.substring(0, location.href.lastIndexOf("/")) + "/package.manifest";
	
	if (!navigator.mozApps.installPackage)
		$("#wrap").append("<p>La app no es compatible con su dispositivo</p>");
	else
	{
		$("#btnInstall").click(function()
		{
			var request = navigator.mozApps.installPackage(manifestUrl);

			request.onsuccess = function()
			{
				$("#wrap").append("<p>La app se ha instalado en su dispositivo</p>");
				$("#btnInstall").unbind("click");
			}
			request.onerror = function()
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