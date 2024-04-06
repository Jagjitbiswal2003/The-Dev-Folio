let MenuBtn= document.getElementById('MenuBtn');

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

let typed=new Typed('#auto-input', {
    strings: ['FRONTEND Developer!','Web Designer!'],
    typeSpeed:90,
    backSpeed:90,
    backDelay:100,
    loop:true,
})
function showAbout() {
    document.getElementById("about");
 }
 function showSkill() {
    document.getElementById("skill");
 }
 function showEducation() {
    document.getElementById("education");
 }
 function showPortfolio() {
    document.getElementById("portfolio");
 }
 function showContact() {
    document.getElementById("contact");
 }


