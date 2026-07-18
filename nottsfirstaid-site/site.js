
window.toggleFaq=function(el){
  var a=el.nextElementSibling;if(!a)return;
  var o=a.classList.contains('open');
  document.querySelectorAll('.fa-ans.open').forEach(function(x){x.classList.remove('open');if(x.previousElementSibling)x.previousElementSibling.classList.remove('open');});
  if(!o){a.classList.add('open');el.classList.add('open');}
};
window.toggleNav=function(){
  var nl=document.getElementById('navlinks');if(!nl)return;
  if(nl.style.display==='flex')nl.style.display='';
  else nl.style.cssText='display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:#fff;border-bottom:3px solid #2cb34a;padding:12px 24px;gap:4px;z-index:499;';
};
window.submitForm=function(){
  var fn=document.getElementById('fn'),em=document.getElementById('em');
  if(!fn||!em||!fn.value.trim()||!em.value.trim()){alert('Please fill in your name and email address.');return;}
  var s=document.getElementById('fsuccess');if(s)s.style.display='block';
};
(function(){
  var cs=document.getElementById('nl-courses');
  if(cs){cs.style.cursor='pointer';cs.onclick=function(e){e.stopPropagation();var d=this.nextElementSibling;if(!d)return;var v=d.style.display==='block';document.querySelectorAll('.drop').forEach(function(x){x.style.display='none';});if(!v)d.style.display='block';};}
  document.addEventListener('click',function(e){if(!e.target.closest||!e.target.closest('#navlinks li:nth-child(2)'))document.querySelectorAll('.drop').forEach(function(d){d.style.display='none';});});
  document.querySelectorAll('.drop').forEach(function(d){d.style.display='none';});
})();
document.getElementById("emlC") && (document.getElementById("emlC").href="mai"+"lto:inf"+"o@mgtraining.co.uk?subject=First%20Aid%20Booking%20Enquiry");
document.getElementById("emlA") && (document.getElementById("emlA").href="mai"+"lto:inf"+"o@mgtraining.co.uk?subject=First%20Aid%20Booking%20Enquiry");
