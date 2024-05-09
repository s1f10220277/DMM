let username;
let userresult;

// ユーザーから名前を入力してもらう
username = prompt("お名前を教えて下さい。");

// usernameが空文字列の場合、"名無し"という値を設定する
if (username === ""){
    username = "名無し";
}

// HTML内のname要素にusernameを表示する
document.getElementById("name").innerHTML = username;

// ランダムに結果を生成
let rand = Math.floor(Math.random() * 5);

if (rand === 0) {
    userresult = "大吉";
} else if (rand === 1) {
    userresult = "中吉";
} else if (rand === 2) {
    userresult = "小吉";
} else if (rand === 3) {
    userresult = "吉";
} else if (rand === 4) {
    userresult = "凶";
}

// HTML内のresult要素に結果を表示する
document.getElementById("result").innerHTML = userresult;