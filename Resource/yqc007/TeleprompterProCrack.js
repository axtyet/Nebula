/******************************

脚本功能：爱提词解锁永久订阅
软件版本：1.0.7
下载地址：http://t.cn/A6KVG4e1
脚本作者：Passer_by_yun
更新时间：2022-10-28
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 爱提词解锁永久订阅
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/axtyet/comet_scripts/main/Resource/yqc007/TeleprompterProCrack.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/

function _0x5253(){var _0x480278=['390635wSpCVo','350000640188540','2022-12-01\x2009:50:05\x20Etc/GMT','2022-12-01\x2009:50:21\x20Etc/GMT','true','2022-12-01\x2009:50:58\x20Etc/GMT','com.pocket.watermark.year','939231AkHIZT','1669888206000','false','parse','350001386374291','4075344ogKQtb','382885zjdYKX','Production','508820TxsjjL','1669887344000','2022-12-01\x2001:50:58\x20America/Los_Angeles','PURCHASED','42IgsJRo','2022-12-01\x2009:50:06\x20Etc/GMT','20914867','2999-09-28\x2001:50:05\x20America/Los_Angeles','8gAMtXZ','2022-12-01\x2001:50:06\x20America/Los_Angeles','2999-09-28\x2009:50:05\x20Etc/GMT','1669888221000','MIIUKgYJKoZIhvcNAQcCoIIUGzCCFBcCAQExCzAJBgUrDgMCGgUAMIIDywYJKoZIhvcNAQcBoIIDvASCA7gxggO0MAoCARQCAQEEAgwAMAsCAQMCAQEEAwwBODALAgETAgEBBAMMATgwCwIBGQIBAQQDAgEDMAwCAQoCAQEEBBYCNCswDAIBDgIBAQQEAgIAyzANAgENAgEBBAUCAwIjqDAOAgEBAgEBBAYCBF+RqvUwDgIBCQIBAQQGAgRQMjU2MA4CAQsCAQEEBgIEB1/LDzAOAgEQAgEBBAYCBDKr2w8wEgIBDwIBAQQKAggG91lpbzjZvTAUAgEAAgEBBAwMClByb2R1Y3Rpb24wGAIBBAIBAgQQPvPRUuViaXfgXNqbqJ7XTDAcAgEFAgEBBBTa4dw6EZvMK1kFkpv59+zfcSGiWDAeAgECAgEBBBYMFGNvbS5wb2NrZXQud2F0ZXJtYXJrMB4CAQgCAQEEFhYUMjAyMi0xMi0wMVQwOTo1MDoyMVowHgIBDAIBAQQWFhQyMDIyLTEyLTAxVDA5OjUwOjU4WjAeAgESAgEBBBYWFDIwMjItMTItMDFUMDk6MzU6NDRaMDwCAQcCAQEENKndSooIhfoS8VQu8tm6O43IA82xl2oIUgCVMeupn0hu0ZQFzNglxdxScsEaJt+OpizANUcwWwIBBgIBAQRThcdz8LYBQukSMO+PhSZTETkSK0/ONeIjQsKdTuSRYrSXSakZKRq4Ig4vxNBn9foJrAWm0ahKtXum4201h1oNmqvlDgE8HsI0Hm4GK6PGkNjASFowggGVAgERAgEBBIIBizGCAYcwCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEAMAwCAga3AgEBBAMCAQEwDAICBroCAQEEAwIBADAPAgIGrgIBAQQGAgRflCRiMBICAgavAgEBBAkCBwE+Ut/UYHwwGgICBqcCAQEEEQwPMzUwMDAxMzg2Mzc0MjkxMBoCAgapAgEBBBEMDzM1MDAwMTM4NjM3NDI5MTAfAgIGqAIBAQQWFhQyMDIyLTEyLTAxVDA5OjUwOjA1WjAfAgIGqgIBAQQWFhQyMDIyLTEyLTAxVDA5OjUwOjA2WjAfAgIGrAIBAQQWFhQyMDIyLTEyLTA4VDA5OjUwOjA1WjAkAgIGpgIBAQQbDBljb20ucG9ja2V0LndhdGVybWFyay53ZWVroIIOZTCCBXwwggRkoAMCAQICCA7rV4fnngmNMA0GCSqGSIb3DQEBBQUAMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MB4XDTE1MTExMzAyMTUwOVoXDTIzMDIwNzIxNDg0N1owgYkxNzA1BgNVBAMMLk1hYyBBcHAgU3RvcmUgYW5kIGlUdW5lcyBTdG9yZSBSZWNlaXB0IFNpZ25pbmcxLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKXPgf0looFb1oftI9ozHI7iI8ClxCbLPcaf7EoNVYb/pALXl8o5VG19f7JUGJ3ELFJxjmR7gs6JuknWCOW0iHHPP1tGLsbEHbgDqViiBD4heNXbt9COEo2DTFsqaDeTwvK9HsTSoQxKWFKrEuPt3R+YFZA1LcLMEsqNSIH3WHhUa+iMMTYfSgYMR1TzN5C4spKJfV+khUrhwJzguqS7gpdj9CuTwf0+b8rB9Typj1IawCUKdg7e/pn+/8Jr9VterHNRSQhWicxDkMyOgQLQoJe2XLGhaWmHkBBoJiY5uB0Qc7AKXcVz0N92O9gt2Yge4+wHz+KO0NP6JlWB7+IDSSMCAwEAAaOCAdcwggHTMD8GCCsGAQUFBwEBBDMwMTAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy13d2RyMDQwHQYDVR0OBBYEFJGknPzEdrefoIr0TfWPNl3tKwSFMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUiCcXCam2GGCL7Ou69kdZxVJUo7cwggEeBgNVHSAEggEVMIIBETCCAQ0GCiqGSIb3Y2QFBgEwgf4wgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wNgYIKwYBBQUHAgEWKmh0dHA6Ly93d3cuYXBwbGUuY29tL2NlcnRpZmljYXRlYXV0aG9yaXR5LzAOBgNVHQ8BAf8EBAMCB4AwEAYKKoZIhvdjZAYLAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAA2mG9MuPeNbKwduQpZs0+iMQzCCX+Bc0Y2+vQ+9GvwlktuMhcOAWd/j4tcuBRSsDdu2uP78NS58y60Xa45/H+R3ubFnlbQTXqYZhnb4WiCV52OMD3P86O3GH66Z+GVIXKDgKDrAEDctuaAEOR9zucgF/fLefxoqKm4rAfygIFzZ630npjP49ZjgvkTbsUxn/G4KT8niBqjSl/OnjmtRolqEdWXRFgRi48Ff9Qipz2jZkgDJwYyz+I0AZLpYYMB8r491ymm5WyrWHWhumEL1TKc3GZvMOxx6GUPzo22/SGAGDDaSK+zeGLUR2i0j0I78oGmcFxuegHs5R0UwYS/HE6gwggQiMIIDCqADAgECAggB3rzEOW2gEDANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMTMwMjA3MjE0ODQ3WhcNMjMwMjA3MjE0ODQ3WjCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMo4VKbLVqrIJDlI6Yzu7F+4fyaRvDRTes58Y4Bhd2RepQcjtjn+UC0VVlhwLX7EbsFKhT4v8N6EGqFXya97GP9q+hUSSRUIGayq2yoy7ZZjaFIVPYyK7L9rGJXgA6wBfZcFZ84OhZU3au0Jtq5nzVFkn8Zc0bxXbmc1gHY2pIeBbjiP2CsVTnsl2Fq/ToPBjdKT1RpxtWCcnTNOVfkSWAyGuBYNweV3RY1QSLorLeSUheHoxJ3GaKWwo/xnfnC6AllLd0KRObn1zeFM78A7SIym5SFd/Wpqu6cWNWDS5q3zRinJ6MOL6XnAamFnFbLw/eVovGJfbs+Z3e8bY/6SZasCAwEAAaOBpjCBozAdBgNVHQ4EFgQUiCcXCam2GGCL7Ou69kdZxVJUo7cwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjAuBgNVHR8EJzAlMCOgIaAfhh1odHRwOi8vY3JsLmFwcGxlLmNvbS9yb290LmNybDAOBgNVHQ8BAf8EBAMCAYYwEAYKKoZIhvdjZAYCAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAE/P71m+LPWybC+P7hOHMugFNahui33JaQy52Re8dyzUZ+L9mm06WVzfgwG9sq4qYXKxr83DRTCPo4MNzh1HtPGTiqN0m6TDmHKHOz6vRQuSVLkyu5AYU2sKThC22R1QbCGAColOV4xrWzw9pv3e9w0jHQtKJoc/upGSTKQZEhltV/V6WId7aIrkhoxK6+JJFKql3VUAqa67SzCu4aCxvCmA5gl35b40ogHKf9ziCuY7uLvsumKV8wVjQYLNDzsdTJWk26v5yZXpT+RN5yaZgem8+bQp0gF6ZuEujPYhisX4eOGBrr/TkJ2prfOv/TgalmcwHFGlXOxxioK0bA8MFR8wggS7MIIDo6ADAgECAgECMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0wNjA0MjUyMTQwMzZaFw0zNTAyMDkyMTQwMzZaMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSRqQkfkdseR1DrBe1eeYQt6zaiV0xV7IsZid75S2z1B6siMALoGD74UAnTf0GomPnRymacJGsR0KO75Bsqwx+VnnoMpEeLW9QWNzPLxA9NzhRp0ckZcvVdDtV/X5vyJQO6VY9NXQ3xZDUjFUsVWR2zlPf2nJ7PULrBWFBnjwi0IPfLrCwgb3C2PwEwjLdDzw+dPfMrSSgayP7OtbkO2V4c1ss9tTqt9A8OAJILsSEWLnTVPA3bYharo3GSR1NVwa8vQbP4++NwzeajTEV+H0xrUJZBicR0YgsQg0GHM4qBsTBY7FoEMoxos48d3mVz/2deZbxJ2HafMxRloXeUyS0CAwEAAaOCAXowggF2MA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjCCAREGA1UdIASCAQgwggEEMIIBAAYJKoZIhvdjZAUBMIHyMCoGCCsGAQUFBwIBFh5odHRwczovL3d3dy5hcHBsZS5jb20vYXBwbGVjYS8wgcMGCCsGAQUFBwICMIG2GoGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wDQYJKoZIhvcNAQEFBQADggEBAFw2mUwteLftjJvc83eb8nbSdzBPwR+Fg4UbmT1HN/Kpm0COLNSxkBLYvvRzm+7SZA/LeU802KI++Xj/a8gH7H05g4tTINM4xLG/mk8Ka/8r/FmnBQl8F0BWER5007eLIztHo9VvJOLr0bdw3w9F4SfK8W147ee1Fxeo3H4iNcol1dkP1mvUoiQjEfehrI9zgWDGG1sJL5Ky+ERI8GA4nhX1PSZnIIozavcNgs/e66Mv+VNqW2TAYzN39zoHLFbr2g8hDtq6cxlPtdk2f8GHVdmnmbkyQvvY1XGefqFStxu9k0IkEirHDx22TZxeY8hLgBdQqorV2uT80AkHN7B1dSExggHLMIIBxwIBATCBozCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eQIIDutXh+eeCY0wCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQAHpPp+awkyfhZEAaTQ17b98hb6Yqgcy2yZYHf04XKHIKDHH35kHR+ymLTqMT+IvcbPgdguTXsyOt3q6/uLdAew/OysVJEzR5b8isWO1dh2FA98vAivuVp4lFIAMSJ51f23lv3BbTuMEYz8Gv6Daf46Azz/KQndfiGHvhaY3+dVqsqWwpZNGwqcroqRJFOFFYxKkDy40CTJQ+B0CB2jD1Vl+yuKq8+V25UP+VgbgR/mbWM3sw6AMaayk8nWAFSP0s4MyB4O2MFsj8s7K+D5ev1WGyO67mqVzjmFBb9qhlmV9ptIIiKQm/ZlN+pUfC/dbePfONqdxoqble8zJD+G0Mv+','2022-12-01\x2001:50:21\x20America/Los_Angeles','32495443200000','1669888258498','2022-12-01\x2001:50:05\x20America/Los_Angeles','3047176RbSFgw','2PWnkGR','body','7851690ddDlSY'];_0x5253=function(){return _0x480278;};return _0x5253();}var _0x21e193=_0x3771;function _0x3771(_0x574e93,_0x42e71c){var _0x52530f=_0x5253();return _0x3771=function(_0x377182,_0x4bdc41){_0x377182=_0x377182-0x1d8;var _0x5d822c=_0x52530f[_0x377182];return _0x5d822c;},_0x3771(_0x574e93,_0x42e71c);}(function(_0x1d634a,_0x41b864){var _0x3db4e7=_0x3771,_0x380168=_0x1d634a();while(!![]){try{var _0x2a6991=parseInt(_0x3db4e7(0x1e0))/0x1+parseInt(_0x3db4e7(0x1f2))/0x2*(parseInt(_0x3db4e7(0x1d8))/0x3)+parseInt(_0x3db4e7(0x1e8))/0x4*(-parseInt(_0x3db4e7(0x1de))/0x5)+parseInt(_0x3db4e7(0x1e4))/0x6*(parseInt(_0x3db4e7(0x1f5))/0x7)+-parseInt(_0x3db4e7(0x1f1))/0x8+parseInt(_0x3db4e7(0x1dd))/0x9+-parseInt(_0x3db4e7(0x1f4))/0xa;if(_0x2a6991===_0x41b864)break;else _0x380168['push'](_0x380168['shift']());}catch(_0x48b1b){_0x380168['push'](_0x380168['shift']());}}}(_0x5253,0x54810));var objc=JSON[_0x21e193(0x1db)]($response[_0x21e193(0x1f3)]);objc={'environment':_0x21e193(0x1df),'receipt':{'receipt_type':_0x21e193(0x1df),'app_item_id':0x5f91aaf5,'receipt_creation_date':_0x21e193(0x1f8),'bundle_id':'com.pocket.watermark','original_purchase_date':'2022-12-01\x2009:35:44\x20Etc/GMT','in_app':[{'quantity':'1','purchase_date_ms':'1669888205000','expires_date':_0x21e193(0x1ea),'expires_date_pst':_0x21e193(0x1e7),'is_in_intro_offer_period':_0x21e193(0x1f9),'transaction_id':_0x21e193(0x1dc),'is_trial_period':_0x21e193(0x1da),'original_transaction_id':_0x21e193(0x1dc),'purchase_date':_0x21e193(0x1f7),'product_id':_0x21e193(0x1fb),'original_purchase_date_pst':_0x21e193(0x1e9),'in_app_ownership_type':_0x21e193(0x1e3),'original_purchase_date_ms':'1669888206000','web_order_line_item_id':_0x21e193(0x1f6),'expires_date_ms':_0x21e193(0x1ee),'purchase_date_pst':_0x21e193(0x1f0),'original_purchase_date':_0x21e193(0x1e5)}],'adam_id':0x5f91aaf5,'receipt_creation_date_pst':_0x21e193(0x1ed),'request_date':_0x21e193(0x1fa),'request_date_pst':_0x21e193(0x1e2),'version_external_identifier':0x32abdb0f,'request_date_ms':_0x21e193(0x1ef),'original_purchase_date_pst':'2022-12-01\x2001:35:44\x20America/Los_Angeles','application_version':'8','original_purchase_date_ms':_0x21e193(0x1e1),'receipt_creation_date_ms':_0x21e193(0x1eb),'original_application_version':'8','download_id':0x6f759696f38d9c0},'pending_renewal_info':[{'product_id':'com.pocket.watermark.year','original_transaction_id':_0x21e193(0x1dc),'auto_renew_product_id':_0x21e193(0x1fb),'auto_renew_status':'0'}],'status':0x0,'latest_receipt_info':[{'quantity':'1','purchase_date_ms':'1669888205000','expires_date':_0x21e193(0x1ea),'expires_date_pst':_0x21e193(0x1e7),'is_in_intro_offer_period':'true','transaction_id':_0x21e193(0x1dc),'is_trial_period':_0x21e193(0x1da),'original_transaction_id':'350001386374291','purchase_date':'2022-12-01\x2009:50:05\x20Etc/GMT','product_id':'com.pocket.watermark.year','original_purchase_date_pst':'2022-12-01\x2001:50:06\x20America/Los_Angeles','in_app_ownership_type':_0x21e193(0x1e3),'subscription_group_identifier':_0x21e193(0x1e6),'original_purchase_date_ms':_0x21e193(0x1d9),'web_order_line_item_id':_0x21e193(0x1f6),'expires_date_ms':_0x21e193(0x1ee),'purchase_date_pst':'2022-12-01\x2001:50:05\x20America/Los_Angeles','original_purchase_date':_0x21e193(0x1e5)}],'latest_receipt':_0x21e193(0x1ec)},$done({'body':JSON['stringify'](objc)});
