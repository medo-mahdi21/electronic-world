var sessionString = sessionStorage.getItem('phonesList');
var myArr = JSON.parse(sessionString);
console.log(myArr);
var total = 0;
let txt = `

      <table class="table table-bordered table-dark table-sm ">
        <thead>
        <tr>
         <th scope="col">#</th>
         <th scope="col">Model</th>
          <th scope="col">Price</th>
  
        </tr>


`;
for (let i = 0; i < myArr.length/2 ; i++){
      txt += `      <tr>
      <th scope="row">${i+1}</th>
      <td id="model${i+1}">${myArr[i*2]}</td>
      <td id="price1${i+1}">${myArr[i*2+1]} $</td>
      
    </tr>`;
     total +=parseInt( myArr[i*2+1]);
     

      

  }
  total +=` $`;
  console.log(total);
  txt += `    </thead>
  <tbody>

  </tbody>
  </table>`;
  txt += `   <table class="table table-bordered table-dark table-sm mt-5 ">
  <thead>
  <tr>
   <th scope="col">#</th>
   <th scope="col">#</th>
    <th scope="col">Total</th>

  </tr>
  <tr>
  <td scope="row">#</th>
  <td >#</th>
   <td >${total}</th>

 </tr>
  `;
  txt += `    </thead>
  <tbody>

  </tbody>
  </table>`;
  txt += ` <div class="col text-center">
  <button class="btn btn-danger m-5" onclick="document.location = 'products1.html'">Discard</button>
  <button class="btn btn-success m-5" onclick="check()" >Buy</button>
</div>`;








  document.getElementById('body').innerHTML += txt;
  
  function check(){
    if(total == '0 $'){
      document.getElementById('alert1').style.display = 'block';
    }
    else{
      document.getElementById('spinner').style.display = 'block';
      function loading(){
        
        window.location = 'checkout.html';
        document.getElementById('spinner').style.display = 'none';

      }
      setTimeout(loading,5000);
      
    }
    
  }
  function hidee(){
    document.getElementById('alert1').style.display = 'none';
    
 }
 

 

 

 