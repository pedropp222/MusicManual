

var picsL1 = new Array("../../img/sight/L1/001.png","../../img/sight/L1/002.png","../../img/sight/L1/003.png","../../img/sight/L1/004.png","../../img/sight/L1/005.png","../../img/sight/L1/006.png","../../img/sight/L1/007.png","../../img/sight/L1/008.png","../../img/sight/L1/009.png","../../img/sight/L1/010.png","../../img/sight/L1/011.png","../../img/sight/L1/012.png");
var sndsL1 = new Array("../../snd/sight/btSimple001.mp3","../../snd/sight/btSimple002.mp3","../../snd/sight/btSimple003.mp3","../../snd/sight/btSimple004.mp3","../../snd/sight/btSimple005.mp3","../../snd/sight/btSimple006.mp3","../../snd/sight/btSimple007.mp3","../../snd/sight/btSimple008.mp3","../../snd/sight/btSimple009.mp3","../../snd/sight/btSimple010.mp3","../../snd/sight/btSimple011.mp3","../../snd/sight/btSimple012.mp3");

var lastChoose = -1;

function choosePic() 
{
    var randomNum = Math.floor(Math.random() * picsL1.length);
    
    if (lastChoose != -1)
        {
            while(randomNum == lastChoose)
                {
                    randomNum = Math.floor(Math.random() * picsL1.length);
                }
        }
    
    document.getElementById("sightIMG").src = picsL1[randomNum];
    document.getElementById("sightAudio").src=sndsL1[randomNum];
    
    lastChoose = randomNum;
}

function Start()
{
    document.getElementById("sightIMG").src = picsL1[0];
    document.getElementById("sightAudio").src=sndsL1[0];
    
    var i = 0;
    
    var ele = document.getElementById("sheetList");
    
    while(i < picsL1.length)
        {
            var sheet = document.createElement("option");
            sheet.setAttribute("value",i);
            if(i == 0)
                {
                    sheet.setAttribute("selected","");
                }
            sheet.textContent="Musica "+(i+1).toString();
            ele.appendChild(sheet);
            i++;
        }
}

function ChangeSheet(num)
{
    var value = num.value;
    
    lastChoose = value;
    
    document.getElementById("sightIMG").src = picsL1[value];
    document.getElementById("sightAudio").src=sndsL1[value];
}