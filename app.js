function lab3_1(){
    x="JavaScript is the world's most pOpULar programming language.";
    document.write(x.indexOf("popular"));
    document.write("<br>");
    if(x.match(new RegExp("popular", "gi"))!=null){
        document.write("Yes");
    }else{
        document.write("No");
    }                   
}
