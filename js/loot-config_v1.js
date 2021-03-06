// JavaScript Document

/* JSON READING */
var section = document.querySelector('section');

/* Load T3 Prio Descending */
var t3PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T3Priority_Desc.json';
var t3PrioDescRequest = new XMLHttpRequest();
t3PrioDescRequest.open('GET', t3PrioDescUrl);
t3PrioDescRequest.responseType = 'json';
t3PrioDescRequest.send();

t3PrioDescRequest.onload = function () {
  var lootConfigJson = t3PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t3-prio-desc");
  filterByClass("t3-prio-desc");
}

/* Load T3 Lotto Descending */
var t3LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T3Lottery_Desc.json';
var t3LottoDescRequest = new XMLHttpRequest();
t3LottoDescRequest.open('GET', t3LottoDescUrl);
t3LottoDescRequest.responseType = 'json';
t3LottoDescRequest.send();
t3LottoDescRequest.onload = function () {
  var lootConfigJson = t3LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t3-lotto-desc");
  filterByClass("t3-lotto-desc");
}

/* Load T2.5 Prio Descending */
var t2pt5PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T2PT5Priority_Desc.json';
var t2pt5PrioDescRequest = new XMLHttpRequest();
t2pt5PrioDescRequest.open('GET', t2pt5PrioDescUrl);
t2pt5PrioDescRequest.responseType = 'json';
t2pt5PrioDescRequest.send();

t2pt5PrioDescRequest.onload = function () {
  var lootConfigJson = t2pt5PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t2pt5-prio-desc");
  filterByClass("t2pt5-prio-desc");
}

/* Load T2.5 Lotto Descending */
var t2pt5LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T2PT5Lottery_Desc.json';
var t2pt5LottoDescRequest = new XMLHttpRequest();
t2pt5LottoDescRequest.open('GET', t2pt5LottoDescUrl);
t2pt5LottoDescRequest.responseType = 'json';
t2pt5LottoDescRequest.send();
t2pt5LottoDescRequest.onload = function () {
  var lootConfigJson = t2pt5LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t2pt5-lotto-desc");
  filterByClass("t2pt5-lotto-desc");
}

/* Load T2 Prio Descending */
var t2PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T2Priority_Desc.json';
var t2PrioDescRequest = new XMLHttpRequest();
t2PrioDescRequest.open('GET', t2PrioDescUrl);
t2PrioDescRequest.responseType = 'json';
t2PrioDescRequest.send();

t2PrioDescRequest.onload = function () {
  var lootConfigJson = t2PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t2-prio-desc");
  filterByClass("t2-prio-desc");
}

/* Load T2 Lotto Descending */
var t2LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T2Lottery_Desc.json';
var t2LottoDescRequest = new XMLHttpRequest();
t2LottoDescRequest.open('GET', t2LottoDescUrl);
t2LottoDescRequest.responseType = 'json';
t2LottoDescRequest.send();
t2LottoDescRequest.onload = function () {
  var lootConfigJson = t2LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t2-lotto-desc");
  filterByClass("t2-lotto-desc");

}

/* Load T1 Prio Descending */
var t1PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T1Priority_Desc.json';
var t1PrioDescRequest = new XMLHttpRequest();
t1PrioDescRequest.open('GET', t1PrioDescUrl);
t1PrioDescRequest.responseType = 'json';
t1PrioDescRequest.send();
t1PrioDescRequest.onload = function () {
  var lootConfigJson = t1PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t1-prio-desc");
  filterByClass("t1-Prio-desc");
}

/* Load T1 Lotto Descending */
var t1LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T1Lottery_Desc.json';
var t1LottoDescRequest = new XMLHttpRequest();
t1LottoDescRequest.open('GET', t1LottoDescUrl);
t1LottoDescRequest.responseType = 'json';
t1LottoDescRequest.send();
t1LottoDescRequest.onload = function () {
  var lootConfigJson = t1LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t1-lotto-desc");
  filterByClass("t1-lotto-desc");
}

// Pulls the dateModified value from the JSON response and sets it in the header at the top of the page
function populateLastCheckedTimestamp(jsonObj) {
  document.getElementById("lastUpdated").innerHTML = jsonObj['dateModified'];
  document.getElementById("lastUpdated").innerHTML += ' @ ' + jsonObj['timeModified'];
}

function showRaiders(lootConfigJson, sorttype) {
  var tntRaiders = lootConfigJson['raiders'];
  var sortType = sorttype;

  for (var i = 0; i < tntRaiders.length; i++) {
    var t1PrioList = document.createElement('ul');
    var t1LottoList = document.createElement('ul');
    var t2PrioList = document.createElement('ul');
    var t2LottoList = document.createElement('ul');
    var t2pt5PrioList = document.createElement('ul');
    var t2pt5LottoList = document.createElement('ul');
    var t3PrioList = document.createElement('ul');
    var t3LottoList = document.createElement('ul');

    var myCharName = document.createElement('div');
    myCharName.setAttribute('class', 'raider-name');
    var myCharClass = document.createElement('div');
    myCharClass.setAttribute('class', 'raider-class');
    var myCharRank = document.createElement('div');
    myCharRank.setAttribute('class', 'raider-rank');

    /*
    myH2.textContent = tntRaiders[i].name;
    myPara1.textContent = 'Class: ' + tntRaiders[i].class;
    myPara5.textContext = 'Rank: ' + tntRaiders[i].Rank;
    myPara2.textContent = 'Priority DKP: ' + tntRaiders[i].PriorityDKP;
    myPara3.textContent = 'Lottery DKP: ' + tntRaiders[i].LotteryDKP;
    myPara4.textContent = 'Priority List:';
    */
    myCharName.textContent = tntRaiders[i].name;
    myCharClass.innerHTML = tntRaiders[i].class + " <span class='display-sm'>&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;" + tntRaiders[i].Rank + "<span>";
    myCharRank.innerHTML = tntRaiders[i].Rank;

    /* T1 */
    var t1PrioPlayerLootConfig = tntRaiders[i].T1_PriorityConfig;
    for (var j = 0; j < t1PrioPlayerLootConfig.length; j++) {
      var t1PrioListItem = document.createElement('li');
      t1PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t1PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t1PrioPlayerLootConfig[j].ItemName + '</a>';
      t1PrioList.appendChild(t1PrioListItem);
      if (t1PrioPlayerLootConfig[j].Quantity > 1) {
        t1PrioListItem.innerHTML += ' x' + t1PrioPlayerLootConfig[j].Quantity;
      }
    }
    if (t1PrioPlayerLootConfig.length == 0) {
      var t1PrioListItem = document.createElement('p');
      t1PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/npc=11956' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t1PrioList.appendChild(t1PrioListItem);
    }

    var t1LottoPlayerLootConfig = tntRaiders[i].T1_LotteryConfig;
    for (var j = 0; j < t1LottoPlayerLootConfig.length; j++) {
      var t1LottoListItem = document.createElement('li');
      t1LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t1LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t1LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t1LottoPlayerLootConfig[j].Quantity > 1) {
        t1LottoListItem.innerHTML += ' x' + t1LottoPlayerLootConfig[j].Quantity;
      }
      t1LottoList.appendChild(t1LottoListItem);
    }
    if (t1LottoPlayerLootConfig.length == 0) {
      var t1LottoListItem = document.createElement('p');
      t1LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/npc=11325' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t1LottoList.appendChild(t1LottoListItem);
    }

    /* T2 */
    var t2PrioPlayerLootConfig = tntRaiders[i].T2_PriorityConfig;
    for (var j = 0; j < t2PrioPlayerLootConfig.length; j++) {
      var t2PrioListItem = document.createElement('li');
      t2PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t2PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t2PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t2PrioPlayerLootConfig[j].Quantity > 1) {
        t2PrioListItem.innerHTML += ' x' + t2PrioPlayerLootConfig[j].Quantity;
      }
      t2PrioList.appendChild(t2PrioListItem);
    }
    if (t2PrioPlayerLootConfig.length == 0) {
      var t2PrioListItem = document.createElement('p');
      t2PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22736' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t2PrioList.appendChild(t2PrioListItem);
    }

    var t2LottoPlayerLootConfig = tntRaiders[i].T2_LotteryConfig;
    for (var j = 0; j < t2LottoPlayerLootConfig.length; j++) {
      var t2LottoListItem = document.createElement('li');
      t2LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t2LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t2LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t2LottoPlayerLootConfig[j].Quantity > 1) {
        t2LottoListItem.innerHTML += ' x' + t2LottoPlayerLootConfig[j].Quantity;
      }
      t2LottoList.appendChild(t2LottoListItem);
    }
    if (t2LottoPlayerLootConfig.length == 0) {
      var t2LottoListItem = document.createElement('p');
      t2LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=3173' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t2LottoList.appendChild(t2LottoListItem);
    }

    /* T2.5 */
    var t2pt5PrioPlayerLootConfig = tntRaiders[i].T2PT5_PriorityConfig;
    for (var j = 0; j < t2pt5PrioPlayerLootConfig.length; j++) {
      var t2pt5PrioListItem = document.createElement('li');
      t2pt5PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t2pt5PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t2pt5PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t2pt5PrioPlayerLootConfig[j].Quantity > 1) {
        t2pt5PrioListItem.innerHTML += ' x' + t2pt5PrioPlayerLootConfig[j].Quantity;
      }
      t2pt5PrioList.appendChild(t2pt5PrioListItem);
    }
    if (t2pt5PrioPlayerLootConfig.length == 0) {
      var t2pt5PrioListItem = document.createElement('p');
      t2pt5PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t2pt5PrioList.appendChild(t2pt5PrioListItem);
    }

    var t2pt5LottoPlayerLootConfig = tntRaiders[i].T2PT5_LotteryConfig;
    for (var j = 0; j < t2pt5LottoPlayerLootConfig.length; j++) {
      var t2pt5LottoListItem = document.createElement('li');
      t2pt5LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t2pt5LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t2pt5LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t2pt5LottoPlayerLootConfig[j].Quantity > 1) {
        t2pt5LottoListItem.innerHTML += ' x' + t2pt5LottoPlayerLootConfig[j].Quantity;
      }
      t2pt5LottoList.appendChild(t2pt5LottoListItem);
    }
    if (t2pt5LottoPlayerLootConfig.length == 0) {
      var t2pt5LottoListItem = document.createElement('p');
      t2pt5LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t2pt5LottoList.appendChild(t2pt5LottoListItem);
    }


    /* T3 */
    var t3PrioPlayerLootConfig = tntRaiders[i].T3_PriorityConfig;
    for (var j = 0; j < t3PrioPlayerLootConfig.length; j++) {
      var t3PrioListItem = document.createElement('li');
      t3PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t3PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t3PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t3PrioPlayerLootConfig[j].Quantity > 1) {
        t3PrioListItem.innerHTML += ' x' + t3PrioPlayerLootConfig[j].Quantity;
      }
      t3PrioList.appendChild(t3PrioListItem);
    }
    if (t3PrioPlayerLootConfig.length == 0) {
      var t3PrioListItem = document.createElement('p');
      t3PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t3PrioList.appendChild(t3PrioListItem);
    }

    var t3LottoPlayerLootConfig = tntRaiders[i].T3_LotteryConfig;
    for (var j = 0; j < t3LottoPlayerLootConfig.length; j++) {
      var t3LottoListItem = document.createElement('li');
      t3LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t3LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t3LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t3LottoPlayerLootConfig[j].Quantity > 1) {
        t3LottoListItem.innerHTML += ' x' + t3LottoPlayerLootConfig[j].Quantity;
      }
      t3LottoList.appendChild(t3LottoListItem);
    }
    if (t3LottoPlayerLootConfig.length == 0) {
      var t3LottoListItem = document.createElement('p');
      t3LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t3LottoList.appendChild(t3LottoListItem);
    }

    //template
    var template = $('#hidden-template').html();
    var item = $(template).clone();


    //changing stuff in the template
    $(item).find('.priority-dkp-value.t1').html(tntRaiders[i].T1_PriorityDKP);
    $(item).find('.lottery-dkp-value.t1').html(tntRaiders[i].T1_LotteryDKP);
    $(item).find('.priority-dkp-value.t2').html(tntRaiders[i].T2_PriorityDKP);
    $(item).find('.lottery-dkp-value.t2').html(tntRaiders[i].T2_LotteryDKP);
    $(item).find('.priority-dkp-value.t2pt5').html(tntRaiders[i].T2PT5_PriorityDKP);
    $(item).find('.lottery-dkp-value.t2pt5').html(tntRaiders[i].T2PT5_LotteryDKP);
    $(item).find('.priority-dkp-value.t3').html(tntRaiders[i].T3_PriorityDKP);
    $(item).find('.lottery-dkp-value.t3').html(tntRaiders[i].T3_LotteryDKP);
    $(item).find('.t1.prio-list').html(t1PrioList);
    $(item).find('.t1.lott-list').html(t1LottoList);
    $(item).find('.t2.prio-list').html(t2PrioList);
    $(item).find('.t2.lott-list').html(t2LottoList);
    $(item).find('.t2pt5.prio-list').html(t2pt5PrioList);
    $(item).find('.t2pt5.lott-list').html(t2pt5LottoList);
    $(item).find('.t3.prio-list').html(t3PrioList);
    $(item).find('.t3.lott-list').html(t3LottoList);
    $(item).find('.card-raider').addClass(sortType);
    $(item).find('.tnt-raider').addClass(tntRaiders[i].class);
    $(item).find('.card-raider').addClass(tntRaiders[i].class);
    //$(item).find('.prio-list').addClass(tntRaiders[i].class);
    //$(item).find('.tnt-raider').append("bleh");
    $(item).find('.raider-info').append(myCharName);
    $(item).find('.raider-info').append(myCharClass);
    $(item).find('.raider-info').append(myCharRank);
    //$(item).find('.raider-info').append("boop");
    $(item).find('.raider-info').addClass(tntRaiders[i].class);

    //Append to the source
    $('#raider-list').append(item);

  }
}


/* CHECK BOXES STUFF */

$(document).ready(function () {
  $('a[href="#uncheck"]').click(function () {
    $(".filter-class-warrior").prop("checked", false);
    $(".filter-class-priest").prop("checked", false);
    $(".filter-class-mage").prop("checked", false);
    $(".filter-class-rogue").prop("checked", false);
    $(".filter-class-hunter").prop("checked", false);
    $(".filter-class-paladin").prop("checked", false);
    $(".filter-class-warlock").prop("checked", false);
    $(".filter-class-druid").prop("checked", false);

    $(".card-raider.Warrior").hide();
    $(".card-raider.Priest").hide();
    $(".card-raider.Mage").hide();
    $(".card-raider.Rogue").hide();
    $(".card-raider.Hunter").hide();
    $(".card-raider.Paladin").hide();
    $(".card-raider.Warlock").hide();
    $(".card-raider.Druid").hide();

    updateStorage();
  });

  $('a[href="#check"]').click(function () {
    $(".filter-class-warrior").prop("checked", true);
    $(".filter-class-priest").prop("checked", true);
    $(".filter-class-mage").prop("checked", true);
    $(".filter-class-rogue").prop("checked", true);
    $(".filter-class-hunter").prop("checked", true);
    $(".filter-class-paladin").prop("checked", true);
    $(".filter-class-warlock").prop("checked", true);
    $(".filter-class-druid").prop("checked", true);

    $(".card-raider.Warrior").hide();
    $(".card-raider.Priest").hide();
    $(".card-raider.Mage").hide();
    $(".card-raider.Rogue").hide();
    $(".card-raider.Hunter").hide();
    $(".card-raider.Paladin").hide();
    $(".card-raider.Warlock").hide();
    $(".card-raider.Druid").hide();

    var dropdownValue = $("#dropdown-sort").val();
    filterByClass(dropdownValue);
    updateStorage();
  });
});

var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
var $checkboxes = $("#filter-by-class :checkbox");
var $button = $("#filter-by-class button");

function updateStorage() {
  $checkboxes.each(function () {
    formValues[this.id] = this.checked;
  });
  localStorage.setItem("formValues", JSON.stringify(formValues));
}

$checkboxes.on("change", function () {
  updateStorage();
  var dropdownValue = $("#dropdown-sort").val();
  filterByClass(dropdownValue);
});

setTimeout(function () {
  initSortBy();
  var dropdownValue = $("#dropdown-sort").val();
  filterByClass(dropdownValue);
}, 600);

$button.text(formValues["buttonText"]);

function initChecks() {
  // On page load
  $.each(formValues, function (key, value) {
    $("#" + key).prop('checked', value);
  });
}

function filterByClass(sortTypeVal) {
  if ($('.filter-class-warrior').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Warrior").show();
  }
  else
    $(".card-raider.Warrior").hide();

  if ($('.filter-class-priest').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Priest").show();
  }
  else {
    $(".card-raider.Priest").hide();
  }

  if ($('.filter-class-mage').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Mage").show();
  }
  else
    $(".card-raider.Mage").hide();

  if ($('.filter-class-rogue').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Rogue").show();
  }
  else
    $(".card-raider.Rogue").hide();

  if ($('.filter-class-hunter').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Hunter").show();
  }
  else
    $(".card-raider.Hunter").hide();

  if ($('.filter-class-paladin').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Paladin").show();
  }
  else
    $(".card-raider.Paladin").hide();

  if ($('.filter-class-warlock').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Warlock").show();
  }
  else
    $(".card-raider.Warlock").hide();

  if ($('.filter-class-druid').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Druid").show();
  }
  else
    $(".card-raider.Druid").hide();
}

/* DROP DOWN SORT STUFF */

$(document).ready(function () {
  initChecks();

  $("#dropdown-sort").change(function () {
    var selectedValue = $(this).val();
    sortBy(selectedValue);
  });
});

function sortBy(sortTypeValue) {
  $(".card-raider.t2pt5-lotto-desc").hide();
  $(".card-raider.t2pt5-prio-desc").hide();
  $(".card-raider.t2-lotto-desc").hide();
  $(".card-raider.t2-prio-desc").hide();
  $(".card-raider.t1-lotto-desc").hide();
  $(".card-raider.t1-prio-desc").hide();
  $(".card-raider.t3-lotto-desc").hide();
  $(".card-raider.t3-prio-desc").hide();
  $(".card-raider." + sortTypeValue).show();
  filterByClass(sortTypeValue);
}

function initSortBy() {
  $(".card-raider.t3-prio-desc").hide();
  $(".card-raider.t3-lotto-desc").hide();
  $(".card-raider.t2pt5-prio-desc").hide();
  $(".card-raider.t2pt5-lotto-desc").hide();
  $(".card-raider.t2-prio-desc").hide();
  $(".card-raider.t2-lotto-desc").hide();
  $(".card-raider.t1-prio-desc").hide();
  $(".card-raider.t1-lotto-desc").hide();
  $(".tnt-raider.v2 ").show();
}
