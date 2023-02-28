var enabled = false;
export function saturate(imageData) {
  //to proste rozwiązanie korzysta z css który automatycznie zrobi nam saturacje (:
  if(!enabled){
    var canvas = document.getElementsByClassName("canvas")[0];
    canvas.setAttribute('style',"filter: saturate(1.5);");
    enabled = true
  }
  return imageData;
}


export function stopSaturation(){
  enabled = false;
  var canvas = document.getElementsByClassName("canvas")[0];
  canvas.setAttribute('style',"filter: none");
}