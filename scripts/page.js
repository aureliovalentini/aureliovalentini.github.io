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
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('NzD7Z5sIt2I=', 744, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "I quattro ragazzi si mettono a riflettere e a discutere tra loro ed esprimono ciascuno le proprie considerazioni sulla validità scientifica di quanto riportato nell’articolo: Secondo Mario la scoperta è casuale e non ha quindi valore scientifico. Anche secondo Giulia quanto riportato nell’articolo non ha nessuna importanza scientifica, perché nessun animale può digerire la plastica.  Ettore ritiene invece che gli autori della pubblicazione, prima di affermare quanto riportato nell’articolo, devono necessariamente avere allestito delle prove per dimostrare la validità delle loro affermazioni                                                                                                                            Secondo Alessandra, infine, le farfalle di Galleria mellonella e i bruchi non hanno nessun rapporto tra di loro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NzD7Z5sIt2I=', 746, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6sR0Ax+RLsw=', 106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sKU9BY6+57s=', 108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sKU9BY6+57s=', 110, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Alessandra";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('eTXljfvc2tw=', 471, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi a quale gruppo di animali appartiene la farfalla oggetto dello studio: Secondo Mario Galleria mellonella è un insetto appartenente ai Lepidotteri Secondo Giulia è un insetto appartenente ai Ditteri Secondo Ettore è un Artropode ma non è un insetto Secondo Alessandra, infine, non è un neanche un Artropode perché i bruchi non hanno l’esoscheletro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('uIcIfguJfm0=', 473, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uIcIfguJfm0=', 475, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o0YKTYoP3hQ=', 477, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EbuEqehrc8M=', 479, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Alessandra";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('oQy/OmzUI3A=', 318, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di formulare alcune ipotesi sulle caratteristiche della Galleria mellonella. Secondo Mario le farfalle e i bruchi sono due animali diversi che rappresentano due modi diversi di mimetizzarsi nell’ambiente. Secondo Giulia le farfalle e i bruchi sono due stadi diversi dello stesso animale che rappresentano due diverse fasi del loro ciclo vitale che è caratterizzato dalla metamorfosi. Secondo Ettore bruchi e farfalle hanno anche abitudini alimentari e ruoli ecologici diversi   Secondo Alessandra, infine, la presenza contemporanea di bruchi e farfalle negli alveari evidenzia il fatto che essi nell’ambiente svolgono lo stesso ruolo ecologico.  Le affermazioni di quali studenti sono corrette?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('oQy/OmzUI3A=', 320, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mario ed Ettore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IFIO8e7JKqQ=', 680, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Mario, Giulia e Alessandra";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cne5byBjVic=', 682, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Giulia ed Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cne5byBjVic=', 684, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Le affermazioni sono tutte corrette";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('90fKFggYfmI=', 45, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di ipotizzare quale rapporto c’è tra larve ed habitat degli alveari.  Secondo Mario Galleria mellonella ha deposto le uova all'interno degli alveari, dove le larve sono cresciute digerendo la cera d’api.  Anche secondo Giulia è così; anzi, questo fatto spiega perché le larve vengano usate come esca dai pescatori: esse sono dolci in quanto possono ingerire anche miele. Secondo Ettore la cera d’api e la plastica hanno una struttura chimica troppo diversa per cui non è pensabile che un organismo sia in grado di digerirle entrambe. Secondo Alessandra, anche se in condizioni normali le larve non mangiano la plastica, in caso di bisogno riescono ad adattarsi, riuscendo a digerirla.  L'unica affermazione NON corretta è quella di:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('90fKFggYfmI=', 47, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('arvsQ2RGPqI=', 49, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Td9J6Ig4GyQ=', 51, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Td9J6Ig4GyQ=', 53, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Mario";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






