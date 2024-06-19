document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('knapp').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'ovn1.txt', true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState== 4 && xhr.status ==200) {
                document.getElementById('content').textContent = xhr.responseText;
            } 
        };
        xhr.send();
    });
});