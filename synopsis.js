function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

window.onload = loadJSON('synopsis.json',
         function(data) { 
            document.getElementById('syn').innerHTML = 
         data.synopsis[0].part1[0].item +
         data.synopsis[0].part2[0].item +
         data.synopsis[0].part3[0].item +
         data.synopsis[0].part4[0].item +
         data.synopsis[0].part5[0].item +
         data.synopsis[0].part6[0].item
        },
         function(xhr) { console.error(xhr); }
);