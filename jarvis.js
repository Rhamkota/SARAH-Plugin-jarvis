exports.init = function(SARAH, SARAH2){
SARAH.speak('initialisation terminé');
 }﻿
 
exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {
	  
	 

	  case "allquit":
	  var process = '%CD%/plugins/jarvis/bin/allquit.bat';
	  var Txt = new Array; 
			Txt[0] = "tout est fermé";
			Txt[1] = "je m'en auccupe";
			Txt[2] = "tout de suite";
			Txt[3] = "c'est fait";

	  break;
	  
    case "la":
	  var Txt = new Array; 
			Txt[0] = "oui monsieur";
			Txt[1] = "oui monsieur, que puije pour vous";
			Txt[2] = "biensur";
			Txt[3] = "comme toujours";
			Txt[4] = "oui";
			Txt[4] = "Pour vous monsieur, toujours";
	  break;
	  
	  case "sketcup":
	  var process = '%CD%/plugins/jarvis/bin/sketchup.bat';
	  var Txt = new Array; 
			Txt[0] = "je l'affiche";
			Txt[1] = "je le lance";
			Txt[2] = "je m'en auccupe";
			Txt[3] = "tout de suite";
			Txt[4] = "c'est fait";
			Txt[5] = "logiciel lancé";
	  break;
	  
	case "runjarvis":
	  var process = '%CD%/plugins/jarvis/bin/RunJarvis.bat';
	  var Txt = new Array; 
			Txt[0] = "je l'affiche";
			Txt[1] = "je lance mon interface";
			Txt[2] = "je m'en auccupe";
			Txt[3] = "tout de suite";
	  break;
	case "closejarvis":
	  var process = '%CD%/plugins/jarvis/bin/closejarvis.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur";
			Txt[1] = "je l'ai fermé";
			Txt[2] = "interface fermé";
			Txt[3] = "je l'ai masqué";
			Txt[4] = "je l'ai désactivé";
			Txt[1] = "on ne le voit plus";
	  break;
	case "runwarplane":
	  var process = '%CD%/plugins/jarvis/bin/Runwarplane.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur bon vol";
			Txt[1] = "bon jeux";
			Txt[2] = "amusez vous bien";
			Txt[3] = "c'est partis";
	  break;
	case "closewarplane":
	  var process = '%CD%/plugins/jarvis/bin/Closewarplane.bat';
	  var Txt = new Array; 
			Txt[0] = "le jeux est fermé";
	  break;
	  
	  case "runminncraft":
	  var process = '%CD%/plugins/jarvis/bin/runmincraft.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur creusé bien";
			Txt[1] = "bon jeux";
			Txt[2] = "amusez vous bien";
			Txt[3] = "c'est partis"; 
	  break;
	  
	case "closeminncraft":
	  var process = '%CD%/plugins/jarvis/bin/Closemincraft.bat';
	  var Txt = new Array; 
			Txt[0] = "je ferm";
			Txt[1] = "je le ferm";
			Txt[2] = "c'est fermé";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
			Txt[5] = "le jeux est fermé";
			Txt[5] = "finis de jouer monsieur";
	  break;
	  
	case "runfirefox":
	  var process = '%CD%/plugins/jarvis/bin/runfirefox.bat';
	  var Txt = new Array; 
			Txt[0] = "j'ouvre failleur fox";
			Txt[1] = "je lance failleur fox";
			Txt[2] = "bon surf monsieur";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite";
	  break;
	  
	case "closefirefox":
	  var process = '%CD%/plugins/jarvis/bin/Closefirefox.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur";
			Txt[1] = "je l'ai fermé";
			Txt[2] = "failleur fox fermé";
	  break;
	  
	  case "runmail":
	  var process = '%CD%/plugins/jarvis/bin/runmail.bat';
	  var Txt = new Array; 
			Txt[0] = "j'ouvre les mail";
			Txt[1] = "je lance seundeurbeurde";
			Txt[2] = "tout de suite";
			Txt[4] = "tout de suite, monsieur";
	  break;
	  
	case "closemail":
	  var process = '%CD%/plugins/jarvis/bin/closemail.bat';
	  var Txt = new Array; 
			Txt[0] = "c'est fait monsieur";
			Txt[1] = "je l'ai fermé";
			Txt[2] = "seundeurbeurde fermé";
			Txt[3] = "j'ai fermé les mail";
	  break;
	  
	case "runshutdown":
	  var process = '%CD%/plugins/jarvis/bin/runshutdown.bat';
	  break;
	  
	  case "runrestart":
	  var process = '%CD%/plugins/jarvis/bin/Runrestart.bat';
	  break;
	  
	  case "runnotepad":
      var process = '%CD%/plugins/jarvis/bin/runnotepad.bat';
	  var Txt = new Array; 
			Txt[0] = "j'ouvre l'editeur";
			Txt[1] = "je lance notpade";
			Txt[2] = "tout de suite";
	  break;
	  case "closenotepad":
      var process = '%CD%/plugins/jarvis/bin/closenotpad.bat';
	  var Txt = new Array; 
			Txt[0] = "éditeur fermé monsieur";
			Txt[1] = "je l'ai fermé";
			Txt[2] = "notpad fermé";
	  break;
	  case "runreboot":
	  var process = '%CD%/plugins/jarvis/bin/runreboot.bat';
	  break;
	  
	  case "minimize":
	  process = '%CD%/plugins/jarvis/bin/minimize.vbs';
	  var Txt = new Array; 
			Txt[0] = "vous etes sur le bureau";
			Txt[1] = "voici le bureau";
			Txt[2] = "affichage du bureau";
	  break;	  
	  
	  case "plugins":
	  var process = '%CD%/plugins/jarvis/bin/plugins.bat';
	  var Txt = new Array; 
			Txt[0] = "j'ouvre le dossier";
			Txt[1] = "voici mes pluguine";
			Txt[2] = "tout de suite";
	  break;
	  case "dossier":
	  var process = '%CD%/plugins/jarvis/bin/sarah.bat';
	  break;
	  case "images":
	  var process = '%CD%/plugins/jarvis/bin/images.bat';
	  
	  break;
	  case "documents":
	  var process = '%CD%/plugins/jarvis/bin/documents.bat';
	  break;
     
	  case "b":
	  var process = '%CD%/plugins/jarvis/bin/b.bat';
	  break;

	  case "ordinateur":
	  var process = '%CD%/plugins/jarvis/bin/ordinateur.bat';
	  break;

	  case "dl":
	  var process = '%CD%/plugins/jarvis/bin/dl.bat';
	  break;
	  
	  case "screenOff":
	  process = '%CD%/plugins/jarvis/bin/screenoff.bat';
	  break;
	  case "screenOn":
	  process = '%CD%/plugins/jarvis/bin/screenon.bat';
	  break;
	  
	  case "home":
	  process = '%CD%/plugins/jarvis/bin/home.bat';
	  var Txt = new Array; 
			Txt[0] = "voilà le home";
			Txt[1] = "des réglages à faire. Monsieur";
			Txt[2] = "c'est fait";
			Txt[3] = "voilà le home";
	  break;
	  case "store":
	  process = '%CD%/plugins/jarvis/bin/store.bat';
	  var Txt = new Array; 
			Txt[0] = "tout de suite";
			Txt[1] = "j'ouvre la page";
			Txt[2] = "je vais recevoir un nouveau pluguine";
			Txt[3] = "je vous ouvre ça";
			Txt[4] = "voilà le store";
	  break;
	  case "box":
	  process = '%CD%/plugins/jarvis/bin/box.bat';
	  var Txt = new Array; 
			Txt[0] = "tout de suite";
			Txt[1] = "j'ouvre la page";
			Txt[2] = "j'ouvre la box";
			Txt[3] = "je vous ouvre ça";
			Txt[4] = "voilà la page de votre box";
			Txt[5] = "page de configuration de la box";
	  break;
	  case "f4":
	  process = '%CD%/plugins/jarvis/bin/f4.vbs';
	  var Txt = new Array; 
			Txt[0] = "voilà";
			Txt[1] = "onglet fermé";
			Txt[2] = "c'est fait";
			Txt[3] = "voilà monsieur";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "f5":
	  process = '%CD%/plugins/jarvis/bin/f5.vbs';
	  var Txt = new Array; 
			Txt[0] = "voilà";
			Txt[1] = "j'ai actualisé la page";
			Txt[2] = "c'est fait";
			Txt[3] = "voilà monsieur";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "haut":
	  process = '%CD%/plugins/jarvis/bin/haut.vbs';
	  break;
	  case "facebook":
	  process = '%CD%/plugins/jarvis/bin/facebook.bat';
	  var Txt = new Array; 
			Txt[0] = "voilà fessbouque";
			Txt[1] = "c'est fait";
			Txt[2] = "voilà monsieur";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
	  break;
	  
	  case "youtube":
	  process = '%CD%/plugins/jarvis/bin/youtube.bat';
	  var Txt = new Array; 
			Txt[0] = "voilà youtube";
			Txt[1] = "c'est fait";
			Txt[2] = "voilà monsieur";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
	  break;
	  case "com":
	  process = '%CD%/plugins/jarvis/bin/communaute.bat';
	  var Txt = new Array; 
			Txt[0] = "voilà la communautée";
			Txt[1] = "la voilà";
			Txt[2] = "bonne lecture";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
			 break;
		case "forum":
	  process = '%CD%/plugins/jarvis/bin/forum.bat';
	  var Txt = new Array; 
			Txt[0] = "voilà le forum";
			Txt[1] = "le voilà";
			Txt[2] = "bonne lecture";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
	  break;
	  case "restore":
	  process = '%CD%/plugins/jarvis/bin/restore.vbs';
	  var Txt = new Array; 
			Txt[0] = "affichage des fenêtres";
			Txt[1] = "restoration des fenêtres";
			Txt[2] = "je remet les fenêtres";
			Txt[3] = "tout de suite";
			Txt[4] = "tout de suite monsieur";
	  break;
	  case "global":
	  process = '%CD%/plugins/jarvis/bin/global.bat';
	  var Txt = new Array; 
			Txt[0] = "affichage de la vue aéro";
			Txt[1] = "affichage des fenêtres";
			Txt[2] = "vue aéro";
			Txt[3] = "vue global";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "next":
	  process = '%CD%/plugins/jarvis/bin/next.vbs';
	  var Txt = new Array; 
			Txt[0] = "suivant";
	  break;
	  case "precedent":
	  process = '%CD%/plugins/jarvis/bin/precedent.vbs';
	  var Txt = new Array; 
			Txt[0] = "retour en arrière";
			Txt[1] = "précédent";
	  break;
	  case "enter":
	  process = '%CD%/plugins/jarvis/bin/enter.vbs';
	  var Txt = new Array; 
			Txt[0] = "je valide";
	  break;
	  case "tab":
	  process = '%CD%/plugins/jarvis/bin/tab.vbs';
	  var Txt = new Array; 
			Txt[0] = "fenêtre suivante";
			Txt[1] = "changement de fenêtre";
	  break;
	  case "save":
	  process = '%CD%/plugins/jarvis/bin/save.vbs';
	  var Txt = new Array; 
			Txt[0] = "c'est fait";
			Txt[1] = "je sauvegarde";
			Txt[2] = "sauvegarde éffectué";
			Txt[3] = "fichier sauvegardé";
			Txt[4] = "c'est fait monsieur";
			Txt[5] = "je sauvegarde monsieur";
			Txt[6] = "sauvegarde éffectué monsieur";
			Txt[7] = "fichier sauvegardé monsieur";
	  break;
	  case "shut":
	  process = '%CD%/plugins/jarvis/bin/shut.vbs';
	   var Txt = new Array; 
			Txt[0] = "je ferme";
			Txt[1] = "fermeture de la fenêtre";
			Txt[2] = "fermeture de la page";
			Txt[3] = "c'est fermé";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "dvdon":
	  process = '%CD%/plugins/jarvis/bin/dvdon.bat';
	   var Txt = new Array; 
			Txt[0] = "lecteur ouvert";
			Txt[1] = "le lecteur est ouvert";
			Txt[2] = "c'est fait";
			Txt[3] = "c'est fait monsieur";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "dvdoff":
	  process = '%CD%/plugins/jarvis/bin/dvdoff.bat';
	   var Txt = new Array; 
			Txt[0] = "je le ferm";
			Txt[1] = "fermeture du lecteur";
			Txt[2] = "lecteur fermé";
			Txt[3] = "c'est fermé";
			Txt[4] = "tout de suite";
			Txt[5] = "tout de suite monsieur";
	  break;
	  case "close":
	  process = '%CD%/plugins/jarvis/bin/close.vbs';
	  break;
  }    
  

  
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

 }
 