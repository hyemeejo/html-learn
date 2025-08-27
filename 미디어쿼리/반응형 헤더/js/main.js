// consloe은 개발자의 노트개념
console.log("스크립트 연결 됐어요");

// 함수선언 ("함수내용")
function alertted(){
    alert("테스트입니다");
}
// 만든 함수를 호출함
// alertted();

// const toggleabtn = document.getElementById('toggleBtn')
// const toggleabtn = document.getElementsByClassName('navbar_toggleBtn')
const toggleBtn = document.querySelector('#toggleBtn');
const menu = document.querySelector('#navbarMenu');
const sns = document.querySelector('#navbarSns');
// classsms . ID는 #으로 표기한다
console.log(toggleBtn);
console.log(menu);
console.log(sns);

function toggleMenu(){
    menu.classList.toggle('active');
    sns.classList.toggle('active');
    // menu.style.display = 'flex'
}
// 동작은 event라고 함
// toggleBtn을 클릭했을때 toggleMenu를 불러옴
toggleBtn.addEventListener('click',toggleMenu)
// toggleMenu();