document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("Meal").addEventListener("click", function () {

        const email = document.getElementById("Email").value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            var meal1 = document.getElementById("m1").value;
            var meal2 = document.getElementById("m2").value;
            var meal3 = document.getElementById("m3").value;
            var meal4 = document.getElementById("m4").value;
            var meal5 = document.getElementById("m5").value;
            var info = [
                ["Day", "Meal 1", "Meal 2", "Meal 3", "Meal 4", "Meal 5"],
                ["Monday", meal1, meal2, meal3, meal4, meal5],
                ["tuesday", meal1, meal2, meal3, meal4, meal5],
                ["Wensenday", meal1, meal2, meal3, meal4, meal5],
                ["Thursday", meal1, meal2, meal3, meal4, meal5],
                ["Friday", meal1, meal2, meal3, meal4, meal5],
                ["Saturday", meal1, meal2, meal3, meal4, meal5],
                ["Sunday", meal1, meal2, meal3, meal4, meal5]
            ];

            const name = document.getElementById("name").value

            const intro = document.createElement("p")
            intro.textContent = "Hello " + name + " here is your meal plan for the week!!";
            // Make a for loop that creates a table and populates that table with the col head being the day of the week and the row head being the meal #'s
            var table = document.getElementById("myTable")
            for (let i = 0; i < info.length; i++) {
                const rows = table.insertRow(i);

                for (let j = 0; j < info[i].length; j++) {
                    const cells = rows.insertCell(j);
                    cells.innerHTML = info[i][j];
                }

            };

            document.body.appendChild(table);


            Print = "<button type=button onclick=window.print()>Print</button>"
            
            
            
            clear.addEventListener('click', function(){
                table.innerHTML = ""
                flyWindow.document.body.innerHTML = ""

            })
            

            myText = "<html>\n<head>\n<title>Welcome</title>\n";
            myText += "<style>\n";
            myText += "body { font-family: 'Arial', sans-serif; text-align: center; background-color: #f4f4f4; }\n";
            myText += "header { background-color: #333; color: white; padding: 1em; }\n";
            myText += "p { margin: 10px 0; font-size: 1.2em; }\n";
            myText += "button { background-color: #4CAF50; color: white; padding: 10px 20px; margin: 5px; font-size: 1em; border: none; border-radius: 5px; cursor: pointer; }\n";
            myText += "table { margin-top: 20px; width: 80%; border-collapse: collapse; margin-left: auto; margin-right: auto; }\n";
            myText += "th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n";
            myText += "th { background-color: #4CAF50; color: white; }\n";
            myText += "</style>\n</head>\n<body>\n";

            myText += "</body>\n</html>";

            flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200');
            flyWindow.document.write(myText)
            flyWindow.document.write(intro.outerHTML);
            flyWindow.document.write(table.outerHTML);
            flyWindow.document.write(Print);
            
            
            const downloadButton = document.getElementById("downloadButton");

            downloadButton.addEventListener("click", function () {
                html2canvas(flyWindow.document.body).then(function (canvas) {
                    const dataURL = canvas.toDataURL("image/png");

                    const a = document.createElement("a");
                    a.href = dataURL;
                    a.download = "meal_plan_flywindow.png";

                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                });
            });

        
        } else {
            alert("You have entered an invalid email address!")
            return (false);
        }
    });

    
});
