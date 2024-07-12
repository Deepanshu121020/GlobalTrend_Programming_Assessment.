const printOneToHundred = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}
printOneToHundred();


const stringInput = (string) => {
    let result =  eval(string)
    console.log(result)
}

stringInput('28*28');


const nestedToFlatend = (nestedArray) => {
    let flatendArray = nestedArray.flat()
    console.log(flatendArray)
}

//or

const nestedToFlatend2 = (nestedArray) => {
    let flatendArray2 = [].concat(...nestedArray)
    console.log(flatendArray2)
}

nestedToFlatend([["a","b","c"],[1,2,3],["d","e","f"],[4,5,6]]);
nestedToFlatend2([["a","b","c"],[1,2,3],["d","e","f"],[4,5,6]]);

const checkAnagrams = (string1,string2) => {

    str1 = string1.toLowerCase();
    str2 = string2.toLowerCase();

    wordsStr1 = str1.split('').sort().join();
    wordsStr2 = str2.split('').sort().join();

    console.log(wordsStr1,wordsStr2)

    if(wordsStr1 === wordsStr2){
        console.log('Words are anagrams')
    }else{
        console.log("words are not anagram")
    }
}

 checkAnagrams('llohe','hello')


const duplicatesRemoved = (array) => {
    newArray =  array.filter((value, idx, array) => array.indexOf(value) === idx);
    console.log(newArray)
}
 
duplicatesRemoved([1,2,2,4,58,98,55,2,14,6,7,68,8,6,4,7,8,9,2,0,2,0,1,3,3,3])


const capitalizeFirstLetter = (string) => {
    let newWord = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(newWord)
}
capitalizeFirstLetter('oeeeasdfj')

function fibonacciSeries(n) {
   
    let a = 0;
    let b = 1;
    let c = 0 ;

    for(let i=0;i<n;i++){
        a = b;
        b = c;
        c = a+b;
        console.log(c)
    }
  }
  
  
  n=10;
  const fibonacciSequence = fibonacciSeries(n);
  

    
  function createHashMap() {
    const map = {};
  
    function put(key, value) {
      map[key] = value;
    }
  
    function get(key) {
      return map[key];
    }
  
    function remove(key) {
      if (map[key] !== undefined) {
        delete map[key];
      }
    }
  
    return {
      put,
      get,
      remove
    };
  }
  
  const myMap = createHashMap();
  
  myMap.put('monkey', 5);
  myMap.put('elephant', 10);
  myMap.put('birds', 15);
  
  console.log(myMap.get('elephant'));
  myMap.remove('elephant');
  console.log(myMap.get('elephant'));




const filterEvenNum = (array) => {
    const filteredArray = array.filter(num => num % 2 === 0)
    console.log(filteredArray)
}

filterEvenNum([1,2,3,4,5,6,7,8,9,10,12,11])



function toTitleCase(str) {
    const words = str.split(' ');

    const titleCaseWords = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  
    return titleCaseWords.join(' ');
  }
  
  const sentence = "my name is deepanshu sharma";
  const titleCaseSentence = toTitleCase(sentence);
  console.log("Title case:", titleCaseSentence); 