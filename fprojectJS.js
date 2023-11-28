document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("Meal").addEventListener("click", function () {

        const email = document.getElementById("Email").value
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
            var table = document.createElement("table");
            table.id = "myTable";

            for (let i = 0; i < info.length; i++) {
                const rows = table.insertRow(i);

                for (let j = 0; j < info[i].length; j++) {
                    const cells = rows.insertCell(j);
                    cells.innerHTML = info[i][j];
                }

            };

            document.body.appendChild(table);

            myText = "<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n";
            myText += "</body>\n</html>";


            flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200');
            flyWindow.document.write(myText)
            flyWindow.document.write(intro.outerHTML);
            flyWindow.document.write(table.outerHTML)
            flyWindow.document.write("")

            const clear = document.createElement("button")
            clear.id = "clears"
            

        
        } else {
            alert("You have entered an invalid email address!")
            return (false)
        }
    });

    
});
