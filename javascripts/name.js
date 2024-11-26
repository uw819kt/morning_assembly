let numbers = [];

function choose() {
    // チェックボックスから選ばれた名前をnumbers配列に格納
    const elements = document.getElementsByName("list");
    numbers = [];  // 配列を初期化（毎回リセットする）

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            let numberElement = elements[i].value;  // チェックボックスの値を取得
            numbers.push(numberElement);  // 配列に追加
        }
    }

    // ランダムに名前を表示
    if (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);  // ランダムなインデックス
        const randomName = numbers[randomIndex];  // ランダムに選ばれた名前
        const selected_element = document.createElement("p");
        selected_element.innerText = `次回の朝礼当番は${randomName}です`;
        const parent = document.getElementsByTagName("div")[1];
        parent.appendChild(selected_element);
        selected_element.classList.add("text");
        selected_element.classList.add("vov");
        selected_element.classList.add("roll-in-left");
    }
};





/*
ceckedプロパティ 要素.checked
・チェックあればtrue
・チェックなければfalse
*/