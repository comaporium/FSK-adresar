const students = [
];

function ubacistudenta(a,b,c,d,e,f){
    var student = {
        ime: a,
        prezime: b,
        index: c,
        smjer: d,
        ciklus: e,
        semestar: f
    }

    students.push(student);
}

function prikazi(a){
    let student = students.find(student => student.index === a);
    document.getElementById("ispis").innerHTML = 'Traženi student: ' + student.ime + ' ' +student.prezime;
    //Promjena 
}