/*

‎ProKnockout：https://apps.apple.com/app/id944665061

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/axtyet/comet_scripts/main/Resource/Guding88/Script/ProKnockout.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = JSON.parse($response.body);
guding = {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "com.knockout.7daysplus",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "com.knockout.7daysplus",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
}
$done({ body: JSON.stringify(guding) });
