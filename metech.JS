  function showall(){
    
 const content = document.getElementById('all')
 
const button = document.getElementById('see')

content.classList.toggle('show')

  if(content.style.display ==='contents'){content.style.display='none'
  button.innerHTML = 'See all➡️'
    
  }
  else{content.style.display='contents'
  button.innerHTML = 'See less⬆️'}

 
  }
 



/*when in view shows the about section*/
  document.addEventListener("DOMContentLoaded",()=>
    {const texts = document.querySelectorAll('.webdev');
    window.addEventListener('scroll',() => 
    {const triggerBottom=window.innerHeight* 0.9;

       texts.forEach(text=>{ const boxTop= text.getBoundingClientRect().top;
        if (boxTop<triggerBottom){text.classList.add('show');}

        else{ text.classList.remove('show');} })});});