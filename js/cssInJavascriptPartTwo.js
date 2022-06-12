const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    // 실수를 줄여주기 위해서 클래스명을 변수로 선언해둔다.
    if(title.className === clickedClass) {
        title.className = "";
    } else {
        title.className = clickedClass;
    }
}

title.onclick = handleTitleClick;