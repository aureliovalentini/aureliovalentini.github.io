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
    var weight = DecodeNumber('ONH2B7DpBKM=', 640, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "I quattro ragazzi si mettono a riflettere e a discutere tra loro ed esprimono ciascuno le proprie considerazioni sulla validità scientifica di quanto riportato nell'articolo: - Secondo Mario la scoperta è casuale e non ha quindi valore scientifico. - Anche secondo Giulia quanto riportato nell'articolo non ha nessuna importanza scientifica, perché nessun animale può digerire la plastica. - Ettore ritiene invece che gli autori della pubblicazione, prima di affermare quanto riportato nell'articolo, devono necessariamente avere allestito delle prove per dimostrare la validità delle loro affermazioni. - Secondo Alessandra, infine, le farfalle di Galleria mellonella e i bruchi non hanno nessun rapporto tra di loro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ONH2B7DpBKM=', 642, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4AMvZ+bvLDQ=', 640, -9999, 99999), DecodeNumber('n6gob18x/8g=', 640, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('raU9+2nZNFk=', 480, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ixkxNiwRjLY=', 478, -9999, 99999), DecodeNumber('gTfN0lGPvKs=', 478, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OnaOwZNdPW8=', 482, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('OnaOwZNdPW8=', 480, -9999, 99999), DecodeNumber('ZQFrtyGP/q8=', 480, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OnaOwZNdPW8=', 484, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ompD37vk58E=', 482, -9999, 99999), DecodeNumber('o/cXV/Ay5wM=', 482, -9999, 99999), '');
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
    var weight = DecodeNumber('xhSF5gz+/Lw=', 845, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi a quale gruppo di animali appartiene la farfalla oggetto dello studio: - Secondo Mario Galleria mellonella è un insetto appartenente ai Lepidotteri. - Secondo Giulia è un insetto appartenente ai Ditteri. - Secondo Ettore è un Artropode ma non è un insetto. - Secondo Alessandra, infine, non è un neanche un Artropode perché i bruchi non hanno l'esoscheletro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('we0Mxz52DMY=', 847, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('we0Mxz52DMY=', 845, -9999, 99999), DecodeNumber('zuSK0kWaIwg=', 845, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('we0Mxz52DMY=', 849, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xhSF5gz+/Lw=', 847, -9999, 99999), DecodeNumber('Ix+Jwt3zzA8=', 847, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O0xW3qRvToQ=', 210, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+1s+HlXqBz0=', 208, -9999, 99999), DecodeNumber('E0k4KggJA/s=', 208, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cT/UALcRtOc=', 212, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O0xW3qRvToQ=', 210, -9999, 99999), DecodeNumber('X9ZhYpLA+Nw=', 210, -9999, 99999), '');
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
    var weight = DecodeNumber('vCd+Bdhw0QA=', 50, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di formulare alcune ipotesi sulle caratteristiche della Galleria mellonella. - Secondo Mario le farfalle e i bruchi sono due animali diversi che rappresentano due modi diversi di mimetizzarsi nell'ambiente. - Secondo Giulia le farfalle e i bruchi sono due stadi diversi dello stesso animale che rappresentano due diverse fasi del loro     ciclo vitale che è caratterizzato dalla metamorfosi. - Secondo Ettore bruchi e farfalle hanno anche abitudini alimentari e ruoli ecologici diversi. - Secondo Alessandra, infine, la presenza contemporanea di bruchi e farfalle negli alveari evidenzia il fatto che essi nell'ambiente svolgono lo stesso ruolo ecologico.  Le affermazioni di quali studenti sono corrette?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vCd+Bdhw0QA=', 52, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wrT6248ToQk=', 50, -9999, 99999), DecodeNumber('9znksfCgjw8=', 50, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario ed Ettore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fu5oT0oXb/4=', 54, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('vCd+Bdhw0QA=', 52, -9999, 99999), DecodeNumber('NXpJJzAwuSY=', 52, -9999, 99999), '');
    answer2.shortTextAnswer = "Mario, Giulia e Alessandra";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bMZ287C4MdY=', 56, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('bMZ287C4MdY=', 54, -9999, 99999), DecodeNumber('0m1nAcV/0Lc=', 54, -9999, 99999), '');
    answer3.shortTextAnswer = "Giulia ed Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('19/am0ZuRX4=', 417, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JJw4Hch25TE=', 415, -9999, 99999), DecodeNumber('lJbhO66ZdB0=', 415, -9999, 99999), '');
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
    var weight = DecodeNumber('LhSQVSQMuWk=', 778, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di ipotizzare quale rapporto c'è tra larve e habitat degli alveari.  - Secondo Mario Galleria mellonella ha deposto le uova all'interno degli alveari, dove le larve sono cresciute digerendo la cera d'api.  - Anche secondo Giulia è così; anzi, questo fatto spiega perché le larve vengano usate come esca dai pescatori: esse sono dolci in quanto possono ingerire anche miele. - Secondo Ettore la cera d'api e la plastica hanno una struttura chimica troppo diversa per cui non è pensabile che un organismo sia in grado di digerirle entrambe. - Secondo Alessandra, anche se in condizioni normali le larve non mangiano la plastica, in caso di bisogno riescono ad adattarsi, riuscendo a digerirla.  L'unica affermazione NON corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('LhSQVSQMuWk=', 780, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rBc5ZLY/1T8=', 778, -9999, 99999), DecodeNumber('esJwJ/iKXYU=', 778, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LMTMJeybE4Q=', 782, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LhSQVSQMuWk=', 780, -9999, 99999), DecodeNumber('iJBUuy9Ss7g=', 780, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zn/K7peR7YM=', 784, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Zn/K7peR7YM=', 782, -9999, 99999), DecodeNumber('x3mPaVPUMuo=', 782, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Zn/K7peR7YM=', 786, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('AyO0E0KDnFQ=', 784, -9999, 99999), DecodeNumber('aj/d+AuPGwk=', 784, -9999, 99999), '');
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
    var weight = DecodeNumber('7IqCZE5mc48=', 983, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale differenza presenta la plastica rispetto al glicole etilenico? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7IqCZE5mc48=', 985, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uAlgo6KyeYQ=', 983, -9999, 99999), DecodeNumber('DWcMtjfIdJ0=', 983, -9999, 99999), '');
    answer1.shortTextAnswer = "La prima è un composto organico, il secondo è un composto inorganico.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HjNYv5Y47zU=', 987, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('HjNYv5Y47zU=', 985, -9999, 99999), DecodeNumber('iydHfJBxmQ0=', 985, -9999, 99999), '');
    answer2.shortTextAnswer = "La prima ha una composizione più complessa del secondo.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HjNYv5Y47zU=', 989, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('awqcrjJfxoQ=', 987, -9999, 99999), DecodeNumber('azHbwElFFwE=', 987, -9999, 99999), '');
    answer3.shortTextAnswer = "La prima ha una composizione più semplice del secondo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xLkoVZnj+wE=', 991, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HjNYv5Y47zU=', 989, -9999, 99999), DecodeNumber('xaNBLS4LiSo=', 989, -9999, 99999), '');
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
    var weight = DecodeNumber('8kJ0FtBXkRc=', 188, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Con il loro lavoro i due studiosi: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8kJ0FtBXkRc=', 190, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9Hl03MlcZs0=', 188, -9999, 99999), DecodeNumber('B+ZlGXnDn6w=', 188, -9999, 99999), '');
    answer1.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella può essere usata per risolvere il problema dell'inquinamento da polietilene.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qt6uYkFAS1g=', 192, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8kJ0FtBXkRc=', 190, -9999, 99999), DecodeNumber('zGW81OOP5yc=', 190, -9999, 99999), '');
    answer2.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella sfrutta la capacità di digerire il polietilene per invadere gli alveari.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HLi+UgvX4f4=', 194, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HLi+UgvX4f4=', 192, -9999, 99999), DecodeNumber('xsNEowfSoTE=', 192, -9999, 99999), '');
    answer3.shortTextAnswer = "Hanno capito che nel bruco la degradazione della plastica non avviene solo per una semplice azione meccanica, come quella masticatoria, ma anche per un processo chimico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HLi+UgvX4f4=', 196, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+H3nJbh500Y=', 194, -9999, 99999), DecodeNumber('HDSBxpTb5cA=', 194, -9999, 99999), '');
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
    var weight = DecodeNumber('qtuYSgNWHFE=', 393, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le foglie della maggior parte delle piante hanno una colorazione verde perché le clorofille: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qtuYSgNWHFE=', 395, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('xM+Wjep1TZY=', 393, -9999, 99999), DecodeNumber('D+0OnXKq1ug=', 393, -9999, 99999), '');
    answer1.shortTextAnswer = "Assorbono la radiazione indipendentemente dal colore, ma riflettono soprattutto nel verde.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('s6R8lFRQ3dM=', 397, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('qtuYSgNWHFE=', 395, -9999, 99999), DecodeNumber('OXKlTfa+Weo=', 395, -9999, 99999), '');
    answer2.shortTextAnswer = "Non assorbono ma riflettono la radiazione verde.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9M1j8NWvh70=', 399, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('s6R8lFRQ3dM=', 397, -9999, 99999), DecodeNumber('vBMHiEiruSE=', 397, -9999, 99999), '');
    answer3.shortTextAnswer = "Assorbono soprattutto radiazione verde, dando questo colore alle foglie.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('WSgD/XnLsRo=', 401, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('WSgD/XnLsRo=', 399, -9999, 99999), DecodeNumber('uQ9Uf714Tec=', 399, -9999, 99999), '');
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
    var weight = DecodeNumber('+JZc15J+eRY=', 762, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In autunno le foglie degli alberi assumono colorazioni che vanno dal giallo al rosso-bruno. Perché? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+JZc15J+eRY=', 764, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('jrHAvoRa++o=', 762, -9999, 99999), DecodeNumber('tbBlIxPeL+E=', 762, -9999, 99999), '');
    answer1.shortTextAnswer = "Le molecole di clorofilla si modificano gradualmente, portando ad assorbire la luce a frequenze differenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('h+FzGAoK1dA=', 125, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('M2oxoZqziU8=', 123, -9999, 99999), DecodeNumber('8PGH4epDU2A=', 123, -9999, 99999), '');
    answer2.shortTextAnswer = "Le molecole di clorofilla vengono gradualmente sostituite da altri pigmenti, come i carotenoidi, più efficienti nella stagione autunnale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RrZYTwDOycQ=', 127, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RrZYTwDOycQ=', 125, -9999, 99999), DecodeNumber('z1gQ7IiaOYQ=', 125, -9999, 99999), '');
    answer3.shortTextAnswer = "La produzione di clorofilla cessa, lasciando spazio ad altri pigmenti che sono sempre presenti, ma normalmente sono in quantità minore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RrZYTwDOycQ=', 129, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('OtIMIPJcvc4=', 127, -9999, 99999), DecodeNumber('Id8aEpmsQlY=', 127, -9999, 99999), '');
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
    var weight = DecodeNumber('hDGBMTqsfLs=', 1072, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva le figure seguenti, che rappresentano fotografie al microscopio elettronico di quattro organelli presenti nelle cellule vegetali.   Quale di loro ha la maggiore concentrazione di clorofilla?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DiI0x6BwQ5Y=', 1074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('DiI0x6BwQ5Y=', 1072, -9999, 99999), DecodeNumber('ausIswUxZ28=', 1072, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('DiI0x6BwQ5Y=', 1076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hDGBMTqsfLs=', 1074, -9999, 99999), DecodeNumber('3Ne8gULdqDw=', 1074, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JsAuHYoFWfk=', 1078, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('DiI0x6BwQ5Y=', 1076, -9999, 99999), DecodeNumber('Ty+rBarRMg4=', 1076, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UTwe73pWH8U=', 1080, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('JsAuHYoFWfk=', 1078, -9999, 99999), DecodeNumber('t8DKQ1tFmCI=', 1078, -9999, 99999), '');
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
    var weight = DecodeNumber('qt6uYkFAS1g=', 190, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva il grafico seguente, che raffigura gli spettri di assorbimento dei due tipi di clorofilla più comuni. Si ricorda che il Sole ha irradianza (cioè potenza per unità di area) massima nel visibile, con picco attorno ai 500 nm e che l'attraversamento dell'atmosfera terrestre sposta leggermente in avanti e appiattisce il picco suddetto.     Il grafico suggerisce che la fotosintesi clorofilliana si è sviluppata per massimizzare l'assorbimento:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qt6uYkFAS1g=', 192, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8kJ0FtBXkRc=', 190, -9999, 99999), DecodeNumber('zGW81OOP5yc=', 190, -9999, 99999), '');
    answer1.shortTextAnswer = "Dov'è massima l'irradianza della radiazione filtrata dall'atmosfera, cioè tra i 600 e i 700 nm.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oVP/2ouBPFA=', 553, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('oVP/2ouBPFA=', 551, -9999, 99999), DecodeNumber('BQ7K9lkfr4I=', 551, -9999, 99999), '');
    answer2.shortTextAnswer = "Esattamente ai bordi dell'intervallo per cui la radiazione proveniente dal Sole ha irradianza massima.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oVP/2ouBPFA=', 555, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jHEYnRIpXd8=', 553, -9999, 99999), DecodeNumber('SyAdnHc3rEk=', 553, -9999, 99999), '');
    answer3.shortTextAnswer = "Dove la radiazione solare ha irradianza massima, per ottenere la maggiore efficienza possibile.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vg0tp3o8IwQ=', 557, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('oVP/2ouBPFA=', 555, -9999, 99999), DecodeNumber('iom6g47v8mc=', 555, -9999, 99999), '');
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
    var weight = DecodeNumber('s6R8lFRQ3dM=', 395, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le clorofille \"a\" e \"b\" sono indispensabili per svolgere il processo con cui le piante superiori procurano l'energia di cui necessitano, denominato appunto fotosintesi clorofilliana. Quale delle seguenti affermazioni che riguardano la fotosintesi clorofilliana è ERRATA?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9M1j8NWvh70=', 397, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9M1j8NWvh70=', 395, -9999, 99999), DecodeNumber('OXKlTfa+Weo=', 395, -9999, 99999), '');
    answer1.shortTextAnswer = "L'intero processo si divide in due fasi: luce-dipendente, che avviene solo di giorno, e luce-indipendente, che avviene solo di notte.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('d1wGj89UKpY=', 758, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cbRBnECgIZg=', 756, -9999, 99999), DecodeNumber('Guk9KP9lbgg=', 756, -9999, 99999), '');
    answer2.shortTextAnswer = "Solamente durante la fase luce-dipendente viene catturata energia dall'esterno e convertita in energia chimica attraverso le molecole di ATP e NADPH + H+ .";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ps5O04quLnA=', 760, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('d1wGj89UKpY=', 758, -9999, 99999), DecodeNumber('6deRZ1jyXHA=', 758, -9999, 99999), '');
    answer3.shortTextAnswer = "È influenzata da parametri ambientali come temperatura e disponibilità di luce.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jrHAvoRa++o=', 762, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ps5O04quLnA=', 760, -9999, 99999), DecodeNumber('/XteVNT+DPo=', 760, -9999, 99999), '');
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
    var weight = DecodeNumber('7pB3ruiS648=', 426, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In base a quanto affermato, tra quali fasi successive del ciclo cellulare è posizionato il punto di START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7pB3ruiS648=', 428, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wZ/Fz95aJCY=', 426, -9999, 99999), DecodeNumber('A/VsfjmBbnM=', 426, -9999, 99999), '');
    answer1.shortTextAnswer = "Tra la fase G1 e la fase G2";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3zWQ93vz3js=', 430, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('7pB3ruiS648=', 428, -9999, 99999), DecodeNumber('0hbM9UktPeg=', 428, -9999, 99999), '');
    answer2.shortTextAnswer = "Tra la fase M e la fase S";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hzZpbomJA6E=', 432, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('3zWQ93vz3js=', 430, -9999, 99999), DecodeNumber('YW/TtmfW57o=', 430, -9999, 99999), '');
    answer3.shortTextAnswer = "Tra la fase G2 e la fase M";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z2MdtDQXyvw=', 434, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('z2MdtDQXyvw=', 432, -9999, 99999), DecodeNumber('i6V7mzCB/TM=', 432, -9999, 99999), '');
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
    var weight = DecodeNumber('PpM5hSt6hMU=', 272, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale delle seguenti condizioni può verosimilmente indurre il superamento del checkpoint START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EVl3KCye70w=', 274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('EVl3KCye70w=', 272, -9999, 99999), DecodeNumber('Zceu0oFIJos=', 272, -9999, 99999), '');
    answer1.shortTextAnswer = "Presenza di fattori di crescita che si legano a recettori cellulari.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('32TJJdLuWhs=', 635, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sjssFL/IAds=', 633, -9999, 99999), DecodeNumber('/meS8zErPs0=', 633, -9999, 99999), '');
    answer2.shortTextAnswer = "Carenza di sostanze nutrienti nell'ambiente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('DF3DYK23+bg=', 637, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('32TJJdLuWhs=', 635, -9999, 99999), DecodeNumber('9aUB01p1mGQ=', 635, -9999, 99999), '');
    answer3.shortTextAnswer = "Scarsa produzione di proteine e organelli, e scarsa crescita cellulare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DOhJLyRgRsE=', 639, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DF3DYK23+bg=', 637, -9999, 99999), DecodeNumber('lO1MTi6IcPo=', 637, -9999, 99999), '');
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
    var weight = DecodeNumber('vGijTYXMtqA=', 1000, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il contenuto in DNA varia nelle diverse fasi del ciclo cellulare. Quale delle seguenti affermazioni, riguardo a una cellula somatica umana, è corretta? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vGijTYXMtqA=', 1002, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rEy2c1r5/V0=', 1000, -9999, 99999), DecodeNumber('qEgcZETKhnc=', 1000, -9999, 99999), '');
    answer1.shortTextAnswer = "Nella fase G1, la cellula presenta 46 cromosomi, ognuno composto da due cromatidi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+AaKsrrMkFE=', 840, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('kEyuqHEG+CI=', 838, -9999, 99999), DecodeNumber('y/MGylegjW8=', 838, -9999, 99999), '');
    answer2.shortTextAnswer = "Nella profase della mitosi la cellula presenta 23 coppie di cromosomi, ognuno composto da un solo cromatidio.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('I3JcmSzKOsA=', 842, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('+AaKsrrMkFE=', 840, -9999, 99999), DecodeNumber('U48SMCn2vNI=', 840, -9999, 99999), '');
    answer3.shortTextAnswer = "All'inizio della fase S, la cellula presenta 23 coppie di cromosomi, ognuno composto da due cromatidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zuSK0kWaIwg=', 844, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zuSK0kWaIwg=', 842, -9999, 99999), DecodeNumber('gS3VgCtHabQ=', 842, -9999, 99999), '');
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
    var weight = DecodeNumber('+o39wqo9XlU=', 703, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione alla fase M, che comprende i processi successivi di mitosi e citodieresi, comporta molti cambiamenti nella cellula. Con l'entrata nella profase, il primo passo della mitosi, il citoscheletro della cellula si disorganizza, facendo così perdere alla cellula la sua forma peculiare (come si può vedere nella cellula nella figura sottostante). Inoltre, l'involucro nucleare si frammenta e i cromosomi appaiono condensati.     Quale delle seguenti affermazioni riguardanti cellule animali è ERRATA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+o39wqo9XlU=', 705, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('orViSK3y1xU=', 703, -9999, 99999), DecodeNumber('lGIyzTSuZOA=', 703, -9999, 99999), '');
    answer1.shortTextAnswer = "La cellula all'inizio della fase M ha una forma tondeggiante.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rZ+vXqcRVlc=', 707, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rZ+vXqcRVlc=', 705, -9999, 99999), DecodeNumber('egPzxkbb848=', 705, -9999, 99999), '');
    answer2.shortTextAnswer = "In fase M non sono presenti filamenti citoscheletrici nella cellula.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rZ+vXqcRVlc=', 709, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('OOwXD7EIZww=', 707, -9999, 99999), DecodeNumber('5m9bDoHHi0g=', 707, -9999, 99999), '');
    answer3.shortTextAnswer = "In fase M il DNA nucleare si trova nel citosol.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VsHRGosh7ps=', 711, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rZ+vXqcRVlc=', 709, -9999, 99999), DecodeNumber('eIOelsTkbNk=', 709, -9999, 99999), '');
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
    var weight = DecodeNumber('hDGBMTqsfLs=', 1072, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Durante il ciclo cellulare viene replicato il DNA. In realtà è più corretto parlare di replicazione della cromatina, perché non è solo il DNA che si duplica ma anche le proteine a esso associate, le quali sono importanti per definire la struttura della cromatina e per la regolazione dell'espressione genica. In base a ciò, quale dei seguenti processi deve essere particolarmente attivo nella fase del ciclo cellulare in cui si ha la replicazione del DNA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hDGBMTqsfLs=', 1074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('NDIzAjwiY2k=', 1072, -9999, 99999), DecodeNumber('ausIswUxZ28=', 1072, -9999, 99999), '');
    answer1.shortTextAnswer = "Polimerizzazione della tubulina in microtubuli.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JsAuHYoFWfk=', 1076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('JsAuHYoFWfk=', 1074, -9999, 99999), DecodeNumber('3Ne8gULdqDw=', 1074, -9999, 99999), '');
    answer2.shortTextAnswer = "Sintesi proteica di istoni.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JsAuHYoFWfk=', 1078, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('DiI0x6BwQ5Y=', 1076, -9999, 99999), DecodeNumber('Ty+rBarRMg4=', 1076, -9999, 99999), '');
    answer3.shortTextAnswer = "Assemblaggio del cinetocore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UUsNpkv+hTU=', 917, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9g3ZqfFkpJE=', 915, -9999, 99999), DecodeNumber('TR7o4JIH/KQ=', 915, -9999, 99999), '');
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
    var weight = DecodeNumber('K9swklRIc78=', 277, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione tra le diverse fasi del ciclo cellulare è strettamente controllata da molti fattori: una famiglia di proteine, quella delle cicline, è necessaria per la progressione del ciclo cellulare. La concentrazione di ogni particolare ciclina varia ciclicamente durante il ciclo cellulare, grazie a processi di sintesi e degradazione proteica. Con quale tecnica pensi che si possa rilevare la presenza di una ciclina in una particolare fase del ciclo cellulare? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K9swklRIc78=', 279, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sGucUiJNyjU=', 277, -9999, 99999), DecodeNumber('XK4YCGiAddQ=', 277, -9999, 99999), '');
    answer1.shortTextAnswer = "PCR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('L30szmubvTY=', 281, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('K9swklRIc78=', 279, -9999, 99999), DecodeNumber('feFREaZwFeA=', 279, -9999, 99999), '');
    answer2.shortTextAnswer = "Reazione di Lugol.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cQy7SlywB+k=', 283, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('cQy7SlywB+k=', 281, -9999, 99999), DecodeNumber('EB80g7TocVE=', 281, -9999, 99999), '');
    answer3.shortTextAnswer = "Riconoscimento tramite anticorpi specifici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cQy7SlywB+k=', 285, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EzvphkeLG5w=', 283, -9999, 99999), DecodeNumber('cwGj3DAJ6J0=', 283, -9999, 99999), '');
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
    var weight = DecodeNumber('esGK972EVU0=', 678, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste strutture fa parte esclusivamente del sistema respiratorio? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('esGK972EVU0=', 680, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('HUHzhP2CslM=', 678, -9999, 99999), DecodeNumber('TJPQtqMj3vo=', 678, -9999, 99999), '');
    answer1.shortTextAnswer = "Vestibolo della bocca.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0CP2N5dqAL8=', 682, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('esGK972EVU0=', 680, -9999, 99999), DecodeNumber('uSSoXBQaTOU=', 680, -9999, 99999), '');
    answer2.shortTextAnswer = "Esofago.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iP+vS+i7KLg=', 684, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iP+vS+i7KLg=', 682, -9999, 99999), DecodeNumber('8+ei0KpFoCY=', 682, -9999, 99999), '');
    answer3.shortTextAnswer = "Laringe.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MRys1b+jW1E=', 686, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iP+vS+i7KLg=', 684, -9999, 99999), DecodeNumber('dVsjOIgShAs=', 684, -9999, 99999), '');
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
    var weight = DecodeNumber('pY8w9k3U19Q=', 1047, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Trachea e bronchi presentano una componente rigida formata da una serie di anelli quasi completi che impediscono il collasso delle loro pareti durante gli atti respiratori. Da che tipo di tessuto sono costituiti? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pY8w9k3U19Q=', 1049, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ncF6/PFzbvw=', 1047, -9999, 99999), DecodeNumber('cCwUt8DZ0/A=', 1047, -9999, 99999), '');
    answer1.shortTextAnswer = "Tessuto connettivo fibroso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kWfn4A1IfXA=', 1051, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pY8w9k3U19Q=', 1049, -9999, 99999), DecodeNumber('nnCofR2EACs=', 1049, -9999, 99999), '');
    answer2.shortTextAnswer = "Tessuto epiteliale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2C/OSYNpu/s=', 1053, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kWfn4A1IfXA=', 1051, -9999, 99999), DecodeNumber('hQiOrM18eo8=', 1051, -9999, 99999), '');
    answer3.shortTextAnswer = "Tessuto osseo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NBeakFuZP7g=', 1055, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('NBeakFuZP7g=', 1053, -9999, 99999), DecodeNumber('UGARFRN507Y=', 1053, -9999, 99999), '');
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
    var weight = DecodeNumber('tp8bcIpxQ20=', 252, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale tragitto compie il biossido di carbonio durante l'espirazione?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tp8bcIpxQ20=', 254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('PMTd3kYk8tY=', 252, -9999, 99999), DecodeNumber('cWpffa2bDis=', 252, -9999, 99999), '');
    answer1.shortTextAnswer = "Capillare, alveolo respiratorio, bronco, bronchiolo, trachea.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('q/18JL7T/vs=', 256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('q/18JL7T/vs=', 254, -9999, 99999), DecodeNumber('KZkWyQ+62j0=', 254, -9999, 99999), '');
    answer2.shortTextAnswer = "Capillare, alveolo respiratorio, bronchiolo, bronco, trachea.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q/18JL7T/vs=', 258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0FT1zG+6QNM=', 256, -9999, 99999), DecodeNumber('Tmwp+qFShqc=', 256, -9999, 99999), '');
    answer3.shortTextAnswer = "Trachea, bronco, bronchiolo, alveolo respiratorio, capillare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wL4uwz8+Eig=', 260, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('q/18JL7T/vs=', 258, -9999, 99999), DecodeNumber('GQGp58SG7lE=', 258, -9999, 99999), '');
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
    var weight = DecodeNumber('noCFcoJLdu8=', 621, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nell'arteria polmonare scorre sangue:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('noCFcoJLdu8=', 623, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kmubQg0gByg=', 621, -9999, 99999), DecodeNumber('EuUlnYKam9Q=', 621, -9999, 99999), '');
    answer1.shortTextAnswer = "Ricco di ossigeno che dal cuore va al polmone.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('C6Jjbli2Xqo=', 625, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('noCFcoJLdu8=', 623, -9999, 99999), DecodeNumber('DZQCBnMThI8=', 623, -9999, 99999), '');
    answer2.shortTextAnswer = "Ricco di ossigeno che dal polmone va al cuore.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('awqcrjJfxoQ=', 985, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('awqcrjJfxoQ=', 983, -9999, 99999), DecodeNumber('DWcMtjfIdJ0=', 983, -9999, 99999), '');
    answer3.shortTextAnswer = "Ricco di biossido di carbonio che dal cuore va al polmone.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('awqcrjJfxoQ=', 987, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('7IqCZE5mc48=', 985, -9999, 99999), DecodeNumber('iydHfJBxmQ0=', 985, -9999, 99999), '');
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
    var weight = DecodeNumber('lqQJ8e+Vn+0=', 826, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Recentemente si è scoperto che i polmoni hanno una scorta di cellule staminali. Queste sarebbero in grado di porre rimedio ai danni prodotti su tutte le componenti dell'organo, come i bronchioli o gli alveoli. Si tratterebbe quindi di cellule: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lqQJ8e+Vn+0=', 828, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Kc4Peinv8d0=', 826, -9999, 99999), DecodeNumber('OZM6ZSdeC9Y=', 826, -9999, 99999), '');
    answer1.shortTextAnswer = "Staminali totipotenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zR1FCurunDM=', 830, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lqQJ8e+Vn+0=', 828, -9999, 99999), DecodeNumber('m9bFqvht0us=', 828, -9999, 99999), '');
    answer2.shortTextAnswer = "Staminali pluripotenti.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ftBAkUeFxWM=', 832, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ftBAkUeFxWM=', 830, -9999, 99999), DecodeNumber('S5k0zuVisNw=', 830, -9999, 99999), '');
    answer3.shortTextAnswer = "Staminali multipotenti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ftBAkUeFxWM=', 834, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cLWqlb63kOs=', 832, -9999, 99999), DecodeNumber('jwF09o17fCk=', 832, -9999, 99999), '');
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
    var weight = DecodeNumber('nbU0xp1obfM=', 1031, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un batterio Gram negativo è: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nbU0xp1obfM=', 1033, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rZUORJhXw3k=', 1031, -9999, 99999), DecodeNumber('sb/Pqawpl8U=', 1031, -9999, 99999), '');
    answer1.shortTextAnswer = "Un batteriofago sensibile alla maggior parte degli antibiotici.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('llQBqsMSg2o=', 1035, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('nbU0xp1obfM=', 1033, -9999, 99999), DecodeNumber('Xkb5/Vm7cGo=', 1033, -9999, 99999), '');
    answer2.shortTextAnswer = "Un batterio, privo di flagello e di parete, resistente a tutti gli antibiotici.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nvromQPSBLg=', 1037, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nvromQPSBLg=', 1035, -9999, 99999), DecodeNumber('bTtXU3WYwOo=', 1035, -9999, 99999), '');
    answer3.shortTextAnswer = "Un batterio con parete meno ricca di peptidoglicano che si colora di rosso con il reattivo di Gram ed è sensibile solo ad alcuni antibiotici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nvromQPSBLg=', 1039, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('514YtuWJZbw=', 1037, -9999, 99999), DecodeNumber('pxCYe6mJT6Q=', 1037, -9999, 99999), '');
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
    var weight = DecodeNumber('hahPTsXEuPE=', 1062, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il pigmento rosso intenso di Serratia marcescens è chiamato prodigiosina e ha una massa molare di 323,432 g/mol. Quale delle seguenti formule di struttura rappresenta la prodigiosina?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hahPTsXEuPE=', 1064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('vFkenZIRfFk=', 1062, -9999, 99999), DecodeNumber('4nHkHyl+iLg=', 1062, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CMB8cZ1gThg=', 902, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CMB8cZ1gThg=', 900, -9999, 99999), DecodeNumber('CtbC+QvOO08=', 900, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CMB8cZ1gThg=', 904, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('/p8FAFjsU8w=', 902, -9999, 99999), DecodeNumber('CbkqmCLZfZU=', 902, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tjd5SoTBdkw=', 906, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('CMB8cZ1gThg=', 904, -9999, 99999), DecodeNumber('3H4lCO4/eXE=', 904, -9999, 99999), '');
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
    var weight = DecodeNumber('gtduQpKlWkg=', 267, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Leggi la seguente definizione di plasmide nella quale due termini, indicati in grassetto, sono in alternativa:  Un plasmide è un elemento genetico cromosomico/extracromosomico in grado di replicarsi autonomamente all'interno della cellula ospite, portatore di geni che veicolano informazioni non essenziali per la vita della cellula e in grado di trasferirsi da una cellula ad un'altra per coniugazione/trasduzione.  Le parole corrette da inserire sono: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('5AfNjj9AEsA=', 269, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('5AfNjj9AEsA=', 267, -9999, 99999), DecodeNumber('vYyeiVMZDZ4=', 267, -9999, 99999), '');
    answer1.shortTextAnswer = "Extracromosomico e coniugazione.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5AfNjj9AEsA=', 271, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gtduQpKlWkg=', 269, -9999, 99999), DecodeNumber('zMB++dG5Ovk=', 269, -9999, 99999), '');
    answer2.shortTextAnswer = "Cromosomico e coniugazione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Zceu0oFIJos=', 273, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('5AfNjj9AEsA=', 271, -9999, 99999), DecodeNumber('j4szYfdTBZQ=', 271, -9999, 99999), '');
    answer3.shortTextAnswer = "Cromosomico e trasduzione.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('orNudbDu6kg=', 275, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Zceu0oFIJos=', 273, -9999, 99999), DecodeNumber('PpM5hSt6hMU=', 273, -9999, 99999), '');
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
    var weight = DecodeNumber('0m/HzHtj/uk=', 472, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le pericolose e talvolta mortali infezioni ospedaliere da Serratia sono da addebitare a: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0m/HzHtj/uk=', 474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('U+xro02ClvE=', 472, -9999, 99999), DecodeNumber('UCsNOFUM1bg=', 472, -9999, 99999), '');
    answer1.shortTextAnswer = "Scarsa igiene e mancato utilizzo di antibiotici a largo spettro.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ixkxNiwRjLY=', 476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ixkxNiwRjLY=', 474, -9999, 99999), DecodeNumber('9XcqUxcEISA=', 474, -9999, 99999), '');
    answer2.shortTextAnswer = "Elevato utilizzo di antibiotici a largo spettro e elevata presenza di pazienti sensibili ed esposti a batteri selezionati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ixkxNiwRjLY=', 478, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hRHubUiWj78=', 476, -9999, 99999), DecodeNumber('kpaG2eEfFpI=', 476, -9999, 99999), '');
    answer3.shortTextAnswer = "Predilezione dei batteri Gram negativi per gli ambienti ospedalieri poco protetti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('raU9+2nZNFk=', 480, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ixkxNiwRjLY=', 478, -9999, 99999), DecodeNumber('gTfN0lGPvKs=', 478, -9999, 99999), '');
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
    var weight = DecodeNumber('TJPQtqMj3vo=', 677, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nei tessuti vegetali, quali di questi tessuti svolge la funzione di conduzione della linfa grezza? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uSSoXBQaTOU=', 679, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uSSoXBQaTOU=', 677, -9999, 99999), DecodeNumber('HUHzhP2CslM=', 677, -9999, 99999), '');
    answer1.shortTextAnswer = "Xilema.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uSSoXBQaTOU=', 681, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TJPQtqMj3vo=', 679, -9999, 99999), DecodeNumber('esGK972EVU0=', 679, -9999, 99999), '');
    answer2.shortTextAnswer = "Floema.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8+ei0KpFoCY=', 683, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('uSSoXBQaTOU=', 681, -9999, 99999), DecodeNumber('0CP2N5dqAL8=', 681, -9999, 99999), '');
    answer3.shortTextAnswer = "Collenchima.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dVsjOIgShAs=', 685, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8+ei0KpFoCY=', 683, -9999, 99999), DecodeNumber('pMdOww/CZ2s=', 683, -9999, 99999), '');
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
    var weight = DecodeNumber('cCwUt8DZ0/A=', 1046, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di questi fusti modificati è costituito da un breve fusto di forma conica e da numerose foglie modificate per la funzione di riserva? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cCwUt8DZ0/A=', 1048, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('gpgnJe+gHQU=', 1046, -9999, 99999), DecodeNumber('ncF6/PFzbvw=', 1046, -9999, 99999), '');
    answer1.shortTextAnswer = "Tuberi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nnCofR2EACs=', 1050, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cCwUt8DZ0/A=', 1048, -9999, 99999), DecodeNumber('pY8w9k3U19Q=', 1048, -9999, 99999), '');
    answer2.shortTextAnswer = "Rizomi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('29ugp6qK07g=', 411, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('29ugp6qK07g=', 409, -9999, 99999), DecodeNumber('Wc+A9X4V3UY=', 409, -9999, 99999), '');
    answer3.shortTextAnswer = "Bulbi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('29ugp6qK07g=', 413, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8UQeNrSlaS4=', 411, -9999, 99999), DecodeNumber('eSrpSXNKPsI=', 411, -9999, 99999), '');
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
    var weight = DecodeNumber('9N/mv8o3yjk=', 1251, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Da che cosa è composto il gineceo di un fiore? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9N/mv8o3yjk=', 1253, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('WwFgrUa6m4U=', 1251, -9999, 99999), DecodeNumber('qXFCx91POcg=', 1251, -9999, 99999), '');
    answer1.shortTextAnswer = "Da un insieme di stami.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XFvfT1RGYgs=', 1255, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('XFvfT1RGYgs=', 1253, -9999, 99999), DecodeNumber('WFlDtKD/A5k=', 1253, -9999, 99999), '');
    answer2.shortTextAnswer = "Da un insieme di carpelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XFvfT1RGYgs=', 1257, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hsUeI/R3p/4=', 1255, -9999, 99999), DecodeNumber('e+2cVsrx6oo=', 1255, -9999, 99999), '');
    answer3.shortTextAnswer = "Da un insieme di sepali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('muyblYQepyk=', 1259, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('XFvfT1RGYgs=', 1257, -9999, 99999), DecodeNumber('dswZsdmcpzI=', 1257, -9999, 99999), '');
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
    var weight = DecodeNumber('EuUlnYKam9Q=', 620, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste affermazioni relative al meristema del germoglio è FALSA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('EuUlnYKam9Q=', 622, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4icTiw1vVRw=', 620, -9999, 99999), DecodeNumber('kmubQg0gByg=', 620, -9999, 99999), '');
    answer1.shortTextAnswer = "Genera il fusto, le foglie e le gemme.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uAlgo6KyeYQ=', 983, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('0YHXv78iYI0=', 981, -9999, 99999), DecodeNumber('wtRIFOPRI+s=', 981, -9999, 99999), '');
    answer2.shortTextAnswer = "Presenta una crescita indeterminata.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7IqCZE5mc48=', 985, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('uAlgo6KyeYQ=', 983, -9999, 99999), DecodeNumber('DWcMtjfIdJ0=', 983, -9999, 99999), '');
    answer3.shortTextAnswer = "Contiene diversi strati e zone funzionali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('HjNYv5Y47zU=', 987, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('HjNYv5Y47zU=', 985, -9999, 99999), DecodeNumber('iydHfJBxmQ0=', 985, -9999, 99999), '');
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
    var weight = DecodeNumber('OZM6ZSdeC9Y=', 825, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per impollinazione chirotterogama si intende l'impollinazione che ha per vettore: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OZM6ZSdeC9Y=', 827, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XeiWbCw3xHw=', 825, -9999, 99999), DecodeNumber('Kc4Peinv8d0=', 825, -9999, 99999), '');
    answer1.shortTextAnswer = "Il vento.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m9bFqvht0us=', 829, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('OZM6ZSdeC9Y=', 827, -9999, 99999), DecodeNumber('lqQJ8e+Vn+0=', 827, -9999, 99999), '');
    answer2.shortTextAnswer = "Gli uccelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jwF09o17fCk=', 831, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jwF09o17fCk=', 829, -9999, 99999), DecodeNumber('zR1FCurunDM=', 829, -9999, 99999), '');
    answer3.shortTextAnswer = "I pipistrelli.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jwF09o17fCk=', 833, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('S5k0zuVisNw=', 831, -9999, 99999), DecodeNumber('cLWqlb63kOs=', 831, -9999, 99999), '');
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
    var weight = DecodeNumber('sb/Pqawpl8U=', 1030, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quali tra i seguenti lipidi NON fanno parte della struttura di una tipica membrana cellulare di una cellula eucariote? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Xkb5/Vm7cGo=', 1032, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Xkb5/Vm7cGo=', 1030, -9999, 99999), DecodeNumber('rZUORJhXw3k=', 1030, -9999, 99999), '');
    answer1.shortTextAnswer = "Trigliceridi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Xkb5/Vm7cGo=', 1034, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sb/Pqawpl8U=', 1032, -9999, 99999), DecodeNumber('nbU0xp1obfM=', 1032, -9999, 99999), '');
    answer2.shortTextAnswer = "Fosfolipidi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bTtXU3WYwOo=', 1036, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Xkb5/Vm7cGo=', 1034, -9999, 99999), DecodeNumber('llQBqsMSg2o=', 1034, -9999, 99999), '');
    answer3.shortTextAnswer = "Glicolipidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('pxCYe6mJT6Q=', 1038, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('bTtXU3WYwOo=', 1036, -9999, 99999), DecodeNumber('514YtuWJZbw=', 1036, -9999, 99999), '');
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
    var weight = DecodeNumber('tYAUmEQNJZY=', 399, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per quale motivo i lipidi hanno un'alta densità energetica?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tYAUmEQNJZY=', 401, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('9M1j8NWvh70=', 399, -9999, 99999), DecodeNumber('uQ9Uf714Tec=', 399, -9999, 99999), '');
    answer1.shortTextAnswer = "Perché sono formati da lunghe catene di atomi di carbonio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('pmR5aDe0yMY=', 403, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pmR5aDe0yMY=', 401, -9999, 99999), DecodeNumber('daq8PBRwpuE=', 401, -9999, 99999), '');
    answer2.shortTextAnswer = "Perché gli atomi di carbonio di un lipide sono ridotti o poco ossidati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+JZc15J+eRY=', 764, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jrHAvoRa++o=', 762, -9999, 99999), DecodeNumber('tbBlIxPeL+E=', 762, -9999, 99999), '');
    answer3.shortTextAnswer = "Perché le catene di atomi di carbonio sono lineari (senza ramificazioni).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oWhPGrNv3aM=', 766, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+JZc15J+eRY=', 764, -9999, 99999), DecodeNumber('Suq1gVI3By4=', 764, -9999, 99999), '');
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
    var weight = DecodeNumber('xTG+Fn4pec8=', 604, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale dei seguenti lipidi ti aspetti di trovare prevalentemente in un prodotto alimentare di origine vegetale? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xTG+Fn4pec8=', 606, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('CpD79WimjWM=', 604, -9999, 99999), DecodeNumber('hU2Nk/ybq3w=', 604, -9999, 99999), '');
    answer1.shortTextAnswer = "Lipidi formati da acidi grassi saturi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gb8NVYy7XrU=', 608, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gb8NVYy7XrU=', 606, -9999, 99999), DecodeNumber('m6d5hQR0LAw=', 606, -9999, 99999), '');
    answer2.shortTextAnswer = "Lipidi formati da acidi grassi insaturi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gb8NVYy7XrU=', 610, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ydWTWabY83s=', 608, -9999, 99999), DecodeNumber('vsx4z2kbLj4=', 608, -9999, 99999), '');
    answer3.shortTextAnswer = "Lipidi formati da acidi grassi a catena molto lunga (più di 22 atomi di carbonio).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6L4AvRd0a68=', 612, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('gb8NVYy7XrU=', 610, -9999, 99999), DecodeNumber('nmaES2r3Kyw=', 610, -9999, 99999), '');
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
    var weight = DecodeNumber('kgVYWsx1e/4=', 1332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In una cellula procariote, dove avviene la sintesi dei lipidi di membrana? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qhVEaA2rudE=', 1334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qhVEaA2rudE=', 1332, -9999, 99999), DecodeNumber('Pv7f+WUUlqE=', 1332, -9999, 99999), '');
    answer1.shortTextAnswer = "Nel citoplasma.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qhVEaA2rudE=', 1336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('kgVYWsx1e/4=', 1334, -9999, 99999), DecodeNumber('+xLqFouZYt8=', 1334, -9999, 99999), '');
    answer2.shortTextAnswer = "Nei mitocondri.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cvLwE39IwLg=', 1338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qhVEaA2rudE=', 1336, -9999, 99999), DecodeNumber('Msq8PzdgJGk=', 1336, -9999, 99999), '');
    answer3.shortTextAnswer = "Nel reticolo endoplasmatico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Tgjt3kZcLSs=', 1340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cvLwE39IwLg=', 1338, -9999, 99999), DecodeNumber('3VKc8KXf1RY=', 1338, -9999, 99999), '');
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
    var weight = DecodeNumber('0ZEY6ZLcQiw=', 1178, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In un esperimento condotto in una varietà di polli, si osserva che dagli incroci tra due individui eterozigoti per un certo carattere si ottengono alla prima generazione filiale 2/3 di individui eterozigoti e 1/3 di individui omozigoti dominanti. Come può essere interpretato questo risultato? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0ZEY6ZLcQiw=', 1180, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('U5dmS9Ph06U=', 1178, -9999, 99999), DecodeNumber('q1MzXJwJaqg=', 1178, -9999, 99999), '');
    answer1.shortTextAnswer = "Il carattere studiato è legato al sesso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HRtficl7H1U=', 1182, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('0ZEY6ZLcQiw=', 1180, -9999, 99999), DecodeNumber('UHxcjeu5DsA=', 1180, -9999, 99999), '');
    answer2.shortTextAnswer = "Il carattere studiato è caratterizzato da allelia multipla.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('kuYIcU9FqAk=', 543, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kuYIcU9FqAk=', 541, -9999, 99999), DecodeNumber('wJIPFDtEKv8=', 541, -9999, 99999), '');
    answer3.shortTextAnswer = "La condizione omozigote recessiva è letale per quel carattere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kuYIcU9FqAk=', 545, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Lh9w5t6FPDY=', 543, -9999, 99999), DecodeNumber('cxrM0QKRu3E=', 543, -9999, 99999), '');
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
    var weight = DecodeNumber('jBTqPvnGDrk=', 384, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In ecologia il fenomeno dello spostamento dei caratteri consiste nel fatto che: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jBTqPvnGDrk=', 386, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('60JfOGeBoiI=', 384, -9999, 99999), DecodeNumber('AI98R0BAaPs=', 384, -9999, 99999), '');
    answer1.shortTextAnswer = "Quando due specie competono tra loro, una delle due finisce con l'eliminare l'altra.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xW7Rewt6o0Q=', 388, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jBTqPvnGDrk=', 386, -9999, 99999), DecodeNumber('UhjwoHliCZM=', 386, -9999, 99999), '');
    answer2.shortTextAnswer = "Quando due specie sfruttano le stesse risorse si verifica la competizione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9K9jzP1Km8Y=', 748, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('acwk1uZag4U=', 746, -9999, 99999), DecodeNumber('fXKuNt/tECA=', 746, -9999, 99999), '');
    answer3.shortTextAnswer = "Una specie non può occupare interamente la sua nicchia a causa delle interazioni con gli altri organismi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('i+IgF5G0yiA=', 750, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('i+IgF5G0yiA=', 748, -9999, 99999), DecodeNumber('KNVRlBJO7TU=', 748, -9999, 99999), '');
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
    var weight = DecodeNumber('+jUaUk4uC5A=', 1111, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un individuo si presenta dal proprio medico riferendo perdita di peso, tachicardia e scarsa sopportazione del caldo. Il medico sospetta che sia affetto da ipertiroidismo. La quantificazione nel sangue di quale delle seguenti molecole può permettere al medico di distinguere tra cause di ipertiroidismo secondarie, cioè legate ad un'attività eccessiva dell'ipofisi, e primarie, cioè legate a un'attività eccessiva della tiroide? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+jUaUk4uC5A=', 1113, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hKvOrx5iW6E=', 1111, -9999, 99999), DecodeNumber('BcX5e48Yap0=', 1111, -9999, 99999), '');
    answer1.shortTextAnswer = "Triiodotironina (T3) e tiroxina (T4).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8jTOSL+xfEQ=', 1115, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8jTOSL+xfEQ=', 1113, -9999, 99999), DecodeNumber('9R/amPdMpEA=', 1113, -9999, 99999), '');
    answer2.shortTextAnswer = "TSH (ormone tireotropo).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8jTOSL+xfEQ=', 1117, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9V0ewXH+vZg=', 1115, -9999, 99999), DecodeNumber('YyhTQCKnQak=', 1115, -9999, 99999), '');
    answer3.shortTextAnswer = "Iodio (I2).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('u+Drrf1M8Ag=', 1119, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8jTOSL+xfEQ=', 1117, -9999, 99999), DecodeNumber('9L9KjNsnNAM=', 1117, -9999, 99999), '');
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
    var weight = DecodeNumber('rZ+vXqcRVlc=', 707, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le lattine normalmente in commercio hanno un rivestimento interno protettivo a base di resine epossidiche contenente il Bisfenolo A (BPA). Il BPA è una molecola di origine sintetica nota per i suoi effetti avversi sulla salute umana e animale. Studi scientifici hanno dimostrato la migrazione del BPA dal contenitore all'alimento in esso contenuto. Nella figura sottostante sono riportati i risultati ottenuti analizzando il contenuto di BPA in pomodori pelati in lattina al variare della temperatura di conservazione della lattina. Sono stati analizzati 6 marche in commercio e la migrazione del BPA dal contenitore all'alimento si è verificata in tutti i campioni indipendentemente dal valore economico del prodotto analizzato.      Secondo i risultati riportati nella figura precedente: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rZ+vXqcRVlc=', 709, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('OOwXD7EIZww=', 707, -9999, 99999), DecodeNumber('5m9bDoHHi0g=', 707, -9999, 99999), '');
    answer1.shortTextAnswer = "L'aumento della migrazione del BPA è proporzionale alla diminuzione della temperatura. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VsHRGosh7ps=', 711, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rZ+vXqcRVlc=', 709, -9999, 99999), DecodeNumber('eIOelsTkbNk=', 709, -9999, 99999), '');
    answer2.shortTextAnswer = "Il BPA può migrare dal contenitore agli alimenti in esso contenuti solo per temperature superiori a 37 °C.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UX0Jvni7t6g=', 713, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VsHRGosh7ps=', 711, -9999, 99999), DecodeNumber('n5Gt0C37KJo=', 711, -9999, 99999), '');
    answer3.shortTextAnswer = "La marca 5 risulta migliore della marca 2 relativamente alla capacità del contenitore di rilasciare BPA.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DiI0x6BwQ5Y=', 1074, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('DiI0x6BwQ5Y=', 1072, -9999, 99999), DecodeNumber('ausIswUxZ28=', 1072, -9999, 99999), '');
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
    var weight = DecodeNumber('1FQ3hGRDKgo=', 630, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste ossa fa parte del bacino?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/meS8zErPs0=', 632, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/meS8zErPs0=', 630, -9999, 99999), DecodeNumber('GeWILMEM/HM=', 630, -9999, 99999), '');
    answer1.shortTextAnswer = "Ischio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/meS8zErPs0=', 634, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1FQ3hGRDKgo=', 632, -9999, 99999), DecodeNumber('sjssFL/IAds=', 632, -9999, 99999), '');
    answer2.shortTextAnswer = "Etmoide.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9aUB01p1mGQ=', 636, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('/meS8zErPs0=', 634, -9999, 99999), DecodeNumber('32TJJdLuWhs=', 634, -9999, 99999), '');
    answer3.shortTextAnswer = "Ischio.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lO1MTi6IcPo=', 638, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9aUB01p1mGQ=', 636, -9999, 99999), DecodeNumber('DF3DYK23+bg=', 636, -9999, 99999), '');
    answer4.shortTextAnswer = "Ioide.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






