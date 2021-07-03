// JavaScript Document

/* JSON READING */
var transactionHistoryLambdaUrl = 'https://tzugcssgve.execute-api.us-west-1.amazonaws.com/Base/gettransactionhistory';
var transactionHistoryLambdaRequest = new XMLHttpRequest();
transactionHistoryLambdaRequest.open('GET', transactionHistoryLambdaUrl);
transactionHistoryLambdaRequest.responseType = 'json';
transactionHistoryLambdaRequest.send();

transactionHistoryLambdaRequest.onload = function () {
  var transactionHistoryJson = transactionHistoryLambdaRequest.response;
  populateLedger(transactionHistoryJson);
}

function populateLedger(transactionHistoryJson) {
  for (var i = 0; i < transactionHistoryJson.length; i++) {

    var table = document.getElementById("loot-history-table");

    // Need to offset by one to account for the title row
    var row = table.insertRow(i + 1);

    // td0 = Player
    // td1 = Date
    // td2 = Tier
    // td3 = Loot Mode
    // td4 = DKP Before
    // td5 = DKP After
    // td6 = Message
    var playerCell = row.insertCell(0);
    var dateCell = row.insertCell(1);
    var contentTierCell = row.insertCell(2);
    var lootModeCell = row.insertCell(3);
    var dkpBeforeCell = row.insertCell(4);
    var dkpAfterCell = row.insertCell(5);
    var messageCell = row.insertCell(6);

    var dkpBefore = parseFloat(transactionHistoryJson[i].DKPBefore.N);
    var dkpAfter = parseFloat(transactionHistoryJson[i].DKPAfter.N);
    var dkpAfterColor = "black";
    if (dkpAfter > dkpBefore) {
      dkpAfterColor = "green";
    } else if (dkpAfter < dkpBefore) {
      var dkpAfterColor = "red";
    }

    // Add some text to the new cells:
    dateCell.innerHTML = transactionHistoryJson[i].ReadableTimestamp.S;
    contentTierCell.innerHTML = transactionHistoryJson[i].ContentTier.S;
    lootModeCell.innerHTML = transactionHistoryJson[i].LootMode.S;
    playerCell.innerHTML = transactionHistoryJson[i].Recipient.S;
    dkpBeforeCell.innerHTML = transactionHistoryJson[i].DKPBefore.N;
    dkpAfterCell.innerHTML = "<span style='color:" + dkpAfterColor + "'>" + transactionHistoryJson[i].DKPAfter.N + "</span>";
    messageCell.innerHTML = transactionHistoryJson[i].Message.S;
  }
}
