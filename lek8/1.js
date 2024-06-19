function Print(){
    var xhr= new XMLHttpRequest();
    var content = document.getElementById('content');

    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 &&xhr.status==200){
            content.innerHTML=xhr.responseText;
        }
    };
    xhr.open('GET', 'ovn1.txt', 'true');
    xhr.send();
}