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
    // td1 = Date
    // td2 = Loot Mode
    // td3 = Tier
    // td4 = Item
    var playerCell = row.insertCell(0);
    var dateCell = row.insertCell(1);
    var lootModeCell = row.insertCell(2);
    var contentTierCell = row.insertCell(3);
    var itemCell = row.insertCell(4);

    // Add some text to the new cells:
    playerCell.innerHTML = lootHistoryJson[i].Recipient;
    dateCell.innerHTML = lootHistoryJson[i].Timestamp;
    lootModeCell.innerHTML = lootHistoryJson[i].LootMode;
    contentTierCell.innerHTML = lootHistoryJson[i].ItemTier;
    itemCell.innerHTML = '<a href="https://classic.wowhead.com/item=' + lootHistoryJson[i].ItemID + '" target="_blank" rel="noopener">' + lootHistoryJson[i].ItemName + '</a>';
  }
}
