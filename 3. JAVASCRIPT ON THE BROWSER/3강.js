//id 가져오기
// const title=document.getElementById("title"); //html에서 id=title인거 가져오기

// title.innerText="Got you!" //title의 text 

//class 가져오기
//const hello=document.getElementsByClassName("hello");

//tagname으로 가져오기
// const hello=document.getElementsByTagName("h1"); 
// console.log(hello)

//querySelector
const h1=document.querySelector(".hello h1"); 

// const hello=document.querySelectorAll(".hello h1"); //배열로 반환
// console.log(hello)

//<3.3 Events>

// function handleTitleClick(){ //click 했을 때 벌어질 일
//     // const currentColor = h1.style.color;
//     // let newColor; 
//     // if(currentColor==="blue"){
//     //     newColor="tomato";
//     // }
//     // else{
//     //     newColor="blue";
//     // }
//     // h1.style.color=newColor;
// }

function handleTitleClick(){
    //방법1) className사용    
    //const clickedClass="active";
    // if(h1.className===clickedClass){ //html의 h1에게 className 부여하는 형식은 html의 class명까지 덮어씌운다 => classList 사용
    //     h1.className="";
    // }
    // else{
    //     h1.className=clickedClass
    // }

    //방법2) classList 사용 
    //const clickedClass="active";
    // if(h1.classList.contains(clickedClass)){ //classlist가 clickedclass를 포함하고 있다면
    //     h1.classList.remove(clickedClass);
    // }
    // else{
    //     h1.classList.add(clickedClass);
    // }

    //방법3) toggle function 
    h1.classList.toggle("clicked"); //h1의 classlist에 clickedclass가 있는지 확인해서 있다면 제거 ,없다면 추가해줌
}

h1.addEventListener("click",handleTitleClick); //말그대로 벌어질 event를 listen=> click하면 handleTitleClick실행


// function handleMouseEnter(){
//     h1.innerText= ("Mouse is here");
// }

// function handleMouseLeave(){
//     h1.innerText= ("Mouse is gone");
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor="tomato";
// }

// function handleWindowCopy(){
//     alert("copier!!!!");
// }
// h1.addEventListener("mouseenter",handleMouseEnter); //마우스 올렸을 때
// h1.addEventListener("mouseleave",handleMouseLeave);
// window.addEventListener("resize",handleWindowResize); 
// window.addEventListener("copy",handleWindowCopy); //ctrl+C했을떄

