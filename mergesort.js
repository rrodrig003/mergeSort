function split(wholeArr) {
    let firstHalf, secondHalf;

    firstHalf = wholeArr.slice(0, wholeArr.length/2)
    
    secondHalf = wholeArr.slice(wholeArr.length/2)

    return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
    let resultArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] > arr2[0]) {
            resultArr.push(arr2[0])
            arr2.shift();
        } else {
            resultArr.push(arr1[0])
            arr1.shift();
        }
    }

    console.log(resultArr);

    return resultArr;
}

merge([2,5,9],[1,7,8])