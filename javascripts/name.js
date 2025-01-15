let names = []; // 名前を保存する配列
let numbers = []; // チェックボックスの選択されたインデックスを保存する配列

function addName() { // 名前を追加する関数
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    // 入力が空でない場合に名前を追加
    if (name !== '') {
        // 配列に名前を追加
        names.push(name);

        // 名前をリストとして表示
        updateNameList();

        // 入力欄をリセット
        nameInput.value = '';
    } else {
        alert('名前を入力してください');
    }
}

// 名前リストを更新する関数
function updateNameList() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';  // リストをクリア

    // 名前配列からリストを作成
    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;

        // チェックボックスを作成
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'list';  // name属性で一括で取得可能
        checkbox.value = index;  // チェックボックスにインデックスを設定
        checkbox.checked = true;

        // リストアイテムにチェックボックスを追加
        li.prepend(checkbox);

        // 削除ボタンを作成
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function () {
            removeName(index);  // 名前を削除
        };

        // リストアイテムに削除ボタンを追加
        li.appendChild(deleteButton);

        // リストに追加
        nameList.appendChild(li);
    });
}

// 名前を削除する関数
function removeName(index) {
    names.splice(index, 1);  // 配列から名前を削除
    updateNameList();         // リストを更新
}


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
        const randomName = names[randomIndex];  // ランダムに選ばれた名前
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