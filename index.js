// fill in javascript code here

let forms=document.querySelector('form');
let input1=document.getElementById('name')
let input2=document.getElementById('employeeID')
let input3=document.getElementById('department')
let input4=document.getElementById('exp')
let input5=document.getElementById('email')
let input6=document.getElementById('mbl')
let tbody=document.querySelector('tbody')


let allData=[]

forms.addEventListener('submit',function(e){
    e.preventDefault()
    let obj={}
    obj.employeName=input1.value
    obj.employeID=input2.value
    obj.employeDepart=input3.value
    obj.employeExp=input4.value
    obj.employeEmail=input5.value
    obj.employeMbl=input6.value
    obj.employeRole=input4.value

   
    allData.push(obj)
    tbody.innerHTML=null
    allData.map((ele)=>{
        let row=document.createElement('tr')
        let td1=document.createElement('td')
        let td2=document.createElement('td')
        let td3=document.createElement('td')
        let td4=document.createElement('td')
        let td5=document.createElement('td')
        let td6=document.createElement('td')
        let td7=document.createElement('td')
        let btn=document.createElement('button')
       
       

        td1.innerText=ele.employeName
        td2.innerText=ele.employeID
        td3.innerText=ele.employeDepart
        td4.innerText=ele.employeExp
        td5.innerText=ele.employeEmail
        td6.innerText=ele.employeMbl
        td7.innerText=ele.employeExp
        btn.innerText="Delete"
        
        
      
        
        if(td7.innerText > 5){
            td7.innerText="Senior"
        }else if(td7.innerText>=2 && td7.innerText<=5){
            td7.innerText="Junior"
        }else if(td7.innerText<=1 || td7.innerText==1){
            td7.innerText="Fresher"
        }
        
        
      
        row.append(td1,td2,td3,td4,td5,td6,td7,btn)
        tbody.append(row)
        

        btn.addEventListener('click',function(){
           
            row.innerText=""
            
            
    
        })
            
           
    })
    
        
     
})

