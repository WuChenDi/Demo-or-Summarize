## 一. 交集：合并去重 Set(),Array.from()
```js
let a = [1,2,5];
let b = [2,5,7];
let c = new Set([...a,...b]);
console.log(Array.from(c)) //[1,2,5,7]
```

## 二. 并集：找出数组中相同的元素 filter(),has()
```js
let a = [1,2,5];
let b = [2,5,7];
let c = a.filter(x=> (new Set(b)).has(x) )
console.log(c)//[2,5]
```

## 三. 数组四种遍历方法：
  *  keys()
  ```js
  //未转化成Set()时，结果item是key值也就是数组的下标
  console.log("未转化Set()")
  let arr = [1,2,3,4,5,6,7,8,9];
  for(let item of arr.keys()){
      console.log(item)
  }
  //转化成Set()时，结果item就是数组的元素
  console.log("转化Set()")
  arr = new Set(arr);
  for(let item of arr.keys()){
      console.log(item)
  }
  ```

  *  values()：必须使用Set()转化后才能使用
  ```js
  let arr = [1,2,3,4,5,6,7,8,9];
  arr = new Set(arr);
  for(let item of arr.values()){
      console.log(item)
  }
  ```

  *  entries()
  ```js
  console.log("未转化Set()")
  let arr = [1,2,3,4,5,6,7,8,9];
  //未转化成Set()时，结果item是一个数组[key,value];key是从0开始
  for(let item of arr.entries()){
      console.log(item)
  }
  //转化成Set()时，结果item是一个数组[key,value];key的值与value值相同
  console.log("转化Set()")
  arr = new Set(arr);
  for(let item of arr.entries()){
      console.log(item)
  }
  console.log("测试key值是否与value值相等")
  let  arr2=["vue","angular","react"];
  arr2 = new Set(arr2);
  for(let item of arr2.entries()){
      console.log(item)
  }
  ```

  *  forEach():箭头函数参数有三个，(键值：value、键名：key、集合：array)
  ```js
  console.log("未转化Set()")
  let arr = ["vue","angular","react"];
  //未转化成Set()时，key从0开始
  arr.forEach((value,key)=>console.log(value,key))
  //转化成Set()时，key的值与value值相同
  console.log("转化Set()")
  arr = new Set(arr);
  (new Set(arr)).forEach((value,key)=>console.log(value,key))
  ```