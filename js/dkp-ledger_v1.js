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

    // td0 = Date
    // td1 = Tier
    // td2 = Loot Mode
    // td3 = Player
    // td4 = DKP Before
    // td5 = DKP After
    // td6 = Message
    var dateCell = row.insertCell(0);
    var contentTierCell = row.insertCell(1);
    var lootModeCell = row.insertCell(2);
    var playerCell = row.insertCell(3);
    var dkpBeforeCell = row.insertCell(4);
    var dkpAfterCell = row.insertCell(5);
    var messageCell = row.insertCell(6);

    // Add some text to the new cells:
    dateCell.innerHTML = transactionHistoryJson[i].ReadableTimestamp;
    contentTierCell.innerHTML = transactionHistoryJson[i].ContentTier;
    lootModeCell.innerHTML = transactionHistoryJson[i].LootMode;
    playerCell.innerHTML = transactionHistoryJson[i].Recipient;
    dkpBeforeCell.innerHTML = transactionHistoryJson[i].DKPBefore;
    dkpAfterCell.innerHTML = transactionHistoryJson[i].DKPAfter;
    messageCell.innerHTML = transactionHistoryJson[i].Message;
  }
}
