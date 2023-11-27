/*
 당신의 이름을 적어주세요.
 라고 사용자에게 물어 답변을 화면에 표시한다. 
*/
//div
const frmLogin = document.getElementById("Login");
const inputLogin = document.querySelector("#name");
//h1
const h1 = document.getElementById("h1");
//className 상수화
const HIDDEN_CLASSNAME = "hidden"
//username 상수화
const KEY_USERNAME = "userName"


function clickLogin(event){
    event.preventDefault();

    //form은 숨기고
    frmLogin.classList.add(HIDDEN_CLASSNAME);
    const userName = inputLogin.value;
    localStorage.setItem(KEY_USERNAME,userName);

     //h1는 보여준다.
    displayGreeting(userName);

}
/**
 * 인사를 출력하는 함수
 * @param {*} argNAme
 *  */ 
function displayGreeting(argName){
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `${argName}님, 반가워요`;
}

/**
 * 로컬 스토리지에서 가져온 사용자 이름 
 */
const lsUserName = localStorage.getItem(KEY_USERNAME);

if(lsUserName === null){
    frmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit",clickLogin);
}else{
    displayGreeting(lsUserName);
}


