(function(){
    const fonts = ["cursive","san-serif","monospace"];
    let captchaValue = "";
    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
        captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span style = "transform:rotate(${rotate}deg);
            font-family:${fonts[font]}">${char}</span>`; 
        }).join("");
        document.querySelector()
    }
})();