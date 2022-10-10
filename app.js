const languages = ["Nodejs", "Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];

const getTextAnni = document.querySelector(".text-ani");

// console.log(languages);
// console.log(languages[0]);   // give value take idx
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);


// console.log(languages.indexOf("Reactjs"));  // give value take idx
// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf("Reactjs")]);
// console.log(colors[languages.indexOf("Vuejs")]);



// Generator Function syntax

// function* name(){

// }
// yield = outout many tims   using with next(); = output object
// return = only one time

// function* genfun(){
        // yield 1;
        // yield 2;
        // yield 3;
// }

// const getGen = genfun();

// console.log(getGen.next().value); // 1
// console.log(getGen.next().value); // 2
// console.log(getGen.next().value); // 3
// console.log(getGen.next().value); // undefined
// console.log(getGen.next().value); // undefined

// console.log(getGen.next()); // {value: 1, done: false}
// console.log(getGen.next()); //  2
// console.log(getGen.next()); // 3
// console.log(getGen.next()); // undefined



// return 0 -3
function* myGenerator(){

        var idx = 0;

        while(true){
                yield idx++;

                if(idx > 3){
                        idx = 0;
                }
        }
}


// const testNumber = myGenerator();
// console.log(testNumber.next());   // {value: 0, done: false}
// console.log(testNumber.next().value); // 0
// console.log(testNumber.next().value); // 1
// console.log(testNumber.next().value); // 2
// console.log(testNumber.next().value); // 3
// console.log(testNumber.next().value);  // 0

// console.log(languages[testNumber.next().value]);   // NodeJS
// console.log(languages[testNumber.next().value]); // ReactJS
// console.log(languages[testNumber.next().value]); // VueJS
// console.log(languages[testNumber.next().value]); // Laravel

function showWords(word) {
        let x = 0;
        getTextAnni.innerHTML = "";  // remove text in html (Node JS)
        // getTextAnni.innerHTML = word;
        // getTextAnni.innerHTML += word[0];   // append
        // getTextAnni.innerHTML += word[1];  // append

        getTextAnni.classList.add(colors[languages.indexOf(word)]);

   let showInterval   =  setInterval(function(){
                // getTextAnni.innerHTML = word;
                // getTextAnni.innerHTML = word[0];
                // getTextAnni.innerHTML += word[1];

                if(x >= word.length){

                        clearInterval(showInterval);
                        deleteWords();
                }else {
                        getTextAnni.innerHTML += word[x];
                        x++;
                }
        },500);
}

function deleteWords() {
        let getWord = getTextAnni.innerHTML;
        // console.log(getWord);

        let getLastIdx = getWord.length -1;
        // console.log(getLastIdx);


        let deleteInterval = setInterval(function() {
                if(getLastIdx >= 0){

                        // substring(start,end); = copy letter

                        getTextAnni.innerHTML = getTextAnni.innerHTML.substring(0, getTextAnni.innerHTML.length -1);    // copy letter
                        getLastIdx --;

                }else {
                        getTextAnni.classList.remove(colors[languages.indexOf(getWord)]);
                        showWords(languages[gen.next().value]);
                        clearInterval(deleteInterval);
                }
        },500);
}

let gen = myGenerator();
showWords(languages[gen.next().value]);



let getTextLights = document.querySelectorAll(".text-light");

getTextLights.forEach((getTextLight) =>{
        // console.log(getTextLight);

        let arrayTexts = getTextLight.textContent.split("");
        // console.log(arrayTexts);

        getTextLight.textContent = "";

        arrayTexts.forEach((arrayText,idx) => {
                // console.log(arrayText);

                let newEmTag = document.createElement("em");
                newEmTag.textContent = arrayText;
                newEmTag.style.animationDelay = `${idx * .05}s`;
                getTextLight.append(newEmTag);

        });
});