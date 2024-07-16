const songname = document.getElementById('song');
const song = document.getElementById('audioo');
const play = document.getElementById('play');
const next = document.getElementById('frente');
const capadisc = document.getElementById('imgp');
const artist = document.getElementById('artist');
const ret = document.getElementById('return');
const barprogress = document.getElementById('barp');
const pcout = document.getElementById('barc');
const timei = document.getElementById('timei');
const timef = document.getElementById('timef');





let isPlaying = false;

const musicone = {
 songnamex : 'MixTape',
 artistx : 'Gueds dev',
 filex: 'musicone'
};

const musictwo = {
    songnamex : 'Silence',
    artistx : 'Who Made Who',
    filex: 'who'
   };

   const playlist = [musicone, musictwo];
   let index = 0;


function ouvir(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;

}

function pausar(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;

}
function dicidirplay(){
    if(isPlaying == true){
        pausar();
    }
    else {
        ouvir();
    }
}


function updatetimett(){
    timef.innerText = toH(song.duration);
    
}


function iniciarsong(){
    capadisc.src = `img/${playlist[index].filex}.jpg`;
    song.src = `img/${playlist[index].filex}.mp3`;
    songname.innerText = playlist[index].songnamex;
    artist.innerText = playlist[index].artistx;

}

function returnsong(){
 if (index === 0)
 {
    index = playlist.length - 1;
 }
 else {
    index -= 1;

 }

 iniciarsong ();
 ouvir();

}


 function nextsong(){
    if (index === playlist.length - 1){
        index = 0;
    }
    else {
       index += 1;
   
    }

 iniciarsong ();
 ouvir();

}

function updateprogressbar(){
 const barwidth = (song.currentTime/song.duration)*100;
 barprogress.style.setProperty('--progress', `${barwidth}%`);
 timei.innerText = toH(song.currentTime);
 

}

function jumpto(event){
    const width = pcout.clientWidth;
    const clickposition = event.offsetX;
    const JumpToTime = (clickposition/width)* song.duration;
    song.currentTime = JumpToTime;
}

function toH(originalNumber) {
    let hours = Math.floor(originalNumber/3600);
    let min = Math.floor((originalNumber - hours * 3600)/60);
    let sec = Math.floor(originalNumber - hours*3600 - min*60);

    return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

iniciarsong();

play.addEventListener('click', dicidirplay);
ret.addEventListener('click', returnsong);
next.addEventListener('click', nextsong);
song.addEventListener('timeupdate', updateprogressbar);
song.addEventListener ('loadedmetadata', updatetimett);
pcout.addEventListener('click', jumpto);
