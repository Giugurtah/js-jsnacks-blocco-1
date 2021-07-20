var italianTeams = [
    {
        name : "SSC Napoli",
        city : "Napoli",
        points : 4,
    },
    {
        name : "Milan",
        city : "Milano",
        points : 9,
    },
    {
        name : "Fiorentina",
        city : "Firenze",
        points : 3,
    },
];
var displayTableElement = document.getElementById("display_table");
var message = "";

message = "<tr>"
for (var key in italianTeams[0]) {
    message += "<th>" + key.charAt(0).toUpperCase() + key.slice(1) + "</th>";
}
message += "</tr>"
for (var i = 0; i<italianTeams.length; i++) {
    message += "<tr>";
    for (var key in italianTeams[i]) {
        message += "<td>" + italianTeams[i][key] + "</td>";
    }
    message += "</tr>";
}

displayTableElement.innerHTML = message;
