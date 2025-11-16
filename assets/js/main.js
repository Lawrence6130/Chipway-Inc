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
      var result = document.getElementById('contact-result');
      var usingPlaceholder = (form.dataset.demo === 'true') || (form.action && form.action.includes('REPLACE_WITH_YOUR_FORM_ID'));
      if(usingPlaceholder){
        e.preventDefault();
        result.textContent = 'Thanks — your message was received (demo).';
        form.reset();
        return;
      }
      // otherwise allow the form to submit to the configured endpoint
      if(result) result.textContent = 'Sending…';
    });
  }
});
