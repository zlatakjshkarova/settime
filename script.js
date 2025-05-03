//Задание таймера не блокирует дальнейшее выплненение кода
console.log('до таймера')
setTimeout(() => {
    console.log('таймер на 3000')
}, 3000)
setTimeout(() => {
    console.log('таймер на 500')
}, 500)
console.log('2.может делать другое');
console.log('после таймера')
console.log('до цикла')
//запуск  таймера
//запускаем  таймер- console.time(любая)
console.time('q')
for (let i = 1; i < 2000000; i++) {
    let a = i / i
}
//конец работы таймера- console.timeEnd('q')
console.timeEnd('q')


