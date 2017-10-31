var inputL=document.getElementsByClassName("inputL")[0];
var inputR=document.getElementsByClassName("inputR")[0];
var move_btn=document.getElementsByClassName("move_btn")[0];
var sum=document.getElementsByClassName("sum")[0];
var count=document.getElementsByClassName("count")[0];
var marquee=document.getElementsByClassName("marquee")[0];
var marquee_li=document.getElementsByClassName("marquee_li");
var numR,numL,isclick=0;
var i=0;
move_btn.onclick=function(){	
	if(!isclick){
		marquee.style.opacity=1;
		numL=inputL.value.length;	
		sum.firstChild.nodeValue=numL;	
		inputR.value="";
		doMove(numL,"gray","#CD3333");
		isclick=1;
	}	
}
function doMove(numL,colorB,colorA){
	inputR.value+=inputL.value.charAt(0);
	inputL.value=inputL.value.slice(1,numL);
	numR=inputR.value.length;	
	if(numR>10){
		marquee.style.display="block";
		if(i==0){
			marquee_li[i].style.backgroundColor=colorA;
		}else if(i>0&&i<8){
			marquee_li[i-1].style.backgroundColor=colorB;
			marquee_li[i].style.backgroundColor=colorA;
		}else if(i==8){
			marquee_li[i-1].style.backgroundColor=colorB;
			i=0;
			marquee_li[i].style.backgroundColor=colorA;			
		}
		i++;
	}
	count.firstChild.nodeValue=numR;
	timeID=setTimeout("doMove("+numL+",'gray','#CD3333')",100);
	if(numL==numR){
		clearTimeout(timeID);
		changeOpacity("marquee",0.03,0);
	}
}
function changeOpacity(obj,changeNum,final_o){
	var elem=document.getElementsByClassName(obj)[0];
	var opacity=elem.style.opacity;
	if(opacity<=final_o){
		elem.style.display="none";
		isclick=0;
		return true;
	}
	if(opacity>final_o){
		opacity=opacity-changeNum;
	}
	elem.style.opacity=opacity;
	movement2=setTimeout("changeOpacity('marquee',0.03,0)",50);	
}