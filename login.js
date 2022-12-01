let arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

let myArr = [];
for(let i=0;i<arr.length;i++){

  let stu_grade = arr[i].grade;
  let arr_stu = arr[i].students;
  let arr_obj = [];
  let max = 0;
  for(let j=0;j<arr_stu.length;j++){
    let stu_name = arr_stu[j].name;
    let stu_marks = arr_stu[j].marks;
    let sum = 0;
    let obj = {};
    for(let k=0;k<stu_marks.length;k++){
      sum = sum+stu_marks[k];
     
    }
    // max = sum;
    obj["g"] = arr[i].grade;
    obj["s"] = arr_stu[j].name;
    obj["m"] = sum;
    arr_obj.push(obj);
 
    
  }
  
  myArr.push(arr_obj);
  
}

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length-1; j++) {
    if(myArr[i][j].m > myArr[i][j+1]){
      console.log(myArr[i][j].g +"-"+ myArr[i][j].s+"-"+ myArr[i][j].m);
      
    }else{
      console.log(myArr[i][j+1].g +"-"+ myArr[i][j+1].s +"-"+ myArr[i][j+1].m);
     
    }
  }
}

