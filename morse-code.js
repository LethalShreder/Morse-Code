// Morse Code Converter - JavaScript Document
//In use at lethalshreder.co.uk/code/morse-code.php

function engMorse() {
	var tex1 = document.getElementById("inp").value;	//'inp' is the ID for a textbox the user uses to input data.
	var tex2 = document.getElementById("outp");			//'outp' is the ID for a textbox that displays the output.
	
	
	//Variable 'nStr' is created and it splits the string tex1 where there is a "" and then it replaces it with " ".
	//An example would be, tex1 = test and then it goes to tex1 = t e s t.
	
	var nStr = tex1.split("").join(" ");
	
	
	//The variable 'nStr' is now equal to 'nStr' with the replacements.
	//The characters in between / / for example /a/, will find that character globally in both cases (a and A) then it gets replaced by the following, in this example ".-".
	
	nStr = nStr.replace(/a/gi, ".-").replace(/b/gi, "-...").replace(/c/gi, "-.-.").replace(/d/gi, "-..").replace(/e/gi, ".").replace(/f/gi, "..-.").replace(/g/gi, "--.").replace(/h/gi, "....").replace(/i/gi, "..").replace(/j/gi, ".---").replace(/k/gi, "-.-").replace(/l/gi, ".-..").replace(/m/gi, "--").replace(/n/gi, "-.").replace(/o/gi, "---").replace(/p/gi, ".--.").replace(/q/gi, "--.-").replace(/r/gi, ".-.").replace(/s/gi, "...").replace(/t/gi, "-").replace(/u/gi, "..-").replace(/v/gi, "...-").replace(/w/gi, ".--").replace(/x/gi, "-..-").replace(/y/gi, "-.--").replace(/z/gi, "--..").replace(/0/g, "-----").replace(/1/g, ".----").replace(/2/g, "..---").replace(/3/g, "...--").replace(/4/g, "....-").replace(/5/g, ".....").replace(/6/g, "-....").replace(/7/g, "--...").replace(/8/g, "---..").replace(/9/g, "----.");
	
	
	//Displays the converted result.
	
	tex2.value = nStr;
}



function morseEng() {
	var tex1 = document.getElementById("inp").value;	//'inp' is the ID for a textbox the user uses to input data.
	var tex2 = document.getElementById("outp");			//'outp' is the ID for a textbox that displays the output.
	
	
	//This makes every "." a "dit" and every "-" a "dah".
	
	var newStr = tex1.replace(/\./g, "dit").replace(/\-/g, "dah");
	
	
	//This converts the Morse Code into English.
	
	newStr = newStr.replace(/ditditditdit/g, "h").replace(/ditditditdah/g, "v").replace(/ditditdahdit/g, "f").replace(/ditdahditdit/g, "l").replace(/ditdahdahdit/g, "p").replace(/ditdahdahdah/g, "j").replace(/dahditditdit/g, "b").replace(/dahditditdah/g, "x").replace(/dahditdahdit/g, "c").replace(/dahditdahdah/g, "y").replace(/dahdahditdit/g, "z").replace(/dahdahditdah/g, "q").replace(/ditditdit/g, "s").replace(/ditditdah/g, "u").replace(/ditdahdit/g, "r").replace(/ditdahdah/g, "w").replace(/dahditdit/g, "d").replace(/dahditdah/g, "k").replace(/dahdahdit/g, "g").replace(/dahdahdah/g, "o").replace(/ditdit/g, "i").replace(/ditdah/g, "a").replace(/dahdit/g, "n").replace(/dahdah/g, "m").replace(/dit/g, "e").replace(/dah/g, "t");
	
	
	//This makes every double space a "/" and then it deletes every space and then makes every "/" a space.
	
	newStr = newStr.split("  ").join("/").split(" ").join("").split("/").join(" ");
	
	
	//Displays the converted result.
	
	tex2.value = newStr;
}