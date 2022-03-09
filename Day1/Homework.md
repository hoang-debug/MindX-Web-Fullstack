## Ex 1
---
```
const obj1 = { x: 20, y: 30 };

function cloneDeep(obj) {
return {...obj}
};
const obj2 = cloneDeep(obj1);
obj2.x = 10;

console.log(obj1);
console.log(obj2);
```
## Ex2
----------------------------------------------------------------
>*Kết quả là:*
```
console.log(macbooks)
['macbook2015', {model: 'm1'}, 'macbook2017']

console.log(apples)
['air', {model: 'm1'}, 'macbook2017']
```

>*Giải thích:*

Biến apples sử dụng Spread Operator để clone biến macbooks. Array của biến macbook có type lần lượt là [value, reference, value] => Array của apples cũng tương tự. Sau khi clone thì tại apples[1] giá trị ở đó là tham chiếu địa chỉ ô nhớ của Object trong biến macbooks. Nên khi modify giá trị của Object trong apples là ta đang modify của cả giá trị của Object trong biến apples. Còn apples[0] là ta modify  tham trị nên ko ảnh hưởng đến mảng cũ.

##Ex3
--------------
Kết quả in ra là undefined. Lý do là hoisting. Đoạn code có thể được triển khai rõ ràng hơn như sau:
```
var text = 'outside';
function show() {
    var text
    console.log(text) //1
    text = 'inside';
}
```
Biến text bên ngoài hàm show() là biến global, có scope được ưu tiên sau biến text nằm trong hàm. Còn xét trong hàm show(), hoisting nên var text có giá trị khởi tạo là undefined => console.log(text) = undefined.

##Ex5

---------
>*Kết quả là:*
```
  console.log( counter.up() ); // 1
  console.log( counter.up() ); // 2
  console.log( counter.down() ); // 1
```
>*Giải thích:*

Hàm Counter() được thực thi với toán tử new và gán cho biến counter. Các bước sẽ xảy ra là:

1. Một đối tượng trống mới được tạo và gán cho this.

2. Các phần thân hàm được thực thi. Thêm method up và down cho this.

3. Giá trị của this được return cho biến counter.

Do giá trị được return trở lại biến counter nên sau counter.up() lần thứ 1 thì count = 1, value count lưu lại trong counter. Sau khi counter.up() lần thứ 2 thì count = 2.  Sau khi counter.down() thì count = 1.

##Ex6
--------------
>*Kết quả là:*
```
hello
hi
world
```
>*Giải thích:*

Thứ tự hoạt động bất đồng bộ:
1. console.log("hello") được đưa vào stack, log ra "hello" và pop ra khỏi stack.
2. setTimeout với callback () được push vào stack, sau đó đẩy nó qua Web APIs, sau đó được đưa ngay xuống callback queue.
3. console.log("hi") được đưa vào stack, log ra "hi" và pop ra khỏi stack.
4. Lúc này call stack đã trống, event loop sẽ đẩy các callback trong callback queue lên call stack để thực thi. Ở đây là callback ().
5. callback () log ra "world" và pop ra khỏi stack.