// 실습 1 : 객체 생성하기
// (1) 객체 리터럴 사용하기
const order = {
    orderNum: 20210401,
    orderId: 'efubFront',
    name: '이펍',
    address: '서울특별시 서대문구 이화여대길 52'
};

for (let key in order) {
    console.log(`${key}: ${order[key]}`);
}
// (2) 함수를 사용한 객체 생성
/* const order = {
    orderNum: 20210401,
    orderId: 'efubFront',
    name: '이펍',
    address: '서울특별시 서대문구 이화여대길 52'
};

for (let key in order) {
    console.log(`${key}: ${order[key]}`);
} */
// (3) new 연산자 사용
/* function Order(orderNum, orderId, name, address) {
    this.orderNum = orderNum;
    this.orderId = orderId;
    this.name = name;
    this.address = address;
}

const order = new Order(20210401, 'efubFront', '이펍', '서울특별시 서대문구 이화여대길 52');

for (let key in order) {
    console.log(`${key}: ${order[key]}`);
} */
// (4) Object()
/* const order = new Object()
order.orderNum = 20210401;
order.orderId = 'efubFront';
order.name = '이펍';
order.address = '서울특별시 서대문구 이화여대길 52';

for (let key in order) {
    console.log(`${key}: ${order[key]}`);
} */


// 실습 2: 배열 내장 함수 활용하기
const numbers = [1, 2, 3, 4, 5];
const threeMultiply = numbers.map(num => num * 3);

threeMultiply.forEach(number => {
    if (number%2 === 0) {
        console.log(number);
    }
})