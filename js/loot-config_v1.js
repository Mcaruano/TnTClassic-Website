// JavaScript Document

/* JSON READING */
var section = document.querySelector('section');

/* Load T6PT5 Prio Descending */
var t6pt5PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T6PT5Priority_Desc.json';
var t6pt5PrioDescRequest = new XMLHttpRequest();
t6pt5PrioDescRequest.open('GET', t6pt5PrioDescUrl);
t6pt5PrioDescRequest.responseType = 'json';
t6pt5PrioDescRequest.send();

t6pt5PrioDescRequest.onload = function () {
  var lootConfigJson = t6pt5PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t6pt5-prio-desc");
  filterByClass("t6pt5-prio-desc");
}

/* Load T6PT5 Lotto Descending */
var t6pt5LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T6PT5Lottery_Desc.json';
var t6pt5LottoDescRequest = new XMLHttpRequest();
t6pt5LottoDescRequest.open('GET', t6pt5LottoDescUrl);
t6pt5LottoDescRequest.responseType = 'json';
t6pt5LottoDescRequest.send();
t6pt5LottoDescRequest.onload = function () {
  var lootConfigJson = t6pt5LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t6pt5-lotto-desc");
  filterByClass("t6pt5-lotto-desc");
}

/* Load T6 Prio Descending */
var t6PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T6Priority_Desc.json';
var t6PrioDescRequest = new XMLHttpRequest();
t6PrioDescRequest.open('GET', t6PrioDescUrl);
t6PrioDescRequest.responseType = 'json';
t6PrioDescRequest.send();

t6PrioDescRequest.onload = function () {
  var lootConfigJson = t6PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t6-prio-desc");
  filterByClass("t6-prio-desc");
}

/* Load T6 Lotto Descending */
var t6LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T6Lottery_Desc.json';
var t6LottoDescRequest = new XMLHttpRequest();
t6LottoDescRequest.open('GET', t6LottoDescUrl);
t6LottoDescRequest.responseType = 'json';
t6LottoDescRequest.send();
t6LottoDescRequest.onload = function () {
  var lootConfigJson = t6LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t6-lotto-desc");
  filterByClass("t6-lotto-desc");
}

/* Load T5 Prio Descending */
var t5PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T5Priority_Desc.json';
var t5PrioDescRequest = new XMLHttpRequest();
t5PrioDescRequest.open('GET', t5PrioDescUrl);
t5PrioDescRequest.responseType = 'json';
t5PrioDescRequest.send();

t5PrioDescRequest.onload = function () {
  var lootConfigJson = t5PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t5-prio-desc");
  filterByClass("t5-prio-desc");
}

/* Load T5 Lotto Descending */
var t5LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T5Lottery_Desc.json';
var t5LottoDescRequest = new XMLHttpRequest();
t5LottoDescRequest.open('GET', t5LottoDescUrl);
t5LottoDescRequest.responseType = 'json';
t5LottoDescRequest.send();
t5LottoDescRequest.onload = function () {
  var lootConfigJson = t5LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t5-lotto-desc");
  filterByClass("t5-lotto-desc");

}

/* Load T4 Prio Descending */
var t4PrioDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T4Priority_Desc.json';
var t4PrioDescRequest = new XMLHttpRequest();
t4PrioDescRequest.open('GET', t4PrioDescUrl);
t4PrioDescRequest.responseType = 'json';
t4PrioDescRequest.send();
t4PrioDescRequest.onload = function () {
  var lootConfigJson = t4PrioDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t4-prio-desc");
  filterByClass("t4-prio-desc");
}

/* Load T4 Lotto Descending */
var t4LottoDescUrl = 'https://tntclassic-json.s3-us-west-1.amazonaws.com/LootConfig_T4Lottery_Desc.json';
var t4LottoDescRequest = new XMLHttpRequest();
t4LottoDescRequest.open('GET', t4LottoDescUrl);
t4LottoDescRequest.responseType = 'json';
t4LottoDescRequest.send();
t4LottoDescRequest.onload = function () {
  var lootConfigJson = t4LottoDescRequest.response;
  populateLastCheckedTimestamp(lootConfigJson);
  showRaiders(lootConfigJson, "t4-lotto-desc");
  filterByClass("t4-lotto-desc");
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
    var t4PrioList = document.createElement('ul');
    var t4LottoList = document.createElement('ul');
    var t5PrioList = document.createElement('ul');
    var t5LottoList = document.createElement('ul');
    var t6PrioList = document.createElement('ul');
    var t6LottoList = document.createElement('ul');
    var t6pt5PrioList = document.createElement('ul');
    var t6pt5LottoList = document.createElement('ul');

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

    /* T4 */
    var t4PrioPlayerLootConfig = tntRaiders[i].T4_PriorityConfig;
    for (var j = 0; j < t4PrioPlayerLootConfig.length; j++) {
      var t4PrioListItem = document.createElement('li');
      t4PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t4PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t4PrioPlayerLootConfig[j].ItemName + '</a>';
      t4PrioList.appendChild(t4PrioListItem);
      if (t4PrioPlayerLootConfig[j].Quantity > 1) {
        t4PrioListItem.innerHTML += ' x' + t4PrioPlayerLootConfig[j].Quantity;
      }
    }
    if (t4PrioPlayerLootConfig.length == 0) {
      var t4PrioListItem = document.createElement('p');
      t4PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/npc=11956' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t4PrioList.appendChild(t4PrioListItem);
    }

    var t4LottoPlayerLootConfig = tntRaiders[i].T4_LotteryConfig;
    for (var j = 0; j < t4LottoPlayerLootConfig.length; j++) {
      var t4LottoListItem = document.createElement('li');
      t4LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t4LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t4LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t4LottoPlayerLootConfig[j].Quantity > 1) {
        t4LottoListItem.innerHTML += ' x' + t4LottoPlayerLootConfig[j].Quantity;
      }
      t4LottoList.appendChild(t4LottoListItem);
    }
    if (t4LottoPlayerLootConfig.length == 0) {
      var t4LottoListItem = document.createElement('p');
      t4LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/npc=11325' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t4LottoList.appendChild(t4LottoListItem);
    }

    /* T5 */
    var t5PrioPlayerLootConfig = tntRaiders[i].T5_PriorityConfig;
    for (var j = 0; j < t5PrioPlayerLootConfig.length; j++) {
      var t5PrioListItem = document.createElement('li');
      t5PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t5PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t5PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t5PrioPlayerLootConfig[j].Quantity > 1) {
        t5PrioListItem.innerHTML += ' x' + t5PrioPlayerLootConfig[j].Quantity;
      }
      t5PrioList.appendChild(t5PrioListItem);
    }
    if (t5PrioPlayerLootConfig.length == 0) {
      var t5PrioListItem = document.createElement('p');
      t5PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22736' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t5PrioList.appendChild(t5PrioListItem);
    }

    var t5LottoPlayerLootConfig = tntRaiders[i].T5_LotteryConfig;
    for (var j = 0; j < t5LottoPlayerLootConfig.length; j++) {
      var t5LottoListItem = document.createElement('li');
      t5LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t5LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t5LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t5LottoPlayerLootConfig[j].Quantity > 1) {
        t5LottoListItem.innerHTML += ' x' + t5LottoPlayerLootConfig[j].Quantity;
      }
      t5LottoList.appendChild(t5LottoListItem);
    }
    if (t5LottoPlayerLootConfig.length == 0) {
      var t5LottoListItem = document.createElement('p');
      t5LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=3173' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t5LottoList.appendChild(t5LottoListItem);
    }

    /* T6 */
    var t6PrioPlayerLootConfig = tntRaiders[i].T6_PriorityConfig;
    for (var j = 0; j < t6PrioPlayerLootConfig.length; j++) {
      var t6PrioListItem = document.createElement('li');
      t6PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t6PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t6PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t6PrioPlayerLootConfig[j].Quantity > 1) {
        t6PrioListItem.innerHTML += ' x' + t6PrioPlayerLootConfig[j].Quantity;
      }
      t6PrioList.appendChild(t6PrioListItem);
    }
    if (t6PrioPlayerLootConfig.length == 0) {
      var t6PrioListItem = document.createElement('p');
      t6PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t6PrioList.appendChild(t6PrioListItem);
    }

    var t6LottoPlayerLootConfig = tntRaiders[i].T6_LotteryConfig;
    for (var j = 0; j < t6LottoPlayerLootConfig.length; j++) {
      var t6LottoListItem = document.createElement('li');
      t6LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t6LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t6LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t6LottoPlayerLootConfig[j].Quantity > 1) {
        t6LottoListItem.innerHTML += ' x' + t6LottoPlayerLootConfig[j].Quantity;
      }
      t6LottoList.appendChild(t6LottoListItem);
    }
    if (t6LottoPlayerLootConfig.length == 0) {
      var t6LottoListItem = document.createElement('p');
      t6LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t6LottoList.appendChild(t6LottoListItem);
    }


    /* T6PT5 */
    var t6pt5PrioPlayerLootConfig = tntRaiders[i].T6PT5_PriorityConfig;
    for (var j = 0; j < t6pt5PrioPlayerLootConfig.length; j++) {
      var t6pt5PrioListItem = document.createElement('li');
      t6pt5PrioListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t6pt5PrioPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t6pt5PrioPlayerLootConfig[j].ItemName + '</a>';
      if (t6pt5PrioPlayerLootConfig[j].Quantity > 1) {
        t6pt5PrioListItem.innerHTML += ' x' + t6pt5PrioPlayerLootConfig[j].Quantity;
      }
      t6pt5PrioList.appendChild(t6pt5PrioListItem);
    }
    if (t6pt5PrioPlayerLootConfig.length == 0) {
      var t6pt5PrioListItem = document.createElement('p');
      t6pt5PrioListItem.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t6pt5PrioList.appendChild(t6pt5PrioListItem);
    }

    var t6pt5LottoPlayerLootConfig = tntRaiders[i].T6PT5_LotteryConfig;
    for (var j = 0; j < t6pt5LottoPlayerLootConfig.length; j++) {
      var t6pt5LottoListItem = document.createElement('li');
      t6pt5LottoListItem.innerHTML = '<a href="https://classic.wowhead.com/item=' + t6pt5LottoPlayerLootConfig[j].ItemID + '" target="_blank" rel="noopener">' + t6pt5LottoPlayerLootConfig[j].ItemName + '</a>';
      if (t6pt5LottoPlayerLootConfig[j].Quantity > 1) {
        t6pt5LottoListItem.innerHTML += ' x' + t6pt5LottoPlayerLootConfig[j].Quantity;
      }
      t6pt5LottoList.appendChild(t6pt5LottoListItem);
    }
    if (t6pt5LottoPlayerLootConfig.length == 0) {
      var t6pt5LottoListItem = document.createElement('p');
      t6pt5LottoListItem.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
      t6pt5LottoList.appendChild(t6pt5LottoListItem);
    }

    //template
    var template = $('#hidden-template').html();
    var item = $(template).clone();


    //changing stuff in the template
    $(item).find('.priority-dkp-value.t4').html(tntRaiders[i].T4_PriorityDKP);
    $(item).find('.lottery-dkp-value.t4').html(tntRaiders[i].T4_LotteryDKP);
    $(item).find('.priority-dkp-value.t5').html(tntRaiders[i].T5_PriorityDKP);
    $(item).find('.lottery-dkp-value.t5').html(tntRaiders[i].T5_LotteryDKP);
    $(item).find('.priority-dkp-value.t6').html(tntRaiders[i].T6_PriorityDKP);
    $(item).find('.lottery-dkp-value.t6').html(tntRaiders[i].T6_LotteryDKP);
    $(item).find('.priority-dkp-value.t6pt5').html(tntRaiders[i].T6PT5_PriorityDKP);
    $(item).find('.lottery-dkp-value.t6pt5').html(tntRaiders[i].T6PT5_LotteryDKP);
    $(item).find('.t4.prio-list').html(t4PrioList);
    $(item).find('.t4.lott-list').html(t4LottoList);
    $(item).find('.t5.prio-list').html(t5PrioList);
    $(item).find('.t5.lott-list').html(t5LottoList);
    $(item).find('.t6.prio-list').html(t6PrioList);
    $(item).find('.t6.lott-list').html(t6LottoList);
    $(item).find('.t6pt5.prio-list').html(t6pt5PrioList);
    $(item).find('.t6pt5.lott-list').html(t6pt5LottoList);
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
    $(".filter-class-shaman").prop("checked", false);

    $(".card-raider.Warrior").hide();
    $(".card-raider.Priest").hide();
    $(".card-raider.Mage").hide();
    $(".card-raider.Rogue").hide();
    $(".card-raider.Hunter").hide();
    $(".card-raider.Paladin").hide();
    $(".card-raider.Warlock").hide();
    $(".card-raider.Druid").hide();
    $(".card-raider.Shaman").hide();

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
    $(".filter-class-shaman").prop("checked", true);

    $(".card-raider.Warrior").hide();
    $(".card-raider.Priest").hide();
    $(".card-raider.Mage").hide();
    $(".card-raider.Rogue").hide();
    $(".card-raider.Hunter").hide();
    $(".card-raider.Paladin").hide();
    $(".card-raider.Warlock").hide();
    $(".card-raider.Druid").hide();
    $(".card-raider.Shaman").hide();

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

  if ($('.filter-class-shaman').is(":checked")) {
    $(".card-raider." + sortTypeVal + ".Shaman").show();
  }
  else
    $(".card-raider.Shaman").hide();
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
  $(".card-raider.t6-lotto-desc").hide();
  $(".card-raider.t6-prio-desc").hide();
  $(".card-raider.t5-lotto-desc").hide();
  $(".card-raider.t5-prio-desc").hide();
  $(".card-raider.t4-lotto-desc").hide();
  $(".card-raider.t4-prio-desc").hide();
  $(".card-raider.t6pt5-lotto-desc").hide();
  $(".card-raider.t6pt5-prio-desc").hide();
  $(".card-raider." + sortTypeValue).show();
  filterByClass(sortTypeValue);
}

function initSortBy() {
  $(".card-raider.t6pt5-prio-desc").hide();
  $(".card-raider.t6pt5-lotto-desc").hide();
  $(".card-raider.t6-prio-desc").hide();
  $(".card-raider.t6-lotto-desc").hide();
  $(".card-raider.t5-prio-desc").hide();
  $(".card-raider.t5-lotto-desc").hide();
  $(".card-raider.t4-prio-desc").hide();
  $(".card-raider.t4-lotto-desc").hide();
  $(".tnt-raider.v2 ").show();
}
