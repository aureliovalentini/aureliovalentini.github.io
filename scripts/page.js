//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.19
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 0;
    var weight = DecodeNumber('EHTqOOl0+tg=', 238, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "I quattro ragazzi si mettono a riflettere e a discutere tra loro ed esprimono ciascuno le proprie considerazioni sulla validità scientifica di quanto riportato nell'articolo: - Secondo Mario la scoperta è casuale e non ha quindi valore scientifico. - Anche secondo Giulia quanto riportato nell'articolo non ha nessuna importanza scientifica, perché nessun animale può digerire la plastica.  - Ettore ritiene invece che gli autori della pubblicazione, prima di affermare quanto riportato nell'articolo, devono necessariamente avere allestito delle prove per dimostrare la validità delle loro affermazioni. - Secondo Alessandra, infine, le farfalle di Galleria mellonella e i bruchi non hanno nessun rapporto tra di loro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sobu7UpM8zQ=', 240, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EHTqOOl0+tg=', 238, -9999, 99999), DecodeNumber('7rsfytNc6mI=', 238, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kUYaAo+nR9c=', 242, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sobu7UpM8zQ=', 240, -9999, 99999), DecodeNumber('U7LZEUpPBuE=', 240, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zZYylM1GUtA=', 244, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zZYylM1GUtA=', 242, -9999, 99999), DecodeNumber('LB289cYtt5U=', 242, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L5F+jzF28hY=', 605, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pNg7PtL95K0=', 603, -9999, 99999), DecodeNumber('CG0N53oW0TI=', 603, -9999, 99999), '');
    answer4.shortTextAnswer = "Mario";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 1;
    var weight = DecodeNumber('Hi5Fgd3J2Xw=', 443, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi a quale gruppo di animali appartiene la farfalla oggetto dello studio: - Secondo Mario Galleria mellonella è un insetto appartenente ai Lepidotteri. - Secondo Giulia è un insetto appartenente ai Ditteri. - Secondo Ettore è un Artropode ma non è un insetto. - Secondo Alessandra, infine, non è un neanche un Artropode perché i bruchi non hanno l'esoscheletro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XctujxxUK6w=', 445, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XctujxxUK6w=', 443, -9999, 99999), DecodeNumber('9iAkdWvRLfc=', 443, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YF4cm4wx6ik=', 447, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('XctujxxUK6w=', 445, -9999, 99999), DecodeNumber('l0Iu6cJQdfQ=', 445, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0kY88h5FD40=', 808, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9Mwoj9I9UMQ=', 806, -9999, 99999), DecodeNumber('YEdcAkxb1ro=', 806, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('J1rlS06X7NA=', 810, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0kY88h5FD40=', 808, -9999, 99999), DecodeNumber('7sAkKrxjPX0=', 808, -9999, 99999), '');
    answer4.shortTextAnswer = "Alessandra";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 2;
    var weight = DecodeNumber('CxuZ2r2fdgc=', 171, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di formulare alcune ipotesi sulle caratteristiche della Galleria mellonella. - Secondo Mario le farfalle e i bruchi sono due animali diversi che rappresentano due modi diversi di mimetizzarsi nell'ambiente. - Secondo Giulia le farfalle e i bruchi sono due stadi diversi dello stesso animale che rappresentano due diverse fasi del loro ciclo vitale che è caratterizzato dalla metamorfosi. - Secondo Ettore bruchi e farfalle hanno anche abitudini alimentari e ruoli ecologici diversi. - Secondo Alessandra, infine, la presenza contemporanea di bruchi e farfalle negli alveari evidenzia il fatto che essi nell'ambiente svolgono lo stesso ruolo ecologico.  Le affermazioni di quali studenti sono corrette?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jarp3/qbZZo=', 173, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('CxuZ2r2fdgc=', 171, -9999, 99999), DecodeNumber('yeCmruMAlTE=', 171, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario ed Ettore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hpzWIoD1ab4=', 1011, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('okcgkdMDHF8=', 1009, -9999, 99999), DecodeNumber('69vdtLdUrps=', 1009, -9999, 99999), '');
    answer2.shortTextAnswer = "Mario, Giulia e Alessandra";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XktLpIM9aPU=', 1013, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XktLpIM9aPU=', 1011, -9999, 99999), DecodeNumber('g+OGrMQMFOg=', 1011, -9999, 99999), '');
    answer3.shortTextAnswer = "Giulia ed Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7lFRuz5/FcU=', 1015, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('XktLpIM9aPU=', 1013, -9999, 99999), DecodeNumber('46L2yh7Q618=', 1013, -9999, 99999), '');
    answer4.shortTextAnswer = "Le affermazioni sono tutte corrette.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 3;
    var weight = DecodeNumber('+LpBTXjICZ0=', 213, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di ipotizzare quale rapporto c'è tra larve e habitat degli alveari.  - Secondo Mario Galleria mellonella ha deposto le uova all'interno degli alveari, dove le larve sono cresciute digerendo la cera d'api.  - Anche secondo Giulia è così; anzi, questo fatto spiega perché le larve vengano usate come esca dai pescatori: esse sono dolci in quanto possono ingerire anche miele. - Secondo Ettore la cera d'api e la plastica hanno una struttura chimica troppo diversa per cui non è pensabile che un organismo sia in grado di digerirle entrambe. - Secondo Alessandra, anche se in condizioni normali le larve non mangiano la plastica, in caso di bisogno riescono ad adattarsi, riuscendo a digerirla.  L'unica affermazione NON corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sgSXy6Y6kPY=', 215, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+LpBTXjICZ0=', 213, -9999, 99999), DecodeNumber('IB+KUOo/J5g=', 213, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fkoE8HzWjBA=', 217, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sgSXy6Y6kPY=', 215, -9999, 99999), DecodeNumber('s1nLBTAQfc4=', 215, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CRPiqqEYUi0=', 577, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CRPiqqEYUi0=', 575, -9999, 99999), DecodeNumber('QffLWUfIAJw=', 575, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8g8FXUUwHWw=', 579, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CRPiqqEYUi0=', 577, -9999, 99999), DecodeNumber('voR1QQ0Vn4Q=', 577, -9999, 99999), '');
    answer4.shortTextAnswer = "Alessandra";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 4;
    var weight = DecodeNumber('oVAozcXZDsU=', 940, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale differenza presenta la plastica rispetto al glicole etilenico? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('975LuBwhBz8=', 942, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('oVAozcXZDsU=', 940, -9999, 99999), DecodeNumber('r6smWt0wKj8=', 940, -9999, 99999), '');
    answer1.shortTextAnswer = "La prima è un composto organico, il secondo è un composto inorganico.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FH9n2rRqt4U=', 944, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FH9n2rRqt4U=', 942, -9999, 99999), DecodeNumber('StBNJG2n4Ig=', 942, -9999, 99999), '');
    answer2.shortTextAnswer = "La prima ha una composizione più complessa del secondo.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('IMDAmOq5o/g=', 946, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('FH9n2rRqt4U=', 944, -9999, 99999), DecodeNumber('XhhyPevGxuQ=', 944, -9999, 99999), '');
    answer3.shortTextAnswer = "La prima ha una composizione più semplice del secondo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nX2GqEFzgJk=', 948, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IMDAmOq5o/g=', 946, -9999, 99999), DecodeNumber('/cBPi81ScXg=', 946, -9999, 99999), '');
    answer4.shortTextAnswer = "La prima è formata da polimeri diversi, il secondo da polimeri dello stesso tipo.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 5;
    var weight = DecodeNumber('QI3dHpI+Asc=', 145, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Con il loro lavoro i due studiosi: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uqvlGTzTXOY=', 147, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QI3dHpI+Asc=', 145, -9999, 99999), DecodeNumber('FXtSbDv59vU=', 145, -9999, 99999), '');
    answer1.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella può essere usata per risolvere il problema dell'inquinamento da polietilene.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('A/FKbgi7B5M=', 149, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('uqvlGTzTXOY=', 147, -9999, 99999), DecodeNumber('En8l/TsbgQE=', 147, -9999, 99999), '');
    answer2.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella sfrutta la capacità di digerire il polietilene per invadere gli alveari.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9Ji8Jg0PBVo=', 510, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9Ji8Jg0PBVo=', 508, -9999, 99999), DecodeNumber('N4lYCe0KDnU=', 508, -9999, 99999), '');
    answer3.shortTextAnswer = "Hanno capito che nel bruco la degradazione della plastica non avviene solo per una semplice azione meccanica, come quella masticatoria, ma anche per un processo chimico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PIR7dSYckw8=', 512, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9Ji8Jg0PBVo=', 510, -9999, 99999), DecodeNumber('MEKTCdUcyy8=', 510, -9999, 99999), '');
    answer4.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella può essere usata per risolvere il problema dell'inquinamento da polietilene.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 6;
    var weight = DecodeNumber('g6LTwT51dQU=', 709, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le foglie della maggior parte delle piante hanno una colorazione verde perché le clorofille:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jDCURuVaxz8=', 711, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('g6LTwT51dQU=', 709, -9999, 99999), DecodeNumber('KlXTZOv952M=', 709, -9999, 99999), '');
    answer1.shortTextAnswer = "Assorbono la radiazione indipendentemente dal colore, ma riflettono soprattutto nel verde.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iJo+5DrSW0Q=', 713, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jDCURuVaxz8=', 711, -9999, 99999), DecodeNumber('Pcv7DYCBVOg=', 711, -9999, 99999), '');
    answer2.shortTextAnswer = "Non assorbono ma riflettono la radiazione verde.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iip/yXOoGa8=', 715, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iJo+5DrSW0Q=', 713, -9999, 99999), DecodeNumber('xu6zjPr7nhA=', 713, -9999, 99999), '');
    answer3.shortTextAnswer = "Assorbono soprattutto radiazione verde, dando questo colore alle foglie.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hOS7Th9A6B8=', 717, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('hOS7Th9A6B8=', 715, -9999, 99999), DecodeNumber('06E/n7WOuic=', 715, -9999, 99999), '');
    answer4.shortTextAnswer = "Assorbono poco la radiazione verde, quindi ne riflettono la maggior parte.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 7;
    var weight = DecodeNumber('9dkeTPSKEr0=', 915, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In autunno le foglie degli alberi assumono colorazioni che vanno dal giallo al rosso-bruno. Perché?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8O4MOaKim+I=', 917, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9dkeTPSKEr0=', 915, -9999, 99999), DecodeNumber('MYj9prZ266A=', 915, -9999, 99999), '');
    answer1.shortTextAnswer = "Le molecole di clorofilla si modificano gradualmente, portando ad assorbire la luce a frequenze differenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EXR7vvR07Oc=', 919, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8O4MOaKim+I=', 917, -9999, 99999), DecodeNumber('2pwtj9ZDnFg=', 917, -9999, 99999), '');
    answer2.shortTextAnswer = "Le molecole di clorofilla vengono gradualmente sostituite da altri pigmenti, come i carotenoidi, più efficienti nella stagione autunnale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vndSvueWgDw=', 921, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vndSvueWgDw=', 919, -9999, 99999), DecodeNumber('8gZ4QvhnjoM=', 919, -9999, 99999), '');
    answer3.shortTextAnswer = "La produzione di clorofilla cessa, lasciando spazio ad altri pigmenti che sono sempre presenti, ma normalmente sono in quantità minore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('B+e/iwa+XAk=', 281, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KgQt14Nv+ns=', 279, -9999, 99999), DecodeNumber('DRImBdTGJcI=', 279, -9999, 99999), '');
    answer4.shortTextAnswer = "La diversa intensità di luce porta ad assorbire a frequenze differenti, anche se le molecole di clorofilla rimangono presenti.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 8;
    var weight = DecodeNumber('975LuBwhBz8=', 942, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva le figure seguenti, che rappresentano fotografie al microscopio elettronico di quattro organelli presenti nelle cellule vegetali.   Quale di loro ha la maggiore concentrazione di clorofilla?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FH9n2rRqt4U=', 944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FH9n2rRqt4U=', 942, -9999, 99999), DecodeNumber('StBNJG2n4Ig=', 942, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IMDAmOq5o/g=', 946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FH9n2rRqt4U=', 944, -9999, 99999), DecodeNumber('XhhyPevGxuQ=', 944, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nX2GqEFzgJk=', 948, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('IMDAmOq5o/g=', 946, -9999, 99999), DecodeNumber('/cBPi81ScXg=', 946, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('c6DxGy4UwaU=', 950, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nX2GqEFzgJk=', 948, -9999, 99999), DecodeNumber('feywp/MGoUE=', 948, -9999, 99999), '');
    answer4.shortTextAnswer = " D";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 9;
    var weight = DecodeNumber('Q1/wIOQNOLo=', 646, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva il grafico seguente, che raffigura gli spettri di assorbimento dei due tipi di clorofilla più comuni. Si ricorda che il Sole ha irradianza (cioè potenza per unità di area) massima nel visibile, con picco attorno ai 500 nm e che l'attraversamento dell'atmosfera terrestre sposta leggermente in avanti e appiattisce il picco suddetto.     Il grafico suggerisce che la fotosintesi clorofilliana si è sviluppata per massimizzare l'assorbimento:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('89TOMvLFSIs=', 648, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Q1/wIOQNOLo=', 646, -9999, 99999), DecodeNumber('GnuKuvqrkgg=', 646, -9999, 99999), '');
    answer1.shortTextAnswer = "Dov'è massima l'irradianza della radiazione filtrata dall'atmosfera, cioè tra i 600 e i 700 nm.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KJAC/zAgcT4=', 650, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KJAC/zAgcT4=', 648, -9999, 99999), DecodeNumber('4tOWlSF79B4=', 648, -9999, 99999), '');
    answer2.shortTextAnswer = "Esattamente ai bordi dell'intervallo per cui la radiazione proveniente dal Sole ha irradianza massima.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g+OGrMQMFOg=', 1010, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('69vdtLdUrps=', 1008, -9999, 99999), DecodeNumber('1i30uNdy45U=', 1008, -9999, 99999), '');
    answer3.shortTextAnswer = "Dove la radiazione solare ha irradianza massima, per ottenere la maggiore efficienza possibile.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FxKCWkkmvwo=', 371, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('hQ0roTlRIJM=', 369, -9999, 99999), DecodeNumber('bFDSStbGL6M=', 369, -9999, 99999), '');
    answer4.shortTextAnswer = "Nel vicino ultravioletto e nel vicino infrarosso.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 10;
    var weight = DecodeNumber('Qhog6rUrrTc=', 764, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le clorofille \"a\" e \"b\" sono indispensabili per svolgere il processo con cui le piante superiori procurano l'energia di cui necessitano, denominato appunto fotosintesi clorofilliana. Quale delle seguenti affermazioni che riguardano la fotosintesi clorofilliana è ERRATA?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('X8npVnqkIkw=', 766, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('X8npVnqkIkw=', 764, -9999, 99999), DecodeNumber('/EVVb8wSi94=', 764, -9999, 99999), '');
    answer1.shortTextAnswer = "L'intero processo si divide in due fasi: luce-dipendente, che avviene solo di giorno, e luce-indipendente, che avviene solo di notte.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FJRilAEFjxc=', 126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('mzui76oHBo4=', 124, -9999, 99999), DecodeNumber('BJ/khZWrqjo=', 124, -9999, 99999), '');
    answer2.shortTextAnswer = "Solamente durante la fase luce-dipendente viene catturata energia dall'esterno e convertita in energia chimica attraverso le molecole di ATP e NADPH + H+ .";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ZIph0hjyihU=', 965, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Ds1rj5gJPNU=', 963, -9999, 99999), DecodeNumber('ZP3eDs1laBA=', 963, -9999, 99999), '');
    answer3.shortTextAnswer = "È influenzata da parametri ambientali come temperatura e disponibilità di luce.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qiZQRrRdgFE=', 967, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ZIph0hjyihU=', 965, -9999, 99999), DecodeNumber('+H3H6lVmjS0=', 965, -9999, 99999), '');
    answer4.shortTextAnswer = "È influenzata dalle disponibilità di acqua e anidride carbonica.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 11;
    var weight = DecodeNumber('r1DDATMQi1c=', 575, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In base a quanto affermato, tra quali fasi successive del ciclo cellulare è posizionato il punto di START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('CRPiqqEYUi0=', 577, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('r1DDATMQi1c=', 575, -9999, 99999), DecodeNumber('QffLWUfIAJw=', 575, -9999, 99999), '');
    answer1.shortTextAnswer = "Tra la fase G1 e la fase G2";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8g8FXUUwHWw=', 579, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CRPiqqEYUi0=', 577, -9999, 99999), DecodeNumber('voR1QQ0Vn4Q=', 577, -9999, 99999), '');
    answer2.shortTextAnswer = "Tra la fase M e la fase S";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oVAozcXZDsU=', 940, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ICDcgGTsKHY=', 938, -9999, 99999), DecodeNumber('pjmNaz/JJq4=', 938, -9999, 99999), '');
    answer3.shortTextAnswer = "Tra la fase G2 e la fase M";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hgAssi84LQY=', 301, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('hgAssi84LQY=', 299, -9999, 99999), DecodeNumber('Sdy4o2Ch2+4=', 299, -9999, 99999), '');
    answer4.shortTextAnswer = "Tra la fase G1 e la fase S ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 12;
    var weight = DecodeNumber('RWteiuPjlCM=', 334, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale delle seguenti condizioni può verosimilmente indurre il superamento del checkpoint START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('YUNKL0K3Ul8=', 336, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('YUNKL0K3Ul8=', 334, -9999, 99999), DecodeNumber('SsisIxzaJaw=', 334, -9999, 99999), '');
    answer1.shortTextAnswer = "Presenza di fattori di crescita che si legano a recettori cellulari.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Gif6JWa9GMM=', 697, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('twjjTcIIOMs=', 695, -9999, 99999), DecodeNumber('7lXtuhbdLbg=', 695, -9999, 99999), '');
    answer2.shortTextAnswer = "Carenza di sostanze nutrienti nell'ambiente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LTgoRYwl0N0=', 699, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Gif6JWa9GMM=', 697, -9999, 99999), DecodeNumber('p0aqcX4BNm4=', 697, -9999, 99999), '');
    answer3.shortTextAnswer = "Scarsa produzione di proteine e organelli, e scarsa crescita cellulare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ia8g9pnEFkE=', 896, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O9hLLVr5zEA=', 894, -9999, 99999), DecodeNumber('X+E4Sp1y340=', 894, -9999, 99999), '');
    answer4.shortTextAnswer = "Danni al materiale genetico.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 13;
    var weight = DecodeNumber('8vticSthyjQ=', 616, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il contenuto in DNA varia nelle diverse fasi del ciclo cellulare. Quale delle seguenti affermazioni, riguardo a una cellula somatica umana, è corretta? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jQ8e84A7j+U=', 618, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8vticSthyjQ=', 616, -9999, 99999), DecodeNumber('IVZaZRtQpTU=', 616, -9999, 99999), '');
    answer1.shortTextAnswer = "Nella fase G1, la cellula presenta 46 cromosomi, ognuno composto da due cromatidi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nsG1paBNVnE=', 620, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jQ8e84A7j+U=', 618, -9999, 99999), DecodeNumber('gkgQaFE0uxo=', 618, -9999, 99999), '');
    answer2.shortTextAnswer = "Nella profase della mitosi la cellula presenta 23 coppie di cromosomi, ognuno composto da un solo cromatidio.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TdNqI7YN0CA=', 458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('xj8njgodcrc=', 456, -9999, 99999), DecodeNumber('ljKpujaIGfo=', 456, -9999, 99999), '');
    answer3.shortTextAnswer = "All'inizio della fase S, la cellula presenta 23 coppie di cromosomi, ognuno composto da due cromatidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vZUwRnkMh1w=', 819, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vZUwRnkMh1w=', 817, -9999, 99999), DecodeNumber('paouOOUCAwI=', 817, -9999, 99999), '');
    answer4.shortTextAnswer = "Nella fase G2, la cellula presenta 46 cromosomi, ognuno composto da due cromatidi.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 14;
    var weight = DecodeNumber('jZPp0snrDBU=', 1069, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione alla fase M, che comprende i processi successivi di mitosi e citodieresi, comporta molti cambiamenti nella cellula. Con l'entrata nella profase, il primo passo della mitosi, il citoscheletro della cellula si disorganizza, facendo così perdere alla cellula la sua forma peculiare (come si può vedere nella cellula nella figura sottostante). Inoltre, l'involucro nucleare si frammenta e i cromosomi appaiono condensati.     Quale delle seguenti affermazioni riguardanti cellule animali è ERRATA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aHdN/SJ5mTs=', 1071, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('jZPp0snrDBU=', 1069, -9999, 99999), DecodeNumber('RJ4yZZjiSa8=', 1069, -9999, 99999), '');
    answer1.shortTextAnswer = "La cellula all'inizio della fase M ha una forma tondeggiante.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KwBY1fJsFEA=', 1073, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KwBY1fJsFEA=', 1071, -9999, 99999), DecodeNumber('5Fs5ODk6jmY=', 1071, -9999, 99999), '');
    answer2.shortTextAnswer = "In fase M non sono presenti filamenti citoscheletrici nella cellula.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9S7mUttxiXY=', 433, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hO13gxgpYII=', 431, -9999, 99999), DecodeNumber('P/SM1Bs+mXw=', 431, -9999, 99999), '');
    answer3.shortTextAnswer = "In fase M il DNA nucleare si trova nel citosol.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YY9MPak843A=', 435, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9S7mUttxiXY=', 433, -9999, 99999), DecodeNumber('DEzIVREC7iE=', 433, -9999, 99999), '');
    answer4.shortTextAnswer = "Alla fine della fase M vengono riassemblati due involucri nucleari.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 15;
    var weight = DecodeNumber('XcC0VXAzFEc=', 274, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Durante il ciclo cellulare viene replicato il DNA. In realtà è più corretto parlare di replicazione della cromatina, perché non è solo il DNA che si duplica ma anche le proteine a esso associate, le quali sono importanti per definire la struttura della cromatina e per la regolazione dell'espressione genica. In base a ciò, quale dei seguenti processi deve essere particolarmente attivo nella fase del ciclo cellulare in cui si ha la replicazione del DNA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('B14HPojx/Ng=', 635, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7a5cj4ST4Kk=', 633, -9999, 99999), DecodeNumber('heQgqxn7Eec=', 633, -9999, 99999), '');
    answer1.shortTextAnswer = "Polimerizzazione della tubulina in microtubuli.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RaeGaCCdECM=', 637, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RaeGaCCdECM=', 635, -9999, 99999), DecodeNumber('aXjfd36J6c4=', 635, -9999, 99999), '');
    answer2.shortTextAnswer = "Sintesi proteica di istoni.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wXAf1nTKogM=', 639, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RaeGaCCdECM=', 637, -9999, 99999), DecodeNumber('w9uDaPqJ2p8=', 637, -9999, 99999), '');
    answer3.shortTextAnswer = "Assemblaggio del cinetocore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1yHdXAlKTfU=', 641, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('wXAf1nTKogM=', 639, -9999, 99999), DecodeNumber('sbBaUuqLGcI=', 639, -9999, 99999), '');
    answer4.shortTextAnswer = "Sintesi proteica di nucleasi.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 16;
    var weight = DecodeNumber('mv7UCSBIcXs=', 838, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione tra le diverse fasi del ciclo cellulare è strettamente controllata da molti fattori: una famiglia di proteine, quella delle cicline, è necessaria per la progressione del ciclo cellulare. La concentrazione di ogni particolare ciclina varia ciclicamente durante il ciclo cellulare, grazie a processi di sintesi e degradazione proteica. Con quale tecnica pensi che si possa rilevare la presenza di una ciclina in una particolare fase del ciclo cellulare? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SHKCw8GDWt0=', 840, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('mv7UCSBIcXs=', 838, -9999, 99999), DecodeNumber('tmhm66Fjor8=', 838, -9999, 99999), '');
    answer1.shortTextAnswer = "PCR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AVFCOl4LCzo=', 842, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('SHKCw8GDWt0=', 840, -9999, 99999), DecodeNumber('cFhLXad5q88=', 840, -9999, 99999), '');
    answer2.shortTextAnswer = "Reazione di Lugol.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Oz9PfYXlbTg=', 844, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Oz9PfYXlbTg=', 842, -9999, 99999), DecodeNumber('Y4CEG1zwVcw=', 842, -9999, 99999), '');
    answer3.shortTextAnswer = "Riconoscimento tramite anticorpi specifici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aPvgqRISrVw=', 205, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+B/tfRC8pcE=', 203, -9999, 99999), DecodeNumber('jihRw+bx9xk=', 203, -9999, 99999), '');
    answer4.shortTextAnswer = "Impiego di sonde di mRNA che si appaiano alle catene polipeptidiche.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 17;
    var weight = DecodeNumber('hmaY5jhynaI=', 597, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste strutture fa parte esclusivamente del sistema respiratorio? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1wy36Nf7vx0=', 599, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hmaY5jhynaI=', 597, -9999, 99999), DecodeNumber('OSCS5Ce3rWs=', 597, -9999, 99999), '');
    answer1.shortTextAnswer = "Vestibolo della bocca.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OLBTFj4ZXNQ=', 601, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1wy36Nf7vx0=', 599, -9999, 99999), DecodeNumber('sXaJRLXgZsU=', 599, -9999, 99999), '');
    answer2.shortTextAnswer = "Esofago.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pNg7PtL95K0=', 603, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('pNg7PtL95K0=', 601, -9999, 99999), DecodeNumber('T2X484JGlEI=', 601, -9999, 99999), '');
    answer3.shortTextAnswer = "Laringe.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L5F+jzF28hY=', 605, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pNg7PtL95K0=', 603, -9999, 99999), DecodeNumber('CG0N53oW0TI=', 603, -9999, 99999), '');
    answer4.shortTextAnswer = "Vestibolo della bocca.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('0/4/V+oimfA=', 324, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Trachea e bronchi presentano una componente rigida formata da una serie di anelli quasi completi che impediscono il collasso delle loro pareti durante gli atti respiratori. Da che tipo di tessuto sono costituiti? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Xfyp7bvqqLM=', 326, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('0/4/V+oimfA=', 324, -9999, 99999), DecodeNumber('sb6giF2bDZk=', 324, -9999, 99999), '');
    answer1.shortTextAnswer = "Tessuto connettivo fibroso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jrIL22/blSo=', 328, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Xfyp7bvqqLM=', 326, -9999, 99999), DecodeNumber('jUeXWytuw5k=', 326, -9999, 99999), '');
    answer2.shortTextAnswer = "Tessuto epiteliale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zQcpptIpliA=', 330, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jrIL22/blSo=', 328, -9999, 99999), DecodeNumber('dofZOUKi3uI=', 328, -9999, 99999), '');
    answer3.shortTextAnswer = "Tessuto osseo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zmIe9j5ZmRs=', 1169, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zmIe9j5ZmRs=', 1167, -9999, 99999), DecodeNumber('7JOdyb7i0SU=', 1167, -9999, 99999), '');
    answer4.shortTextAnswer = "Tessuto cartilagineo.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 19;
    var weight = DecodeNumber('+vVUOH5ou/Q=', 530, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale tragitto compie il biossido di carbonio durante l'espirazione?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sq7b9Fq9AxI=', 532, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+vVUOH5ou/Q=', 530, -9999, 99999), DecodeNumber('CEzXs490ajY=', 530, -9999, 99999), '');
    answer1.shortTextAnswer = "Capillare, alveolo respiratorio, bronco, bronchiolo, trachea.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yY7CBBFDLJw=', 892, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yY7CBBFDLJw=', 890, -9999, 99999), DecodeNumber('tAQ7CMFG5h4=', 890, -9999, 99999), '');
    answer2.shortTextAnswer = "Capillare, alveolo respiratorio, bronchiolo, bronco, trachea.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O9hLLVr5zEA=', 894, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('yY7CBBFDLJw=', 892, -9999, 99999), DecodeNumber('UPn+BaHe4eI=', 892, -9999, 99999), '');
    answer3.shortTextAnswer = "Trachea, bronco, bronchiolo, alveolo respiratorio, capillare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Ia8g9pnEFkE=', 896, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O9hLLVr5zEA=', 894, -9999, 99999), DecodeNumber('X+E4Sp1y340=', 894, -9999, 99999), '');
    answer4.shortTextAnswer = "Trachea, bronchiolo, bronco, alveolo respiratorio, capillare.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 20;
    var weight = DecodeNumber('ZR9S6F6Iqkk=', 735, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nell'arteria polmonare scorre sangue:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ddSLsDp/+a4=', 737, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZR9S6F6Iqkk=', 735, -9999, 99999), DecodeNumber('h0QZagdArao=', 735, -9999, 99999), '');
    answer1.shortTextAnswer = "Ricco di ossigeno che dal cuore va al polmone.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8XcOUJrpVqU=', 1098, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cY/S7TSWVno=', 1096, -9999, 99999), DecodeNumber('g+BRhm3HPQE=', 1096, -9999, 99999), '');
    answer2.shortTextAnswer = "Ricco di ossigeno che dal polmone va al cuore.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UxJ9oJXVcMY=', 1100, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('UxJ9oJXVcMY=', 1098, -9999, 99999), DecodeNumber('qSvrf9IBShU=', 1098, -9999, 99999), '');
    answer3.shortTextAnswer = "Ricco di biossido di carbonio che dal cuore va al polmone.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HCntUIdPOlo=', 1102, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UxJ9oJXVcMY=', 1100, -9999, 99999), DecodeNumber('bJWQplzw4ic=', 1100, -9999, 99999), '');
    answer4.shortTextAnswer = "Ricco di biossido di carbonio che dal polmone va al cuore.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 21;
    var weight = DecodeNumber('tUJ+Mn1zPZU=', 299, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Recentemente si è scoperto che i polmoni hanno una scorta di cellule staminali. Queste sarebbero in grado di porre rimedio ai danni prodotti su tutte le componenti dell'organo, come i bronchioli o gli alveoli. Si tratterebbe quindi di cellule: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hgAssi84LQY=', 301, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tUJ+Mn1zPZU=', 299, -9999, 99999), DecodeNumber('Sdy4o2Ch2+4=', 299, -9999, 99999), '');
    answer1.shortTextAnswer = "Staminali totipotenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RkM49kDXWhQ=', 303, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hgAssi84LQY=', 301, -9999, 99999), DecodeNumber('2EnZPpRHGQY=', 301, -9999, 99999), '');
    answer2.shortTextAnswer = "Staminali pluripotenti.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lNgtKHemWyA=', 305, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('lNgtKHemWyA=', 303, -9999, 99999), DecodeNumber('UJskQhml5zQ=', 303, -9999, 99999), '');
    answer3.shortTextAnswer = "Staminali multipotenti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eQc6GQWjV5o=', 307, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('lNgtKHemWyA=', 305, -9999, 99999), DecodeNumber('lLBRFq7Cbbg=', 305, -9999, 99999), '');
    answer4.shortTextAnswer = "Staminali unipotenti.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 22;
    var weight = DecodeNumber('BffB3yL2two=', 504, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un batterio Gram negativo è: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+krefKBCN9g=', 506, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BffB3yL2two=', 504, -9999, 99999), DecodeNumber('nRSmPYqJ/eg=', 504, -9999, 99999), '');
    answer1.shortTextAnswer = "Un batteriofago sensibile alla maggior parte degli antibiotici.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CX+5IoMpkao=', 508, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+krefKBCN9g=', 506, -9999, 99999), DecodeNumber('NPTGJCRTgbw=', 506, -9999, 99999), '');
    answer2.shortTextAnswer = "Un batterio, privo di flagello e di parete, resistente a tutti gli antibiotici.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9Ji8Jg0PBVo=', 510, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9Ji8Jg0PBVo=', 508, -9999, 99999), DecodeNumber('N4lYCe0KDnU=', 508, -9999, 99999), '');
    answer3.shortTextAnswer = "Un batterio con parete meno ricca di peptidoglicano che si colora di rosso con il reattivo di Gram ed è sensibile solo ad alcuni antibiotici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PIR7dSYckw8=', 512, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9Ji8Jg0PBVo=', 510, -9999, 99999), DecodeNumber('MEKTCdUcyy8=', 510, -9999, 99999), '');
    answer4.shortTextAnswer = "Un batterio con parete più ricca di peptidoglicano che si colora di viola con il reattivo di Gram ed è sensibile a tutti gli antibiotici.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 23;
    var weight = DecodeNumber('FxKCWkkmvwo=', 371, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il pigmento rosso intenso di Serratia marcescens è chiamato prodigiosina e ha una massa molare di 323,432 g/mol. Quale delle seguenti formule di struttura rappresenta la prodigiosina?    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yuv+aBBTi4E=', 373, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FxKCWkkmvwo=', 371, -9999, 99999), DecodeNumber('+FuPLdBKLSE=', 371, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h0QZagdArao=', 734, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('h0QZagdArao=', 732, -9999, 99999), DecodeNumber('PSwgQ+mAUdE=', 732, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Iqd11e4fLdo=', 736, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('h0QZagdArao=', 734, -9999, 99999), DecodeNumber('Ikkhmnzg8JU=', 734, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jvtJJoXJvO0=', 738, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Iqd11e4fLdo=', 736, -9999, 99999), DecodeNumber('ZR9S6F6Iqkk=', 736, -9999, 99999), '');
    answer4.shortTextAnswer = " D";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 24;
    var weight = DecodeNumber('PRvEk22uvjk=', 935, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Leggi la seguente definizione di plasmide nella quale due termini, indicati in grassetto, sono in alternativa:  Un plasmide è un elemento genetico cromosomico/extracromosomico in grado di replicarsi autonomamente all'interno della cellula ospite, portatore di geni che veicolano informazioni non essenziali per la vita della cellula e in grado di trasferirsi da una cellula ad un'altra per coniugazione/trasduzione.  Le parole corrette da inserire sono: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pjmNaz/JJq4=', 937, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('pjmNaz/JJq4=', 935, -9999, 99999), DecodeNumber('g9lzY1AsRbc=', 935, -9999, 99999), '');
    answer1.shortTextAnswer = "Extracromosomico e coniugazione.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('r6smWt0wKj8=', 939, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pjmNaz/JJq4=', 937, -9999, 99999), DecodeNumber('jGzTqOdkLqM=', 937, -9999, 99999), '');
    answer2.shortTextAnswer = "Cromosomico e coniugazione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('StBNJG2n4Ig=', 941, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('r6smWt0wKj8=', 939, -9999, 99999), DecodeNumber('ICDcgGTsKHY=', 939, -9999, 99999), '');
    answer3.shortTextAnswer = "Cromosomico e trasduzione.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XhhyPevGxuQ=', 943, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('StBNJG2n4Ig=', 941, -9999, 99999), DecodeNumber('oVAozcXZDsU=', 941, -9999, 99999), '');
    answer4.shortTextAnswer = "Extracromosomico e trasduzione.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 25;
    var weight = DecodeNumber('Jrk1EcnM22A=', 1140, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le pericolose e talvolta mortali infezioni ospedaliere da Serratia sono da addebitare a: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ty7eHAzZG4M=', 1142, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Jrk1EcnM22A=', 1140, -9999, 99999), DecodeNumber('KRPP0jvmCiU=', 1140, -9999, 99999), '');
    answer1.shortTextAnswer = "Scarsa igiene e mancato utilizzo di antibiotici a largo spettro.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Se6C1tiw63w=', 1144, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Se6C1tiw63w=', 1142, -9999, 99999), DecodeNumber('keoBVDBwKZk=', 1142, -9999, 99999), '');
    answer2.shortTextAnswer = "Elevato utilizzo di antibiotici a largo spettro e elevata presenza di pazienti sensibili ed esposti a batteri selezionati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UjBvVxLi2I0=', 1146, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Se6C1tiw63w=', 1144, -9999, 99999), DecodeNumber('YVDSVzOlT6s=', 1144, -9999, 99999), '');
    answer3.shortTextAnswer = "Predilezione dei batteri Gram negativi per gli ambienti ospedalieri poco protetti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sFHYeUDmvZg=', 1148, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('UjBvVxLi2I0=', 1146, -9999, 99999), DecodeNumber('t+M1Tv6sSpw=', 1146, -9999, 99999), '');
    answer4.shortTextAnswer = "Eccessiva igiene ma mancato utilizzo di antibiotici a largo spettro.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 26;
    var weight = DecodeNumber('K/+gdiX3zHg=', 868, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nei tessuti vegetali, quali di questi tessuti svolge la funzione di conduzione della linfa grezza? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ptWgB3zB/f0=', 870, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ptWgB3zB/f0=', 868, -9999, 99999), DecodeNumber('JAV38OmLn14=', 868, -9999, 99999), '');
    answer1.shortTextAnswer = "Xilema.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('c/cm/OwSIqM=', 872, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ptWgB3zB/f0=', 870, -9999, 99999), DecodeNumber('ypsLolVIoiw=', 870, -9999, 99999), '');
    answer2.shortTextAnswer = "Floema.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rFxprBPJOGE=', 874, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('c/cm/OwSIqM=', 872, -9999, 99999), DecodeNumber('17zgshU5dUw=', 872, -9999, 99999), '');
    answer3.shortTextAnswer = "Collenchima.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('x17UoU+8lP0=', 876, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rFxprBPJOGE=', 874, -9999, 99999), DecodeNumber('V/qmj9QaGak=', 874, -9999, 99999), '');
    answer4.shortTextAnswer = "Parenchima a palizzata.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 27;
    var weight = DecodeNumber('KwBY1fJsFEA=', 1073, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di questi fusti modificati è costituito da un breve fusto di forma conica e da numerose foglie modificate per la funzione di riserva? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rgDyPIelQe8=', 1075, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('KwBY1fJsFEA=', 1073, -9999, 99999), DecodeNumber('H146/IcY2VU=', 1073, -9999, 99999), '');
    answer1.shortTextAnswer = "Tuberi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C9lieqDAFlU=', 1077, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rgDyPIelQe8=', 1075, -9999, 99999), DecodeNumber('btmtIV3wnmI=', 1075, -9999, 99999), '');
    answer2.shortTextAnswer = "Rizomi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lLZOMm7khbY=', 1079, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('lLZOMm7khbY=', 1077, -9999, 99999), DecodeNumber('6562ysvXrDw=', 1077, -9999, 99999), '');
    answer3.shortTextAnswer = "Bulbi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8gZ4QvhnjoM=', 918, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2pwtj9ZDnFg=', 916, -9999, 99999), DecodeNumber('9dkeTPSKEr0=', 916, -9999, 99999), '');
    answer4.shortTextAnswer = "Cladodi.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 28;
    var weight = DecodeNumber('s+sXEENlK4g=', 1278, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Da che cosa è composto il gineceo di un fiore? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qZr4wU1zKMg=', 1280, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('s+sXEENlK4g=', 1278, -9999, 99999), DecodeNumber('qJnnaGZKTTU=', 1278, -9999, 99999), '');
    answer1.shortTextAnswer = "Da un insieme di stami.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('suLLnsjXDpw=', 1282, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('suLLnsjXDpw=', 1280, -9999, 99999), DecodeNumber('xix3hg3ud2g=', 1280, -9999, 99999), '');
    answer2.shortTextAnswer = "Da un insieme di carpelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5JjDchvOW6w=', 643, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1yHdXAlKTfU=', 641, -9999, 99999), DecodeNumber('t99doH0jmXg=', 641, -9999, 99999), '');
    answer3.shortTextAnswer = "Da un insieme di sepali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GnuKuvqrkgg=', 645, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('5JjDchvOW6w=', 643, -9999, 99999), DecodeNumber('gasaXs1PeWw=', 643, -9999, 99999), '');
    answer4.shortTextAnswer = "Da un insieme di petali.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 29;
    var weight = DecodeNumber('S4282I+LYLs=', 484, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste affermazioni relative al meristema del germoglio è FALSA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FhylQ8+FaGA=', 486, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('S4282I+LYLs=', 484, -9999, 99999), DecodeNumber('BHHqTek1Mbo=', 484, -9999, 99999), '');
    answer1.shortTextAnswer = "Genera il fusto, le foglie e le gemme.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kmYPrH+wlOs=', 488, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FhylQ8+FaGA=', 486, -9999, 99999), DecodeNumber('eAeFfcmY9n0=', 486, -9999, 99999), '');
    answer2.shortTextAnswer = "Presenta una crescita indeterminata.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('k9guq0Y1J6Q=', 490, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kmYPrH+wlOs=', 488, -9999, 99999), DecodeNumber('CFbdlmPlpMo=', 488, -9999, 99999), '');
    answer3.shortTextAnswer = "Contiene diversi strati e zone funzionali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('w10K1LbsDZw=', 850, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('w10K1LbsDZw=', 848, -9999, 99999), DecodeNumber('L9IlEvLFeZg=', 848, -9999, 99999), '');
    answer4.shortTextAnswer = "Non presenta attività fotosintetica.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 30;
    var weight = DecodeNumber('cwON1FZfp3o=', 1211, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per impollinazione chirotterogama si intende l'impollinazione che ha per vettore: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hsynZrrj6XE=', 1213, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('cwON1FZfp3o=', 1211, -9999, 99999), DecodeNumber('Ar3TqAjnxZc=', 1211, -9999, 99999), '');
    answer1.shortTextAnswer = "Il vento.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FpAqxHwhVyQ=', 1215, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hsynZrrj6XE=', 1213, -9999, 99999), DecodeNumber('7DX9ShDc0zQ=', 1213, -9999, 99999), '');
    answer2.shortTextAnswer = "Gli uccelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DqDuyly8o4Q=', 1217, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('DqDuyly8o4Q=', 1215, -9999, 99999), DecodeNumber('SIMJJWU66QE=', 1215, -9999, 99999), '');
    answer3.shortTextAnswer = "I pipistrelli.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0TktRrAEjG0=', 1219, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DqDuyly8o4Q=', 1217, -9999, 99999), DecodeNumber('Pdn+cwOAUGk=', 1217, -9999, 99999), '');
    answer4.shortTextAnswer = "Gli insetti.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 31;
    var weight = DecodeNumber('tKX4SvQbSos=', 416, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quali tra i seguenti lipidi NON fanno parte della struttura di una tipica membrana cellulare di una cellula eucariote? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FYIRcS0I194=', 418, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FYIRcS0I194=', 416, -9999, 99999), DecodeNumber('8DZ/i7Dm6EI=', 416, -9999, 99999), '');
    answer1.shortTextAnswer = "Trigliceridi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l5z6bdefglA=', 420, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FYIRcS0I194=', 418, -9999, 99999), DecodeNumber('hCjP1ziUrKU=', 418, -9999, 99999), '');
    answer2.shortTextAnswer = "Fosfolipidi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bH5Z/ePvcf0=', 422, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('l5z6bdefglA=', 420, -9999, 99999), DecodeNumber('WB7kc07jaYk=', 420, -9999, 99999), '');
    answer3.shortTextAnswer = "Glicolipidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('40GWGW0TJZ0=', 424, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('bH5Z/ePvcf0=', 422, -9999, 99999), DecodeNumber('1JrvJB+lMxI=', 422, -9999, 99999), '');
    answer4.shortTextAnswer = "Steroli.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 32;
    var weight = DecodeNumber('MOSw8gpbnEA=', 621, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per quale motivo i lipidi hanno un'alta densità energetica?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LyJwsO3IKgI=', 623, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('MOSw8gpbnEA=', 621, -9999, 99999), DecodeNumber('nsG1paBNVnE=', 621, -9999, 99999), '');
    answer1.shortTextAnswer = "Perché sono formati da lunghe catene di atomi di carbonio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QNhzV8VJZLI=', 625, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('QNhzV8VJZLI=', 623, -9999, 99999), DecodeNumber('euMMDuej0hw=', 623, -9999, 99999), '');
    answer2.shortTextAnswer = "Perché gli atomi di carbonio di un lipide sono ridotti o poco ossidati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7EtCrWIH9YM=', 627, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('QNhzV8VJZLI=', 625, -9999, 99999), DecodeNumber('goBt/sxUJBw=', 625, -9999, 99999), '');
    answer3.shortTextAnswer = "Perché le catene di atomi di carbonio sono lineari (senza ramificazioni).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('H/DCbSA8OVM=', 988, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('FC+dIq79irw=', 986, -9999, 99999), DecodeNumber('m8Uoi2ylRMw=', 986, -9999, 99999), '');
    answer4.shortTextAnswer = "Tutte le precedenti.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 33;
    var weight = DecodeNumber('uu0Ucqeh6ho=', 827, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale dei seguenti lipidi ti aspetti di trovare prevalentemente in un prodotto alimentare di origine vegetale? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nlHKMX2i/dI=', 829, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uu0Ucqeh6ho=', 827, -9999, 99999), DecodeNumber('vRIbwZLO3U0=', 827, -9999, 99999), '');
    answer1.shortTextAnswer = "Lipidi formati da acidi grassi saturi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pCX93vSLSuM=', 831, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pCX93vSLSuM=', 829, -9999, 99999), DecodeNumber('f8z7kbla5c0=', 829, -9999, 99999), '');
    answer2.shortTextAnswer = "Lipidi formati da acidi grassi insaturi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('idWzP/IDNjA=', 1191, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Wcop9AFavJ0=', 1189, -9999, 99999), DecodeNumber('m4+QGdwHnUA=', 1189, -9999, 99999), '');
    answer3.shortTextAnswer = "Lipidi formati da acidi grassi a catena molto lunga (più di 22 atomi di carbonio).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aT4jsObIOoQ=', 1193, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('idWzP/IDNjA=', 1191, -9999, 99999), DecodeNumber('JTvQ3hwnObs=', 1191, -9999, 99999), '');
    answer4.shortTextAnswer = "Acidi grassi liberi.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 34;
    var weight = DecodeNumber('Q6yNJofSlYc=', 554, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In una cellula procariote, dove avviene la sintesi dei lipidi di membrana? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GW71OTwWLnA=', 556, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('GW71OTwWLnA=', 554, -9999, 99999), DecodeNumber('e0veH9BpJr0=', 554, -9999, 99999), '');
    answer1.shortTextAnswer = "Nel citoplasma.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tkzafvT8tc4=', 558, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('GW71OTwWLnA=', 556, -9999, 99999), DecodeNumber('5AdcMSRPsOA=', 556, -9999, 99999), '');
    answer2.shortTextAnswer = "Nei mitocondri.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vpF+O+FcKlU=', 560, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tkzafvT8tc4=', 558, -9999, 99999), DecodeNumber('+GmZmurFrlM=', 558, -9999, 99999), '');
    answer3.shortTextAnswer = "Nel reticolo endoplasmatico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GXR/x7xnhaE=', 399, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BQ5eXjtHjSQ=', 397, -9999, 99999), DecodeNumber('hycayeoG7uo=', 397, -9999, 99999), '');
    answer4.shortTextAnswer = "Nell’apparato di Golgi.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 35;
    var weight = DecodeNumber('jyVCgPqb+N0=', 759, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In un esperimento condotto in una varietà di polli, si osserva che dagli incroci tra due individui eterozigoti per un certo carattere si ottengono alla prima generazione filiale 2/3 di individui eterozigoti e 1/3 di individui omozigoti dominanti. Come può essere interpretato questo risultato? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1GENC+oukz4=', 761, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('jyVCgPqb+N0=', 759, -9999, 99999), DecodeNumber('3ULMYICoRgQ=', 759, -9999, 99999), '');
    answer1.shortTextAnswer = "Il carattere studiato è legato al sesso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('T2X484JGlEI=', 600, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sXaJRLXgZsU=', 598, -9999, 99999), DecodeNumber('hmaY5jhynaI=', 598, -9999, 99999), '');
    answer2.shortTextAnswer = "Il carattere studiato è caratterizzato da allelia multipla.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CG0N53oW0TI=', 602, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CG0N53oW0TI=', 600, -9999, 99999), DecodeNumber('1wy36Nf7vx0=', 600, -9999, 99999), '');
    answer3.shortTextAnswer = "La condizione omozigote recessiva è letale per quel carattere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HVma8StRXKY=', 604, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CG0N53oW0TI=', 602, -9999, 99999), DecodeNumber('OLBTFj4ZXNQ=', 602, -9999, 99999), '');
    answer4.shortTextAnswer = "Fra gli alleli del carattere studiato esiste una relazione di dominanza incompleta.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 36;
    var weight = DecodeNumber('op3UiJsmN0c=', 1323, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In ecologia il fenomeno dello spostamento dei caratteri consiste nel fatto che: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HESVD3XZNK8=', 1325, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('op3UiJsmN0c=', 1323, -9999, 99999), DecodeNumber('fkpYmPTm3yE=', 1323, -9999, 99999), '');
    answer1.shortTextAnswer = "Quando due specie competono tra loro, una delle due finisce con l'eliminare l'altra.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NCeQ4FZqlbc=', 1327, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('HESVD3XZNK8=', 1325, -9999, 99999), DecodeNumber('TW31cc3JbYQ=', 1325, -9999, 99999), '');
    answer2.shortTextAnswer = "Quando due specie sfruttano le stesse risorse si verifica la competizione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ugftIVO3DSo=', 1329, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('NCeQ4FZqlbc=', 1327, -9999, 99999), DecodeNumber('1nwbx+2ZaQc=', 1327, -9999, 99999), '');
    answer3.shortTextAnswer = "Una specie non può occupare interamente la sua nicchia a causa delle interazioni con gli altri organismi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2lw95ic8Y4E=', 1331, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2lw95ic8Y4E=', 1329, -9999, 99999), DecodeNumber('dJ7ZiIlR3EU=', 1329, -9999, 99999), '');
    answer4.shortTextAnswer = "Le specie che vivono nello stesso ambiente tendono a diversificarsi per le caratteristiche che si sovrappongono.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 37;
    var weight = DecodeNumber('CEzXs490ajY=', 529, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un individuo si presenta dal proprio medico riferendo perdita di peso, tachicardia e scarsa sopportazione del caldo. Il medico sospetta che sia affetto da ipertiroidismo. La quantificazione nel sangue di quale delle seguenti molecole può permettere al medico di distinguere tra cause di ipertiroidismo secondarie, cioè legate ad un'attività eccessiva dell'ipofisi, e primarie, cioè legate a un'attività eccessiva della tiroide? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9ZZuA23s4DI=', 531, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('CEzXs490ajY=', 529, -9999, 99999), DecodeNumber('Pmv2LkfoKPY=', 529, -9999, 99999), '');
    answer1.shortTextAnswer = "Triiodotironina (T3) e tiroxina (T4).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VRlazpUzecc=', 533, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('VRlazpUzecc=', 531, -9999, 99999), DecodeNumber('+vVUOH5ou/Q=', 531, -9999, 99999), '');
    answer2.shortTextAnswer = "TSH (ormone tireotropo).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OYK3jjc+7AE=', 535, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VRlazpUzecc=', 533, -9999, 99999), DecodeNumber('sq7b9Fq9AxI=', 533, -9999, 99999), '');
    answer3.shortTextAnswer = "Iodio (I2).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('L23wm5Nsrtc=', 537, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OYK3jjc+7AE=', 535, -9999, 99999), DecodeNumber('6olnx22SkG0=', 535, -9999, 99999), '');
    answer4.shortTextAnswer = "TRH (ormone di rilascio della tireotropina).";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 38;
    var weight = DecodeNumber('BHHqTek1Mbo=', 483, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le lattine normalmente in commercio hanno un rivestimento interno protettivo a base di resine epossidiche contenente il Bisfenolo A (BPA). Il BPA è una molecola di origine sintetica nota per i suoi effetti avversi sulla salute umana e animale. Studi scientifici hanno dimostrato la migrazione del BPA dal contenitore all'alimento in esso contenuto. Nella figura sottostante sono riportati i risultati ottenuti analizzando il contenuto di BPA in pomodori pelati in lattina al variare della temperatura di conservazione della lattina. Sono stati analizzati 6 marche in commercio e la migrazione del BPA dal contenitore all'alimento si è verificata in tutti i campioni indipendentemente dal valore economico del prodotto analizzato.      Secondo i risultati riportati nella figura precedente: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eAeFfcmY9n0=', 485, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BHHqTek1Mbo=', 483, -9999, 99999), DecodeNumber('RS9YQu+HQFI=', 483, -9999, 99999), '');
    answer1.shortTextAnswer = "L'aumento della migrazione del BPA è proporzionale alla diminuzione della temperatura. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CFbdlmPlpMo=', 487, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('eAeFfcmY9n0=', 485, -9999, 99999), DecodeNumber('S4282I+LYLs=', 485, -9999, 99999), '');
    answer2.shortTextAnswer = "Il BPA può migrare dal contenitore agli alimenti in esso contenuti solo per temperature superiori a 37 °C.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v9lel4Idbr0=', 489, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CFbdlmPlpMo=', 487, -9999, 99999), DecodeNumber('FhylQ8+FaGA=', 487, -9999, 99999), '');
    answer3.shortTextAnswer = "La marca 5 risulta migliore della marca 2 relativamente alla capacità del contenitore di rilasciare BPA.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('w10K1LbsDZw=', 850, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('w10K1LbsDZw=', 848, -9999, 99999), DecodeNumber('L9IlEvLFeZg=', 848, -9999, 99999), '');
    answer4.shortTextAnswer = "Nella marca 6, quando la temperatura passa da 37°C e 45°C la quantità di BPA nell'alimento cresce a oltre il doppio.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 39;
    var weight = DecodeNumber('vGPUWe1uucU=', 406, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste ossa fa parte del bacino?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PCeDnNrAG1s=', 408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('PCeDnNrAG1s=', 406, -9999, 99999), DecodeNumber('ZToI/00L3Jk=', 406, -9999, 99999), '');
    answer1.shortTextAnswer = "Ischio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Rgh172Vkpao=', 410, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('PCeDnNrAG1s=', 408, -9999, 99999), DecodeNumber('34YCPxppp7c=', 408, -9999, 99999), '');
    answer2.shortTextAnswer = "Etmoide.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GS6Lc+KLYu4=', 412, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Rgh172Vkpao=', 410, -9999, 99999), DecodeNumber('fA/4xqAvSPM=', 410, -9999, 99999), '');
    answer3.shortTextAnswer = "Vomere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HF5zWEH2C08=', 1250, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Hj3tIA+o5mY=', 1248, -9999, 99999), DecodeNumber('jbGxWvvuOfI=', 1248, -9999, 99999), '');
    answer4.shortTextAnswer = "Ioide.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






