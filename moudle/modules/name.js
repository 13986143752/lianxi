const name = {
    name: '张山',
    sayName: function () {
        console.log(this)
        console.log(this.name)
    }
}

const age = {
    age: 100,
}

// 第一种暴露方法
// module.exports = {
//     name,
//     age
// }


// 第二种暴露方法，这里的exports相当于module.exports的应用
exports.name = name;
exports.age = age;


