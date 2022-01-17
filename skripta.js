
function getStudentsFromStorage(){
    return JSON.parse(sessionStorage.getItem('studenti'))
}

function setStudentsToStorage(students){
    sessionStorage.setItem('studenti', JSON.stringify(students))
}

function dodaj(a, b, c){
    var studenti=[];
    var studentsFromStorage = JSON.parse(sessionStorage.getItem('studenti'))
    if(studentsFromStorage != null) studenti = studentsFromStorage;

   let student = {
       ime:a,
       prezime:b,
       indeks:c
   }

    studenti.push(student);
    setStudentsToStorage(studenti);
    document.getElementById('ime').value = "";
    document.getElementById('prezime').value = "";
    document.getElementById('indeks').value = "";

    console.log(getStudentsFromStorage());

}


function pretrazi(StudentID){
    console.log(getStudentsFromStorage());
    var foundStudent = findStudent(StudentID);

    if(foundStudent === undefined){
        document.getElementById("ispis").innerHTML = "Nije pronadjen student sa tim indeksom";
    }else{
        document.getElementById("ispis").innerHTML = 'Traženi student: ' + foundStudent.ime + ' ' + foundStudent.prezime;
    }
}


function findStudent(ID){
    return getStudentsFromStorage().find(student => student.indeks === ID);
}

/*
function ispisi(){
var studentsTableHTML = "";
var studenti2 = getStudentsFromStorage();
for(let i=0; i < studenti2.length; i++){
    studentsTableHTML += `${studenti2[i].indeks} -
    ${studenti2[i].ime} - ${studenti2[i].prezime} <br>`
}

document.getElementById("container").innerHTML=studentsTableHTML;
}
*/


function automatskoLoadanje(){
        var studentsTableHTML = "";
        var studenti2 = getStudentsFromStorage();
        for(let i=0; i < studenti2.length; i++){
            studentsTableHTML += `${studenti2[i].indeks} |
            ${studenti2[i].ime} | ${studenti2[i].prezime} <hr>`
        }
        
        document.getElementById("container").innerHTML=studentsTableHTML;
}