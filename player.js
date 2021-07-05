var playerElement = document.getElementById('player');
var player = new PandaPlayer(playerElement, {
  locale: 'en',
  default_audio_language: 'fr',
  default_subtitle_language: 'en'

});
function play(id) {
 switch (id){
    case 12 : var url = "http://assatira-connect.tv/hls/bein1.mpd"; break;
    case 22 : var url = "http://assatira-connect.tv/hls/beines.mpd?token=frofglfggg"; break;
    case 15 : var url = "https://besus03d.akamaized.net/dash/live/706268/besus03d/manifest.mpd?"; break;
    case 16 : var url = "https://besus05d.akamaized.net/dash/live/706270/besus05d/manifest.mpd?"; break;
    case 17 : var url = "http://assatira-connect.tv/hls/bein5.mpd"; break;
    case 18 : var url = "http://assatira-connect.tv/hls/bein6.mpd"; break;
    case 19 : var url = "http://assatira-connect.tv/hls/PCTV_DASH.mpd"; break;
    case 20 : var url = "https://r-live-cache.akamaized.net/USL15/SH2/SH2.isml/.mpd"; break;
    default : var url = "http://sports24.club/hls/beines.mpd";
 }
 
 player.play({file_url: url+''});
