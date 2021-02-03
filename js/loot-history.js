// JavaScript Document

/* JSON READING */
var timestampDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootHistory_Timestamp_Desc.json';
var timestampDescRequest = new XMLHttpRequest();
timestampDescRequest.open('GET', timestampDescUrl);
timestampDescRequest.responseType = 'json';
timestampDescRequest.send();

timestampDescRequest.onload = function () {
  var lootHistoryJson = timestampDescRequest.response;
  populateLootHistory(lootHistoryJson);
}

function populateLootHistory(lootHistoryJson) {
  for (var i = 0; i < lootHistoryJson.length; i++) {

    var table = document.getElementById("loot-history-table");

    // Need to offset by one to account for the title row
    var row = table.insertRow(i + 1);

    // td0 = Player
    // td1 = Loot Mode
    // td2 = Date
    // td3 = Item
    var playerCell = row.insertCell(0);
    var lootModeCell = row.insertCell(1);
    var dateCell = row.insertCell(2);
    var itemCell = row.insertCell(3);

    // Add some text to the new cells:
    playerCell.innerHTML = lootHistoryJson[i].Recipient;
    lootModeCell.innerHTML = lootHistoryJson[i].LootMode;
    dateCell.innerHTML = lootHistoryJson[i].Timestamp;
    itemCell.innerHTML = '<a href="https://classic.wowhead.com/item=' + lootHistoryJson[i].ItemID + '" target="_blank" rel="noopener"> ItemID: ' + lootHistoryJson[i].ItemID + '</a>';
  }
}
