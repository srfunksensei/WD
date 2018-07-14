/* kviz */

<!-- Hide from JavaScript-Impaired Browsers
ctr=0;

/* naslov */
ttl="Kviz: \"Koliko poznajete Srbiju?\"";

/* score */
psco=100;

/* Deduction for each wrong answer. May
   be the perfect score divided by the
   number of questions.  But if you "weight"
   wrong answers, as we have done in this
   little demo script, it may be higher,
   but must be a whole number.  */
wrans=7;

/* Deduction for each "no answer". Usually
   this will be the simple arithmetical
   perfect score divided by number of
   questions. (A whole number) However,
   again, you are in charge. */
noans=7;

/* num of questions */
	nr=15;

	ques=new Array();
	ques[0]="Koji je zvanicni naziv Srbije?";
	ques[1]="Koje godine se odigrala bitka na Kosovu?";
	ques[2]="Po kome je dobila ime Rajkova pecina?";
	ques[3]="Koji objekat se NE nalazi na UNESCO-voj listi?";
	ques[4]="Koje godine Srbija postaje kraljevina?";
	ques[5]="Koja je najzastupljenija religija u Srbiji?";
	ques[6]="Gde u Srbiji NE moze da se skija?";
	ques[7]="Koji je najpoznatiji srpski svetac?";
	ques[8]="Koja od ovih manifestacija se NE odrzava u Srbiji?";
	ques[9]="Koji od ovih gradova je najveci?";
	ques[10]="Koliko ima nacionalnih parkova u Srbiji?";
	ques[11]="Koja voda se proizvodi u Prolom banji?";
	ques[12]="Gde se nalazi Drvengrad?";
	ques[13]="Koje je najvece jezero u Srbiji?";
	ques[14]="Koliko dvoraca postoji u Vojvodini?";


/* correct answer */
	cor="aaacaaaaaaaaaaa";

/* odgovori */

	ans=new Array();
	
	/* 1 */
	ans[0]="Republika Srbija";
	ans[1]="Kraljevina Srbija";
	ans[2]="Carevina Srbija";
	ans[3]="Socijalisticka republika Srbija";
	
	/* 2 */
	ans[4]="1389.";
	ans[5]="1390.";
	ans[6]="1395.";
	ans[7]="1401.";
	
	/* 3 */
	ans[8]="po Rajku Vojvodi";
	ans[9]="po Rajku";
	ans[10]="po Stefanu Nemanji";
	ans[11]="po Rajkovoj zeni";
	
	/* 4 */
	ans[12]="Gamzigrad";
	ans[13]="Manastir Studenica";
	ans[14]="Manastir Fenek";
	ans[15]="Stari Ras sa Sopocanima";
	
	/* 5 */
	ans[16]="1217.";
	ans[17]="1220.";
	ans[18]="1300.";
	ans[19]="1195.";

	/* 6 */
	ans[20]="Pravoslavlje";
	ans[21]="Katolicanstvo";
	ans[22]="Islam";
	ans[23]="Protestantizam";
	
	/* 7 */
	ans[24]="Vojvodina";
	ans[25]="Kopaonik";
	ans[26]="Zlatibor";
	ans[27]="Tara";
	
	/* 8 */
	ans[28]="sv. Sava";
	ans[29]="sv. Simeon";
	ans[30]="sv. Nikola";
	ans[31]="sv. Kliment Ohridski";
	
	/* 9 */
	ans[32]="Oktobarfest";
	ans[33]="EXIT festival";
	ans[34]="Beogradski festival piva";
	ans[35]="Sabor trubaca u Guci";
	
	/* 10 */ 
	ans[36]="Beograd";
	ans[37]="Kovin";
	ans[38]="Kragujevac";
	ans[39]="Zrenjanin";
	
	/* 11 */
	ans[40]="5";
	ans[41]="3";
	ans[42]="1";
	ans[43]="10";
	
	/* 12 */
	ans[44]="Prolom voda";
	ans[45]="Voda Voda";
	ans[46]="Voda Vrnjci";
	ans[47]="Cesmovaca";
	
	/* 13 */
	ans[48]="na Mokroj Gori";
	ans[49]="u Vojvodini";
	ans[50]="pored Vranja";
	ans[51]="ne nalazi se u Srbiji";
	
	/* 14 */ 
	ans[52]="Djerdapsko jezero";
	ans[53]="Belocrkvanska jezera";
	ans[54]="Srebrno jezero";
	ans[55]="Palicko jezero";
	
	/* 15 */
	ans[56]="oko 70";
	ans[57]="oko 200";
	ans[58]="oko 20";
	ans[59]="5";


// The rest of the code should not be edited!
	ns="0123456789"
	ls="abcd";
	
	ack=new Array();
	
	for (var i=0;i<nr;i++){
		ack[i]=(nr*4)+1;
	}

	function lightIt(){
		document.images[flg+ad].src="nr/rbl.gif";
	}
	
	function dimIt(){
		if (ack[Math.floor(flg/4)]!=flg){
			document.images[flg+ad].src="nr/rbd.gif";
		}
	}
	
	function dumpIt(){
		if (ack[Math.floor(flg/4)]==flg){
			document.images[ack[Math.floor(flg/4)]+ad].src="nr/rbd.gif";
			ack[Math.floor(flg/4)]=(nr*4)+1;
		} else{
			if (ack[Math.floor(flg/4)]!=flg&&ack[Math.floor(flg/4)]!=(nr*4)+1){
				document.images[ack[Math.floor(flg/4)]+ad].src="nr/rbd.gif";
			}
			document.images[flg+ad].src="nr/rbl.gif";
			ack[Math.floor(flg/4)]=flg;
		}
	}
	
	function ckSco(){
		document.images[ad+(nr*4)].src="nr/cwf2.gif";
		setTimeout('document.images[ad+(nr*4)].src="nr/cwf0.gif"',1000);

		for (var i=0;i<nr;i++){
			u=cor.charAt(i);
			v=ls.indexOf(u)+(i*4);
			document.images[ad+v].src="nr/gbl.gif";
		}
		sco=psco;
		for (var i=0;i<nr;i++){
			if (ack[i]==(nr*4)+1){
				sco-=noans;
			} else{
				u=cor.charAt(i);
				v=ls.indexOf(u)+(i*4);
			   sco=(v==ack[i]?sco:sco-wrans);
			}
		}
		sco=(sco<0?0:sco); // prevent minus score
		scos=""+sco;
		while (scos.length<3){
			scos="0"+scos;
		}
		document.images[ad+(nr*4)+1].src="nr/yts.gif";
		ctr=ad+(nr*4)+2;
		for (var i=0;i<3;i++){
			nj=ns.indexOf(scos.charAt(i));
			document.images[ctr].src="nr/"+nj+".gif";
			ctr++;
		}
	}
	
	function litbut(){
		document.images[ad+(nr*4)].src="nr/cwf1.gif";
	}
	
	function dimbut(){
		document.images[ad+(nr*4)].src="nr/cwf0.gif";
	}
	
	ctr=0;

	function srand() {
		 today=new Date();
		 rand=today.getTime();
		 picker=""+rand
		 picker=picker.charAt((picker.length - 4));
		 rec=eval(picker);
	 }
	 
	/* This little routine is simply used to count the
	   number of images you may place on your web page
	   prior to the radio buttons.  Just makes the routine
	   independent of how you lay your page out. */
	function getImgAdd(){
		for (var i=0;i<20;i++){
			if (document.images[i].src.indexOf("rbd.gif")>-1){
				ad=i;
				i=20;
			}
		}
	} 

	function fillTable(){
		document.write('<TABLE BORDER=0 CELLPADDING=2'
						+' CELLSPACING=0 WIDTH=486><TR><TD COLSPAN=2 '
						+'ALIGN=CENTER><FONT SIZE=4 FACE="helvetica,a'
						+'rial,geneva" COLOR=BLUE><B>'+ttl+'</B></FON'
						+'T></TD></TR><TR>');

		for (var i=0;i<nr;i++){
			 document.write('<TD COLSPAN=2 VALIGN=TOP><HR'
							 +' NOSHADE><FONT SIZE=4 FACE="helvetica,aria'
							 +'l,geneva">'+ques[i]+'</FONT></TD></TR>')
			for (var j=0;j<4;j++){
				document.write('<TR><TD><A HREF="mctest.htm'
							  +'" onMouseOver="flg='+((i*4)+j)+';lightIt('
							  +');return true" onMouseOut="flg='+((i*4)+j)
							  +';dimIt();return true;" onClick="flg='
							  +((i*4)+j)+';dumpIt();return false;"><IMG S'
							  +'RC="nr/rbd.gif" WIDTH=15 HEIGHT=15 BORDER'
							  +'=0></TD><TD ALIGN=LEFT><FONT SIZE=4 FACE='
							  +'"helvetica,arial,geneva">'+ans[(i*4)+j]
							  +'</FONT></TD></TR>');
			}
		}
		document.write('<TR><TD COLSPAN=3 ALIGN=CE'
						+'NTER><A HREF="mctest.htm" onClick="ckSco'
						+'();return false;" onMouseOver="litbut();'
						+'return true;" onMouseOut="dimbut();retur'
						+'n true;"><IMG SRC="nr/cwf0.gif"'
						+' WIDTH=69 HEIGHT=45 BORDER=0 NAME="but">'
						+'<P><IMG SRC="nr/10.gif" WIDTH=120 HEIGHT'
						+'=10 BORDER=0><IMG SRC="nr/10.gif" WIDTH='
						+'7 HEIGHT=10 BORDER=0><IMG SRC="nr/10.gif'
						+'" WIDTH=7 HEIGHT=10 BORDER=0><IMG SRC="n'
						+'r/10.gif" WIDTH=7 HEIGHT=10 BORDER=0></T'
						+'D></TR></TABLE>');
		getImgAdd();
	}

	/* breadcrumb */
	function breadcrumbs(){
		  sURL = new String;
		  bits = new Object;
		  var x = 0;
		  var stop = 0;
		  var output = "<a href=\"/\">Home</a>  >  ";
		  sURL = location.href;
		  sURL = sURL.slice(8,sURL.length);
		  chunkStart = sURL.indexOf("/");
		  sURL = sURL.slice(chunkStart+1,sURL.length)
		  while(!stop){
			chunkStart = sURL.indexOf("/");
			if (chunkStart != -1){
			  bits[x] = sURL.slice(0,chunkStart)
			  sURL = sURL.slice(chunkStart+1,sURL.length);
			}else{
			  stop = 1;
			}
			x++;
		  }
		  for(var i in bits){
			output += "<a href=\"";
			for(y=1;y<x-i;y++){
			  output += "../";
			}
			output += bits[i] + "/\">" + bits[i] + "</a>  >  ";
		  }
		  document.write(output + document.title);
	}
