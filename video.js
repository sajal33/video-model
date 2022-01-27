var myvid = document.getElementById('myvideo');
var myvids = [
  "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", 
  "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});
            
           
    