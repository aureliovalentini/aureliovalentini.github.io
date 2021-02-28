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
    var weight = DecodeNumber('9Z+BWnxYloI=', 497, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "I quattro ragazzi si mettono a riflettere e a discutere tra loro ed esprimono ciascuno le proprie considerazioni sulla validità scientifica di quanto riportato nell'articolo: - Secondo Mario la scoperta è casuale e non ha quindi valore scientifico. - Anche secondo Giulia quanto riportato nell'articolo non ha nessuna importanza scientifica, perché nessun animale può digerire la plastica.  - Ettore ritiene invece che gli autori della pubblicazione, prima di affermare quanto riportato nell'articolo, devono necessariamente avere allestito delle prove per dimostrare la validità delle loro affermazioni. - Secondo Alessandra, infine, le farfalle di Galleria mellonella e i bruchi non hanno nessun rapporto tra di loro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9Z+BWnxYloI=', 499, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('A0nE2debGjM=', 497, -9999, 99999), DecodeNumber('uHqZ3OWMj3M=', 497, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8QxlmvqOPcY=', 501, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('9Z+BWnxYloI=', 499, -9999, 99999), DecodeNumber('h7f7F2p4OEg=', 499, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ETd9r3/3ybo=', 503, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ETd9r3/3ybo=', 501, -9999, 99999), DecodeNumber('CnGwRESbNaE=', 501, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ETd9r3/3ybo=', 505, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ANSPowEW/tQ=', 503, -9999, 99999), DecodeNumber('yBr1TqtVyvQ=', 503, -9999, 99999), '');
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
    var weight = DecodeNumber('UZQPuNjaEUY=', 702, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi a quale gruppo di animali appartiene la farfalla oggetto dello studio: - Secondo Mario Galleria mellonella è un insetto appartenente ai Lepidotteri. - Secondo Giulia è un insetto appartenente ai Ditteri. - Secondo Ettore è un Artropode ma non è un insetto. - Secondo Alessandra, infine, non è un neanche un Artropode perché i bruchi non hanno l'esoscheletro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bd1JeNyQhSA=', 704, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bd1JeNyQhSA=', 702, -9999, 99999), DecodeNumber('3Vai8fW8Dz8=', 702, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Bd1JeNyQhSA=', 706, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('UZQPuNjaEUY=', 704, -9999, 99999), DecodeNumber('616cGTNiKvs=', 704, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mWZ9gx0JG7Q=', 708, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Bd1JeNyQhSA=', 706, -9999, 99999), DecodeNumber('2aZyRpNnQyQ=', 706, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tLuuc2JN5vk=', 710, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('mWZ9gx0JG7Q=', 708, -9999, 99999), DecodeNumber('Gpz3TWr5KIc=', 708, -9999, 99999), '');
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
    var weight = DecodeNumber('jGH/9X5yzws=', 548, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di formulare alcune ipotesi sulle caratteristiche della Galleria mellonella. - Secondo Mario le farfalle e i bruchi sono due animali diversi che rappresentano due modi diversi di mimetizzarsi nell'ambiente. - Secondo Giulia le farfalle e i bruchi sono due stadi diversi dello stesso animale che rappresentano due diverse fasi del loro ciclo vitale che è caratterizzato dalla metamorfosi. - Secondo Ettore bruchi e farfalle hanno anche abitudini alimentari e ruoli ecologici diversi. - Secondo Alessandra, infine, la presenza contemporanea di bruchi e farfalle negli alveari evidenzia il fatto che essi nell'ambiente svolgono lo stesso ruolo ecologico.  Le affermazioni di quali studenti sono corrette?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jGH/9X5yzws=', 550, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('v+HJAfAObBw=', 548, -9999, 99999), DecodeNumber('Y6ExCHNI0dw=', 548, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario ed Ettore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('yVP9sgyQLz8=', 552, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jGH/9X5yzws=', 550, -9999, 99999), DecodeNumber('W3xbw0vvpF8=', 550, -9999, 99999), '');
    answer2.shortTextAnswer = "Mario, Giulia e Alessandra";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Gk7HUSIJkFg=', 554, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Gk7HUSIJkFg=', 552, -9999, 99999), DecodeNumber('hsH9syRqPGs=', 552, -9999, 99999), '');
    answer3.shortTextAnswer = "Giulia ed Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Gb7Hj3inVD8=', 915, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('uOtNKxu2irk=', 913, -9999, 99999), DecodeNumber('jpxQ5u0jdZk=', 913, -9999, 99999), '');
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
    var weight = DecodeNumber('p6cchVyFmrQ=', 276, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di ipotizzare quale rapporto c'è tra larve e habitat degli alveari.  - Secondo Mario Galleria mellonella ha deposto le uova all'interno degli alveari, dove le larve sono cresciute digerendo la cera d'api.  - Anche secondo Giulia è così; anzi, questo fatto spiega perché le larve vengano usate come esca dai pescatori: esse sono dolci in quanto possono ingerire anche miele. - Secondo Ettore la cera d'api e la plastica hanno una struttura chimica troppo diversa per cui non è pensabile che un organismo sia in grado di digerirle entrambe. - Secondo Alessandra, anche se in condizioni normali le larve non mangiano la plastica, in caso di bisogno riescono ad adattarsi, riuscendo a digerirla.  L'unica affermazione NON corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p6cchVyFmrQ=', 278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('J3stl3Kk0SE=', 276, -9999, 99999), DecodeNumber('sBOqKttq+Es=', 276, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IEU/JBAhank=', 280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('p6cchVyFmrQ=', 278, -9999, 99999), DecodeNumber('Iuh9TQm1cFQ=', 278, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HnNIv4eC43w=', 282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HnNIv4eC43w=', 280, -9999, 99999), DecodeNumber('vQbcYUj5MJY=', 280, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HnNIv4eC43w=', 284, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('mAUbaRvgqpw=', 282, -9999, 99999), DecodeNumber('Jp7gZSL3N6c=', 282, -9999, 99999), '');
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
    var weight = DecodeNumber('ufc9LG4P4ao=', 122, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale differenza presenta la plastica rispetto al glicole etilenico? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ufc9LG4P4ao=', 124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('A7UL4xGiS8g=', 122, -9999, 99999), DecodeNumber('KrAteVH3xFc=', 122, -9999, 99999), '');
    answer1.shortTextAnswer = "La prima è un composto organico, il secondo è un composto inorganico.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('P7eDhWzYNvU=', 126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('P7eDhWzYNvU=', 124, -9999, 99999), DecodeNumber('TuIfd03WVLA=', 124, -9999, 99999), '');
    answer2.shortTextAnswer = "La prima ha una composizione più complessa del secondo.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9S++yHzjucE=', 487, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4IM+UxP6O30=', 485, -9999, 99999), DecodeNumber('zb0v3FB4UFY=', 485, -9999, 99999), '');
    answer3.shortTextAnswer = "La prima ha una composizione più semplice del secondo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+BNaUtahvAA=', 489, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9S++yHzjucE=', 487, -9999, 99999), DecodeNumber('5u2hnDN8TBY=', 487, -9999, 99999), '');
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
    var weight = DecodeNumber('vs1caDc6Bzo=', 850, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Con il loro lavoro i due studiosi: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vs1caDc6Bzo=', 852, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XWkCy/hv6zo=', 850, -9999, 99999), DecodeNumber('huh0w5b7R8E=', 850, -9999, 99999), '');
    answer1.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella può essere usata per risolvere il problema dell'inquinamento da polietilene.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ff8N3oD88bM=', 854, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('vs1caDc6Bzo=', 852, -9999, 99999), DecodeNumber('o7yxTaj+ht8=', 852, -9999, 99999), '');
    answer2.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella sfrutta la capacità di digerire il polietilene per invadere gli alveari.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M4fxXAhRMhk=', 856, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('M4fxXAhRMhk=', 854, -9999, 99999), DecodeNumber('r8PjPQjAlLA=', 854, -9999, 99999), '');
    answer3.shortTextAnswer = "Hanno capito che nel bruco la degradazione della plastica non avviene solo per una semplice azione meccanica, come quella masticatoria, ma anche per un processo chimico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('M4fxXAhRMhk=', 858, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Efj5vwYPMgc=', 856, -9999, 99999), DecodeNumber('bnJjttHCag0=', 856, -9999, 99999), '');
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
    var weight = DecodeNumber('lJPp15JOBbI=', 1055, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le foglie della maggior parte delle piante hanno una colorazione verde perché le clorofille:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lJPp15JOBbI=', 1057, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Vr+pU7h9QYQ=', 1055, -9999, 99999), DecodeNumber('8GIrM1a8ugQ=', 1055, -9999, 99999), '');
    answer1.shortTextAnswer = "Assorbono la radiazione indipendentemente dal colore, ma riflettono soprattutto nel verde.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HQzpUXcK3CM=', 1059, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lJPp15JOBbI=', 1057, -9999, 99999), DecodeNumber('FXsEsoaSBek=', 1057, -9999, 99999), '');
    answer2.shortTextAnswer = "Non assorbono ma riflettono la radiazione verde.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iinxqWaFT6s=', 1061, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HQzpUXcK3CM=', 1059, -9999, 99999), DecodeNumber('97zNbScNX0Y=', 1059, -9999, 99999), '');
    answer3.shortTextAnswer = "Assorbono soprattutto radiazione verde, dando questo colore alle foglie.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2PSJqEVzfc8=', 1063, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2PSJqEVzfc8=', 1061, -9999, 99999), DecodeNumber('UNNStUMjv8w=', 1061, -9999, 99999), '');
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
    var weight = DecodeNumber('/Y+GxxGtGNI=', 901, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In autunno le foglie degli alberi assumono colorazioni che vanno dal giallo al rosso-bruno. Perché?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/Y+GxxGtGNI=', 903, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sqdT0ppl5H0=', 901, -9999, 99999), DecodeNumber('uY1v2mdnlcQ=', 901, -9999, 99999), '');
    answer1.shortTextAnswer = "Le molecole di clorofilla si modificano gradualmente, portando ad assorbire la luce a frequenze differenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YMur0vH6yDI=', 905, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('/Y+GxxGtGNI=', 903, -9999, 99999), DecodeNumber('Xlir0RlSKcU=', 903, -9999, 99999), '');
    answer2.shortTextAnswer = "Le molecole di clorofilla vengono gradualmente sostituite da altri pigmenti, come i carotenoidi, più efficienti nella stagione autunnale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+jsX2WGpay8=', 266, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+jsX2WGpay8=', 264, -9999, 99999), DecodeNumber('eEri11F91dw=', 264, -9999, 99999), '');
    answer3.shortTextAnswer = "La produzione di clorofilla cessa, lasciando spazio ad altri pigmenti che sono sempre presenti, ma normalmente sono in quantità minore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+jsX2WGpay8=', 268, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BKsZR8oJzas=', 266, -9999, 99999), DecodeNumber('gXwy/X1yRQQ=', 266, -9999, 99999), '');
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
    var weight = DecodeNumber('2/zmsnIJkdo=', 180, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva le figure seguenti, che rappresentano fotografie al microscopio elettronico di quattro organelli presenti nelle cellule vegetali.   Quale di loro ha la maggiore concentrazione di clorofilla?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w7TOm5B/Gio=', 182, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('w7TOm5B/Gio=', 180, -9999, 99999), DecodeNumber('0XARjIeuovg=', 180, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w7TOm5B/Gio=', 184, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2/zmsnIJkdo=', 182, -9999, 99999), DecodeNumber('zPIgYKtNtU4=', 182, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I7pJs0PBJFE=', 544, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0n1iPoJHTGQ=', 542, -9999, 99999), DecodeNumber('ob7jVoE0BjE=', 542, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kidTWwhijCs=', 546, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('I7pJs0PBJFE=', 544, -9999, 99999), DecodeNumber('7cvftV7y0TU=', 544, -9999, 99999), '');
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
    var weight = DecodeNumber('wPpO8+2/7Gc=', 134, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva il grafico seguente, che raffigura gli spettri di assorbimento dei due tipi di clorofilla più comuni. Si ricorda che il Sole ha irradianza (cioè potenza per unità di area) massima nel visibile, con picco attorno ai 500 nm e che l'attraversamento dell'atmosfera terrestre sposta leggermente in avanti e appiattisce il picco suddetto.     Il grafico suggerisce che la fotosintesi clorofilliana si è sviluppata per massimizzare l'assorbimento:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wPpO8+2/7Gc=', 136, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XnKkuqeAY/w=', 134, -9999, 99999), DecodeNumber('aO1ku2M0P9M=', 134, -9999, 99999), '');
    answer1.shortTextAnswer = "Dov'è massima l'irradianza della radiazione filtrata dall'atmosfera, cioè tra i 600 e i 700 nm.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5zJE+dE5yOM=', 138, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5zJE+dE5yOM=', 136, -9999, 99999), DecodeNumber('eIonnVWn78o=', 136, -9999, 99999), '');
    answer2.shortTextAnswer = "Esattamente ai bordi dell'intervallo per cui la radiazione proveniente dal Sole ha irradianza massima.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5zJE+dE5yOM=', 140, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('dRAZJbYvzUM=', 138, -9999, 99999), DecodeNumber('V8PXM0oGJ0c=', 138, -9999, 99999), '');
    answer3.shortTextAnswer = "Dove la radiazione solare ha irradianza massima, per ottenere la maggiore efficienza possibile.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gd7Wj+G0vQY=', 142, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('5zJE+dE5yOM=', 140, -9999, 99999), DecodeNumber('SfNC09STXnk=', 140, -9999, 99999), '');
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
    var weight = DecodeNumber('ETd9r3/3ybo=', 503, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le clorofille \"a\" e \"b\" sono indispensabili per svolgere il processo con cui le piante superiori procurano l'energia di cui necessitano, denominato appunto fotosintesi clorofilliana. Quale delle seguenti affermazioni che riguardano la fotosintesi clorofilliana è ERRATA?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DzhJpBXkaZ4=', 505, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('DzhJpBXkaZ4=', 503, -9999, 99999), DecodeNumber('yBr1TqtVyvQ=', 503, -9999, 99999), '');
    answer1.shortTextAnswer = "L'intero processo si divide in due fasi: luce-dipendente, che avviene solo di giorno, e luce-indipendente, che avviene solo di notte.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DzhJpBXkaZ4=', 507, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ETd9r3/3ybo=', 505, -9999, 99999), DecodeNumber('j+DFbzxVIeo=', 505, -9999, 99999), '');
    answer2.shortTextAnswer = "Solamente durante la fase luce-dipendente viene catturata energia dall'esterno e convertita in energia chimica attraverso le molecole di ATP e NADPH + H+ .";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QnVg3g3P64I=', 868, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('QaPe5QwgLJQ=', 866, -9999, 99999), DecodeNumber('Q3RT723caIU=', 866, -9999, 99999), '');
    answer3.shortTextAnswer = "È influenzata da parametri ambientali come temperatura e disponibilità di luce.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1Dd4u8v/vk0=', 870, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QnVg3g3P64I=', 868, -9999, 99999), DecodeNumber('i7Kh7YpGK4k=', 868, -9999, 99999), '');
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
    var weight = DecodeNumber('3ebLd9/EfN0=', 175, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In base a quanto affermato, tra quali fasi successive del ciclo cellulare è posizionato il punto di START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3ebLd9/EfN0=', 177, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('3zP4QPiDqKA=', 175, -9999, 99999), DecodeNumber('z1mnaxfbaD0=', 175, -9999, 99999), '');
    answer1.shortTextAnswer = "Tra la fase G1 e la fase G2";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TnOSzUyeyBU=', 179, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3ebLd9/EfN0=', 177, -9999, 99999), DecodeNumber('An3pTBb4kTY=', 177, -9999, 99999), '');
    answer2.shortTextAnswer = "Tra la fase M e la fase S";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0XARjIeuovg=', 181, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('TnOSzUyeyBU=', 179, -9999, 99999), DecodeNumber('ei/ex047eJw=', 179, -9999, 99999), '');
    answer3.shortTextAnswer = "Tra la fase G2 e la fase M";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Tukau/lFXb8=', 183, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LnLn60pTGc0=', 1017, -9999, 99999), DecodeNumber('3kI4gd2qgvQ=', 1017, -9999, 99999), '');
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
    var weight = DecodeNumber('iv1DV8sNCR8=', 380, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale delle seguenti condizioni può verosimilmente indurre il superamento del checkpoint START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('g+AnLSnxVZg=', 382, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('g+AnLSnxVZg=', 380, -9999, 99999), DecodeNumber('EAzetL/xTus=', 380, -9999, 99999), '');
    answer1.shortTextAnswer = "Presenza di fattori di crescita che si legano a recettori cellulari.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('g+AnLSnxVZg=', 384, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('iv1DV8sNCR8=', 382, -9999, 99999), DecodeNumber('rHmelPJVzlk=', 382, -9999, 99999), '');
    answer2.shortTextAnswer = "Carenza di sostanze nutrienti nell'ambiente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pNxCUuvufR8=', 386, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('g+AnLSnxVZg=', 384, -9999, 99999), DecodeNumber('w0rbtkjhztw=', 384, -9999, 99999), '');
    answer3.shortTextAnswer = "Scarsa produzione di proteine e organelli, e scarsa crescita cellulare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mPPTT449uL0=', 388, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pNxCUuvufR8=', 386, -9999, 99999), DecodeNumber('HI7QkS/Ama8=', 386, -9999, 99999), '');
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
    var weight = DecodeNumber('SxBLxrioHCI=', 749, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il contenuto in DNA varia nelle diverse fasi del ciclo cellulare. Quale delle seguenti affermazioni, riguardo a una cellula somatica umana, è corretta? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SxBLxrioHCI=', 751, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sGmxqC9f26Y=', 749, -9999, 99999), DecodeNumber('SHJMGG2pnx0=', 749, -9999, 99999), '');
    answer1.shortTextAnswer = "Nella fase G1, la cellula presenta 46 cromosomi, ognuno composto da due cromatidi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C7dqWGtKoB0=', 753, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('SxBLxrioHCI=', 751, -9999, 99999), DecodeNumber('j4LA/zDloo8=', 751, -9999, 99999), '');
    answer2.shortTextAnswer = "Nella profase della mitosi la cellula presenta 23 coppie di cromosomi, ognuno composto da un solo cromatidio.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rmwPB+oTDCU=', 591, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CrYSBIigskw=', 589, -9999, 99999), DecodeNumber('2N/u7QrrUDY=', 589, -9999, 99999), '');
    answer3.shortTextAnswer = "All'inizio della fase S, la cellula presenta 23 coppie di cromosomi, ognuno composto da due cromatidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Yg5+1wANfgk=', 593, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Yg5+1wANfgk=', 591, -9999, 99999), DecodeNumber('P2AQo/NgJps=', 591, -9999, 99999), '');
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
    var weight = DecodeNumber('GmLXTqXtcz8=', 452, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione alla fase M, che comprende i processi successivi di mitosi e citodieresi, comporta molti cambiamenti nella cellula. Con l'entrata nella profase, il primo passo della mitosi, il citoscheletro della cellula si disorganizza, facendo così perdere alla cellula la sua forma peculiare (come si può vedere nella cellula nella figura sottostante). Inoltre, l'involucro nucleare si frammenta e i cromosomi appaiono condensati.     Quale delle seguenti affermazioni riguardanti cellule animali è ERRATA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GmLXTqXtcz8=', 454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('95fiCdW3AcM=', 452, -9999, 99999), DecodeNumber('5y8Ff77UMJU=', 452, -9999, 99999), '');
    answer1.shortTextAnswer = "La cellula all'inizio della fase M ha una forma tondeggiante.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CHEkaBZC0yM=', 456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CHEkaBZC0yM=', 454, -9999, 99999), DecodeNumber('kx/2egh4blE=', 454, -9999, 99999), '');
    answer2.shortTextAnswer = "In fase M non sono presenti filamenti citoscheletrici nella cellula.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CHEkaBZC0yM=', 458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('p8yZ1Z8KU3Q=', 456, -9999, 99999), DecodeNumber('XCxTBtpZE3Q=', 456, -9999, 99999), '');
    answer3.shortTextAnswer = "In fase M il DNA nucleare si trova nel citosol.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IoXs+q2SLz0=', 460, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CHEkaBZC0yM=', 458, -9999, 99999), DecodeNumber('lPSTHbIA5Ho=', 458, -9999, 99999), '');
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
    var weight = DecodeNumber('bfkWFcxqfZQ=', 821, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Durante il ciclo cellulare viene replicato il DNA. In realtà è più corretto parlare di replicazione della cromatina, perché non è solo il DNA che si duplica ma anche le proteine a esso associate, le quali sono importanti per definire la struttura della cromatina e per la regolazione dell'espressione genica. In base a ciò, quale dei seguenti processi deve essere particolarmente attivo nella fase del ciclo cellulare in cui si ha la replicazione del DNA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bfkWFcxqfZQ=', 823, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Ggv3a9/pzXc=', 821, -9999, 99999), DecodeNumber('yVnAMQyGkRU=', 821, -9999, 99999), '');
    answer1.shortTextAnswer = "Polimerizzazione della tubulina in microtubuli.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Zmq0bTB3JW0=', 825, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Zmq0bTB3JW0=', 823, -9999, 99999), DecodeNumber('O/fNWhHzux8=', 823, -9999, 99999), '');
    answer2.shortTextAnswer = "Sintesi proteica di istoni.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zmq0bTB3JW0=', 827, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zNKynbXe1AU=', 825, -9999, 99999), DecodeNumber('Bk40SEUWEEs=', 825, -9999, 99999), '');
    answer3.shortTextAnswer = "Assemblaggio del cinetocore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lPBSmjwt+HM=', 665, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BBiTjjJU3Ak=', 663, -9999, 99999), DecodeNumber('T2kawJd2KGg=', 663, -9999, 99999), '');
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
    var weight = DecodeNumber('mUYduyPGC6A=', 1026, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione tra le diverse fasi del ciclo cellulare è strettamente controllata da molti fattori: una famiglia di proteine, quella delle cicline, è necessaria per la progressione del ciclo cellulare. La concentrazione di ogni particolare ciclina varia ciclicamente durante il ciclo cellulare, grazie a processi di sintesi e degradazione proteica. Con quale tecnica pensi che si possa rilevare la presenza di una ciclina in una particolare fase del ciclo cellulare? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mUYduyPGC6A=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('j4HdJeZkkGw=', 1026, -9999, 99999), DecodeNumber('g12+ckMBC34=', 1026, -9999, 99999), '');
    answer1.shortTextAnswer = "PCR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M6xPI3x4ZCk=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('mUYduyPGC6A=', 1028, -9999, 99999), DecodeNumber('UvIRiKnzUG0=', 1028, -9999, 99999), '');
    answer2.shortTextAnswer = "Reazione di Lugol.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('MoBSm3s2G5k=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('MoBSm3s2G5k=', 1030, -9999, 99999), DecodeNumber('GQB7DA9Jf2o=', 1030, -9999, 99999), '');
    answer3.shortTextAnswer = "Riconoscimento tramite anticorpi specifici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MoBSm3s2G5k=', 1034, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pbF0eAwDAG4=', 1032, -9999, 99999), DecodeNumber('IG0aVSdnF+k=', 1032, -9999, 99999), '');
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
    var weight = DecodeNumber('m/bLXeoVVuk=', 427, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste strutture fa parte esclusivamente del sistema respiratorio? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m/bLXeoVVuk=', 429, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('v7H+7jXtIr0=', 427, -9999, 99999), DecodeNumber('HWhMg9P6oXg=', 427, -9999, 99999), '');
    answer1.shortTextAnswer = "Vestibolo della bocca.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TXJnJ/zhjwI=', 431, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('m/bLXeoVVuk=', 429, -9999, 99999), DecodeNumber('KWbQcZkCt3I=', 429, -9999, 99999), '');
    answer2.shortTextAnswer = "Esofago.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('90mixIaZIXA=', 433, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('90mixIaZIXA=', 431, -9999, 99999), DecodeNumber('PPxmffq999k=', 431, -9999, 99999), '');
    answer3.shortTextAnswer = "Laringe.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('awuiJuxMY3I=', 793, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zZYCDute31k=', 791, -9999, 99999), DecodeNumber('XD2Gxtt42tI=', 791, -9999, 99999), '');
    answer4.shortTextAnswer = "Faringe.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('RR8A8opjFP8=', 1154, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Trachea e bronchi presentano una componente rigida formata da una serie di anelli quasi completi che impediscono il collasso delle loro pareti durante gli atti respiratori. Da che tipo di tessuto sono costituiti? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RR8A8opjFP8=', 1156, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BAciELQ/Wog=', 1154, -9999, 99999), DecodeNumber('cFzHZ9KaQus=', 1154, -9999, 99999), '');
    answer1.shortTextAnswer = "Tessuto connettivo fibroso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I6kqOnB3V+I=', 1158, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RR8A8opjFP8=', 1156, -9999, 99999), DecodeNumber('k2mQen08u0o=', 1156, -9999, 99999), '');
    answer2.shortTextAnswer = "Tessuto epiteliale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7ltrvxOJSd4=', 1160, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('I6kqOnB3V+I=', 1158, -9999, 99999), DecodeNumber('wPV62FJ8UYo=', 1158, -9999, 99999), '');
    answer3.shortTextAnswer = "Tessuto osseo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5eY51glI+gQ=', 1162, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('5eY51glI+gQ=', 1160, -9999, 99999), DecodeNumber('dZc9r2QYSaM=', 1160, -9999, 99999), '');
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
    var weight = DecodeNumber('PJRWULNg81M=', 1001, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale tragitto compie il biossido di carbonio durante l'espirazione?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PJRWULNg81M=', 1003, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('WBTf20GCW94=', 1001, -9999, 99999), DecodeNumber('xfSll+rQWJ4=', 1001, -9999, 99999), '');
    answer1.shortTextAnswer = "Capillare, alveolo respiratorio, bronco, bronchiolo, trachea.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jYEjMuEn7Bw=', 1005, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jYEjMuEn7Bw=', 1003, -9999, 99999), DecodeNumber('bLG89HUn3gc=', 1003, -9999, 99999), '');
    answer2.shortTextAnswer = "Capillare, alveolo respiratorio, bronchiolo, bronco, trachea.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jYEjMuEn7Bw=', 1007, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tzMN1P+Oa0w=', 1005, -9999, 99999), DecodeNumber('R+0M36Os4YA=', 1005, -9999, 99999), '');
    answer3.shortTextAnswer = "Trachea, bronco, bronchiolo, alveolo respiratorio, capillare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DZRq30uSxN0=', 367, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+uXyakdYmHE=', 365, -9999, 99999), DecodeNumber('68RQ7RQvAEY=', 365, -9999, 99999), '');
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
    var weight = DecodeNumber('p1ibAahn2W0=', 728, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nell'arteria polmonare scorre sangue:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p1ibAahn2W0=', 730, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('KDIX9T7C2pM=', 728, -9999, 99999), DecodeNumber('Q830j6X1BmA=', 728, -9999, 99999), '');
    answer1.shortTextAnswer = "Ricco di ossigeno che dal cuore va al polmone.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nkOeU+h6uOk=', 732, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('p1ibAahn2W0=', 730, -9999, 99999), DecodeNumber('TuHQWLV6Ap0=', 730, -9999, 99999), '');
    answer2.shortTextAnswer = "Ricco di ossigeno che dal polmone va al cuore.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LufYldsC0OQ=', 734, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('LufYldsC0OQ=', 732, -9999, 99999), DecodeNumber('xmGqhFeJmeY=', 732, -9999, 99999), '');
    answer3.shortTextAnswer = "Ricco di biossido di carbonio che dal cuore va al polmone.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LufYldsC0OQ=', 736, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('tGWNt/XB0X4=', 734, -9999, 99999), DecodeNumber('WRe/Ox+PZAU=', 734, -9999, 99999), '');
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
    var weight = DecodeNumber('F+n1LbM05OM=', 575, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Recentemente si è scoperto che i polmoni hanno una scorta di cellule staminali. Queste sarebbero in grado di porre rimedio ai danni prodotti su tutte le componenti dell'organo, come i bronchioli o gli alveoli. Si tratterebbe quindi di cellule: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('F+n1LbM05OM=', 577, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ToMk7yDCqf8=', 575, -9999, 99999), DecodeNumber('686YI8/FFtI=', 575, -9999, 99999), '');
    answer1.shortTextAnswer = "Staminali totipotenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mNaBqFMMtwE=', 579, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('F+n1LbM05OM=', 577, -9999, 99999), DecodeNumber('0/e7clvi2c0=', 577, -9999, 99999), '');
    answer2.shortTextAnswer = "Staminali pluripotenti.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iUjTW6S9ip8=', 581, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iUjTW6S9ip8=', 579, -9999, 99999), DecodeNumber('Kp5GjDaghB0=', 579, -9999, 99999), '');
    answer3.shortTextAnswer = "Staminali multipotenti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iUjTW6S9ip8=', 583, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('qtMWfoo+I0U=', 581, -9999, 99999), DecodeNumber('k41py0WbbTM=', 581, -9999, 99999), '');
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
    var weight = DecodeNumber('bZuG63tyaWk=', 943, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un batterio Gram negativo è: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bZuG63tyaWk=', 945, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l2xM6hDDTi4=', 943, -9999, 99999), DecodeNumber('9VF30QFn544=', 943, -9999, 99999), '');
    answer1.shortTextAnswer = "Un batteriofago sensibile alla maggior parte degli antibiotici.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0ojPZvefHU8=', 784, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('XRPQ0MdmL/s=', 782, -9999, 99999), DecodeNumber('66k/ghtGvxw=', 782, -9999, 99999), '');
    answer2.shortTextAnswer = "Un batterio, privo di flagello e di parete, resistente a tutti gli antibiotici.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hgO0eg76+BE=', 786, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hgO0eg76+BE=', 784, -9999, 99999), DecodeNumber('4F9SUIaMB0Q=', 784, -9999, 99999), '');
    answer3.shortTextAnswer = "Un batterio con parete meno ricca di peptidoglicano che si colora di rosso con il reattivo di Gram ed è sensibile solo ad alcuni antibiotici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hgO0eg76+BE=', 788, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Qq/hMvyBvoc=', 786, -9999, 99999), DecodeNumber('bb+mKexVGl8=', 786, -9999, 99999), '');
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
    var weight = DecodeNumber('GmLXTqXtcz8=', 452, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il pigmento rosso intenso di Serratia marcescens è chiamato prodigiosina e ha una massa molare di 323,432 g/mol. Quale delle seguenti formule di struttura rappresenta la prodigiosina?    ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GmLXTqXtcz8=', 454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('95fiCdW3AcM=', 452, -9999, 99999), DecodeNumber('5y8Ff77UMJU=', 452, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uj2sTuvqTWE=', 815, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('uj2sTuvqTWE=', 813, -9999, 99999), DecodeNumber('cTrvwoiI52o=', 813, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uj2sTuvqTWE=', 817, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0rDCUV4XQtU=', 815, -9999, 99999), DecodeNumber('XlTcsYs0RQ0=', 815, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9NuNJsVSeAM=', 819, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('uj2sTuvqTWE=', 817, -9999, 99999), DecodeNumber('JRpMs2bDaQo=', 817, -9999, 99999), '');
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
    var weight = DecodeNumber('+XQ37tn5IcE=', 657, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Leggi la seguente definizione di plasmide nella quale due termini, indicati in grassetto, sono in alternativa:  Un plasmide è un elemento genetico cromosomico/extracromosomico in grado di replicarsi autonomamente all'interno della cellula ospite, portatore di geni che veicolano informazioni non essenziali per la vita della cellula e in grado di trasferirsi da una cellula ad un'altra per coniugazione/trasduzione.  Le parole corrette da inserire sono: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('myn8yuu7uHA=', 659, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('myn8yuu7uHA=', 657, -9999, 99999), DecodeNumber('1oxwrRqWJeY=', 657, -9999, 99999), '');
    answer1.shortTextAnswer = "Extracromosomico e coniugazione.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('myn8yuu7uHA=', 661, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+XQ37tn5IcE=', 659, -9999, 99999), DecodeNumber('MUi2zKI4/Vo=', 659, -9999, 99999), '');
    answer2.shortTextAnswer = "Cromosomico e coniugazione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BBiTjjJU3Ak=', 663, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('myn8yuu7uHA=', 661, -9999, 99999), DecodeNumber('lvTUaZSWlXE=', 661, -9999, 99999), '');
    answer3.shortTextAnswer = "Cromosomico e trasduzione.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lPBSmjwt+HM=', 665, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BBiTjjJU3Ak=', 663, -9999, 99999), DecodeNumber('T2kawJd2KGg=', 663, -9999, 99999), '');
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
    var weight = DecodeNumber('mUYduyPGC6A=', 1026, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le pericolose e talvolta mortali infezioni ospedaliere da Serratia sono da addebitare a: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mUYduyPGC6A=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('j4HdJeZkkGw=', 1026, -9999, 99999), DecodeNumber('g12+ckMBC34=', 1026, -9999, 99999), '');
    answer1.shortTextAnswer = "Scarsa igiene e mancato utilizzo di antibiotici a largo spettro.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('O4UNVALIu24=', 389, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('O4UNVALIu24=', 387, -9999, 99999), DecodeNumber('mPPTT449uL0=', 387, -9999, 99999), '');
    answer2.shortTextAnswer = "Elevato utilizzo di antibiotici a largo spettro e elevata presenza di pazienti sensibili ed esposti a batteri selezionati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O4UNVALIu24=', 391, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7vUHFo7xkJM=', 389, -9999, 99999), DecodeNumber('umqyL0B9src=', 389, -9999, 99999), '');
    answer3.shortTextAnswer = "Predilezione dei batteri Gram negativi per gli ambienti ospedalieri poco protetti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JxYO8O3aRFg=', 393, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O4UNVALIu24=', 391, -9999, 99999), DecodeNumber('ItKHWdFawb0=', 391, -9999, 99999), '');
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
    var weight = DecodeNumber('UGYOhx5RSKk=', 1231, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nei tessuti vegetali, quali di questi tessuti svolge la funzione di conduzione della linfa grezza? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mNltyyoHZHo=', 1233, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('mNltyyoHZHo=', 1231, -9999, 99999), DecodeNumber('fETkERSwEP0=', 1231, -9999, 99999), '');
    answer1.shortTextAnswer = "Xilema.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('mNltyyoHZHo=', 1235, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('UGYOhx5RSKk=', 1233, -9999, 99999), DecodeNumber('OA27Xu1htq4=', 1233, -9999, 99999), '');
    answer2.shortTextAnswer = "Floema.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QpaTMo6is7o=', 1237, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mNltyyoHZHo=', 1235, -9999, 99999), DecodeNumber('erIoVHp7jRI=', 1235, -9999, 99999), '');
    answer3.shortTextAnswer = "Collenchima.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nhcT8ZW/JVU=', 1239, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QpaTMo6is7o=', 1237, -9999, 99999), DecodeNumber('5E1W4xpBPuw=', 1237, -9999, 99999), '');
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
    var weight = DecodeNumber('uQ8wWL3DA6A=', 600, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di questi fusti modificati è costituito da un breve fusto di forma conica e da numerose foglie modificate per la funzione di riserva? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uQ8wWL3DA6A=', 602, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('C98oyhQTAro=', 600, -9999, 99999), DecodeNumber('k10TnRjR6sQ=', 600, -9999, 99999), '');
    answer1.shortTextAnswer = "Tuberi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OBBnxXv7Nps=', 440, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LHPIMGgDs9A=', 438, -9999, 99999), DecodeNumber('OnDbYiLlSHU=', 438, -9999, 99999), '');
    answer2.shortTextAnswer = "Rizomi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NU3hS/ocDY0=', 442, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('NU3hS/ocDY0=', 440, -9999, 99999), DecodeNumber('Q6DKtaCzpUo=', 440, -9999, 99999), '');
    answer3.shortTextAnswer = "Bulbi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NU3hS/ocDY0=', 444, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('me/9X0SgHWY=', 442, -9999, 99999), DecodeNumber('6TM5AwwuRG8=', 442, -9999, 99999), '');
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
    var weight = DecodeNumber('38dHnE5dxw8=', 805, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Da che cosa è composto il gineceo di un fiore? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('38dHnE5dxw8=', 807, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('K17rzkkOpHg=', 805, -9999, 99999), DecodeNumber('fF1cir4+Q1I=', 805, -9999, 99999), '');
    answer1.shortTextAnswer = "Da un insieme di stami.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('iP978+vS3b0=', 809, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('iP978+vS3b0=', 807, -9999, 99999), DecodeNumber('gsziX2EKHNk=', 807, -9999, 99999), '');
    answer2.shortTextAnswer = "Da un insieme di carpelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iP978+vS3b0=', 811, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('r0cTUOEtWAc=', 809, -9999, 99999), DecodeNumber('yhIlm7FDX7I=', 809, -9999, 99999), '');
    answer3.shortTextAnswer = "Da un insieme di sepali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vwHp4f9HGOs=', 813, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iP978+vS3b0=', 811, -9999, 99999), DecodeNumber('AiB9gv0ze44=', 811, -9999, 99999), '');
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
    var weight = DecodeNumber('MaBeH4znqDg=', 1174, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste affermazioni relative al meristema del germoglio è FALSA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MaBeH4znqDg=', 1176, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('527c2HYXea8=', 1174, -9999, 99999), DecodeNumber('R2adUuaxBgQ=', 1174, -9999, 99999), '');
    answer1.shortTextAnswer = "Genera il fusto, le foglie e le gemme.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s0NevSEv0h8=', 1178, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MaBeH4znqDg=', 1176, -9999, 99999), DecodeNumber('IaeGpy95em8=', 1176, -9999, 99999), '');
    answer2.shortTextAnswer = "Presenta una crescita indeterminata.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nVsn3Fmq368=', 1180, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('s0NevSEv0h8=', 1178, -9999, 99999), DecodeNumber('HWwhQ4+AMRU=', 1178, -9999, 99999), '');
    answer3.shortTextAnswer = "Contiene diversi strati e zone funzionali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DFJLj6fgOfM=', 1182, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DFJLj6fgOfM=', 1180, -9999, 99999), DecodeNumber('FSHeB7Y/NpU=', 1180, -9999, 99999), '');
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
    var weight = DecodeNumber('NhQlHwpEiL0=', 1020, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per impollinazione chirotterogama si intende l'impollinazione che ha per vettore: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('NhQlHwpEiL0=', 1022, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('cZo91mIQBw4=', 1020, -9999, 99999), DecodeNumber('LnLn60pTGc0=', 1020, -9999, 99999), '');
    answer1.shortTextAnswer = "Il vento.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rHmelPJVzlk=', 383, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('EAzetL/xTus=', 381, -9999, 99999), DecodeNumber('iv1DV8sNCR8=', 381, -9999, 99999), '');
    answer2.shortTextAnswer = "Gli uccelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HI7QkS/Ama8=', 385, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HI7QkS/Ama8=', 383, -9999, 99999), DecodeNumber('g+AnLSnxVZg=', 383, -9999, 99999), '');
    answer3.shortTextAnswer = "I pipistrelli.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HI7QkS/Ama8=', 387, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('w0rbtkjhztw=', 385, -9999, 99999), DecodeNumber('pNxCUuvufR8=', 385, -9999, 99999), '');
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
    var weight = DecodeNumber('SHJMGG2pnx0=', 748, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quali tra i seguenti lipidi NON fanno parte della struttura di una tipica membrana cellulare di una cellula eucariote? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j4LA/zDloo8=', 750, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('j4LA/zDloo8=', 748, -9999, 99999), DecodeNumber('sGmxqC9f26Y=', 748, -9999, 99999), '');
    answer1.shortTextAnswer = "Trigliceridi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j4LA/zDloo8=', 752, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('SHJMGG2pnx0=', 750, -9999, 99999), DecodeNumber('SxBLxrioHCI=', 750, -9999, 99999), '');
    answer2.shortTextAnswer = "Fosfolipidi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1VDig5pSvEI=', 754, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('j4LA/zDloo8=', 752, -9999, 99999), DecodeNumber('C7dqWGtKoB0=', 752, -9999, 99999), '');
    answer3.shortTextAnswer = "Glicolipidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iP/kSUJfJNM=', 756, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('1VDig5pSvEI=', 754, -9999, 99999), DecodeNumber('a5xDG/AAK7s=', 754, -9999, 99999), '');
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
    var weight = DecodeNumber('Bx1V7p9jRp4=', 594, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per quale motivo i lipidi hanno un'alta densità energetica?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Bx1V7p9jRp4=', 596, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l4xYziE8Qoo=', 594, -9999, 99999), DecodeNumber('Yg5+1wANfgk=', 594, -9999, 99999), '');
    answer1.shortTextAnswer = "Perché sono formati da lunghe catene di atomi di carbonio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C98oyhQTAro=', 598, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('C98oyhQTAro=', 596, -9999, 99999), DecodeNumber('EOzXlGmJsTI=', 596, -9999, 99999), '');
    answer2.shortTextAnswer = "Perché gli atomi di carbonio di un lipide sono ridotti o poco ossidati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PzsHNUPLZbw=', 959, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vyjdYYUD+uw=', 957, -9999, 99999), DecodeNumber('NhqUg99CMAs=', 957, -9999, 99999), '');
    answer3.shortTextAnswer = "Perché le catene di atomi di carbonio sono lineari (senza ramificazioni).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SRnbBrnoI5M=', 961, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('PzsHNUPLZbw=', 959, -9999, 99999), DecodeNumber('uNc7uHhd0vE=', 959, -9999, 99999), '');
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
    var weight = DecodeNumber('aywVtAtVLp4=', 799, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale dei seguenti lipidi ti aspetti di trovare prevalentemente in un prodotto alimentare di origine vegetale? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aywVtAtVLp4=', 801, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('oiXbWFgQgGU=', 799, -9999, 99999), DecodeNumber('Ggm8s3A63tY=', 799, -9999, 99999), '');
    answer1.shortTextAnswer = "Lipidi formati da acidi grassi saturi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K17rzkkOpHg=', 803, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('K17rzkkOpHg=', 801, -9999, 99999), DecodeNumber('0G0taptl4g0=', 801, -9999, 99999), '');
    answer2.shortTextAnswer = "Lipidi formati da acidi grassi insaturi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K17rzkkOpHg=', 805, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qMrt8kCU8W0=', 803, -9999, 99999), DecodeNumber('+FVr6IRPGps=', 803, -9999, 99999), '');
    answer3.shortTextAnswer = "Lipidi formati da acidi grassi a catena molto lunga (più di 22 atomi di carbonio).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('38dHnE5dxw8=', 807, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('K17rzkkOpHg=', 805, -9999, 99999), DecodeNumber('fF1cir4+Q1I=', 805, -9999, 99999), '');
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
    var weight = DecodeNumber('HKuaQ8+Uc5M=', 1168, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In una cellula procariote, dove avviene la sintesi dei lipidi di membrana? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FZGZyUkT3kw=', 1170, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FZGZyUkT3kw=', 1168, -9999, 99999), DecodeNumber('qDwyj1niTbg=', 1168, -9999, 99999), '');
    answer1.shortTextAnswer = "Nel citoplasma.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FZGZyUkT3kw=', 1172, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('HKuaQ8+Uc5M=', 1170, -9999, 99999), DecodeNumber('5hPwHCP58+k=', 1170, -9999, 99999), '');
    answer2.shortTextAnswer = "Nei mitocondri.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('527c2HYXea8=', 1174, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('FZGZyUkT3kw=', 1172, -9999, 99999), DecodeNumber('K0tKDMFtBdI=', 1172, -9999, 99999), '');
    answer3.shortTextAnswer = "Nel reticolo endoplasmatico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/8FU3iEPs94=', 535, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BRO1RLFSzKM=', 533, -9999, 99999), DecodeNumber('LwCYJQnsfzY=', 533, -9999, 99999), '');
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
    var weight = DecodeNumber('sSK23F86QFo=', 373, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In un esperimento condotto in una varietà di polli, si osserva che dagli incroci tra due individui eterozigoti per un certo carattere si ottengono alla prima generazione filiale 2/3 di individui eterozigoti e 1/3 di individui omozigoti dominanti. Come può essere interpretato questo risultato? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sSK23F86QFo=', 375, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('pdm0D0kXgeY=', 373, -9999, 99999), DecodeNumber('vu7O4/9z0no=', 373, -9999, 99999), '');
    answer1.shortTextAnswer = "Il carattere studiato è legato al sesso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jkeLwxDFGrY=', 377, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sSK23F86QFo=', 375, -9999, 99999), DecodeNumber('feAjNG/Q/Zo=', 375, -9999, 99999), '');
    answer2.shortTextAnswer = "Il carattere studiato è caratterizzato da allelia multipla.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EAzetL/xTus=', 379, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('EAzetL/xTus=', 377, -9999, 99999), DecodeNumber('tsXiFNOs3qk=', 377, -9999, 99999), '');
    answer3.shortTextAnswer = "La condizione omozigote recessiva è letale per quel carattere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EAzetL/xTus=', 381, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vUeegx8HHrY=', 379, -9999, 99999), DecodeNumber('IZDZfl03LU8=', 379, -9999, 99999), '');
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
    var weight = DecodeNumber('r3iExN1jodI=', 742, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In ecologia il fenomeno dello spostamento dei caratteri consiste nel fatto che: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r3iExN1jodI=', 744, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tLSLghrnTtY=', 742, -9999, 99999), DecodeNumber('4euWUlW38+M=', 742, -9999, 99999), '');
    answer1.shortTextAnswer = "Quando due specie competono tra loro, una delle due finisce con l'eliminare l'altra.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WJ4GYUowuUc=', 746, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('r3iExN1jodI=', 744, -9999, 99999), DecodeNumber('7ScQtGUIins=', 744, -9999, 99999), '');
    answer2.shortTextAnswer = "Quando due specie sfruttano le stesse risorse si verifica la competizione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TfAPsqAd3TM=', 1107, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('/ia73jk/4m4=', 1105, -9999, 99999), DecodeNumber('c9wCxaVa3q8=', 1105, -9999, 99999), '');
    answer3.shortTextAnswer = "Una specie non può occupare interamente la sua nicchia a causa delle interazioni con gli altri organismi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Giv7XHFQHZc=', 1109, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Giv7XHFQHZc=', 1107, -9999, 99999), DecodeNumber('rS00Ca0pyVY=', 1107, -9999, 99999), '');
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
    var weight = DecodeNumber('rhylbJptZEg=', 947, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un individuo si presenta dal proprio medico riferendo perdita di peso, tachicardia e scarsa sopportazione del caldo. Il medico sospetta che sia affetto da ipertiroidismo. La quantificazione nel sangue di quale delle seguenti molecole può permettere al medico di distinguere tra cause di ipertiroidismo secondarie, cioè legate ad un'attività eccessiva dell'ipofisi, e primarie, cioè legate a un'attività eccessiva della tiroide? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rhylbJptZEg=', 949, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7QdU7kdq9oo=', 947, -9999, 99999), DecodeNumber('It4affQb1v8=', 947, -9999, 99999), '');
    answer1.shortTextAnswer = "Triiodotironina (T3) e tiroxina (T4).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nxMqJgCsX+c=', 951, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('nxMqJgCsX+c=', 949, -9999, 99999), DecodeNumber('Tjwrp1Uc3sQ=', 949, -9999, 99999), '');
    answer2.shortTextAnswer = "TSH (ormone tireotropo).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nxMqJgCsX+c=', 953, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ymI5JqnhrqY=', 951, -9999, 99999), DecodeNumber('tUPIb7a+OTw=', 951, -9999, 99999), '');
    answer3.shortTextAnswer = "Iodio (I2).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oVFp4bnxXpA=', 955, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nxMqJgCsX+c=', 953, -9999, 99999), DecodeNumber('B91lo13qRdo=', 953, -9999, 99999), '');
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
    var weight = DecodeNumber('mWZ9gx0JG7Q=', 706, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le lattine normalmente in commercio hanno un rivestimento interno protettivo a base di resine epossidiche contenente il Bisfenolo A (BPA). Il BPA è una molecola di origine sintetica nota per i suoi effetti avversi sulla salute umana e animale. Studi scientifici hanno dimostrato la migrazione del BPA dal contenitore all'alimento in esso contenuto. Nella figura sottostante sono riportati i risultati ottenuti analizzando il contenuto di BPA in pomodori pelati in lattina al variare della temperatura di conservazione della lattina. Sono stati analizzati 6 marche in commercio e la migrazione del BPA dal contenitore all'alimento si è verificata in tutti i campioni indipendentemente dal valore economico del prodotto analizzato.      Secondo i risultati riportati nella figura precedente: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mWZ9gx0JG7Q=', 708, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bd1JeNyQhSA=', 706, -9999, 99999), DecodeNumber('2aZyRpNnQyQ=', 706, -9999, 99999), '');
    answer1.shortTextAnswer = "L'aumento della migrazione del BPA è proporzionale alla diminuzione della temperatura. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tLuuc2JN5vk=', 710, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('mWZ9gx0JG7Q=', 708, -9999, 99999), DecodeNumber('Gpz3TWr5KIc=', 708, -9999, 99999), '');
    answer2.shortTextAnswer = "Il BPA può migrare dal contenitore agli alimenti in esso contenuti solo per temperature superiori a 37 °C.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SboUEe9gPWI=', 712, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tLuuc2JN5vk=', 710, -9999, 99999), DecodeNumber('hw2kiwj05fA=', 710, -9999, 99999), '');
    answer3.shortTextAnswer = "La marca 5 risulta migliore della marca 2 relativamente alla capacità del contenitore di rilasciare BPA.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+WRFp6xCG0M=', 1073, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+WRFp6xCG0M=', 1071, -9999, 99999), DecodeNumber('erzn0UNYkx8=', 1071, -9999, 99999), '');
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
    var weight = DecodeNumber('XWIfHPUOEWg=', 1270, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste ossa fa parte del bacino?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RDP0g8A9BVs=', 1272, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('RDP0g8A9BVs=', 1270, -9999, 99999), DecodeNumber('EBwMdYKcXGs=', 1270, -9999, 99999), '');
    answer1.shortTextAnswer = "Ischio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8jVl4hmga6U=', 633, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('D8le5xzRM5E=', 631, -9999, 99999), DecodeNumber('WMA2y/gR+YI=', 631, -9999, 99999), '');
    answer2.shortTextAnswer = "Etmoide.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('yM6BjPmzGAo=', 635, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('8jVl4hmga6U=', 633, -9999, 99999), DecodeNumber('MyLx/bdQPec=', 633, -9999, 99999), '');
    answer3.shortTextAnswer = "Ischio.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GJw4SMayJEg=', 637, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yM6BjPmzGAo=', 635, -9999, 99999), DecodeNumber('Bgh2EMFUsTQ=', 635, -9999, 99999), '');
    answer4.shortTextAnswer = "Ioide.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






