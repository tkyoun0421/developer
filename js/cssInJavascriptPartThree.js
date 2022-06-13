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
    // classList.toggle을 사용하면 클래스가 있으면 클래스를 제거하고 없으면 추가한다.
}

title.onclick = handleTitleClick;