document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.main-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var visible = nav.style.display==='flex' || window.getComputedStyle(nav).display==='flex';
      nav.style.display = visible ? 'none' : 'flex';
    });
  }

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var result = document.getElementById('contact-result');
      result.textContent = 'Thanks — your message was received (demo).';
      form.reset();
    });
  }
});
