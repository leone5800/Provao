function openTab(evt, tabName) {
    // GANBIARRA FOFA 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove as classes para tudo ficar bonitinho ( coisa besta )
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#007bff";
    }
  
    // mostra as budegas
    document.getElementById(tabName).style.display = "block";
  
    // deixa as coisas mais inviadadas 
    evt.currentTarget.style.backgroundColor = "#0056b3";
  }
  
  // Define a materia do inferno
  document.getElementsByClassName("tablink")[0].click();
  

  