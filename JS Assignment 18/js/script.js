function Quiz(question, correct, answers) {
    this.question = question;
    this.correct = correct;
    this.answers = answers;

}

var question1 = new Quiz("What is the full form of HTML?", "Hyper text markup language", ["Hyper text markup language", "Hyper top markup langer", "Hueston text makeup language", "Hyper tool makeup language"]);
var question2 = new Quiz("Img is an/a?", "inline element", ["inline element", "block element", "illine-block element", "hidden element"]);
var question3 = new Quiz("Div is an/a?", "Container", ["Container", "Css property", "Html server", "parent of body"]);
var question4 = new Quiz("Attribites are used for?", "to provide extra information", ["to provide extra information", "to get its property", "to display element", "to set text for it"]);
var question5 = new Quiz("Display inline property can't take this property?", "width,heigth", ["width,heigth", "color", "javascript", "markup"]);
var questions = [question1, question2, question3, question4, question5];
var noOfQuestion = 1;
var score = 0;
var h4 = document.getElementById("question");
var radios = document.getElementsByTagName("input");
var radios = document.getElementsByTagName("input");
console.log(radios)
function intializer() {
    document.getElementById("intializer").style.display = "none";
    document.getElementById("questions").style.display = "block";
    h4.innerHTML = questions[0].question;
    for (var i = 0; i < question1.answers.length; i++) {
        radios[i].setAttribute("value", questions[0].answers[i]);
        document.getElementsByTagName("label")[i].innerHTML = questions[0].answers[i];
    }
}
function toSelect() {
    for (var n = 0; n < radios.length; n++) {
        if (radios[n].checked === true) {
            document.getElementById("next-btn").disabled = false;
        }
    }
}

function next() {

    if (noOfQuestion == 5) {
        document.getElementById("next-btn").innerHTML = "submit";
        document.getElementById("questions").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result-status").innerHTML = "Congrates!! You've done with Quiz!!";
        var total = (score / questions.length) * 100;
        if(score >= 3){
            document.getElementById("score").innerHTML = "Good!! you are pass the Quiz with " + total + "%.";
        }
        else{
            document.getElementById("score").innerHTML = "Sorry you are failed best luck for the next time."
        }
    }
    else {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                if (radios[i].value === questions[noOfQuestion - 1].correct) {
                    score++;
                }

            }
        }
        h4.innerHTML = questions[noOfQuestion].question;
        for (var i = 0; i < question1.answers.length; i++) {
            radios[i].setAttribute("value", questions[noOfQuestion].answers[i]);
            document.getElementsByTagName("label")[i].innerHTML = questions[noOfQuestion].answers[i];
        }
        noOfQuestion++;
    }
    for (var m = 0; m < radios.length; m++) {
        radios[m].checked = false;
    }
    for (var o = 0; o < radios.length; o++) {
        if (radios[o].checked === false) {
            document.getElementById("next-btn").disabled = true;
        }
    }
}
