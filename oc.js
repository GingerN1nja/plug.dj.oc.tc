var url = "https://oc.tc/assets/logo-349d326db411b9798de71c299e348e0c.png";
 
function init() {
 
        //API.on(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
        API.sendChat('New program test :D');
        var css = document.createElement("style");
        css.type = "text/css";
        css.setAttribute('id', 'autowooter-css');
        css.innerHTML = "#autowooter-button { left: 213px; } .autowooter-icon-on { position: absolute; width: 30px; height: 30px; background: url(" + url +"); }"; }";
        document.body.appendChild(css);
 
        $('#chat-header').append('<div id="autowooter-button" class="chat-header-button"><i class="autowooter-icon autowooter-icon-on"></i></div>');
       
}

 
init();



