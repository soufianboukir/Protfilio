document.getElementById('fb').onclick = function(){
    location.href = "https://www.facebook.com/soufiane.boukir.104";
}
document.getElementById('insta').onclick = function(){
    location.href = "https://www.instagram.com/soufian_6b/";
}
document.getElementById('git').onclick = function(){
    location.href = "https://github.com/soufianboukir";
}
document.getElementById('link').onclick = function(){
    location.href = "https://www.linkedin.com/in/soufian-boukir-8262aa252/";
}
function scrollToTarget() {
    const target = document.querySelector('#about');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
function scrollToSkills(){
    const target = document.querySelector('#skills');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
 }
function scrollToWork(){
    const target = document.querySelector('#work');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
  }
}
function scrollToContact(){
  const target = document.querySelector('#contact');
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
  });
}
}
function sendEmail(){
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    if(subject != ''){
        //email url
        const emailUrl = `mailto:${email}?subject=${subject}`;
        //change directory to email URL
        window.location.href = emailUrl;
    }else{
        alert('Please type a message');
    }
}
const pdfButton = document.getElementById('viewPDF');
pdfButton.addEventListener("click",function(){
  window.open("cvboukir.docx","_blank")
})
