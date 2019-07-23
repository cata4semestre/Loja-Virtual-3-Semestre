function tipoPessoaSel() {
  var pf = document.getElementById("opt-pf").checked;
  
  if (pf) {
    document.getElementById("pf").style.display = "block";
    document.getElementById("pj").style.display = "none";
  } 
  else {
    document.getElementById("pf").style.display = "none";
    document.getElementById("pj").style.display = "block";
  }
}

function formPagamento(){
  document.getElementById('CC').style.display = 'inline-block';
  document.getElementById('BL').style.display = 'none'
}
function formPagamento2(){
  document.getElementById('CC').style.display = 'none'
  document.getElementById('BL').style.display = 'inline-block';
}
