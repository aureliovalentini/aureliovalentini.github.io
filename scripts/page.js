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
    var weight = DecodeNumber('MbxgZ8uKy0I=', 157, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "I quattro ragazzi si mettono a riflettere e a discutere tra loro ed esprimono ciascuno le proprie considerazioni sulla validità scientifica di quanto riportato nell'articolo: - Secondo Mario la scoperta è casuale e non ha quindi valore scientifico. - Anche secondo Giulia quanto riportato nell'articolo non ha nessuna importanza scientifica, perché nessun animale può digerire la plastica. - Ettore ritiene invece che gli autori della pubblicazione, prima di affermare quanto riportato nell'articolo, devono necessariamente avere allestito delle prove per dimostrare la validità delle loro affermazioni. - Secondo Alessandra, infine, le farfalle di Galleria mellonella e i bruchi non hanno nessun rapporto tra di loro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MbxgZ8uKy0I=', 159, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qzo7DTQtJKU=', 157, -9999, 99999), DecodeNumber('NZVumSfqxiI=', 157, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3SMyqDxD8VU=', 161, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MbxgZ8uKy0I=', 159, -9999, 99999), DecodeNumber('2YjDUeizuy4=', 159, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8PagJBvOiBs=', 522, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('8PagJBvOiBs=', 520, -9999, 99999), DecodeNumber('p+GvOlmi8j0=', 520, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8PagJBvOiBs=', 524, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('v8upnYFq44g=', 522, -9999, 99999), DecodeNumber('y2LPxpbYYF4=', 522, -9999, 99999), '');
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
    var weight = DecodeNumber('pZlcWKSR1RI=', 362, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi a quale gruppo di animali appartiene la farfalla oggetto dello studio: - Secondo Mario Galleria mellonella è un insetto appartenente ai Lepidotteri. - Secondo Giulia è un insetto appartenente ai Ditteri. - Secondo Ettore è un Artropode ma non è un insetto. - Secondo Alessandra, infine, non è un neanche un Artropode perché i bruchi non hanno l'esoscheletro.  L'affermazione corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6QK6CplQAyY=', 364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('6QK6CplQAyY=', 362, -9999, 99999), DecodeNumber('9UGJdr+TjMQ=', 362, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6QK6CplQAyY=', 366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pZlcWKSR1RI=', 364, -9999, 99999), DecodeNumber('Y4JvHOh+r3k=', 364, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vas5FeLoc8o=', 368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('6QK6CplQAyY=', 366, -9999, 99999), DecodeNumber('jm6ZeKRCpJo=', 366, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Gc8xxWJF8oQ=', 370, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('vas5FeLoc8o=', 368, -9999, 99999), DecodeNumber('QwO9fL8C2kk=', 368, -9999, 99999), '');
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
    var weight = DecodeNumber('Dp6hf1QhIIQ=', 567, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di formulare alcune ipotesi sulle caratteristiche della Galleria mellonella. - Secondo Mario le farfalle e i bruchi sono due animali diversi che rappresentano due modi diversi di mimetizzarsi nell'ambiente. - Secondo Giulia le farfalle e i bruchi sono due stadi diversi dello stesso animale che rappresentano due diverse fasi del loro     ciclo vitale che è caratterizzato dalla metamorfosi. - Secondo Ettore bruchi e farfalle hanno anche abitudini alimentari e ruoli ecologici diversi. - Secondo Alessandra, infine, la presenza contemporanea di bruchi e farfalle negli alveari evidenzia il fatto che essi nell'ambiente svolgono lo stesso ruolo ecologico.  Le affermazioni di quali studenti sono corrette?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Dp6hf1QhIIQ=', 569, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Xv6rLPbnw7Y=', 567, -9999, 99999), DecodeNumber('hd/gQxga72c=', 567, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario ed Ettore";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hRMRUxRBHmU=', 571, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Dp6hf1QhIIQ=', 569, -9999, 99999), DecodeNumber('yzw4dnfAkvE=', 569, -9999, 99999), '');
    answer2.shortTextAnswer = "Mario, Giulia e Alessandra";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('y2xo1PhNYIc=', 573, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('y2xo1PhNYIc=', 571, -9999, 99999), DecodeNumber('lEijJMNMs7E=', 571, -9999, 99999), '');
    answer3.shortTextAnswer = "Giulia ed Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y2xo1PhNYIc=', 575, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('aSqZXgQJST8=', 573, -9999, 99999), DecodeNumber('2sNO3hB2zAg=', 573, -9999, 99999), '');
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
    var weight = DecodeNumber('v1lM+Vs6qaI=', 936, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "L'insegnante chiede ai ragazzi di ipotizzare quale rapporto c'è tra larve e habitat degli alveari.  - Secondo Mario Galleria mellonella ha deposto le uova all'interno degli alveari, dove le larve sono cresciute digerendo la cera d'api.  - Anche secondo Giulia è così; anzi, questo fatto spiega perché le larve vengano usate come esca dai pescatori: esse sono dolci in quanto possono ingerire anche miele. - Secondo Ettore la cera d'api e la plastica hanno una struttura chimica troppo diversa per cui non è pensabile che un organismo sia in grado di digerirle entrambe. - Secondo Alessandra, anche se in condizioni normali le larve non mangiano la plastica, in caso di bisogno riescono ad adattarsi, riuscendo a digerirla.  L'unica affermazione NON corretta è quella di:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('v1lM+Vs6qaI=', 938, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('L4sswvUkMi0=', 936, -9999, 99999), DecodeNumber('l1iWtnGEywU=', 936, -9999, 99999), '');
    answer1.shortTextAnswer = "Mario";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JB3JpAcwOv8=', 940, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('v1lM+Vs6qaI=', 938, -9999, 99999), DecodeNumber('4SEX6rIdwlA=', 938, -9999, 99999), '');
    answer2.shortTextAnswer = "Giulia";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7YfZif/gZjQ=', 301, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7YfZif/gZjQ=', 299, -9999, 99999), DecodeNumber('p54NCCsIVUw=', 299, -9999, 99999), '');
    answer3.shortTextAnswer = "Ettore";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7YfZif/gZjQ=', 303, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('TQn1r3+gNIY=', 301, -9999, 99999), DecodeNumber('NpqwwMTXS8o=', 301, -9999, 99999), '');
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
    var weight = DecodeNumber('zGuOd08JB/Y=', 141, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale differenza presenta la plastica rispetto al glicole etilenico? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zGuOd08JB/Y=', 143, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Wl4GvvAVTlM=', 141, -9999, 99999), DecodeNumber('l18b811nGdA=', 141, -9999, 99999), '');
    answer1.shortTextAnswer = "La prima è un composto organico, il secondo è un composto inorganico.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TcXM/aksWTI=', 145, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TcXM/aksWTI=', 143, -9999, 99999), DecodeNumber('rk2hsdZZGD8=', 143, -9999, 99999), '');
    answer2.shortTextAnswer = "La prima ha una composizione più complessa del secondo.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TcXM/aksWTI=', 147, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('PBWXznq+IqU=', 145, -9999, 99999), DecodeNumber('s+1gRD+ny7A=', 145, -9999, 99999), '');
    answer3.shortTextAnswer = "La prima ha una composizione più semplice del secondo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QVok3KZVFFE=', 149, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('TcXM/aksWTI=', 147, -9999, 99999), DecodeNumber('Q/jnG9tI4do=', 147, -9999, 99999), '');
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
    var weight = DecodeNumber('qX4wcxP/wZs=', 510, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Con il loro lavoro i due studiosi: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qX4wcxP/wZs=', 512, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uNQqwDbEiv4=', 510, -9999, 99999), DecodeNumber('tb6NTFLgtYI=', 510, -9999, 99999), '');
    answer1.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella può essere usata per risolvere il problema dell'inquinamento da polietilene.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ttVX1buFFck=', 873, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('iPKKSOx/lOE=', 871, -9999, 99999), DecodeNumber('Jq+s8FgVi/A=', 871, -9999, 99999), '');
    answer2.shortTextAnswer = "Hanno dimostrato che la farfalla Galleria mellonella sfrutta la capacità di digerire il polietilene per invadere gli alveari.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('YnSFDrZqMtE=', 875, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('YnSFDrZqMtE=', 873, -9999, 99999), DecodeNumber('Mx7z4woKukk=', 873, -9999, 99999), '');
    answer3.shortTextAnswer = "Hanno capito che nel bruco la degradazione della plastica non avviene solo per una semplice azione meccanica, come quella masticatoria, ma anche per un processo chimico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YnSFDrZqMtE=', 877, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('WMrtV9Hgx1U=', 875, -9999, 99999), DecodeNumber('Ly6bXMIaNc4=', 875, -9999, 99999), '');
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
    var weight = DecodeNumber('Jc8lHA0vrJE=', 715, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le foglie della maggior parte delle piante hanno una colorazione verde perché le clorofille: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jc8lHA0vrJE=', 717, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uorwLacdZZU=', 715, -9999, 99999), DecodeNumber('kHF5cKxb5V8=', 715, -9999, 99999), '');
    answer1.shortTextAnswer = "Assorbono la radiazione indipendentemente dal colore, ma riflettono soprattutto nel verde.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ARSMJiEUjc8=', 719, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Jc8lHA0vrJE=', 717, -9999, 99999), DecodeNumber('n2wYCTvaIc8=', 717, -9999, 99999), '');
    answer2.shortTextAnswer = "Non assorbono ma riflettono la radiazione verde.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sCGI9L9JfbI=', 721, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ARSMJiEUjc8=', 719, -9999, 99999), DecodeNumber('u16J+ah3Pps=', 719, -9999, 99999), '');
    answer3.shortTextAnswer = "Assorbono soprattutto radiazione verde, dando questo colore alle foglie.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SMEN6mL0/r4=', 723, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SMEN6mL0/r4=', 721, -9999, 99999), DecodeNumber('fCMxoFUhjdc=', 721, -9999, 99999), '');
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
    var weight = DecodeNumber('JgMB6/0okDk=', 921, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In autunno le foglie degli alberi assumono colorazioni che vanno dal giallo al rosso-bruno. Perché? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('JgMB6/0okDk=', 923, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZcM8s1wOZY0=', 921, -9999, 99999), DecodeNumber('pwX20nj+CBY=', 921, -9999, 99999), '');
    answer1.shortTextAnswer = "Le molecole di clorofilla si modificano gradualmente, portando ad assorbire la luce a frequenze differenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LEh0EZ8AU0o=', 925, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('JgMB6/0okDk=', 923, -9999, 99999), DecodeNumber('O8j63ZAyqzs=', 923, -9999, 99999), '');
    answer2.shortTextAnswer = "Le molecole di clorofilla vengono gradualmente sostituite da altri pigmenti, come i carotenoidi, più efficienti nella stagione autunnale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Q+T1djxm7Vw=', 927, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Q+T1djxm7Vw=', 925, -9999, 99999), DecodeNumber('BPTmrqraaQQ=', 925, -9999, 99999), '');
    answer3.shortTextAnswer = "La produzione di clorofilla cessa, lasciando spazio ad altri pigmenti che sono sempre presenti, ma normalmente sono in quantità minore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Q+T1djxm7Vw=', 929, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('57MP+LioA+I=', 927, -9999, 99999), DecodeNumber('laPeEUL/pnY=', 927, -9999, 99999), '');
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
    var weight = DecodeNumber('PnO0rQ/kSvI=', 558, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva le figure seguenti, che rappresentano fotografie al microscopio elettronico di quattro organelli presenti nelle cellule vegetali.   Quale di loro ha la maggiore concentrazione di clorofilla?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7V921Auxzuo=', 560, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7V921Auxzuo=', 558, -9999, 99999), DecodeNumber('iehwOopjxqk=', 558, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UDbOaKi/0nE=', 398, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5nrft6IW1/A=', 396, -9999, 99999), DecodeNumber('0arEZ+OAl5E=', 396, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cgYHRenFP5w=', 400, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('UDbOaKi/0nE=', 398, -9999, 99999), DecodeNumber('J9a0/A+Zqs8=', 398, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y+UGGmLiMi8=', 402, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cgYHRenFP5w=', 400, -9999, 99999), DecodeNumber('Af6d9cbrfv4=', 400, -9999, 99999), '');
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
    var weight = DecodeNumber('wbrF3J9OP98=', 512, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Osserva il grafico seguente, che raffigura gli spettri di assorbimento dei due tipi di clorofilla più comuni. Si ricorda che il Sole ha irradianza (cioè potenza per unità di area) massima nel visibile, con picco attorno ai 500 nm e che l'attraversamento dell'atmosfera terrestre sposta leggermente in avanti e appiattisce il picco suddetto.     Il grafico suggerisce che la fotosintesi clorofilliana si è sviluppata per massimizzare l'assorbimento:";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wbrF3J9OP98=', 514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qX4wcxP/wZs=', 512, -9999, 99999), DecodeNumber('hOnNkmM72vE=', 512, -9999, 99999), '');
    answer1.shortTextAnswer = "Dov'è massima l'irradianza della radiazione filtrata dall'atmosfera, cioè tra i 600 e i 700 nm.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+L2RRaUZBHo=', 516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+L2RRaUZBHo=', 514, -9999, 99999), DecodeNumber('diYHMOQR/U4=', 514, -9999, 99999), '');
    answer2.shortTextAnswer = "Esattamente ai bordi dell'intervallo per cui la radiazione proveniente dal Sole ha irradianza massima.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+L2RRaUZBHo=', 518, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('sGqsHhabp9k=', 516, -9999, 99999), DecodeNumber('j/UqziVpxw0=', 516, -9999, 99999), '');
    answer3.shortTextAnswer = "Dove la radiazione solare ha irradianza massima, per ottenere la maggiore efficienza possibile.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tGjUgmP1WmE=', 520, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+L2RRaUZBHo=', 518, -9999, 99999), DecodeNumber('nNU4wI2k/EU=', 518, -9999, 99999), '');
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
    var weight = DecodeNumber('lrLT9JeBgLo=', 881, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le clorofille \"a\" e \"b\" sono indispensabili per svolgere il processo con cui le piante superiori procurano l'energia di cui necessitano, denominato appunto fotosintesi clorofilliana. Quale delle seguenti affermazioni che riguardano la fotosintesi clorofilliana è ERRATA?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('st2hgRmftwc=', 883, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('st2hgRmftwc=', 881, -9999, 99999), DecodeNumber('+XEcQHr+HB4=', 881, -9999, 99999), '');
    answer1.shortTextAnswer = "L'intero processo si divide in due fasi: luce-dipendente, che avviene solo di giorno, e luce-indipendente, che avviene solo di notte.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sCGI9L9JfbI=', 721, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ARSMJiEUjc8=', 719, -9999, 99999), DecodeNumber('u16J+ah3Pps=', 719, -9999, 99999), '');
    answer2.shortTextAnswer = "Solamente durante la fase luce-dipendente viene catturata energia dall'esterno e convertita in energia chimica attraverso le molecole di ATP e NADPH + H+ .";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cSgl0QRd3eU=', 723, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('sCGI9L9JfbI=', 721, -9999, 99999), DecodeNumber('fCMxoFUhjdc=', 721, -9999, 99999), '');
    answer3.shortTextAnswer = "È influenzata da parametri ambientali come temperatura e disponibilità di luce.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SMEN6mL0/r4=', 725, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cSgl0QRd3eU=', 723, -9999, 99999), DecodeNumber('//26VLOc9jk=', 723, -9999, 99999), '');
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
    var weight = DecodeNumber('qzUz0fe2DdY=', 389, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In base a quanto affermato, tra quali fasi successive del ciclo cellulare è posizionato il punto di START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qzUz0fe2DdY=', 391, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('67J2c/dg3x4=', 389, -9999, 99999), DecodeNumber('K+DTOXYd8Vk=', 389, -9999, 99999), '');
    answer1.shortTextAnswer = "Tra la fase G1 e la fase G2";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IySGdTMwRU4=', 393, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('qzUz0fe2DdY=', 391, -9999, 99999), DecodeNumber('qdz9HYBOsV4=', 391, -9999, 99999), '');
    answer2.shortTextAnswer = "Tra la fase M e la fase S";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cVYIZ94gM7Q=', 395, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('IySGdTMwRU4=', 393, -9999, 99999), DecodeNumber('Aa3XqTenAas=', 393, -9999, 99999), '');
    answer3.shortTextAnswer = "Tra la fase G2 e la fase M";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+3tLL1wKrO8=', 756, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+3tLL1wKrO8=', 754, -9999, 99999), DecodeNumber('uA8kDHw9SWY=', 754, -9999, 99999), '');
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
    var weight = DecodeNumber('WOJ9uI/H7jQ=', 758, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale delle seguenti condizioni può verosimilmente indurre il superamento del checkpoint START? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Eek7NGfBWH8=', 760, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Eek7NGfBWH8=', 758, -9999, 99999), DecodeNumber('/fPkL1cFyx0=', 758, -9999, 99999), '');
    answer1.shortTextAnswer = "Presenza di fattori di crescita che si legano a recettori cellulari.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GpgKtlAIaVk=', 598, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1UM3vSqntZ4=', 596, -9999, 99999), DecodeNumber('vCbimTbqx5I=', 596, -9999, 99999), '');
    answer2.shortTextAnswer = "Carenza di sostanze nutrienti nell'ambiente.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EV0UishSH6M=', 600, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('GpgKtlAIaVk=', 598, -9999, 99999), DecodeNumber('3L4YoF6zmJc=', 598, -9999, 99999), '');
    answer3.shortTextAnswer = "Scarsa produzione di proteine e organelli, e scarsa crescita cellulare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('99q/S+MS3Tc=', 602, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EV0UishSH6M=', 600, -9999, 99999), DecodeNumber('CY8eIjQKjm8=', 600, -9999, 99999), '');
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
    var weight = DecodeNumber('97P3dYmm8KM=', 963, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il contenuto in DNA varia nelle diverse fasi del ciclo cellulare. Quale delle seguenti affermazioni, riguardo a una cellula somatica umana, è corretta? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('97P3dYmm8KM=', 965, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('73MrmrF7h/I=', 963, -9999, 99999), DecodeNumber('7mAk390Lti8=', 963, -9999, 99999), '');
    answer1.shortTextAnswer = "Nella fase G1, la cellula presenta 46 cromosomi, ognuno composto da due cromatidi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('M60qg9VwBPk=', 967, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('97P3dYmm8KM=', 965, -9999, 99999), DecodeNumber('nguM3FNLJ4s=', 965, -9999, 99999), '');
    answer2.shortTextAnswer = "Nella profase della mitosi la cellula presenta 23 coppie di cromosomi, ognuno composto da un solo cromatidio.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wpsVgi6vnoY=', 969, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('M60qg9VwBPk=', 967, -9999, 99999), DecodeNumber('xTguv1H8McQ=', 967, -9999, 99999), '');
    answer3.shortTextAnswer = "All'inizio della fase S, la cellula presenta 23 coppie di cromosomi, ognuno composto da due cromatidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4aAMjcGagLQ=', 808, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4aAMjcGagLQ=', 806, -9999, 99999), DecodeNumber('1vaRhMtkRt8=', 806, -9999, 99999), '');
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
    var weight = DecodeNumber('wCqGOYuaSos=', 830, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione alla fase M, che comprende i processi successivi di mitosi e citodieresi, comporta molti cambiamenti nella cellula. Con l'entrata nella profase, il primo passo della mitosi, il citoscheletro della cellula si disorganizza, facendo così perdere alla cellula la sua forma peculiare (come si può vedere nella cellula nella figura sottostante). Inoltre, l'involucro nucleare si frammenta e i cromosomi appaiono condensati.     Quale delle seguenti affermazioni riguardanti cellule animali è ERRATA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('wCqGOYuaSos=', 832, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QYDy8ygSgBU=', 830, -9999, 99999), DecodeNumber('JAN5SBH2OJA=', 830, -9999, 99999), '');
    answer1.shortTextAnswer = "La cellula all'inizio della fase M ha una forma tondeggiante.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('69dFDO9o4ZU=', 834, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('69dFDO9o4ZU=', 832, -9999, 99999), DecodeNumber('97LFETb5xC4=', 832, -9999, 99999), '');
    answer2.shortTextAnswer = "In fase M non sono presenti filamenti citoscheletrici nella cellula.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('69dFDO9o4ZU=', 836, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XtqiQpxLe/4=', 834, -9999, 99999), DecodeNumber('S//V3ugazfg=', 834, -9999, 99999), '');
    answer3.shortTextAnswer = "In fase M il DNA nucleare si trova nel citosol.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5+hWYv03jJU=', 838, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('69dFDO9o4ZU=', 836, -9999, 99999), DecodeNumber('ebNKJvI7Thw=', 836, -9999, 99999), '');
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
    var weight = DecodeNumber('7441qH1AFI8=', 677, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Durante il ciclo cellulare viene replicato il DNA. In realtà è più corretto parlare di replicazione della cromatina, perché non è solo il DNA che si duplica ma anche le proteine a esso associate, le quali sono importanti per definire la struttura della cromatina e per la regolazione dell'espressione genica. In base a ciò, quale dei seguenti processi deve essere particolarmente attivo nella fase del ciclo cellulare in cui si ha la replicazione del DNA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7441qH1AFI8=', 679, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/1Ji8kUN174=', 677, -9999, 99999), DecodeNumber('dckEEFFx9Iw=', 677, -9999, 99999), '');
    answer1.shortTextAnswer = "Polimerizzazione della tubulina in microtubuli.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CCGQxW/ZwCc=', 681, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CCGQxW/ZwCc=', 679, -9999, 99999), DecodeNumber('/ALAnTg1/nA=', 679, -9999, 99999), '');
    answer2.shortTextAnswer = "Sintesi proteica di istoni.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CCGQxW/ZwCc=', 683, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1LFDKUO5E/o=', 681, -9999, 99999), DecodeNumber('6XWoTrxhAhE=', 681, -9999, 99999), '');
    answer3.shortTextAnswer = "Assemblaggio del cinetocore.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Fz4SGx5R+Lg=', 1044, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('FNL4Zpsv8Wc=', 1042, -9999, 99999), DecodeNumber('CrQ0cVmyGTM=', 1042, -9999, 99999), '');
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
    var weight = DecodeNumber('O/ASgg5X2Ag=', 404, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "La transizione tra le diverse fasi del ciclo cellulare è strettamente controllata da molti fattori: una famiglia di proteine, quella delle cicline, è necessaria per la progressione del ciclo cellulare. La concentrazione di ogni particolare ciclina varia ciclicamente durante il ciclo cellulare, grazie a processi di sintesi e degradazione proteica. Con quale tecnica pensi che si possa rilevare la presenza di una ciclina in una particolare fase del ciclo cellulare? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('O/ASgg5X2Ag=', 406, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('q2o3k9AIriQ=', 404, -9999, 99999), DecodeNumber('JsNrfG2txHM=', 404, -9999, 99999), '');
    answer1.shortTextAnswer = "PCR.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vuCq4JqnH60=', 408, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('O/ASgg5X2Ag=', 406, -9999, 99999), DecodeNumber('WI/WA8ks7Gk=', 406, -9999, 99999), '');
    answer2.shortTextAnswer = "Reazione di Lugol.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q93V/2tT754=', 410, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('q93V/2tT754=', 408, -9999, 99999), DecodeNumber('czjTuy5NapE=', 408, -9999, 99999), '');
    answer3.shortTextAnswer = "Riconoscimento tramite anticorpi specifici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q93V/2tT754=', 412, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2npFflMiUFw=', 410, -9999, 99999), DecodeNumber('QjuPuclM/Eg=', 410, -9999, 99999), '');
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
    var weight = DecodeNumber('n9X1zJc/qZM=', 446, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste strutture fa parte esclusivamente del sistema respiratorio? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('n9X1zJc/qZM=', 448, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('nihI9BUfn0o=', 446, -9999, 99999), DecodeNumber('ekCGbOSMe20=', 446, -9999, 99999), '');
    answer1.shortTextAnswer = "Vestibolo della bocca.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OFqmACCO65Y=', 450, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('n9X1zJc/qZM=', 448, -9999, 99999), DecodeNumber('XRaDjraRA08=', 448, -9999, 99999), '');
    answer2.shortTextAnswer = "Esofago.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hAaHEf8Oq8E=', 452, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hAaHEf8Oq8E=', 450, -9999, 99999), DecodeNumber('11CZngyw9VQ=', 450, -9999, 99999), '');
    answer3.shortTextAnswer = "Laringe.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/A9gihexDGc=', 454, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('hAaHEf8Oq8E=', 452, -9999, 99999), DecodeNumber('PTqKnLkaqr0=', 452, -9999, 99999), '');
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
    var weight = DecodeNumber('Ado7ZIPkK5U=', 815, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Trachea e bronchi presentano una componente rigida formata da una serie di anelli quasi completi che impediscono il collasso delle loro pareti durante gli atti respiratori. Da che tipo di tessuto sono costituiti? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ado7ZIPkK5U=', 817, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+Hw+YguYOho=', 815, -9999, 99999), DecodeNumber('Jjn3HRfA0Q8=', 815, -9999, 99999), '');
    answer1.shortTextAnswer = "Tessuto connettivo fibroso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SigMGdoyP40=', 1178, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('MhJvw1Wfdyc=', 1176, -9999, 99999), DecodeNumber('tdk6x18fX7M=', 1176, -9999, 99999), '');
    answer2.shortTextAnswer = "Tessuto epiteliale.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CYjaBKJTMWU=', 1180, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('SigMGdoyP40=', 1178, -9999, 99999), DecodeNumber('8ftdJ6ZJ3qY=', 1178, -9999, 99999), '');
    answer3.shortTextAnswer = "Tessuto osseo.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O2gV/cZsuBk=', 1182, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O2gV/cZsuBk=', 1180, -9999, 99999), DecodeNumber('x1Lin25bsLE=', 1180, -9999, 99999), '');
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
    var weight = DecodeNumber('Sffj62uazBY=', 1020, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale tragitto compie il biossido di carbonio durante l'espirazione?   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Sffj62uazBY=', 1022, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QBYH6J9I+cg=', 1020, -9999, 99999), DecodeNumber('+yNXDFu0ukI=', 1020, -9999, 99999), '');
    answer1.shortTextAnswer = "Capillare, alveolo respiratorio, bronco, bronchiolo, trachea.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WSLyUHjfmL4=', 1024, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('WSLyUHjfmL4=', 1022, -9999, 99999), DecodeNumber('VLIR5x87Vds=', 1022, -9999, 99999), '');
    answer2.shortTextAnswer = "Capillare, alveolo respiratorio, bronchiolo, bronco, trachea.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WSLyUHjfmL4=', 1026, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('mMNTAxu8FPA=', 1024, -9999, 99999), DecodeNumber('xxwn/JLcySE=', 1024, -9999, 99999), '');
    answer3.shortTextAnswer = "Trachea, bronco, bronchiolo, alveolo respiratorio, capillare.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YRo3nTRGtRk=', 1028, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('WSLyUHjfmL4=', 1026, -9999, 99999), DecodeNumber('49RcA6XLehQ=', 1026, -9999, 99999), '');
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
    var weight = DecodeNumber('qzUz0fe2DdY=', 389, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nell'arteria polmonare scorre sangue:   ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qzUz0fe2DdY=', 391, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('67J2c/dg3x4=', 389, -9999, 99999), DecodeNumber('K+DTOXYd8Vk=', 389, -9999, 99999), '');
    answer1.shortTextAnswer = "Ricco di ossigeno che dal cuore va al polmone.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Wit3AVE5EAY=', 752, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('eDJApidXZ1Y=', 750, -9999, 99999), DecodeNumber('dNZHROETiM8=', 750, -9999, 99999), '');
    answer2.shortTextAnswer = "Ricco di ossigeno che dal polmone va al cuore.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XF0uA7m2ANg=', 754, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XF0uA7m2ANg=', 752, -9999, 99999), DecodeNumber('ScGtBYGUpew=', 752, -9999, 99999), '');
    answer3.shortTextAnswer = "Ricco di biossido di carbonio che dal cuore va al polmone.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XF0uA7m2ANg=', 756, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('mi5YcVeNJkw=', 754, -9999, 99999), DecodeNumber('uA8kDHw9SWY=', 754, -9999, 99999), '');
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
    var weight = DecodeNumber('1UM3vSqntZ4=', 594, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Recentemente si è scoperto che i polmoni hanno una scorta di cellule staminali. Queste sarebbero in grado di porre rimedio ai danni prodotti su tutte le componenti dell'organo, come i bronchioli o gli alveoli. Si tratterebbe quindi di cellule: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1UM3vSqntZ4=', 596, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('oP7AgBe9a4o=', 594, -9999, 99999), DecodeNumber('yLVxCE1Ld/s=', 594, -9999, 99999), '');
    answer1.shortTextAnswer = "Staminali totipotenti.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GpgKtlAIaVk=', 598, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1UM3vSqntZ4=', 596, -9999, 99999), DecodeNumber('vCbimTbqx5I=', 596, -9999, 99999), '');
    answer2.shortTextAnswer = "Staminali pluripotenti.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('99q/S+MS3Tc=', 600, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('99q/S+MS3Tc=', 598, -9999, 99999), DecodeNumber('3L4YoF6zmJc=', 598, -9999, 99999), '');
    answer3.shortTextAnswer = "Staminali multipotenti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('8onQLo8ZGaI=', 961, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LXphN13e0ds=', 959, -9999, 99999), DecodeNumber('HhKJ1PxnBVs=', 959, -9999, 99999), '');
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
    var weight = DecodeNumber('sG5aBlSJGD0=', 799, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un batterio Gram negativo è: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sG5aBlSJGD0=', 801, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7BkvHleqsxs=', 799, -9999, 99999), DecodeNumber('t1lQaDxdciU=', 799, -9999, 99999), '');
    answer1.shortTextAnswer = "Un batteriofago sensibile alla maggior parte degli antibiotici.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bTlCow1a63c=', 803, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sG5aBlSJGD0=', 801, -9999, 99999), DecodeNumber('dWOok3z/AJo=', 801, -9999, 99999), '');
    answer2.shortTextAnswer = "Un batterio, privo di flagello e di parete, resistente a tutti gli antibiotici.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1vaRhMtkRt8=', 805, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1vaRhMtkRt8=', 803, -9999, 99999), DecodeNumber('j0A+R9ZjsMU=', 803, -9999, 99999), '');
    answer3.shortTextAnswer = "Un batterio con parete meno ricca di peptidoglicano che si colora di rosso con il reattivo di Gram ed è sensibile solo ad alcuni antibiotici.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1vaRhMtkRt8=', 807, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SUVLC9ngLTw=', 805, -9999, 99999), DecodeNumber('dgSjJKp6+iA=', 805, -9999, 99999), '');
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
    var weight = DecodeNumber('+sNXWMHTQvE=', 666, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Il pigmento rosso intenso di Serratia marcescens è chiamato prodigiosina e ha una massa molare di 323,432 g/mol. Quale delle seguenti formule di struttura rappresenta la prodigiosina?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+sNXWMHTQvE=', 668, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tRoWpzuDkxE=', 666, -9999, 99999), DecodeNumber('p0PsjSYGUSQ=', 666, -9999, 99999), '');
    answer1.shortTextAnswer = " A";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lttw1Crn1BI=', 670, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lttw1Crn1BI=', 668, -9999, 99999), DecodeNumber('dpz0dx/F4/I=', 668, -9999, 99999), '');
    answer2.shortTextAnswer = " B";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lttw1Crn1BI=', 672, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('sCppy97XLC4=', 670, -9999, 99999), DecodeNumber('PYb+La8gVjg=', 670, -9999, 99999), '');
    answer3.shortTextAnswer = " C";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1GADl+Ps7Hc=', 674, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('lttw1Crn1BI=', 672, -9999, 99999), DecodeNumber('H2CL8t1dxso=', 672, -9999, 99999), '');
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
    var weight = DecodeNumber('sp8Fq7EHnCk=', 1035, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Leggi la seguente definizione di plasmide nella quale due termini, indicati in grassetto, sono in alternativa:  Un plasmide è un elemento genetico cromosomico/extracromosomico in grado di replicarsi autonomamente all'interno della cellula ospite, portatore di geni che veicolano informazioni non essenziali per la vita della cellula e in grado di trasferirsi da una cellula ad un'altra per coniugazione/trasduzione.  Le parole corrette da inserire sono: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('b8MZrcooaUU=', 1037, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('b8MZrcooaUU=', 1035, -9999, 99999), DecodeNumber('aic4fwCu7vI=', 1035, -9999, 99999), '');
    answer1.shortTextAnswer = "Extracromosomico e coniugazione.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UDbOaKi/0nE=', 398, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5nrft6IW1/A=', 396, -9999, 99999), DecodeNumber('0arEZ+OAl5E=', 396, -9999, 99999), '');
    answer2.shortTextAnswer = "Cromosomico e coniugazione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cgYHRenFP5w=', 400, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('UDbOaKi/0nE=', 398, -9999, 99999), DecodeNumber('J9a0/A+Zqs8=', 398, -9999, 99999), '');
    answer3.shortTextAnswer = "Cromosomico e trasduzione.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('y+UGGmLiMi8=', 402, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cgYHRenFP5w=', 400, -9999, 99999), DecodeNumber('Af6d9cbrfv4=', 400, -9999, 99999), '');
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
    var weight = DecodeNumber('UiHy3xpWPXs=', 1240, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le pericolose e talvolta mortali infezioni ospedaliere da Serratia sono da addebitare a: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UiHy3xpWPXs=', 1242, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('b3XgzwzLoAo=', 1240, -9999, 99999), DecodeNumber('ylbj6Oski6k=', 1240, -9999, 99999), '');
    answer1.shortTextAnswer = "Scarsa igiene e mancato utilizzo di antibiotici a largo spettro.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dmXm2I9paig=', 1244, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('dmXm2I9paig=', 1242, -9999, 99999), DecodeNumber('uOqEMtyNzGM=', 1242, -9999, 99999), '');
    answer2.shortTextAnswer = "Elevato utilizzo di antibiotici a largo spettro e elevata presenza di pazienti sensibili ed esposti a batteri selezionati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('12DDisgrAGo=', 605, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('SGJbO3WK+tE=', 603, -9999, 99999), DecodeNumber('XIAxn4kI3bY=', 603, -9999, 99999), '');
    answer3.shortTextAnswer = "Predilezione dei batteri Gram negativi per gli ambienti ospedalieri poco protetti.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+fMLJYnI2Yo=', 607, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('12DDisgrAGo=', 605, -9999, 99999), DecodeNumber('tPAXcMP8IHI=', 605, -9999, 99999), '');
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
    var weight = DecodeNumber('ekCGbOSMe20=', 445, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Nei tessuti vegetali, quali di questi tessuti svolge la funzione di conduzione della linfa grezza? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XRaDjraRA08=', 447, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XRaDjraRA08=', 445, -9999, 99999), DecodeNumber('nihI9BUfn0o=', 445, -9999, 99999), '');
    answer1.shortTextAnswer = "Xilema.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XRaDjraRA08=', 449, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ekCGbOSMe20=', 447, -9999, 99999), DecodeNumber('n9X1zJc/qZM=', 447, -9999, 99999), '');
    answer2.shortTextAnswer = "Floema.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('11CZngyw9VQ=', 451, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('XRaDjraRA08=', 449, -9999, 99999), DecodeNumber('OFqmACCO65Y=', 449, -9999, 99999), '');
    answer3.shortTextAnswer = "Collenchima.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PTqKnLkaqr0=', 453, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('11CZngyw9VQ=', 451, -9999, 99999), DecodeNumber('Wpb8/eLE8yM=', 451, -9999, 99999), '');
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
    var weight = DecodeNumber('Jjn3HRfA0Q8=', 814, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di questi fusti modificati è costituito da un breve fusto di forma conica e da numerose foglie modificate per la funzione di riserva? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jjn3HRfA0Q8=', 816, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XMKrpE3hR9U=', 814, -9999, 99999), DecodeNumber('+Hw+YguYOho=', 814, -9999, 99999), '');
    answer1.shortTextAnswer = "Tuberi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vG+P9dZlxGE=', 818, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Jjn3HRfA0Q8=', 816, -9999, 99999), DecodeNumber('Ado7ZIPkK5U=', 816, -9999, 99999), '');
    answer2.shortTextAnswer = "Rizomi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x1Lin25bsLE=', 1179, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('x1Lin25bsLE=', 1177, -9999, 99999), DecodeNumber('SigMGdoyP40=', 1177, -9999, 99999), '');
    answer3.shortTextAnswer = "Bulbi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('x1Lin25bsLE=', 1181, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8ftdJ6ZJ3qY=', 1179, -9999, 99999), DecodeNumber('CYjaBKJTMWU=', 1179, -9999, 99999), '');
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
    var weight = DecodeNumber('+yNXDFu0ukI=', 1019, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Da che cosa è composto il gineceo di un fiore? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+yNXDFu0ukI=', 1021, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('qJbKopzQnZ0=', 1019, -9999, 99999), DecodeNumber('QBYH6J9I+cg=', 1019, -9999, 99999), '');
    answer1.shortTextAnswer = "Da un insieme di stami.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xxwn/JLcySE=', 1023, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xxwn/JLcySE=', 1021, -9999, 99999), DecodeNumber('Sffj62uazBY=', 1021, -9999, 99999), '');
    answer2.shortTextAnswer = "Da un insieme di carpelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xxwn/JLcySE=', 1025, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VLIR5x87Vds=', 1023, -9999, 99999), DecodeNumber('mMNTAxu8FPA=', 1023, -9999, 99999), '');
    answer3.shortTextAnswer = "Da un insieme di sepali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('49RcA6XLehQ=', 1027, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('xxwn/JLcySE=', 1025, -9999, 99999), DecodeNumber('WSLyUHjfmL4=', 1025, -9999, 99999), '');
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
    var weight = DecodeNumber('K+DTOXYd8Vk=', 388, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste affermazioni relative al meristema del germoglio è FALSA? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K+DTOXYd8Vk=', 390, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('onKfxoP5w4U=', 388, -9999, 99999), DecodeNumber('67J2c/dg3x4=', 388, -9999, 99999), '');
    answer1.shortTextAnswer = "Genera il fusto, le foglie e le gemme.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qdz9HYBOsV4=', 392, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('K+DTOXYd8Vk=', 390, -9999, 99999), DecodeNumber('qzUz0fe2DdY=', 390, -9999, 99999), '');
    answer2.shortTextAnswer = "Presenta una crescita indeterminata.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Aa3XqTenAas=', 394, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qdz9HYBOsV4=', 392, -9999, 99999), DecodeNumber('IySGdTMwRU4=', 392, -9999, 99999), '');
    answer3.shortTextAnswer = "Contiene diversi strati e zone funzionali.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('NJhN5/fZz4g=', 755, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('NJhN5/fZz4g=', 753, -9999, 99999), DecodeNumber('mi5YcVeNJkw=', 753, -9999, 99999), '');
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
    var weight = DecodeNumber('yLVxCE1Ld/s=', 593, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per impollinazione chirotterogama si intende l'impollinazione che ha per vettore: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yLVxCE1Ld/s=', 595, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('5/8P8ihnoYo=', 593, -9999, 99999), DecodeNumber('oP7AgBe9a4o=', 593, -9999, 99999), '');
    answer1.shortTextAnswer = "Il vento.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vCbimTbqx5I=', 597, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yLVxCE1Ld/s=', 595, -9999, 99999), DecodeNumber('1UM3vSqntZ4=', 595, -9999, 99999), '');
    answer2.shortTextAnswer = "Gli uccelli.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CY8eIjQKjm8=', 599, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CY8eIjQKjm8=', 597, -9999, 99999), DecodeNumber('GpgKtlAIaVk=', 597, -9999, 99999), '');
    answer3.shortTextAnswer = "I pipistrelli.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CY8eIjQKjm8=', 601, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('3L4YoF6zmJc=', 599, -9999, 99999), DecodeNumber('EV0UishSH6M=', 599, -9999, 99999), '');
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
    var weight = DecodeNumber('7mAk390Lti8=', 962, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quali tra i seguenti lipidi NON fanno parte della struttura di una tipica membrana cellulare di una cellula eucariote? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nguM3FNLJ4s=', 964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('nguM3FNLJ4s=', 962, -9999, 99999), DecodeNumber('73MrmrF7h/I=', 962, -9999, 99999), '');
    answer1.shortTextAnswer = "Trigliceridi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bTlCow1a63c=', 803, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sG5aBlSJGD0=', 801, -9999, 99999), DecodeNumber('dWOok3z/AJo=', 801, -9999, 99999), '');
    answer2.shortTextAnswer = "Fosfolipidi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SUVLC9ngLTw=', 805, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('bTlCow1a63c=', 803, -9999, 99999), DecodeNumber('j0A+R9ZjsMU=', 803, -9999, 99999), '');
    answer3.shortTextAnswer = "Glicolipidi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1vaRhMtkRt8=', 807, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SUVLC9ngLTw=', 805, -9999, 99999), DecodeNumber('dgSjJKp6+iA=', 805, -9999, 99999), '');
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
    var weight = DecodeNumber('OT3PW+yAxo0=', 1167, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Per quale motivo i lipidi hanno un'alta densità energetica?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OT3PW+yAxo0=', 1169, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('P+g1jTcgMIY=', 1167, -9999, 99999), DecodeNumber('zy8h4iM8zPI=', 1167, -9999, 99999), '');
    answer1.shortTextAnswer = "Perché sono formati da lunghe catene di atomi di carbonio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9As1ESwWoL8=', 1171, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('9As1ESwWoL8=', 1169, -9999, 99999), DecodeNumber('c7bktc9tpJA=', 1169, -9999, 99999), '');
    answer2.shortTextAnswer = "Perché gli atomi di carbonio di un lipide sono ridotti o poco ossidati.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9As1ESwWoL8=', 1173, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('17XdialIwGQ=', 1171, -9999, 99999), DecodeNumber('lotFqPioq5w=', 1171, -9999, 99999), '');
    answer3.shortTextAnswer = "Perché le catene di atomi di carbonio sono lineari (senza ramificazioni).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DW4h6K1kPqg=', 1175, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9As1ESwWoL8=', 1173, -9999, 99999), DecodeNumber('fGuAiCSi8kE=', 1173, -9999, 99999), '');
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
    var weight = DecodeNumber('hOCL+mS63iQ=', 536, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale dei seguenti lipidi ti aspetti di trovare prevalentemente in un prodotto alimentare di origine vegetale? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hOCL+mS63iQ=', 538, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Oy5py8y8348=', 536, -9999, 99999), DecodeNumber('3h9MWYB//7A=', 536, -9999, 99999), '');
    answer1.shortTextAnswer = "Lipidi formati da acidi grassi saturi.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TndL6y83Hd0=', 540, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TndL6y83Hd0=', 538, -9999, 99999), DecodeNumber('+RNlgoYhq1o=', 538, -9999, 99999), '');
    answer2.shortTextAnswer = "Lipidi formati da acidi grassi insaturi.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0Z9b+TsoeK0=', 379, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('IdMAgK1o56k=', 377, -9999, 99999), DecodeNumber('xUlASpdWqlI=', 377, -9999, 99999), '');
    answer3.shortTextAnswer = "Lipidi formati da acidi grassi a catena molto lunga (più di 22 atomi di carbonio).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EPMREPF3LJg=', 381, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0Z9b+TsoeK0=', 379, -9999, 99999), DecodeNumber('ENHll6LYWRg=', 379, -9999, 99999), '');
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
    var weight = DecodeNumber('gZKLdyVKzWw=', 741, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In una cellula procariote, dove avviene la sintesi dei lipidi di membrana? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VW6KjfPjyBc=', 743, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VW6KjfPjyBc=', 741, -9999, 99999), DecodeNumber('OnI1gHPGcvE=', 741, -9999, 99999), '');
    answer1.shortTextAnswer = "Nel citoplasma.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VW6KjfPjyBc=', 745, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gZKLdyVKzWw=', 743, -9999, 99999), DecodeNumber('wMpjW42/Sxs=', 743, -9999, 99999), '');
    answer2.shortTextAnswer = "Nei mitocondri.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('g3kQ8mM5Wq0=', 747, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VW6KjfPjyBc=', 745, -9999, 99999), DecodeNumber('L5UvWM/Oamo=', 745, -9999, 99999), '');
    answer3.shortTextAnswer = "Nel reticolo endoplasmatico.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yRLnjfQjn4E=', 749, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('g3kQ8mM5Wq0=', 747, -9999, 99999), DecodeNumber('xISZ0Z2MDFk=', 747, -9999, 99999), '');
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
    var weight = DecodeNumber('chNsh7KrVHU=', 1110, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In un esperimento condotto in una varietà di polli, si osserva che dagli incroci tra due individui eterozigoti per un certo carattere si ottengono alla prima generazione filiale 2/3 di individui eterozigoti e 1/3 di individui omozigoti dominanti. Come può essere interpretato questo risultato? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('chNsh7KrVHU=', 1112, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('U7wJpJNDKHE=', 1110, -9999, 99999), DecodeNumber('dChqV0jl4sA=', 1110, -9999, 99999), '');
    answer1.shortTextAnswer = "Il carattere studiato è legato al sesso.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('JnMK0IKj2RA=', 1114, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('chNsh7KrVHU=', 1112, -9999, 99999), DecodeNumber('Rj307mBfFxk=', 1112, -9999, 99999), '');
    answer2.shortTextAnswer = "Il carattere studiato è caratterizzato da allelia multipla.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('40E/1RFrE1A=', 1116, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('40E/1RFrE1A=', 1114, -9999, 99999), DecodeNumber('NBpTYFBewdY=', 1114, -9999, 99999), '');
    answer3.shortTextAnswer = "La condizione omozigote recessiva è letale per quel carattere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UvQjEVUdqmM=', 955, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('P4jbZVCRs04=', 953, -9999, 99999), DecodeNumber('SYoW2mE+vTo=', 953, -9999, 99999), '');
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
    var weight = DecodeNumber('sjvkheWDHZs=', 1152, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "In ecologia il fenomeno dello spostamento dei caratteri consiste nel fatto che: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('sjvkheWDHZs=', 1154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('HectKROtxu4=', 1152, -9999, 99999), DecodeNumber('TXqVQqnjHDc=', 1152, -9999, 99999), '');
    answer1.shortTextAnswer = "Quando due specie competono tra loro, una delle due finisce con l'eliminare l'altra.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('cHAIay4lugM=', 1156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('sjvkheWDHZs=', 1154, -9999, 99999), DecodeNumber('wgoC/3I446w=', 1154, -9999, 99999), '');
    answer2.shortTextAnswer = "Quando due specie sfruttano le stesse risorse si verifica la competizione.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xGobTjRYGOg=', 1158, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('cHAIay4lugM=', 1156, -9999, 99999), DecodeNumber('cx8j8+wkltY=', 1156, -9999, 99999), '');
    answer3.shortTextAnswer = "Una specie non può occupare interamente la sua nicchia a causa delle interazioni con gli altri organismi.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0ITGGYu9ofY=', 1160, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0ITGGYu9ofY=', 1158, -9999, 99999), DecodeNumber('QBkrkvXuw0I=', 1158, -9999, 99999), '');
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
    var weight = DecodeNumber('y2LPxpbYYF4=', 521, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Un individuo si presenta dal proprio medico riferendo perdita di peso, tachicardia e scarsa sopportazione del caldo. Il medico sospetta che sia affetto da ipertiroidismo. La quantificazione nel sangue di quale delle seguenti molecole può permettere al medico di distinguere tra cause di ipertiroidismo secondarie, cioè legate ad un'attività eccessiva dell'ipofisi, e primarie, cioè legate a un'attività eccessiva della tiroide? ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('y2LPxpbYYF4=', 523, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('p+GvOlmi8j0=', 521, -9999, 99999), DecodeNumber('v8upnYFq44g=', 521, -9999, 99999), '');
    answer1.shortTextAnswer = "Triiodotironina (T3) e tiroxina (T4).";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wxSBSIWLc64=', 525, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wxSBSIWLc64=', 523, -9999, 99999), DecodeNumber('8PagJBvOiBs=', 523, -9999, 99999), '');
    answer2.shortTextAnswer = "TSH (ormone tireotropo).";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wxSBSIWLc64=', 527, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ZQMlV8tMPCQ=', 525, -9999, 99999), DecodeNumber('Rax+iG6JrRo=', 525, -9999, 99999), '');
    answer3.shortTextAnswer = "Iodio (I2).";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sL3XCqKUsLU=', 529, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('wxSBSIWLc64=', 527, -9999, 99999), DecodeNumber('j9HD5Wfg/ZY=', 527, -9999, 99999), '');
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
    var weight = DecodeNumber('9OEQCof1FCE=', 639, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Le lattine normalmente in commercio hanno un rivestimento interno protettivo a base di resine epossidiche contenente il Bisfenolo A (BPA). Il BPA è una molecola di origine sintetica nota per i suoi effetti avversi sulla salute umana e animale. Studi scientifici hanno dimostrato la migrazione del BPA dal contenitore all'alimento in esso contenuto. Nella figura sottostante sono riportati i risultati ottenuti analizzando il contenuto di BPA in pomodori pelati in lattina al variare della temperatura di conservazione della lattina. Sono stati analizzati 6 marche in commercio e la migrazione del BPA dal contenitore all'alimento si è verificata in tutti i campioni indipendentemente dal valore economico del prodotto analizzato.      Secondo i risultati riportati nella figura precedente: ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9OEQCof1FCE=', 641, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XmA3Jp2cnsc=', 639, -9999, 99999), DecodeNumber('U025oep9EZc=', 639, -9999, 99999), '');
    answer1.shortTextAnswer = "L'aumento della migrazione del BPA è proporzionale alla diminuzione della temperatura. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6wTLGW2XVoI=', 643, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('9OEQCof1FCE=', 641, -9999, 99999), DecodeNumber('bmptTkp5d+U=', 641, -9999, 99999), '');
    answer2.shortTextAnswer = "Il BPA può migrare dal contenitore agli alimenti in esso contenuti solo per temperature superiori a 37 °C.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7CJTT3b6DsA=', 645, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('6wTLGW2XVoI=', 643, -9999, 99999), DecodeNumber('ur3eStVo4KY=', 643, -9999, 99999), '');
    answer3.shortTextAnswer = "La marca 5 risulta migliore della marca 2 relativamente alla capacità del contenitore di rilasciare BPA.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4izmR+rJ1JU=', 647, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('4izmR+rJ1JU=', 645, -9999, 99999), DecodeNumber('cVzpu020Taw=', 645, -9999, 99999), '');
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
    var weight = DecodeNumber('zySCdKqJLLo=', 1203, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "Quale di queste ossa fa parte del bacino?  ";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Nn+0aIJARYs=', 1205, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Nn+0aIJARYs=', 1203, -9999, 99999), DecodeNumber('v1ZNrLzrO1E=', 1203, -9999, 99999), '');
    answer1.shortTextAnswer = "Ischio.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CrQ0cVmyGTM=', 1043, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('x+CnJPk0wBY=', 1041, -9999, 99999), DecodeNumber('FNL4Zpsv8Wc=', 1041, -9999, 99999), '');
    answer2.shortTextAnswer = "Etmoide.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RNRBoleGupw=', 1045, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CrQ0cVmyGTM=', 1043, -9999, 99999), DecodeNumber('Fz4SGx5R+Lg=', 1043, -9999, 99999), '');
    answer3.shortTextAnswer = "Vomere.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DO+yTUMbAYo=', 1047, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RNRBoleGupw=', 1045, -9999, 99999), DecodeNumber('MEgCd9AkDtw=', 1045, -9999, 99999), '');
    answer4.shortTextAnswer = "Ioide.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






