

var picsL1 = new Array("../../img/ztoh/L1/001.png","../../img/ztoh/L1/002.png","../../img/ztoh/L1/003.png","../../img/ztoh/L1/004.png","../../img/ztoh/L1/005.png","../../img/ztoh/L1/006.png","../../img/ztoh/L1/007.png","../../img/ztoh/L1/008.png", "../../img/ztoh/L1/009.png","../../img/ztoh/L1/010.png","../../img/ztoh/L1/011.png","../../img/ztoh/L1/012.png","../../img/ztoh/L1/013.png","../../img/ztoh/L1/014.png","../../img/ztoh/L1/015.png","../../img/ztoh/L1/016.png","../../img/ztoh/L1/017.png","../../img/ztoh/L1/018.png");

function SelectSheet(num)
{
     document.getElementById("sightIMG").src = picsL1[num];
    
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
            sheet.textContent="Pauta "+(i+1).toString();
            ele.appendChild(sheet);
            i++;
        }
}

function ChangeSheet(num)
{
    var value = num.value;
    
    document.getElementById("sightIMG").src = picsL1[value];
}