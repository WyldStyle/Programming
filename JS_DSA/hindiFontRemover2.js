
function hindiTxtRemover2(txt1) {
  // console.log(txt);
  let txt = '';
  let date = '04/ 07 '
  for(let  d = 0; d < txt1.length; d++)
  {
    if(txt1.charAt(d) == '।' && txt1.charCodeAt(d+2) >= 65 && txt1.charCodeAt(d+2) <= 97){
    
    txt += txt.charAt(d) + txt.charAt(d+1) + date;
    d = d+9;
    console.log('added date')
    }
    txt += txt1.charAt(d);
  }

  const str1 = `’: ,•.'$“()”{}[]-"
  `;
  const spaceEnter = `
`;
  let str = '';
  for (let i = 0; i < txt.length; i++) {
    if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {//0 - 9
      str = str + txt.charAt(i);
    }

    else if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) { // A-Z
      str += txt.charAt(i);
    }
    else if ((txt.charCodeAt(i) >= 48) && (txt.charCodeAt(i) <= 57)) { //a-z
      str = str + txt.charAt(i);
    }

    else if (str1.includes(txt.charAt(i))) {

      if (txt.charAt(i) == '•') { //bullets
        if (txt.charCodeAt(i + 2) <= 65 && txt.charCodeAt(i + 2) >= 90) {
          str += txt.charAt(i);
        }

        else {
          i = findingNxtAlphabet(txt, i);
          str += txt.charAt(i);
        }
      }
      else if (txt.charAt(i) == spaceEnter)//spaceEnter
      {
        if ((txt.charCodeAt(i + 1) >= 97 && txt.charCodeAt(i + 1) <= 122) ||
          txt.charCodeAt(i + 1) >= 65 && txt.charCodeAt(i + 1) <= 90) {
          str += ' ';

        }
        if (txt.charAt(i + 1) == '•') {
          str += txt.charAt(i);
          i = findingNxtAlphabet(txt, i);
          str += txt.charAt(i);
        }
      }

      else if (txt.charAt(i) == '.') {

        str += txt.charAt(i) + '\n';
        // if(txt.charAt(i+1) == spaceEnter)
        // {
        //   if(txt.charCodeAt(i+3) <= 65 && txt.charCodeAt(i+3) >= 90 )
        //   str = str + '\n \n \n\n\n\n'
        // }
      }
      else {
        str += txt.charAt(i);
      }

    }
    else {
      i = findingNxtAlphabet(txt, i) - 1;
    }
  }
  str = renderingSpaceRemoval(str);
  str = replacedStr(str);
  return str;
}

function findingNxtAlphabet(txt, i) {
  for (; i < txt.length; i++) {
    if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
      return i;
    }
    if (txt.charAt(i) == '•') {
      if (txt.charCodeAt(i + 2) >= 65 && txt.charCodeAt(i + 2) <= 90) {
        return i;
      }
    }
  }
  return i;
}

function renderingSpaceRemoval(str) {
  let str1 = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == '.' && str.charAt(i + 3) == '•') {
      str1 += str.charAt(i);
      i++;
      // if (txt.charCodeAt(i + 3) <= 65 && txt.charCodeAt(i + 3) >= 90)
    }
    else {
      str1 += str.charAt(i);
    }
  }
  str1 = fractionJoiner(str1);
  return str1;
}

function fractionJoiner(str1) {
  let str2 = ''
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == '.' && (str1.charCodeAt(i + 2) >= 48 && str1.charCodeAt(i + 2) <= 57)) {
      str2 += str1.charAt(i);
      i++;
    }
    else {
      str2 += str1.charAt(i);
    }
  }
  return str2;
}

function replacedStr(str) {
  str = str.replaceAll('Prime Minister', 'PM');
  str = str.replaceAll('crore', 'cr');
  str = str.replaceAll('Crore', 'Cr');
  str = str.replaceAll('President', 'Prez');
  str = str.replaceAll('president', 'prez');
  str = str.replaceAll('Discount', '');
  str = str.replaceAll('Headquarters', 'HQ');
  str = str.replaceAll('Managing Director', 'MD');
  str = str.replaceAll('Government','Govt');
  str = str.replaceAll('government','govt');
  str = str.replaceAll('percent', '%');
  str = str.replaceAll('per cent','%');
  return str;
}

let txt = 
`78% Discount
To Buy Ashish Gautam Sir's "Current Affairs, Banking Awareness, Static GK
Courses" Ie "Warrior Pro Batch"
Click on the below link:
Warrior Pro Batch:
Visit: Adda247 App
Use Discount Code: "Y168" for 78% Discount
If you need any assistance feel free to contact at: 8126580408
Agarkar named chairman of BCCI’s senior men’s selection
committee.
अगरकर को बीसीसीआई की वररष्ठ पुरुष चयन समिमि का अध्यक्ष नामिि मकया
गया।
• Former India all-rounder Ajit Agarkar has been appointed
chairman of the senior men’s selection committee.
• The post was lying vacant since February this year after
Chetan Sharma resigned.
• भारत के पूिस हरफिमौला वखलाड़ी अजीत अगरकर को सीवियर पुरुष चयि
सवमवत का अध्यक्ष वियुक्त वकया गया है।
• चेति शमास के इस्तीफा देिे के बाद इस साल फरिरी से यह पद खाली था।
Iran becomes new permanent member of SCO.
ईरान SCO का नया स्थायी सदस्य बन गया।
• Iran on 5th July 2023 became the new permanent member of
the Shanghai Cooperation Organisation (SCO) at an Indiahosted
virtual summit.
• 5 जुलाई 2023 को भारत द्वारा आयोवजत आभासी वशखर सम्मेलि में ईराि
शांघाई सहयोग सांगठि (एससीओ) का िया स्थायी सदस्य बि गया।
• India hosted the Shanghai Cooperation Organisation (SCO)
Summit in a virtual format.
• The 23rd Summit of the SCO Council of Heads of State
chaired by Prime Minister Narendra Modi.
• भारत िे िचसुअल प्रारूप में शांघाई सहयोग सांगठि (एससीओ) वशखर
सम्मेलि की मेजबािी की।
• प्रधाि मांत्री िरेंद्र मोदी की अध्यक्षता में एससीओ पररषद के राष्ट्राध्यक्षों का
23िाां वशखर सम्मेलि।
• The SCO was founded at a summit in Shanghai in 2001 by the
presidents of Russia, China, the Kyrgyz Republic, Kazakhstan,
Tajikistan and Uzbekistan.
• India and Pakistan became its permanent members in 2017.
• एससीओ की स्थापिा 2001 में शांघाई में ए वशखर सम्मेलि में रूस, चीि,
वकवगसज गणराज्य, कजावकस्ताि, तावजवकस्ताि और उज्बेवकस्ताि के
राष्ट्रपवतयों द्वारा की गई थी।
• 2017 में भारत और पावकस्ताि इसके स्थायी सदस्य बिे।
India doubles its share of global commercial services exports between
2005 and 2022: World Bank & WTO report
भारि ने 2005 और 2022 के बीच वैमिक वामिमययक सेवाओ ंके मनयााि िें अपनी
मिस्सेदारी दोगुनी कर दी: मवि बैंक और डब्ल्यूटीओ ररपोटा
78% Discount
• India has doubled its share of global commercial services
exports to 4.4 percent in 2022 from 2 percent in 2005,
according to a World Bank and World Trade Organization
(WTO) report.
• विश्व बैंक और विश्व व्यापार सांगठि (िब््यूटीओ) की ररपोटस के अिुसार,
भारत िे िैवश्वक िावणवज्यक सेिाओ ांके वियासत में अपिी वहस्सेदारी 2005 के
2 प्रवतशत से बढाकर 2022 में 4.4 प्रवतशत कर ली है।
• India has become a popular destination for medical travel, and
hosted around 3.5 million foreign patients from 2009 to 2019,”.
• भारत वचवकत्सा यात्रा के वलए एक लोकवप्रय गांतव्य बि गया है, और 2009
से 2019 तक लगभग 3.5 वमवलयि विदेशी रोगी आए है।”
• According to the report, foreign patients from developed
countries such as the United Kingdom and the United States,
as well as from developing countries such as Bangladesh, Nepal
and Sri Lanka visit India in search of less costly, high-quality
treatment.
• ररपोटस के अिुसार, यूिाइटेि वकां गिम और सांयुक्त राज्य अमेररका जैसे
विकवसत देशों के साथ-साथ बाांग्लादेश, िेपाल और श्रीलांका जैसे
विकासशील देशों से विदेशी मरीज कम खचीले, उच्च गुणित्ता िाले इलाज
की तलाश में भारत आते हैं।
• The report titled ‘Trade in services for development’ said that
in India, South Africa and Türkiye, jobs directly linked to
cross-border services exports account for more than 10 percent
of total services sector jobs.
• 'विकास के वलए सेिाओ ांमें व्यापार' शीषसक िाली ररपोटस में कहा गया है वक
भारत, दवक्षण अफ्रीका और तुवकस ये में, सीमा पार सेिाओ ांके वियासत से सीधे
जुड़ी िौकररयाां कु ल सेिा क्षेत्र की िौकररयों का 10 प्रवतशत से अवधक है।
Bank of India rolls out Mahila Samman Savings Certificate scheme.
बैंक ऑफ इांविया िे मवहला सम्माि बचत प्रमाणपत्र योजिा शुरू की।
• According to the Bank of India’s MD & CEO Rajneesh
Karanatak, Bank of India is the first bank to operationalise
this scheme.
• So far, only post offices were authorised to open accounts
under the Mahila Samman Savings Certificate.
• बैंक ऑफ इांविया के एमिी और सीईओ रजिीश करणटक के मुतावबक,
बैंक ऑफ इांविया इस योजिा को चालू करिे िाला पहला बैंक है।
• अभी तक मवहला सम्माि बचत पत्र के तहत खाता खोलिे के वलए के िल
िाकघर ही अवधकृ त थे।
Qu Dongyu re-elected as Director-General of UN's FAO.
क्यू िोंगयु को सांयुक्त राष्ट्र के एफएओ के महाविदेशक के रूप में वफर से चुिा गया।
• China's Qu Dongyu, current director-general of the Food and
Agriculture Organization (FAO) of the UN has been re-elected
as the organization's next director-general for a 4-year term.
• सांयुक्त राष्ट्र के खाद्य और कृ वष सांगठि (एफएओ) के ितसमाि महाविदेशक,
चीि के क्यू िोंगयु को 4 साल के कायसकाल के वलए सांगठि के अगले
महाविदेशक के रूप में वफर से चुिा गया है।
• The announcement was made at the 43rd Session of the FAO
Conference.
• यह घोषणा एफएओ सम्मेलि के 43िें सत्र में की गई।
Food and Agriculture Organization (FAO)
• Formation: 16 October 1945
• Headquarters: Rome, Italy
• Member: 194 countries and European Union
NATO Secretary-General Jens Stoltenberg will stay in office for another
year, the 31-nation military alliance decided.
िाटो महासवचि जेन्स स्टोलटेिबगस एक और िषस के वलए पद पर बिे रहेंगे, 31 देशों के
सैन्य गठबांधि िे फै सला वकया।
• Stoltenberg, a former Norwegian Prime Minister, has been
NATO’s top civilian official since 2014.
• It’s the fourth time Stoltenberg has had his mandate extended.
• िॉिे के पूिस प्रधाि मांत्री स्टोलटेिबगस 2014 से िाटो के शीषस िागररक
अवधकारी हैं।
• यह चौथी बार है जब स्टो्टेिबगस का कायसकाल बढाया गया है।
UNESCO approved the US proposal to rejoin organisation.
यूिेस्को िे सांगठि में वफर से शावमल होिे के अमेररकी प्रस्ताि को मांजूरी दी।
• UNESCO's 193 member states have approved a proposal
submitted by the US to rejoin the organisation.
78% Discount
• 132 member states voted in favour.
• The US had pulled out of the Unesco twice, in 1984 and 2017.
• US committed to repay its estimated arrears of $619 million.
• US will now fund the equivalent of 22 per cent of the
organisation's regular budget.
• US and Israel had stopped financing the UN body after it voted
to include Palestine as a member state in 2011.
• यूिेस्को के 193 सदस्य देशों िे सांगठि में वफर से शावमल होिे के वलए
अमेररका द्वारा प्रस्तुत प्रस्ताि को मांजूरी दे दी है।
• 132 सदस्य देशों िे पक्ष में मतदाि वकया।
• अमेररका 1984 और 2017 में दो बार यूिेस्को से बाहर विकल गया था।
• अमेररका िे 619 वमवलयि िॉलर का अिुमावित बकाया चुकािे की
प्रवतबद्दता जताई है।
• अमेररका अब सांगठि के वियवमत बजट के 22 प्रवतशत के बराबर फां ि देगा।
• 2011 में वफवलस्तीि को सदस्य राज्य के रूप में शावमल करिे के वलए
मतदाि करिे के बाद अमेररका और इजराइल िे सांयुक्त राष्ट्र विकाय को
वित्तपोषण बांद कर वदया था।
United Nations Educational, Scientific and Cultural Organization
(UNESCO)
• Formation: 16 November 1945
• Headquarters: Paris, France
• Director-General: Audrey Azoulay (France)
King Charles and Queen Camilla gave environmental award to Indian
conservationists.
वकां ग चा्सस और रािी कै वमला िे भारतीय सांरक्षणिावदयों को पयासिरण पुरस्कार वदया।
• Britain’s King Charles III and Queen Camilla presented the
coveted Elephant Family Environmental Award to Indian
conservationists — Filmmaker Kartiki Gonsalves behind
Oscar-winning documentary ‘The Elephant Whisperers’ and
the Real Elephant Collective (TREC) of 70 Adivasi artists.
• विटेि के राजा चा्सस तृतीय और रािी कै वमला िे भारतीय सांरक्षणिावदयों -
ऑस्कर विजेता िृत्तवचत्र 'द एलीफें ट वव्हस्परसस' के विमासता कावतसकी
गोंसा्िेस और 70 आवदिासी कलाकारों के ररयल एलीफें ट कलेवक्टि
(टीआरईसी) को प्रवतवित हाथी पररिार पयासिरण पुरस्कार प्रदाि वकया।
• Kartiki Gonsalves received the Tara Award.
• Meanwhile, TREC was awarded the Mark Shand Award,
named in honour of the late founder of Elephant Family.
• कावतसकी गोंसा्िेस को तारा पुरस्कार वमला।
• इस बीच, टीआरईसी को माकस शैंि पुरस्कार से सम्मावित वकया गया,
वजसका िाम हाथी पररिार के वदिांगत सांस्थापक के सम्माि में रखा गया था।
Centre launches Bharat 6G Alliance as India acquires 200 patents
relating to 6G.
कें द्र िे भारत 6जी एलायांस लॉन्च वकया, भारत िे 6जी से सांबांवधत 200 पेटेंट हावसल
वकए हैं।
• Union Minister of Communications and Electronics &
Information Technology, Ashwini Vaishnaw, announced the
introduction of the Bharat 6G Alliance.
• कें द्रीय सांचार और इलेक्रॉविक्स एिां सूचिा प्रौद्योवगकी मांत्री अवश्विी िैष्ट्णि
िे भारत 6जी गठबांधि की शुरुआत की घोषणा की।
• It is a groundbreaking initiative aimed at launching the nextgeneration
technology in India following the successful
implementation of 5G.
• यह एक अभूतपूिस पहल है वजसका उ􀄥ेश्य 5G के सफल कायासन्ियि के बाद
भारत में अगली पीढी की तकिीक लॉन्च करिा है।
Lallianzuala Chhangte named the AIFF Men’s Footballer of the Year.
लावलयािजुआला चाांग्ते को एआईएफएफ पुरुष फु टबॉलर ऑफ द ईयर िावमत वकया
गया।
• Manisha Kalyan was named as the AIFF Women Player of the
Year.
• मिीषा क्याण को एआईएफएफ मवहला वखलाड़ी ऑफ द ईयर चुिा गया।
• The Men’s Coach of the Year award went to former India
player Clifford Miranda.
• Priya Parathi Valappil was named Women Coach of the Year.
• Akash Mishra and India U-17 team member Shilji Shaji were
named Men’s and Women’s Emerging Players of the Year.
• िषस के पुरुष कोच का पुरस्कार भारत के पूिस वखलाड़ी वक्लफोिस वमराांिा को
वदया गया।वप्रया परथी िलवप्पल को िषस की मवहला कोच चुिा गया।
• आकाश वमश्रा और भारत अांिर-17 टीम के सदस्य वशलजी शाजी को िषस
के पुरुष और मवहला उभरते वखलाड़ी िावमत वकया गया।`
console.log(hindiTxtRemover2(txt));