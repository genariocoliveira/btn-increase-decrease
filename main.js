let dis = document.querySelector('.display').value
let btn1 = document.querySelector('.down')
function down(){
  if(document.querySelector('.display').value == '1'){
    btn1.setAttribute('disabled');  
  }elif(document.querySelector('.display').value !== '1'){
  document.querySelector('.display').value --
  btn1.removeAttribute('disabled');  
  }
}
function up(){
document.querySelector('.display').value ++
}
