let need=[" movie venum bro","venum","send","pannunga bro","need","share",
          "movie","anupunga","iruka","file","series"]
var hi=["hi","hey","hi da","hello","vada","vanakam","Hi","Hello","Hi da","Hey","Vada","Vanakkam"]
var no=[" ila bro","not available","ilai"," no","illa","ille"," ila","group la ila bro","not in group"]
var thanks=["thanks","nandri","tq","thnx","thank you"]
var fine=["fine"," nalla"," how are you"]
var cmdbot=["bot is under maintenance","under maintenance","bot is not alive","bot is dead","bot is offline", "bot is off"]
var happy_stickers=["CAACAgIAAxkBAAEKSL1gmgu2zdLrKSDQOznCXEXoO8ux-wAC9wADVp29CgtyJB1I9A0wHwQ",
                    "CAACAgIAAxkBAAEKSL9gmgvm0Ri4Al2ylhTLHnMVeKiVAAM0AAOvxlEavZYLhXXpOrMfBA",
                    "CAACAgIAAxkBAAEKSMFgmgwBl2QIR07gbFkVYns8hiNeWgACegMAAm2wQgOHl3GTy0VJmx8E",
                    "CAACAgIAAxkBAAEKSMNgmgwhA7ipcAvmENUycM1J5srNTwAC7QIAAvPjvguyApHPzINUlh8E",
                    "CAACAgIAAxkBAAEKSMVgmgwxzsS2VEF67VliyeMiekBMsgACSgEAAjDUnRHtmqasW02BTR8E",
                    "CAACAgIAAxkBAAEKSMdgmgxCa_uTHU9w5js6K6vZ5xCz4gAC_gAD9wLID9_mogt-DxDWHwQ",
                    "CAACAgIAAxkBAAEKSM9gmg4U7kvbt6Hg2htymM0WRh2FdgAC1AIAAvPjvgt0VM5exu1SlB8E",
                    "CAACAgIAAxkBAAEKSMlgmgxhWWW9HAlk9kVaqatWcrQOUwACDQEAAladvQpG_UMdBUTXlx8E"]

                    
var hi_stickers=["CAACAgIAAxkBAAEKSNFgmg5NaW6eZ3jBlknbFO9ndDTXCgACAQEAAladvQoivp8OuMLmNB8E",
                 "CAACAgIAAxkBAAEKSNNgmg5lmnIS2DpvFN0IrJgGVIVr5wAC0wIAAvPjvguBRPfRdizrsR8E",
                 "CAACAgIAAxkBAAEKSNVgmg5485iu6hd62ZOkUgoAAQcKiGoAAkoCAAJWnb0KyWrGaGAYevAfBA",
                 "CAACAgIAAxkBAAEKSNdgmg7SPmqhfJkSXVAL8c9JA0-wtwACTwADrWW8FGuRHI2HrK-THwQ",
                 "CAACAgIAAxkBAAEKSNlgmg7f-z_5wf-UKmmxY4Ok-cTGDgACBQADwDZPE_lqX5qCa011HwQ",
                 "CAACAgIAAxkBAAEKSN9gmg9YxVpMDzWDB6uFzpKrj6GFEQACBAcAAkb7rARD2NYo4qk9gx8E",
                 "CAACAgIAAxkBAAEKSOFgmg-JktPwyJTEdPyW1YwKWwABjE8AApoAA_cCyA_R1Qby_XrUOB8E",
                 "CAACAgIAAxkBAAEKSONgmg-q5TuA8ylU-O_bu_4zNHKIgAACNwADO2AkFJKJczNcKY76HwQ"
                ]

var no_stickers=["CAACAgIAAxkBAAEKSOlgmhB4Z72P9pgMe_S6f7-kCBC4MQAC_gADVp29CtoEYTAu-df_HwQ",
                 "CAACAgIAAxkBAAEKSOtgmhCBcNAU2IelaLl6yAOASFGlTwACoAAD9wLID8NHHQGgm8AaHwQ",
                 "CAACAgIAAxkBAAEKSO1gmhCOaNZCXgbIwfc5FQ2_ozzydQACJQADO2AkFIJXwKgdRCEtHwQ",
                 "CAACAgIAAxkBAAEKSO9gmhCXVkjrgYB-e17FbMfUfe04LQACFAcAAkb7rATu8tK5mXMUdR8E",
                 "CAACAgIAAxkBAAEKSPFgmhCqJS-EMXLKfa_5LdHsE-044gACFQADwDZPE81WpjthnmTnHwQ"
                ]

var need_stickers=[
                 "CAACAgIAAxkBAAEKSL1gmgu2zdLrKSDQOznCXEXoO8ux-wAC9wADVp29CgtyJB1I9A0wHwQ",
                 "CAACAgIAAxkBAAEKSL9gmgvm0Ri4Al2ylhTLHnMVeKiVAAM0AAOvxlEavZYLhXXpOrMfBA",
                 "CAACAgIAAxkBAAEKSMFgmgwBl2QIR07gbFkVYns8hiNeWgACegMAAm2wQgOHl3GTy0VJmx8E",
                 "CAACAgIAAxkBAAEKSMNgmgwhA7ipcAvmENUycM1J5srNTwAC7QIAAvPjvguyApHPzINUlh8E",
                 "CAACAgIAAxkBAAEKSMVgmgwxzsS2VEF67VliyeMiekBMsgACSgEAAjDUnRHtmqasW02BTR8E",
                 "CAACAgIAAxkBAAEKSMdgmgxCa_uTHU9w5js6K6vZ5xCz4gAC_gAD9wLID9_mogt-DxDWHwQ",
                 "CAACAgIAAxkBAAEKSM9gmg4U7kvbt6Hg2htymM0WRh2FdgAC1AIAAvPjvgt0VM5exu1SlB8E",
                 "CAACAgIAAxkBAAEKSMlgmgxhWWW9HAlk9kVaqatWcrQOUwACDQEAAladvQpG_UMdBUTXlx8E",
                 "CAACAgIAAxkBAAEKSOlgmhB4Z72P9pgMe_S6f7-kCBC4MQAC_gADVp29CtoEYTAu-df_HwQ",
                 "CAACAgIAAxkBAAEKSOtgmhCBcNAU2IelaLl6yAOASFGlTwACoAAD9wLID8NHHQGgm8AaHwQ",
                 "CAACAgIAAxkBAAEKSO1gmhCOaNZCXgbIwfc5FQ2_ozzydQACJQADO2AkFIJXwKgdRCEtHwQ",
                 "CAACAgIAAxkBAAEKSO9gmhCXVkjrgYB-e17FbMfUfe04LQACFAcAAkb7rATu8tK5mXMUdR8E",
                 "CAACAgIAAxkBAAEKSPFgmhCqJS-EMXLKfa_5LdHsE-044gACFQADwDZPE81WpjthnmTnHwQ",
                 "CAACAgIAAxkBAAEKSNFgmg5NaW6eZ3jBlknbFO9ndDTXCgACAQEAAladvQoivp8OuMLmNB8E",
                 "CAACAgIAAxkBAAEKSNNgmg5lmnIS2DpvFN0IrJgGVIVr5wAC0wIAAvPjvguBRPfRdizrsR8E",
                 "CAACAgIAAxkBAAEKSNVgmg5485iu6hd62ZOkUgoAAQcKiGoAAkoCAAJWnb0KyWrGaGAYevAfBA",
                 "CAACAgIAAxkBAAEKSNdgmg7SPmqhfJkSXVAL8c9JA0-wtwACTwADrWW8FGuRHI2HrK-THwQ",
                 "CAACAgIAAxkBAAEKSNlgmg7f-z_5wf-UKmmxY4Ok-cTGDgACBQADwDZPE_lqX5qCa011HwQ",
                 "CAACAgIAAxkBAAEKSN9gmg9YxVpMDzWDB6uFzpKrj6GFEQACBAcAAkb7rARD2NYo4qk9gx8E",
                 "CAACAgIAAxkBAAEKSOFgmg-JktPwyJTEdPyW1YwKWwABjE8AApoAA_cCyA_R1Qby_XrUOB8E",
                 "CAACAgIAAxkBAAEKSONgmg-q5TuA8ylU-O_bu_4zNHKIgAACNwADO2AkFJKJczNcKY76HwQ"
                  ]           
var no_prompt1 = "Request your movie with correct spelling,Year,Lang you need, Quality etc .We will send as soon as possible."
var no_prompt2 = " we will get to you soon!"
var need_prompt = "Search the name of movie with correct spelling from google , in our telegram group Please."
var thanks_prompt = "You're Welcome.As soon as you finish downloading give save to download to prevent you file from copyright strike"
var terms_prompt="We don't upload any movies here . We just forward them from other channels for you guys and for free of cost too. We don't check the file before sending to you guys. You're downloading the movie at your own risk "
var terms=["terms","t and c","t&c","rules"]
var fast=["fasta","send me fast","vema","vegama"]
var quality=["720p","480p","1080p","tamila","englisha","quality","print","hdya","hd?","hd","language yenna bro","tamila","Englisha","lang?","language?","language"]
var quality_prompt="You can check the quality,Language of your file without downloading. Just go to this bot @TG_ScreenShotBot give start and forward your desired video file here.And after that select trim video to get a 30 sec sample video of your file."
module.exports = {need,hi,no,thanks,fine,cmdbot,terms,quality,quality_prompt,no_prompt1,no_prompt2,thanks_prompt,need_prompt,terms_prompt,happy_stickers,hi_stickers,no_stickers,need_stickers,fast}