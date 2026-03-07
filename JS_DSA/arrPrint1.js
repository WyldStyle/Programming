let arr = [1, 2, 3, 4, 5]; let a = '', length = 5, ad;
for (let i = 0; i <= length; i++) {
    a = ""; ad = '';
    for (let j = i; j < length; j++) {
        a += arr[j];
        // console.log(j);
        console.log(a);
        //ad = arr.slice(i,j+1);
        //console.log(ad);
    }
}
