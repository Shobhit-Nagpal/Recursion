const fibsRec = (num) => {
    
    if (num === 1) {
        return [0];
    }
    else if (num === 2) {
        return [0,1];
    }
    else {
        //We're returning an array where we're copying the array returned of num-1 and adding another element performing Fn = Fn-1 + Fn-2 where n = num - 1
        return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
    }
}

console.log(fibsRec(8));

//How execution is taking place
/*fibsRec(8)
    return [0,1,1,2,3,5,8,8+5]
    fibsRec(7)
        return [0,1,1,2,3,5,5+3]
        fibsRec(6)
            return [0,1,1,2,3,3+2]
            fibsRec(5)
                return [0,1,1,2,2+1]
                fibsRec(4)
                    return [0,1,1,1+1]
                    fibsRec(3)
                        return [0,1,1+0]
                        fibsRec(2)
                            return [0,1] */