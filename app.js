function lab3_1(){
    x="JavaScript is the world's most pOpULar programming language.";
    document.write(x.indexOf("popular"));
    document.write("<br>");
    document.write(x.match(new RegExp("popular", "gi")));
}