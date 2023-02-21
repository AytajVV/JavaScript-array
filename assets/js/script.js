// Task 1 Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.
let arr = [2,5,1,6,8,7];
let temp = 0;
function Sort(array) {
    let min;
    for (let i = 0; i < array.length; i++) {
        min = i;
        for (let j = i+1; j < array.length; j++) {
            if (arr[j]<arr[min]) {

                temp = arr[min]
                arr[min] = arr[j]
                arr[j] = temp
            }
        }
    }
    return array;
}

console.log(Sort(arr));


// Task 2 Parametr olaraq gelen stringi tersine ceviren method yazin. Meselen: Cavid gelirse divaC qaytarsin.
let str = "";
function Reverse(name){
    for (let index = name.length-1; index >= 0; index--) {
        str+=name[index]; 
    }
    console.log(str);

}
Reverse("Cavid");