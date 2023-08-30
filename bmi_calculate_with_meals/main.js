var weight, height, age, measure, bmi, error;

function calculate() {

    // enter variable to value 
    age = document.getElementById("age").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value; 
    error = "please re-measure the details or check the value.";
    height /= 100;
    height *= height;
    
    // caluate the bmi
    bmi = weight/height;
    bmi = bmi.toFixed(1);

    //  if (age <= 35 && age >= 5) {
    //     measure = "Your over the age : " + age  + " . This is  calculator not for you.";    

     

        if (bmi <= 18.4) {
            measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            measure = "Your BMI is " + bmi + " which means " + "you are Health Weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            measure = "Your BMI is " + bmi + " which means " + "you are Overweight";
        } else if (bmi >= 30) {
            measure = "Your BMI is " + bmi + " which means " + "you are obese!!!";
        }    
    
        // weight element to html code checks

            if (weight === 0) {
                    document.getElementById("results").innerHTML = error;
                
            } else if(height === 0) {
                    document.getElementById("results").innerHTML = error;
            } else if (age === 0) {
                    document.getElementById("results").innerHTML = error;
            } else {
                document.getElementById("results").innerHTML = measure;
            }
            if (weight < 0) {
                document.getElementById("results").innerHTML = "Negative Values not Allowed";
            }
        
    } 