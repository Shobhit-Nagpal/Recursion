const fibs = (num) => {
    let fibsArr = [];
    const first = 0;
    const second = 1;

    fibsArr.push(first);
    fibsArr.push(second);

    //num - 2 as we already added 2 elements in the array before and need 6 more iterations to get 8 elements in the array
    for (let i = 0 ; i < num - 2 ; i++) {
        let nextElement = fibsArr[i] + fibsArr[i+1];
        fibsArr.push(nextElement);
    }

    return fibsArr;
}

console.log(fibs(8));