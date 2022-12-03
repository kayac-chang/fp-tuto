# Functional Programming 都可以當你阿公了 Part 1

在進入到正題之前，
我們要先來學習幾個概念。

> 以下範例雖然用數學作為例子，
> 但並不表示你必須要很了解數學才能看懂，
> 這裡意在表示**無關使用何種程式語言**。

## 封裝

我們可以舉一個國中數學公式作為例子，

```math
c = \sqrt{a^{2}+b^{2}}
```

如果對以上的公式不太熟悉的人也沒關係喔，
你只要知道，這個公式可以用來計算 **三角形的斜邊長** 。

如何使用這個公式呢？
我們只需要把 a 跟 b 替換成 實際的數值，
而他的運算結果就會是 三角形的斜邊長。

對於一般民眾來說，
我們其實不需要知道這段公式為什麼可以計算出斜邊長吧。

發現且證明這段公式可行，那個是數學家的工作，
而我們需要做的僅只是 用它來完成我們的工作。

而像這種不需要了解其細節，
我只要給它需要的參數，他就會給我相對應的結果，
這個在軟體工程裡就被稱之為 **封裝**。

## 抽象

我們先來看看，最簡單使用這個公式的情況：

```math
\sqrt{ 3^{2} + 4^{2} } = 5
```

如果只有簡單一行的話，
我們確實可以很快的理解這段公式的 **目的** 是什麼吧。

那來嘗試看看下面的公式：

```math
\sqrt{ (x1 - p1)^{2} + (y1 - p2)^{2} } +
\sqrt{ (x2 - p1)^{2} + (y2 - p2)^{2} } =
\sqrt{ (x2 - x1)^{2} + (y2 - y1)^{2} }
```

請問上面公式的用途是什麼？

如果你沒辦法在幾秒之內看出他的用途，
沒關係，我也做不到。

我相信一般的大眾，
是做不到一眼就看出，這是用來檢測某個點是否在某條直線上的公式。

而且如果可以，我其實也不太想每天看到這種東西，太痛苦了吧。

如果這裡，可以用一般人能理解的語言給他一個名字，
那我是否可以更容易理解這個公式的用途，
而不需要去猜測。

讓我們來試試看另一種方式：

```math
CheckPointOnLine:
    \sqrt{ (x1 - p1)^{2} + (y1 - p2)^{2} } +
    \sqrt{ (x2 - p1)^{2} + (y2 - p2)^{2} } =
    \sqrt{ (x2 - x1)^{2} + (y2 - y1)^{2} }
```

並且我們可以透過名字下去描述
我們在做運算的時候，
就不需要每次都看到一坨運算式。

```math
CheckPointOnLine(x1, y1, x2, y2, p1, p2)
```

透過使用名字來代替其實際的細節，
能達到同樣的效果且能夠輕易的被任何人理解意圖，
也能透過名字與他人進行溝通。

這個行為稱之為**抽象化**，
這是身為人類必然會出現的能力。

## 純粹

你知道在紐約中午十二點的時候是 `1 + 1 = 3` 而不是 `2` 嗎？
當然以上唬爛你的。

不過假設這件事情是真的，那會是多麽可怕的情況，
每個在紐約生活的人，戶頭會瞬間多出 1.5 倍，
年齡從 20 歲瞬間老了 10 歲，
所有的系統都要重寫。

所以

```math
1 + 1 = 2
```

這個運算的結果，**必須**，
1. 不受外界變化而改變。
2. 不應改變外界情況。


基於同樣的概念，
如果一段程式只會根據它被給予的參數而改變其結果的話，
那我們其實就可以簡單的從使用的參數跟函式去推斷結果，
也不會因為調用這個程式而有任何的 **副作用**。

我們可以建構出更加穩定且安全的程式，
而不用擔心他會因為 *時間*, *地點*, *溫度* ... 之類外在的系統而變化，
也不用擔心使用他會影響到外界。

你給程式一個原始資料，他就會給你一個相對應的結果，
而如果你之後再給他相同的資料，
那他應該還是要給你相同的結果。

這個結果不會因為外界的改變，而有所變化，
也不會因為你調用的次數不同，而有所變化。

我們來看幾個例子：

> 以下用 JS 作為範例

```javascript
const array = [1, 2, 3]

function addElementIntoArray(element) {
    array.push(element)
}

addElementIntoArray(4)

console.log(array) // === [1, 2, 3, 4]
```

以上的程式，在語法上是正確的，
但個人覺得並不是一段好的程式。

來看以下情況

```javascript
const array = [1, 2, 3]

function addElementIntoArray(element) {
    array.push(element)
}

function doSomethingElse() {
    if (Date.now() % 2 === 0) {
        array.pop()
    }
}

addElementIntoArray(4)
doSomethingElse();

console.log(array)
```

現在請問你能判斷 `array` 會印出什麼嗎？
顯然不行吧。
我們無法斷定 `doSomethingElse` 會不會異動到 `array`。

但如果我們改用以下做法：

```javascript
const array = [1, 2, 3]

function addElementIntoArray(arr, element) {
    return [...arr, element]
}
function doSomethingElse() {
    if (Date.now() % 2 === 0) {
        array.pop()
    }
}


const new_array = addElementIntoArray(arr, 4)
doSomethingElse();

console.log(new_array) // [1, 2, 3, 4]
```

無論 `doSomethingElse` 執行了幾次，
都不會影響到 `addElementIntoArray` 的結果。

所以對我來說 `addElementIntoArray` 就是一段好的程式，
因為它很穩定，我們可以輕易的從他的參數，推斷出他的結果。

## 所以 Functional Programming

對我來說，FP 就是這樣的一種思考風格。

1. 抽象化：用容易理解的表達方式取代實作細節。
2. 可推導：程式必須純粹，相同輸入就會得到相應的結果。
3. 穩定：程式不受外界的變化而影響到結果。


從這樣的基本思路，逐漸發展成與 OOP 不同的解決問題方式。

## Practice

來點練習

1. isEven: `yarn test isEven`
2. isOdd: `yarn test isOdd`
3. greaterThanFour: `yarn test greaterThanFour`
4. isPrime: `yarn test isPrime`
5. filter: `yarn test filter`
6. double: `yarn test double`
7. half: `yarn test half`
8. map: `yarn test map`
9. sum: `yarn test sum`
10. max: `yarn test max`


