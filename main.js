var courseName = document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var addbutton = document.querySelector("#click");
var courses=[];
var deletallbtn = document.querySelector("#deleteBtn");
var inputs=document.querySelectorAll(".inputs");
addbutton.addEventListener("click", function(e) {
    e.preventDefault();
    addCourse ();
    reset();
    displyData();

});

function addCourse (){
    var course = {
        name : courseName.value,
        category : courseCategory.value,
        capacity : courseCapacity.value,
        price : coursePrice.value,
        description : courseDescription.value,

    }
    courses.push(course);
    console.log(courses);
}
function reset (){
   for(var i=0; i<inputs.length; i++){
    inputs[i].value="";
   }


}
function displyData(){
    var result=``;
    for(var i=0;i<courses.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
        <td>${courses[i].name}</td>
        <td>${courses[i].capacity}</td>
        <td>${courses[i].category}</td>
        <td>${courses[i].price}</td>
        <td>${courses[i].description}</td>
        <td><button class="btn btn-outline-info">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteCourse(${i})">Delete</button></td>

        </tr>
        
        `;

    }
    document.getElementById("data").innerHTML=result;
}
function deleteCourse(id){
 courses.splice(id, 1);
 displyData();
}
deletallbtn.addEventListener("click", function(e){
   courses.length=0;
   displyData();
});
