var keychars = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
var playArray = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
$(document).ready(function() {
    for(var i = 0; i <12;i++) {
        var key = document.createElement("td");
        key.id = keychars[i];
        key.innerHTML = keychars[i];
        key.style.width = '100px';
        key.style.height = '300px';
        if(keychars[i].length>1) {
            key.style.backgroundColor = 'black';
            key.style.color = 'white';
        }else {
            key.style.backgroundColor = 'white';
        }
        key.className = 'key'
        document.getElementById('pianokeys').append(key);
    }

    $('.piano .key').on('click',function () {
        var audio = document.getElementById(this.id);
        audio.play();
    });

});

function PlayArray (array) {
    array.forEach(key => {
        var audio = document.getElementById(key);
        audio.play();
    });
}