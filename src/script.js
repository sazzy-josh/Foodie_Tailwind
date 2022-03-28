const menu = document.getElementById('menu-list');
const toggle = document.getElementById('toggle');
const main =document.getElementById('main')
 function collapse(){
    //  if (menu.classList.contains('hidden')){
    //      menu.classList.remove('hidden')
    //  } else {
    //      menu.classList.add('hidden')
    //  }
   
    main.classList.toggle('move')
 }

toggle.addEventListener('click',collapse )