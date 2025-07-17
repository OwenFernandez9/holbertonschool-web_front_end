function createClassRoom (numbersOFStudents) {
    function studentSeat (seat){ 
        return function() {
            return seat
        }
    }
    let students = [];

    for (let i = 0; i < numbersOFStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students
}

const classRoom = createClassRoom(10);