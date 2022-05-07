/* Codded by Phaticusthiccy
Unlimited API for Photooxy, Textpro and Instagram scraper.
Material: https://www.npmjs.com/package/textmaker-thiccy
Github: https://github.com/phaticusthiccy/TextMaker-Unlimited
This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L2pzbC9BbGV4YQ', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows text to image tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'txtit$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Parıltı Temalı Logo Yapar.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '📍 *Örnek:* _'
        command_cmd = '🔖 *Komut:* '
        desc_cmd = '♦️*Açıklama:* _'
    } else { 
        usage_cmd = '🐼 Example : *'
        command_cmd = '🍀 Command : '
        desc_cmd = '🌈 Description : '
    }
    const msg = command_cmd + '```.devil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil BOT*\n\n' +
        command_cmd + '```.bear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear BOT*\n\n' +
        command_cmd + '```.wolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Amalser;BOT*\n\n' +
        command_cmd + '```.neon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.neon BOT*\n\n' +
        command_cmd + '```.future``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.future BOT*\n\n' +
        command_cmd + '```.2neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.2neon BOT*\n\n' +
        command_cmd + '```.3neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.3neon BOT*\n\n' +
        command_cmd + '```.light``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.light BOT*\n\n' +
        command_cmd + '```.joker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.joker BOT*\n\n' +
        command_cmd + '```.ninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.ninja Amalser;BOT*\n\n' +
        command_cmd + '```.glitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.glitter BOT*\n\n' +
        command_cmd + '```.bokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.bokeh BOT*\n\n' +
        command_cmd + '```.marvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.marvel Amalser;BOT*\n\n' +
        command_cmd + '```.2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.2marvel Amalser;BOT*\n\n' +
        command_cmd + '```.avengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.avengers Amser;BOT*\n\n' +
        command_cmd + '```.graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.graf Amalser;BOT*\n\n' +
        command_cmd + '```.2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.2graf Amalser;BOT*\n\n' +       
        command_cmd + '```.lion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.lion Amalser;BOT*\n\n' +
        command_cmd + '```.ice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.ice BOT*\n\n' +
        command_cmd + '```.space``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.space Amalser;BOT*\n\n' +
        command_cmd + '```.smoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.smoke BOT*\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.glow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.glow BOT*\n\n' +
        command_cmd + '```.fire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.fire BOT*\n\n' +
        command_cmd + '```.harry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.harry BOT*\n\n' +
        command_cmd + '```.cup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.cup Amalser*\n\n' +
        command_cmd + '```.cemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.cemetery Amalser*\n\n' +
        command_cmd + '```.glitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.glitch Amalser;*'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Alexa.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/devil.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/bear.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'wolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/wolf.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/neon.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/neon2.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/li.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'joker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/joker.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'ninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/ninja.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/tt.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'bokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/bkh.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/marvel.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/mar2.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'avengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/aven.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/tt2.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/ttgra.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/t2gra.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'lion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/lion.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/neon3.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'ice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/ice.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/space.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'smoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/smoke.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'glow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/jsl/Alexa/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/glowttp.jpg'), MessageType.image, { caption: Config.ALL })
    })
}));
Alexa.addCommand({pattern: 'fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/tfire.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/hp.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: '4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/t4n.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'cemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/cmth.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Alexa.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/jsl/Alexa/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/jsl/Alexa/cup.jpg'), MessageType.image, { caption: Config.ALL })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));