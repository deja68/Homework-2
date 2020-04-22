(function() {
    let userInput;
    let input  = document.getElementById("numCharacters");
    input.addEventListener("mouseup", function() {
      userInput = input.value ; //Get the value
    }, false);
    let deleteContainer = document.getElementById("deleteContainer");
    let squaresContainer = document.getElementById("squaresContainer");
    let wrapper = document.getElementById("wrapper");

    
    
    input.addEventListener("keyup", function() {
        userInput = input.value//Get the value
        if(event.keyCode === 13){
            event.preventDefault();
            //When the user clicks enter, squares are added to the div
            for(let i=0; i < userInput; i++){
                crud();
            }
        }
    }, false);
 
    
    let plusBtn =  document.getElementById("plus");
    let str = "";
    function crud(){
        let square = document.createElement("input");
        square.size="1";
        square.type = "text";
        square.maxLength="1";
        square.class = "squares";
        squaresContainer.appendChild(square);
        
        let deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerHTML = "X";
        deleteBtn.style.width = "40px";
        deleteBtn.class = "delete";
        deleteContainer.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function(){
            this.parentNode.removeChild(this);
            square.parentNode.removeChild(square);
       });

       
       //tip: move between fields with mouse click, not with tab
       square.addEventListener("keyup", function(){
            let squareValue = this.value;
            str += squareValue;
            for(let i=0; i<str.length; i++){
                if(palindrome(str) != true){
                    console.log("String " + str + " isn't palindrome");
                } else{
                    console.log("String " + str + " is palindrome");
                }
            }
            let regEx = /[A-Za-z ]/;
            let result = regEx.test(squareValue);
            if(result === false)
                alert("Inavlid input! Enter again");
        });
        
    }

    plusBtn.addEventListener("click", crud);

    function palindrome(str){
        let re = /[\W_]/g;
        let lowRegStr = str.toLowerCase().replace(re, '');
        let reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
    }


})();

