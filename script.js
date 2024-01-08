let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web designing',
    'Javascript',
    'Where to learn coding',
];

let resultBox = document.querySelector('.result-box');
let inputBox = document.getElementById('input-box');

inputBox.onkeyup = function(){
    let result =[];
    let input = inputBox.value;
    if(input.length){
        result= availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML ='';
    }
}



function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    })
    resultBox.innerHTML = "<ul>"+content.join('')+"</ul>";
}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}