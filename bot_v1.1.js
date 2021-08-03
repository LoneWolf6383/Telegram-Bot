const { Bot } = require('grammy')
const bot = new Bot('1935343602:AAHfkwxvYWVoxlIGUKFCaJYHOC_uUKgcx0s')
const { need,hi,no,thanks,quality,quality_prompt,terms,fine,cmdbot,no_prompt1,no_prompt2,thanks_prompt,need_prompt,terms_prompt,happy_stickers,hi_stickers,no_stickers,need_stickers,fast } = require('./variables.js')
var fileid
bot.on("message:text",async (ctx)=>{
    msg=" "+ctx.message.text
    if(hi.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply("Hi There. How are You doing "+ctx.from.first_name,{
            reply_to_message_id:ctx.message.message_id
        })
        fileid=fileId(hi_stickers)
        await ctx.replyWithSticker(fileid)        
    }
    else if(need.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply(need_prompt,{
            reply_to_message_id:ctx.message.message_id
        })
        fileid=fileId(need_stickers)
        await ctx.replyWithSticker(fileid)
    }
    else if(thanks.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply(thanks_prompt)
        fileid=fileId(happy_stickers)
        await ctx.replyWithSticker(fileid)
    }
    else if(fine.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply("Oh Great I am fine too "+ctx.from.first_name +". Well Request your movie and we will get you your movie(it may take a while)")
    }
    else if(cmdbot.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply("No I am not.I am feeling better than ever "+ctx.from.first_name+".Guys Please don't spread rumours.")
        await ctx.replyWithSticker("CAACAgUAAxkBAAELkfVhCJGFHbSleaC19FsNHreRSl9gpgACgQAD77YjLKBbOuNhBKAyIAQ")
    }
    else if(no.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.replyWithSticker("CAACAgUAAxkBAAEKSPlgmhIiZooyu3g7tIp12oRUQBal5wACqwAD77YjLE7OMknP0pIhHwQ")
        await ctx.reply(no_prompt1+ctx.from.first_name+no_prompt2)        
    }
    else if(terms.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply(terms_prompt,{
            reply_to_message_id:ctx.message.message_id
        })
    }
    else if(quality.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply(quality_prompt,{
            reply_to_message_id:ctx.message.message_id
        })
    }
    else if(fast.some(word=>msg.toString().toLowerCase().includes(word))){
        ctx.reply("Varum ana varaathu.")
        await ctx.replyWithSticker("CAACAgUAAxkBAAELke9hCI-DixYiGvDTai7XzDfpNvbpBwAChgAD77YjLLFu0Hf8jh7ZIAQ")
    }
})
bot.on("message:new_chat_members",async (ctx)=>{
    ctx.reply("Hi "+ctx.from.first_name+". Welcome to Movie Holics.Request your movies with correct name")
    ctx.reply("Welcome "+ctx.from.first_name+". You can request your movies.And kindly agree to our T&C. "+terms_prompt,{
        reply_to_message_id:ctx.message.message_id
    })
    fileid=fileId(hi_stickers)
    await ctx.replyWithSticker(fileid)  
})
bot.on("message:left_chat_member",(ctx)=>{
    ctx.reply("Good Bye "+ctx.from.last_name+" .")
})
bot.on("edited_message",async (ctx)=>{
    ctx.replyWithSticker("CAACAgIAAxkBAAELjw1hCC9fGMZhHnzStiJu9kePbhyRpgAC8gYAAkb7rASw5ylYz5DqKSAE")
    await ctx.reply("Yaarum Paakalanu nenachu "+ctx.from.first_name+" yetho panitan")
    
})

function fileId(sticker_set) {
    return sticker_set[Math.floor(Math.random()*sticker_set.length)]
}
bot.start()