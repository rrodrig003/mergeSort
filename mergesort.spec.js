describe('MergeSort implementation', function() {
    let testArr;
    beforeEach(() => {
        testArr = [2,5,9,1,7]
        spyOn(window, 'split').and.callThrough();
        spyOn(window, 'merge').and.callThrough();
        spyOn(window, 'mergeSort').and.callThrough();
    })
    it('is able to split an array into two halves', function() {
        // split(testArr);
        expect(split(testArr)).toEqual([[2,5], [9,1,7]]);
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        expect(merge([2,5,9],[1,7,8,10])).toEqual([1, 2, 5, 7, 8, 9, 10]);
    });

    it('is able to implement mergeSort', function(){
        // test the merging algorithm
        console.log(mergeSort([9,6,3,2,5,8,7,4,1]))
        expect(mergeSort([9,6,3,2,5,8,7,4,1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

  });

// describe('Merge function', function(){
//     let testArr;
//     beforeEach(() => {
//         testArr = [2,5,9,1,7]
//         spyOn(window, 'merge').and.callThrough();
//     })

//     it('is able to merge two sorted arrays into one sorted array', function(){
//         // test the merging algorithm
//         expect(merge([2,5,9],[1,7,8,10])).toEqual([1, 2, 5, 7, 8, 9, 10]);
//     });

// });

// describe('MergeSort function', function(){
//     let testArr;
//     beforeEach(() => {
//         testArr = [9,6,3,2,5,8,7,4,1]
//         spyOn(window, 'mergeSort').and.callThrough();
//     });

//     it('is able to merge two sorted arrays into one sorted array', function(){
//         // test the merging algorithm
//         expect(mergeSort(testArr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     });
// });
