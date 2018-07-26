'use strict';
// generates code to insert html inside <div> with class "jumbotron"
const jumbotron = document.querySelector('.jumbotron');

//create

const titlecontainer = document.createElement('div');
const h1 = document.createElement('h1');
const deadpoolSpan = document.createElement('span');
const deadpoolP = document.createElement('p');
const deadpoolSpan2 = document.createElement('span');

const imgContainer = document.createElement('div');
const mainImg = document.createElement('img');

const subTitleContainer = document.createElement('div');

const listContainer = document.createElement('div');
const timelineList = document.createElement('ul');

const row = document.createElement('div');
const col = document.createElement('div');
const bq = document.createElement('blockquote');
const bqtext = document.createElement('p');
const bqfooter = document.createElement('footer');
const bqcite = document.createElement('cite');

const footerCol1 = document.createElement('div');
const footerText = document.createElement('p');
const footerList = document.createElement('ul');

//add class

titlecontainer.classList.add('row', 'title-container');
h1.classList.add('text-center');
deadpoolSpan.classList.add('red-text');
deadpoolP.classList.add('text-center');
deadpoolSpan2.classList.add('red-text');

imgContainer.classList.add('row');
mainImg.classList.add('img-responsive', 'inside-shadow');

subTitleContainer.classList.add('row', 'sub-title-container');
listContainer.classList.add('row', 'list-container');
row.classList.add('row');
col.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
bq.classList.add('blockquote-reverse');

footerCol1.classList.add('col-md-6');
footerText.classList.add('small-text');


//add atribute

imgContainer.setAttribute('id', 'main-image-container');
mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
mainImg.setAttribute('alt', 'deadpool picture');

bqcite.setAttribute('title', 'Source Title');



// clone

const h1subTitle = h1.cloneNode(false); // content is not needed
const footer = row.cloneNode();
footer.classList.add('footer');

const footerCol2 = footerCol1.cloneNode(false);


//add text

h1.textContent = ' TRIBUTE PAGE';
deadpoolSpan.textContent = 'DEADPOOL';
deadpoolP.textContent = 'WITH GREAT POWER COMES GREAT ';
deadpoolSpan2.textContent = 'IRRESPONSIBILITY';

h1subTitle.textContent = 'TIMELINE';

bqtext.textContent = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
bqcite.textContent = 'Someone with a great ass';

footerText.textContent = 'All rights and lefts reserved.';

//paste

jumbotron.append(titlecontainer);
titlecontainer.append(h1);
h1.prepend(deadpoolSpan);
titlecontainer.append(deadpoolP);
deadpoolP.append(deadpoolSpan2);

jumbotron.append(imgContainer);
imgContainer.append(mainImg);

jumbotron.append(subTitleContainer);
subTitleContainer.append(h1subTitle);

jumbotron.append(listContainer);
listContainer.append(timelineList);



// ****** timeline list *********

const timelineListText = [
    ['SOME YEAR', ' - BORN IN CANADA AS WADE WILSON.'],
['SOME OTHER YEAR', ' - HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.'],
['SOME OTHER DIFERENT YEAR', ' - WADE BEGAN MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.'],
['YET ANOTHER YEAR', ' - IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.'],
['YESTERDAY?', ' - LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.'],
['NO...', ' - IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM '],
['WHO CARES?', ' - HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE'],
['DUNNO', ' - DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.'],
['MEEH', ' - IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD'],
['????', ' - FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL '],
['@$%^#', ' - WHY DO YOU KEEP READING, THIS IS SO BORING...']
    ];

let listFrag = document.createDocumentFragment();
for (let itemText of timelineListText) {
    let timelineLI = document.createElement('li');
    timelineLI.classList.add('list-item');
    timelineLI.textContent = itemText[1];

    let timelineSpan = document.createElement('span');
    timelineSpan.classList.add('red-text');
    timelineSpan.textContent = itemText[0];

    timelineLI.prepend(timelineSpan);
    listFrag.append(timelineLI);
}
timelineList.append(listFrag);


// ******* clone mainImg ************

const imgContainer2 = imgContainer.cloneNode(true);
const mainImg2 = mainImg.cloneNode(false);
imgContainer2.children[0].setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');


// ******* clone subTitle ***********

// NOTE: the position of this code block is very important!
// cloning must be performed after the original element has been created, set up ALL nested elements appended (!)

const subTitleContainer2 =  subTitleContainer.cloneNode(true); // cloning along with nested <h1>
subTitleContainer2.children[0].textContent = 'QUOTE'; // first nested element <h1>; children is a pseudo-array (!)


// ****** footer list *********

const footerListText = [
    ['https://www.freecodecamp.com/', 'CodeCamp'],
    ['http://www.foxmovies.com/movies/deadpool', 'Assets and idea'],
    ['http://marvel.com/universe/Deadpool_(Wade_Wilson)', 'Info'],
    ['https://twitter.com/deadpoolmovie', 'The best twitter ever']
];

listFrag = document.createDocumentFragment();
for (let itemText of footerListText) {
    let footerLI = document.createElement('li');
    // footerLI.textContent = itemText[0];

    let footerLink = document.createElement('a');
    footerLink.setAttribute('href', itemText[0]);
    footerLink.textContent = itemText[1];

    footerLI.append(footerLink);
    listFrag.append(footerLI);
}
listFrag.children[0].prepend('Made as a ');
listFrag.children[0].append(' project');

// paste (cont'd)

jumbotron.append(imgContainer2);
jumbotron.append(subTitleContainer2);

jumbotron.append(row);
row.append(col);
col.append(bq);
bq.append(bqtext);
bq.append(bqfooter);
bqfooter.append(bqcite);

jumbotron.append(footer);
footer.append(footerCol1);
footerCol1.append(footerText);
footer.append(footerCol2);
footerCol2.append(footerList);
footerList.append(listFrag);


