
let grades = [];
for (let i=0; i<12;i++){
    grades.push(Math.floor(Math.random()*100));
}

console.log(grades);
const gradesOfStudents = document.getElementById("grades");
gradesOfStudents.textContent = "Оценки студентов: " + grades;

//средний балл студентов
let averageGrade = 0;
grades.forEach((grade) => {
    averageGrade += grade;
});
const avGrade = document.getElementById("avGrade");
avGrade.textContent = "Средний балл студентов равен: " + averageGrade/grades.length;


//количество студентов, получивших положительную оценку
const goodGrade = grades.filter((grade) => {
    if(grade >=60){
        return grade;
    }
});

const goodGradesStudents = document.getElementById("goodGrades");
goodGradesStudents.textContent = "Количество студентов, получивших положительную оценку: " + goodGrade.length;
//количество студентов, получивших отрицательную оценку
const negativeGrade = grades.filter((grade) => {
    if(grade <60){
        return grade;
    }
});

const negativeGradesStudents = document.getElementById("negativeGrades");
negativeGradesStudents.textContent = "Количество студентов, получивших отрицательную оценку: " + negativeGrade.length;
//Минимальный балл среди студентов
grades.sort(function(a, b) {
    return a - b;
  });
  
  const minGrade = document.getElementById("minGrade");
  minGrade.textContent = "Минимальный балл среди студентов: " + grades[0];
  
//Максимальный балл среди студентов
  grades.sort(function(a, b) {
    return b - a;
  });
  
  const maxGrade = document.getElementById("maxGrade");
  maxGrade.textContent = "Максимальный балл среди студентов: " + grades[0];

//Буквенные оценки студентов
const letterGrades = grades.map(grade => {
    if (grade >= 80) {
      return grade +" = A";
    } else if (grade >= 60) {
      return grade +" = B";
    } else if (grade >= 40) {
      return grade +" = C";
    } else if (grade >= 20) {
      return grade + " = D";
    } else {
      return  grade +" = E";
    }
  });
  
  const letterGradesOfStudents = document.getElementById("letterGrades");
  letterGradesOfStudents.textContent = "Буквенные оценки студентов: " + letterGrades;