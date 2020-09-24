let level = 0;
let version = "3.0.1_beta";
let exploit = null;
let infobubble = document.getElementById("infobubble");
let menuList = document.getElementById("menulist");
let infohen = document.getElementById("infohen");
let boxip = document.getElementById("boxip");
const title = document.getElementsByTagName("title");
const fanProgress = document.getElementById("fanprogress");
const csLoader = document.getElementById("cs-loader");
const firmware = document.getElementById("firmware");
const fanprogress = document.getElementById("fanprogress");
const displayLangue = document.getElementById("language");
const choiceLang = document.getElementById("choicelangue");
const overlay = document.getElementById("cache-overlay");
/****************************************************************/
function injection() {setInnerText(message, home[0][defaultLangue].inject);}
function reception() {setInnerText(message, home[0][defaultLangue].injectwell);}
let scrollings = [];
scrolling = [scrolls];
for(let i=0;i<scrolling.length;i++){scrollings[i]=JSON.parse(scrolling[i]);}
let payloads = [];
pl=[pls,jb,miranooff,miraoff,binloader,todex,linux,dumpkernel,kernelclock,backupdtb,restoredtb,historY,browser,hen,hennooff,dumper,app2usb,rifs,webrte,fakeusb,desabler,enabler,ps4trainer,ftp,];
for(let i=0;i<pl.length;i++){payloads[i]=JSON.parse(pl[i]);}
let home = [];
datas = [data];
for(let i=0;i<datas.length;i++){home[i]=JSON.parse(datas[i]);}
/***************Display BarFan************************************/
function barFan(barfan, level) {
  for (let i=0;i<level;i++)barfan+='<button id="'+i+'btn" class="level"></button>';
  for (let i=level;i<10;i++)barfan+='<button id="'+i+'btn" class="levelclear"></button>';
  return (barfan+='</div><div id="writelevel">'+home[0][defaultLangue].threshold+readCookie("levelTemp")+"°"+"</div>");
}
/**********************Display IP*************************************/
function displayIp(address){
  address.forEach((key)=>{
    let object=key;
    for (const property in object) {
      if (property==="PS4"&&user_agent()==="PlayStation 4"){
        getCookie("PS4")===null?createCookie(property, object[property]):modifyCookie(property, object[property]);
        boxip.innerHTML+=`<span id="ipps4" class="lan">${property} : ${getCookie("PS4")}</span>`;
      } else if (user_agent()==="PlayStation 4") boxip.innerHTML+=`<div class="lan">${property} : ${object[property]}</div>`;
    }
  });
}
/**********************Request for IP*************************************/
function requestIp() {
  const xhr=new XMLHttpRequest();
  xhr.open("GET",`http://${location.host}/ip/${user_agent()}`,true);
  xhr.onreadystatechange=function(e){
    if (xhr.readyState===4){
      if (xhr.status===200){



        let address=JSON.parse(xhr.response);
        displayIp(address);
      } else {
        if (getCookie("PS4")){
          boxip.innerHTML+=`<div id="ipps4" class="lan">PS4 : ${getCookie("PS4")}</div>`;
        } else {
          boxip.innerHTML+='<div class="lan">PS4 : N/A</div>';
        boxip.innerHTML+='<div class="lan">Cache : <span class="green">'+home[0][defaultLangue].cached +"</span></div>";}
      }
    }
  };
  xhr.send(null);
}
/***********************Firmware not compatible***********************/
if (alertfirmware==true){
  if (getCookie("spoof")!=="yes"){
    if (document.getElementById("menulist")!=null){displayBlock(overlay);displayNone(menuList);
      setInnerHTML(message,'<div class="red">'+home[0][defaultLangue].badFw+checkFw()+home[0][defaultLangue].badFw2+"</div>");
      setTimeout(function(){displayNone(overlay);setInnerHTML(message,'<div class="red">'+home[0][defaultLangue].desactivateHost+"</div>");}, 6000);
    }
  }
}
/********************Receipt notification payload*******************/
function pl_loaded() {
  if (exploit==="Binloader")setInnerText(message,home[0][defaultLangue].wait_pl_binloader);
  else reception();
  setTimeout(function () {
    setInnerText(message,home[0][defaultLangue].start_pl);
    setTimeout(function () {
      if(exploit==="Binloader")setInnerText(message, home[0][defaultLangue].relaunchBinloader);
      else setInnerText(message,exploit+" "+ home[0][defaultLangue].ready_pl);
      if(exploit==="Mira Officiel"||exploit==="Mira non Officiel"||exploit==="henvtx"||exploit==="HenVTX_2.1.9"&&getCookie("spoof") ==="yes")setInnerText(message,home[0][defaultLangue].restartNavigator);
      setTimeout(function(){displayNone(csLoader);setInnerText(message, "");}, 3000);
      if(exploit==="Binloader")exploit=null;
    }, 5000);
  }, 5000);
}
/**************************Injection completed*************************/
function finished() {
  switch (exploit) {
    case "ftp":document.getElementById("ipps4").innerHTML='<div class="lan">FTP :'+getCookie("PS4")+':1337 <span class="green">Actif</span></div>';break;
    case "Mira Officiel":pl_loaded();removeScript();break;
    case "Mira non Officiel":pl_loaded();removeScript();break;
    case "Binloader":pl_loaded();removeScript();break;
    case "Jailbreak":if (main_ret==179||main_ret==0) {displayNone(csLoader);setInnerText(message,"");firmware.innerHTML+='<div class="lan">Jailbreak <span class="green">OK</span></div>';autoLoad();
      }else{setInnerText(message,home[0][defaultLangue].jbfailed);firmware.innerHTML+='<div class="lan">Jailbreak <span class="red">'+home[0][defaultLangue].failed +"</span></div>";removeScript();exploit = null;}break;
    default:pl_loaded();removeScript();break;
  }
}
/****************************Firmware display****************** */
function displayFirmware() {
  if (checkFw()==="8.00"||checkFw()==="7.51") {
    setInnerHTML(firmware,'<span class="firmware">Spoof:'+" " +checkFw()+"</span>");
    firmware.innerHTML+='<div class="lan">Jailbreak <span class="green">OK</span></div>';
  } else setInnerHTML(firmware,'<span class="firmware">Firmware:'+ " "+checkFw()+"</span>");
}
/***********************Jailbreak***************************/
function load_JB(){exploit="Jailbreak";setTimeout(function(){let func=JB("jb");newScript(func);},500);}
/***********************Cookie Spoof***************************/
function spoofed(){if(getCookie("spoof")===null)createCookie("spoof","yes");else modifyCookie("spoof","yes");}
/***********************Mirahen***************************/
function load_mira(version) {
  setTimeout(function(){injection();displayBlock(csLoader);
    setTimeout(function(){let func2=SCMIRA("c-code"),func1;
      if(version=="noofficial"){exploit=home[0][defaultLangue].miraNoOfficial;func1=SCMIRA("noofficial");
      }else if(version=="official"){exploit=home[0][defaultLangue].miraOfficial;func1=SCMIRA("official");}
      newScript(func1);
      newScript(func2);
      spoofed();
    }, 1000);
  }, 1000);
}
/***********************Payload***************************/
function inject_payload(payload){exploit=payload;
  if(payload==="ftp"){setTimeout(function(){displayNone(message);displayNone(csLoader);loadPayload(payload);},100);
  }else if(payload==="henvtx"||payload==="HenVTX_2.1.9"){displayBlock(csLoader);loadPayload(payload);spoofed();} 
  else{displayBlock(csLoader);loadPayload(payload);}
}
/***********************Binloader***************************/
function load_binloader() {
  if(exploit!=null){exploit = null;
    setInnerText(message,home[0][defaultLangue].relaunch_for_mira);
    setTimeout(function(){setInnerText(message,home[0][defaultLangue].quit_navigator);
    setTimeout(function(){setInnerText(message,"");},6000);},6000);
  }else{
    exploit = "Binloader";injection();displayBlock(csLoader);
    setTimeout(function(){setInnerText(message,home[0][defaultLangue].wait_pl);
    setTimeout(function(){setInnerText(message,home[0][defaultLangue].wait_pl_binloader);
    setTimeout(function(){let func=BINLOADER("c-code");newScript(func);},500);},3000);},1000);
  }
}
/*********************Display threshold selection************* */
function displayFan() {
  let barfan='<div id="fan">';
  switch(readCookie("fancontrol")){
    case "66":level=1;break;
    case "68":level=2;break;
    case "70":level=3;break;
    case "72":level=4;break;
    case "74":level=5;break;
    case "76":level=6;break;
    case "78":level=7;break;
    case "80":level=8;break;
    case "82":level=9;break;
    case "84":level=10;break;}
  setInnerHTML(fanprogress,barFan(barfan,level));
  setCookieLevel();
}
/************************Threshold selector***********************/
function setCookieLevel(){
  let tabLevel=fanProgress.getElementsByTagName("button");
  for (let i=0;i<tabLevel.length;i++) {
    let id=tabLevel[i].id;
    document.getElementById(id).addEventListener("click",function(){
      switch(id.split("b")[0]){
        case "0":modifyCookie("fancontrol","66");modifyCookie("levelTemp","66");break;
        case "1":modifyCookie("fancontrol","68");modifyCookie("levelTemp","68");break;
        case "2":modifyCookie("fancontrol","70");modifyCookie("levelTemp","70");break;
        case "3":modifyCookie("fancontrol","72");modifyCookie("levelTemp","72");break;
        case "4":modifyCookie("fancontrol","74");modifyCookie("levelTemp","74");break;
        case "5":modifyCookie("fancontrol","76");modifyCookie("levelTemp","76");break;
        case "6":modifyCookie("fancontrol","78");modifyCookie("levelTemp","78");break;
        case "7":modifyCookie("fancontrol","80");modifyCookie("levelTemp","80");break;
        case "8":modifyCookie("fancontrol","82");modifyCookie("levelTemp","82");break;
        case "9":modifyCookie("fancontrol","84");modifyCookie("levelTemp","84");break;}
      displayFan();
      inject_payload("fancontrol");
    });
  }
}
/************************Title and build definition**********************/
function loadHTML(){if(menuList){title[0].innerHTML="PS4HostCS"+" V "+version+" "+plLangue()+" " +home[0][defaultLangue].compagnie;setInnerHTML(menuList, buildHTML());}}
/*******************Info bubble ********************************* */
function GetId(id){return document.getElementById(id);}
let cmpti=false,
topBubble=0,a=1;b=1;c=1;d=1;e=1;
function move(e){
  if(cmpti){
    if(document.documentElement.clientWidth>0){
      GetId("curseur").style.left=80+e.x+document.documentElement.scrollLeft+"px";GetId("curseur").style.top=topBubble+e.y+document.documentElement.scrollTop+"px";
    }else{GetId("curseur").style.left=80+e.x+document.body.scrollLeft+"px";GetId("curseur").style.top=topBubble+e.y+document.body.scrollTop+"px";}
  }
}
function showBubble(text){if(cmpti==false){GetId("curseur").style.visibility="visible";GetId("curseur").innerHTML=text;cmpti=true;}}
function hideBubble(){if(cmpti==true){GetId("curseur").style.visibility="hidden";cmpti=false;}}
document.onmousemove = move;
/*****************Position Top Bubble selector********************/
function position_top(j){
  if (j > 6 && j <= 10){topBubble = -(a*10);a++;}
  else if (j > 10 && j <= 12){topBubble = -(b*10);b++;} 
  else if (j === 13){topBubble = -60;} 
  else if (j === 14){topBubble = -100;} 
  else if (j > 14 && j <= 17){topBubble = -(d*10);d++;} 
  else if (j >= 18){topBubble = -(e*10);e++;} 
  else if (j >= 19 && j <= 20){topBubble = -(f*10);f++;} 
  else if (j >= 20){topBubble = -(g*10);g++;} 
  else {topBubble = -(j * 10);}
}
function display_bubble() {
  let tabMenu=document.getElementById("menu"),tabBtn=tabMenu.getElementsByClassName("custom-btn btn");
    if(getCookie("bubble")==="active") {
      for(let i=0,iMax=tabBtn.length;i<iMax;++i) {
        let id=tabBtn[i].id;
        document.getElementById(id).addEventListener("mouseover",function(){
          let j=i+1;
          position_top(j);
          showBubble('<div class=""><span>'+payloads[j].title+"<br></span><span>"+payloads[j].version+"<br></span><span>"+payloads[j].updated+"<br></span><span>"+
              payloads[j].firmware+"<br></span><span>"+payloads[j].description[defaultLangue]+"<br></span><span>"+payloads[j].author+"<br></span><span>"+payloads[j].url+"<br></span></div>");
        });
        document.getElementById(id).addEventListener("mouseout",function(){hideBubble();});
      }
    }else{for(let i=0,iMax=tabBtn.length;i<iMax;++i){let id=tabBtn[i].id;document.getElementById(id).addEventListener("mouseover",function(){hideBubble();});}}
}
function autoLoad() {
  let tabCookie=["henvtx","mira","fancontrol"],next=false;
  for(let i=0;i<tabCookie.length;i++) {
    if(getCookie(tabCookie[i])==="active"){if(next===false){inject_payload(tabCookie[i]);next=true;}else{setTimeout(function(){inject_payload(tabCookie[i]);},10000);}}
  }
}
function displaySwitch(id) {
    let btnSwitch=document.getElementById(`btn-switch-${id}`);
    getCookie(id) === "active"
    ?(btnSwitch.classList.remove("slider-red"),btnSwitch.classList.add("slider-green"),btnSwitch.classList.add("checked-green"))
    :(btnSwitch.classList.remove("checked-green"),btnSwitch.classList.remove("slider-green"),btnSwitch.classList.add("slider-red"))
    if(id==="bubble")display_bubble();
}
function selectorSwitch(id) {
  if(getCookie(id)===null)createCookie(id,"noactive");
  getCookie(id)==="noactive"?modifyCookie(id,"active"):modifyCookie(id,"noactive")
  displaySwitch(id);
}
/*******************Build Menu**********************************/
function buildHTML() {
  let t=document.getElementById("content-title");
  setInnerHTML(t,'<h1 id="title">PS4HostCS JB</h1>');
  let buildHTML =
    '<ul id="menu">'+
    '<li id="li0"><a href="#" class="deroulant" id="scrolling_menu0">'+scrollings[0][defaultLangue].exploit+'</a><ul class="submenu" id="submenu0">'+
    '<li><a id="jb" href="#" class="custom-btn btn" onclick="load_JB();return false">Jailbreak</a></li>'+
    '<li><a id="miranooff" href="#" class="custom-btn btn" onclick="load_mira(\'noofficial\');return false">'+payloads[0][defaultLangue].mira+"</a></li>"+
    '<li><a id="miraoff" href="#" class="custom-btn btn" onclick="load_mira(\'official\');return false">'+payloads[0][defaultLangue].mira2+"</a></li>"+
    '<li><a id="binloader" href="#" class="custom-btn btn" onclick="load_binloader();return false">'+payloads[0][defaultLangue].binload+"</a></li>"+
    '<li><a id="todex" href="#" class="custom-btn btn" onclick="inject_payload(\'Todex\');return false">'+payloads[0][defaultLangue].dex+"</a></li>"+
    '<li><a id="linux" href="#" class="custom-btn btn" onclick="inject_payload(\'Linux\');return false">'+payloads[0][defaultLangue].linux+"</a></li></ul></li>"+
    '<li id="li1"><a href="#" class="deroulant" id="scrolling_menu1">'+scrollings[0][defaultLangue].system+'</a><ul class="submenu" id="submenu1">'+
    '<li><a id="dumpkernel" href="#" class="custom-btn btn" onclick="inject_payload(\'DumperKernel\');return false">'+payloads[0][defaultLangue].dumperkernel+"</a></li>"+
    '<li><a id="kernelclock" href="#" class="custom-btn btn" onclick="inject_payload(\'KernelClock\');return false">'+payloads[0][defaultLangue].kernelclock+"</a></li>"+
    '<li><a id="backupdtb" href="#" class="custom-btn btn" onclick="inject_payload(\'BackupDTB\');return false">'+payloads[0][defaultLangue].backupDTB+"</a></li>"+
    '<li><a id="restoredtb" href="#" class="custom-btn btn" onclick="inject_payload(\'RestoreDTB\');return false">'+payloads[0][defaultLangue].restoreDTB+"</a></li></ul></li>"+
    '<li id="li2"><a href="#" class="deroulant" id="scrolling_menu2">'+scrollings[0][defaultLangue].nav+'</a><ul class="submenu" id="submenu2">'+
    '<li><a id="historY" href="#" class="custom-btn btn" onclick="inject_payload(\'History\');return false">'+payloads[0][defaultLangue].history+"</a></li>"+
    '<li><a id="browser" href="#" class="custom-btn btn" onclick="inject_payload(\'Browser\');return false">' +payloads[0][defaultLangue].browser+"</a></li></ul></li>" +
    '<li id="li3"><a href="#" class="deroulant" id="scrolling_menu3">'+scrollings[0][defaultLangue].app+'</a><ul class="submenu" id="submenu3">'+
    '<li><a id="henoff" href="#" class="custom-btn btn" onclick="inject_payload(\'henvtx\');return false">'+payloads[0][defaultLangue].henvtx+"</a></li>"+
    '<li><a id="hennooff" href="#" class="custom-btn btn" onclick="inject_payload(\'HenVTX_2.1.9\');return false">'+payloads[0][defaultLangue].hennoofficial+"</a></li>" +
    '<li><a id="dumper" href="#" class="custom-btn btn" onclick="inject_payload(\'Dumper\');return false">'+payloads[0][defaultLangue].dumper+"</a></li>"+
    '<li><a id="app2usb" href="#" class="custom-btn btn" onclick="inject_payload(\'App2usb\');return false">'+payloads[0][defaultLangue].app2usb+"</a></li>"+
    '<li><a id="rifs" href="#" class="custom-btn btn" onclick="inject_payload(\'rifs\');return false">'+payloads[0][defaultLangue].rifs+"</a></li>"+
    '<li><a id="webrte" href="#" class="custom-btn btn" onclick="inject_payload(\'WebRTE\');return false">'+payloads[0][defaultLangue].webrte+"</a></li>"+
    '<li><a id="fakeusb" href="#" class="custom-btn btn" onclick="inject_payload(\'fakeusb\')">'+payloads[0][defaultLangue].fakeusb+"</a></li></ul></li>"+
    '<li id="li4"><a href="#" class="deroulant" id="scrolling_menu4">'+scrollings[0][defaultLangue].update+'</a><ul class="submenu" id="submenu4">'+
    '<li><a id="desabler" href="#" class="custom-btn btn" onclick="inject_payload(\'Desabler\');return false">'+payloads[0][defaultLangue].enabler+"</a></li>"+
    '<li><a id="enabler" href="#" class="custom-btn btn" onclick="inject_payload(\'Enabler\');return false">'+payloads[0][defaultLangue].desabler+"</a></li></ul></li>" +
    '<li id="li5"><a href="#" class="deroulant" id="scrolling_menu5">'+scrollings[0][defaultLangue].ps4trainer+'</a><ul class="submenu" id="submenu5">'+
    '<li><a id="ps4trainer" class="custom-btn btn" href="http://ps4trainer.com/Trainer/index.html">'+payloads[0][defaultLangue].ps4trainer +"</a></li></ul></li></ul>";
  return buildHTML;
}
$(() => {
  if(getCookie("ftp"))modifyCookie("ftp","noactive");
  createTempDefault(78);
  let btnSwitch=document.getElementById("btn-switch"),tabBtnSwitch=btnSwitch.getElementsByTagName("input"); 
  loadHTML();
  for (let i=0;i<tabBtnSwitch.length;++i) {let id=tabBtnSwitch[i].id;displaySwitch(id);document.getElementById(id).addEventListener("click",function(){if(id==="ftp")inject_payload("ftp");selectorSwitch(id);});}
  requestIp();
  displayFan();
  displayFirmware();
  displayCheckBox(); 
});