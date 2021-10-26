function viewDiv(){
    document.getElementById("div1").classList.toggle("show")
  };

  document.getElementById("show_hide").addEventListener("click",()=>{
      viewDiv();
  })