// JavaScript Document

/* JSON READING */
var transactionHistoryLambdaUrl = 'https://tzugcssgve.execute-api.us-west-1.amazonaws.com/Base/gettransactionhistory?playerName=Akaran&lootMode=ALL&contentTier=T4';
var transactionHistoryLambdaRequest = new XMLHttpRequest();
transactionHistoryLambdaRequest.open('GET', transactionHistoryLambdaUrl);
transactionHistoryLambdaRequest.responseType = 'json';
transactionHistoryLambdaRequest.send();

transactionHistoryLambdaRequest.onload = function () {
  var transactionHistoryJson = transactionHistoryLambdaRequest.response;
  var statusCode = transactionHistoryLambdaRequest.status;
  populateLedger(transactionHistoryJson);
}

function populateLedger(transactionHistoryJson) {
  var tableBody = document.getElementById("loot-history-table-body");
  for (var i = 0; i < transactionHistoryJson.length; i++) {

    // Need to offset by one to account for the title row
    var row = tableBody.insertRow(i);

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

/*
 * When the website user types a player name in the search bar and clicks "Go", we initiate
 * a new request to the lambda with the given query params and then reload the contents of
 * the table
 */
function queryLedger(playerName, lootMode, contentTier) {
  // Clear the existing table
  clearTable();

  var transactionHistoryLambdaUrl = 'https://tzugcssgve.execute-api.us-west-1.amazonaws.com/Base/gettransactionhistory?playerName=' + playerName + '&lootMode=' + lootMode + '&contentTier=' + contentTier;
  var transactionHistoryLambdaRequest = new XMLHttpRequest();
  transactionHistoryLambdaRequest.open('GET', transactionHistoryLambdaUrl);
  transactionHistoryLambdaRequest.responseType = 'json';
  transactionHistoryLambdaRequest.send();

  transactionHistoryLambdaRequest.onload = function () {
    var transactionHistoryJson = transactionHistoryLambdaRequest.response;
    var statusCode = transactionHistoryLambdaRequest.status;

    // If we got an Error, a message will be included in the response. We simply surface this message
    if (statusCode == 500) {
      var errorMsg = transactionHistoryJson.ErrorMessage;
      var tableBody = document.getElementById("loot-history-table-body");
      var row = tableBody.insertRow(0);
      var errorCell = row.insertCell(0);
      errorCell.innerHTML = errorMsg;
      errorCell.setAttribute("colspan", 7);
      return;
    }

    // Re-populate the table with the new rows
    populateLedger(transactionHistoryJson);
  }
}

function clearTable() {
  var tableBody = document.getElementById("loot-history-table-body");
  tableBody.innerHTML = "";
}

// Whenever the user hits the Enter key from inside the input text field, execute a click on the "Go" button
var input = document.getElementById("ledger-input-text");
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("ledger-go-button").click();
  }
});