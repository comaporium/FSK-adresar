function getStudentsFromStorage() {
    return JSON.parse(sessionStorage.getItem('studenti'))
}

function setStudentsToStorage(students) {
    sessionStorage.setItem('studenti', JSON.stringify(students))
}

function ubacistudentaUStorage(a,b,c,d,e,f){
    var studenti = []
    var studentiIzStorage = JSON.parse(sessionStorage.getItem('studenti'))
    if (studentiIzStorage != null) studenti = studentiIzStorage
    let student = {
        ime: a,
        prezime: b,
        index: c,
        smjer: d,
        ciklus: e,
        semestar: f
    }
    studenti.push(student)
    setStudentsToStorage(studenti)
    document.getElementById('ime').value = "";
    document.getElementById('prezime').value = "";
    document.getElementById('index').value = "";
    document.getElementById('smjer').value = "";
    document.getElementById('ciklus').value = "";
    document.getElementById('semestar').value = "";
}

function prikaziStudentaIzStorage(StudentID){
    console.log(getStudentsFromStorage());
    var trazeniStudent = pronadjiStudenta(StudentID);
    if (trazeniStudent === undefined){
        document.getElementById("ispis").innerHTML = 'Traženi student nije u sistemu';
    } else {
        document.getElementById("ispis").innerHTML = 'Traženi student: ' + trazeniStudent.ime + ' ' + trazeniStudent.prezime;
    }
}

function pronadjiStudenta(ID){
    return getStudentsFromStorage().find(student => student.index === ID);
}