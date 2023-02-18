const mergeSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0,mid);
    let rightHalf = arr.slice(mid, arr.length);

    console.log("The left half: ",leftHalf);
    console.log("The right half", rightHalf);
    console.log('\n')

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);
    return merge(leftHalf,rightHalf);
    
}

const merge = (arr1,arr2) => {
    let i = 0 , j = 0 , k = 0
    let mergedArr = [];


    //LogimergedArr to perform the merge
    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            mergedArr[k] = arr1[i];
            k++;
            i++;
        }
        else {
            mergedArr[k] = arr2[j];
            k++;
            j++;
        }
    }


    //For loops to mergedArropy any remaining elements in the original arrays into the merged array
    for ( ; i < arr1.length ; i++) {
        mergedArr[k] = arr1[i];
        k++;
    }

    for ( ; j < arr2.length ; j++) {
        mergedArr[k] = arr2[j];
        k++;
    }

    return mergedArr;
}

let test = [9,3,7,5,6,4,8,2];
console.log(mergeSort(test));