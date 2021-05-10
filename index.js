function dosearch() {
    var sf=document.searchform;
    var submitto = sf.sengines.options[sf.sengines.selectedIndex].value + escape(sf.searchterms.value);
    window.location.href = submitto;
    return false;
    }

function link(){
    var type = location.search.split('?')[1];
    var sid = location.search.split('?')[2];
    
    // if(type=="name"){
        url="https://www.themealdb.com/browse.php?s="+sid;
    // }else{
    //     url="www.themealdb.com/api/json/v1/1/filter.php?i="+sid;
    // }
    
    document.getElementById("inlineFrameExample").src = url;
}