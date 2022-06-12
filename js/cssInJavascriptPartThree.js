const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    // classList => 클래스 목록으로 작업할 수 있게 해줌 여러가지 function을 사용이 가능함
    // if(title.classList.contains(clickedClass)) {
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }
    title.classList.toggle(clickedClass);
}

title.onclick = handleTitleClick;