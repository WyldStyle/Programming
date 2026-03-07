// 96ms
function isPalindrome(head) {
    //  let str1 = '', str2 = '';
    // while(head){
    //     str1 += head.val;
    //     str2 = head.val + str2;
    //     head = head.next;
    // }
    // return str1 == str2;
   let arr1 = [];
   while(head){
       arr1.push(head.val)
       head = head.next;
   }  
   for(let i = 0; i < Math.abs(arr1.length/2); i++){
       if(arr1[i] != arr1[arr1.length - 1- i]) return false;
   }
   return true;
};

// leetcode 74 ms
var isPalindrome = function(head) {
    let curr = head;
    let count=0;
    while(curr){
        count++;
        curr = curr.next;
    }
    //console.log(count);
    let middle = Math.floor(count/2);
    
   
    
    let prev;
    curr = head;
    while(middle--){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
     if(count%2==1){
        curr = curr.next;
    }
    
    while(curr){
        if(curr.val!==prev.val){
            return false;
        }
        curr = curr.next;
        prev = prev.next;
    }
    return true;
};