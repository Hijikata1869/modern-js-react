// // オブジェクトの分割代入
// const myProfile = { name: "DY", age: 29 };
// const { name, age } = myProfile; // { foo, bar }のようにオブジェクトのプロパティに無い名前で取り出そうとするとundefinedになってしまう

// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// // 配列の分割代入
// const myProfile2 = ["DY", 29];
// const [arrName, arrAge] = myProfile2; // オブジェクトと違い、自由に名前は設定できる。

// console.log(`私の名前は${arrName}です。年齢は${arrAge}歳です。`);

// // スプレッド構文
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1); // [1, 2]
// console.log(...arr1); // 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // 3
// sumFunc(...arr1); // 3

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); // 1
// console.log(num2); // 2
// console.log(arr3); // [3, 4, 5]

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); // [10, 20]
// // arr6 = arr4
// // こうすると参照が引き継がれてしまう。例えば、arr6[0] = 100; とすると、arr4も[100, 20]となってしまう。そうするとバグの温床になってしまうため、配列をコピーするときはスプレット構文で展開してコピーすると良い

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // [10, 20, 30, 40]

// // mapやfilterを使った配列の処理
// // 従来のforを使った場合
// const nameArr = ["foo", "bar", "baz"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }
// // mapは配列の中身に対して、繰り返し処理を行う。上と同じ処理を、mapを用いた場合。mapの第一引数は配列の中身。第二引数はインデックス。
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです`));

// // 新しい配列を返す使い方
// const nameArr2 = nameArr.map((name) => {
//   return `${name}さん`;
// });
// console.log(nameArr2); // ['fooさん', 'barさん', 'bazさん']

// // filterはある条件に一致したものだけを返して、新しい配列を生成する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr); // 奇数だけ取り出した
// console.log(1 % 2);

// 三項演算子
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "正常です";
// };
// console.log(checkSum(50, 51)); // 100を超えています

// 論理演算子の本当の意味
// ||は、左側がfalseなら、右側を返す
// const num = null;
// const fee = num || "金額が未設定です。";
// console.log(fee); // 金額が未設定です

// &&は左側がtrueなら右側を返す
// const num2 = 300;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2); // 何か設定されました
