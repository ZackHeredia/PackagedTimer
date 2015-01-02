$(function()
{
    localStorage.c =(localStorage.c || "0.0");
    localStorage.times = (localStorage.times || '[]');

    var t, cl = $("#crono");
    var times = JSON.parse(localStorage.times);

    function incr()     
    { 
        localStorage.c = +localStorage.c + 0.1; 
    }   
    function mostrar()  
    { 
        cl.html((+localStorage.c).toFixed(1)); 
    }   
    function arrancar() 
    { 
        t=setInterval(function() { incr(); mostrar() }, 100);
    }   
    function parar()    
    { 
        clearInterval(t);  
        t=undefined;    

        times.push(localStorage.c); 
        localStorage.times=JSON.stringify(times); 
        enlistar(localStorage.c)
    }   
    function cambiar ()  
    { 
        if (!t) 
            arrancar(); 
        else 
            parar(); 
    }   
    function enlistar (times)
    {
        if (typeof times == "string")
            $("#lstTimes").append('<li><span class="digital">' + (+times).toFixed(1) + "</span></li>");
        else
        {
            var i;
            for (i in times)
            {
                $("#lstTimes").append('<li><span class="digital">' + (+times[i]).toFixed(1) + "</span></li>");
            }
        }
    }

    $("#timer").tap(cambiar);
    $("#timer").swipe(function()
    { 
        if (t===undefined)
        { 
            localStorage.c="0.0"; 
            localStorage.times="[]"; 
            times=[]; 
            $("#lstTimes").empty(); 
            mostrar();
        }
    });
    $("#cambiar").on('click', cambiar);
    $("#inicializar").on('click', function()
    { 
        if (t===undefined)
        { 
            localStorage.c="0.0"; 
            localStorage.times="[]"; 
            times=[]; 
            $("#lstTimes").empty(); 
            mostrar();
        }
    });

    mostrar();
    enlistar(times);
});