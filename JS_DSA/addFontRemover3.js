function addaFontRemover3(txt, date) {
  let str = '';
  for (let i = 0; i < txt.length; i++) {

    if (txt.charAt(i) == '.') {
      str += txt.charAt(i);
      if (newLineAdder(txt, i)) {
        str += '\n';
        i++;
        if (dateAdder(txt, i)) {
          str += '\n\n\n' + date;
        }
        i = bulletFinder(txt, i);
      }
    }
    str += txt.charAt(i);
  }
  return date + str;
}
function upperCaseFinder(txt, i) {
  for (; i < txt.length; i++) {
    if (txt.charCodeAt(i) >= 65 && txt.charCodeAt <= 97) {
      return true;
    }
  }
  return false;
}

function bulletFinder(txt, i) {
  for (; i < txt.length; i++) {
    if (txt.charAt(i) == '•') {
      return i;
    }
  }
  return txt.length;
}

function dateAdder(txt, i) {
  for (; i < txt.length; i++) {
    if (txt.charAt(i) == '•') {
      return false;
    }
    else if (txt.charCodeAt(i) >= 48 && txt.charCodeAt(i) <= 57 && txt.charAt(i + 1) == '.') {
      return true;
    }
    else if (txt.charCodeAt(i) >= 48 && txt.charCodeAt(i) <= 57 && txt.charCodeAt(i + 1) >= 48 && txt.charCodeAt(i + 1) <= 57 && txt.charAt(i + 2) == '.') {
      return true;
    }
  }
}

function newLineAdder(txt, i) {
  i = i + 1;
  for (; i < txt.length; i++) {
    if (txt.charAt(i) == '.') {
      return false;
    }
    else if (txt.charAt(i) == '\n') {
      return true;
    }
  }
  return false;
}



let txt =
` 
ata Group retains top spot as India's most valuable
brand at $28.6 billion.
tet BAS 28.6 fatetaa Ste H UIA UNA & Aaa
Aeaa TS Oh BT A Vis LAT UL ATR BI
A
WARRIOR PRO
BATCH
for Financial Awareness &
Current Affairs
a
Starts: 1 Feb |'2:30 pm to 4 pm
Use Code: Y168 for 80% Discount
Tata Group retains No.1 position with an
impressive 9% growth in brand value
(USD28.6 billion), Infosys ranks second &
HDFC Group catapults to 3rd spot as most
valuable Indian brand, propelled by its
monumental merger with HDFC Ltd.
BIS ATA (28.6 Farerast aeAeehT Ste F 9% AT
WATE ales oh ATA Treat AAS A AAT 1 CATA
TAIN Tat @, sulfa aA Ta Ws a
wadiunet fafices & are staat fast facet
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App | By Ashish Gautam Sir
a Ufta gee vadiomet ane wae Asa
AAT TS Oh WO A ATA CATT UL UST TAT BI
Taj, valued at $545 million, maintains its
position as India’s strongest brand with an
impressive Brand Strength Index (BSI) score
of 92.9 out of 100 and a prestigious AAA+
rating for brand strength.
This marks the third consecutive year that
Taj has held the top spot in brand strength.
545 TafcrardSte Aes Ae ATH, 100 HA 92.9
WMAais tear seer (alwasis) FA
ain ais dtend & feu afatsa wees eer art
UN h UA AAT TS eH WTF set arte
FATT VaAT Bl
We eran dteart ay F Wa aT A HS AT Aten
H wire cara etferet fevar BI
(2024
i $28,634M
Hi
$14,213M
HDFC Group $10,374M
LIC Group $10,068M
Hi/H\| HOH
Reliance Group $8,375M
Telecoms sector achieves 61% growth in
brand value, followed by Banking (26%) &
Mining, Iron & Steel sectors recording 16%
average growth.
coftata ata A ais Sea F 61% At akg athe
Hi, Fae are Ahr (26%) sit Ga, citewa
FRAT AAT F 16% cht shea ahs sat AT TSI
RBI ups financial accommodation for States/UTs by
28% to 260,118 crore.
Daily Current Affairs @ 7:00 AM
01 July 2024 Use Only Code:
Bank, SSC, Railway, State Exam By Ashish Gautam Sir « A Y168
80% Discount
ameftang 3 asics onfira wayit a fore tte
AAA 28% ASTHT 60,118 HS SAA HH Sh
The aggregate ways and means advances
(WMA) limit for State governments/ Union
Territories (UTs) has been upped to 260,118
crore against the existing limit of 247,010
crore.
The revised WMA limit is effective from July
1.
Tse ERVaS Usa aat Ih) & fw way
aatara air (erauan) drat at Aivtet
47,010 HS GAN A ASTAT 60,118 Hs SAA HT
fear war eI
aoe WMA AAT 1 ers S TTT eth
The RBI provides WMA (or financial
accommodation) to the States banking with it
to help them to tide over temporary
mismatches in the cash flow of their receipts
and payments.
ames tsar ht steht at sarcht orftrat ait
WTA & THeat Tare H sreoreat fererirat &
fraet W aee Get & fw WMA ct faria
STATA)TATA HAT Bl
World Bank Approves 2nd Round Of 1.5 Billion
Dollars In Financing To Help India Accelerate
Development Of Low-Carbon Energy.
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01 July 2024 Bank, SSC, Railway, State Exam By Ashish Gautam Sir 4 Y168
80% Discount
fag da 3 and at fear aol & fara F ast
airs Hae & fore 1.5 farferas Sten ch ferraraur a eat
ar at isntah
Since 2007, June 29 is celebrated as the
National Statistics Day to acknowledge and
appreciate the exceptional contributions
World Bank has approved a second round of made by statisticians in India, particularly
1.5 billion dollars in financing to help India honouring the birth anniversary of an
eminent statistician (Late) Prof. Prasanta
energy. Chandra Mahalanobis.
Earlier, in June 2023, the World Bank ae 2007 & 29 vit zat wet aifeacht feat ch
eu ff wareava &, arfee area aifteahhardt
BRT fou We stareeor AvTars cAl Celtenre fewer
Development Policy Operation. WT eh A TAHT ARTE cht BT Ae, FagBT
fay aie 5 arr at ards at & faa i Tae eet Geary Sh Sas
daft ot araa oh few 1.5 fattest Stor & ae a hiallits areata fehaT ST A
accelerate the development of low-carbon
approved the 1.5 billion dollars for the First
Low-Carbon Energy Programmatic
ate & feraataorsat Hare S at BI
sae Veet, HA 2023 HF fae dee a sere fe
wala Sal rsalten feenra Att darerst &
The theme for this year is Use of Data for
Decision Making.
ga ay ar fase @ futa om & fe eer at
fore 1.5 farferaa Sten cht tisedt at oft saa
The Centre has set a target of achieving 500
7 INS Shivalik Joins RIMPAC Exercise In Hawaii.
arguave frarferr gate F fate avare A onfaet
eat l
GW of installed renewable energy capacity by
2030 and reaching net zero by 2070.
we 7X 2030 am 500 hate al cenftd
adteruitaSal AATUTA HT Bit 2070 aw
We WS Th Usa HT eA TT Bl
18th Statistics Day was observed on 29th June.
29 Wa wal 18at ier Fear AAA TAT
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App | By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01 July 2024 Bank, SSC, Railway, State Exam By Ashish Gautam Sir « Y168
Indian Navy’s indigenous stealth frigate INS
Shivalik, deployed to the South China Sea and
the Pacific Ocean, is participating in the 29th
edition of the biennial Rim of the Pacific
(RIMPAC) exercise, the world’s largest
international maritime exercise, being held in
Hawaii.
afar dit are ak weria werare A aaa
anedta aaa car cae ete fete srguawa
Rrarfern, gare HF arratisraeta ater shar
aime 2 Ofaithe (rate) stvara & 298 Gener
HUNTA eT zl
Led by the US Navy, approx 29 countries are
participating in the current edition of the
multi-dimensional exercise.
Earlier this month, INS Shivalik participated
in the eighth edition of the bilateral Japan-
India Maritime Exercise 2024 (JIMEX 24)
held in Japan’s Yokosuka.
aTatecht areat & AderA, eT 29 set ae-
arrant avara & adara ewer ae a
Fe Aer Ht Weata F, aiguava Prater +
Was & atentaent HF atratisra feaefte arara-
WT AHA AVATA 2024 (JIMEX 24) & attoa
SenerF ant frat aT
Kohli, Rohit Announce Retirement From T20Is
After India’s World Cup Win Over South Africa.
fara ara & aaAt afer asta we ita Be are tech,
wfea 3 2120 & Gare At ara At
Use Only Code:
80% Discount
Virat Kohli and Rohit Sharma _ have
announced their retirement from
international T20 cricket following India’s
victory over South Africa in the 2024 T20
World Cup final in Barbados.
anarere FH 2024 2120 fas wa wigactF aferor
ahTent Ut AINE cht Sta & are farts lect siz
Cea wat + siaaredra 2120 fire & are Ft
STSUTTat ST BI
Kohli exits T20Is with an impressive record of
4,188 runs in 125 matches, boasting an
average of 48.69, including 38 half-centuries
and one century.
mle d20s FH 125 Fat A 4188 Ta
wuTagiettRepts & arr aret eu, Rreat 48.69
cht sited @, Brad 38 atelier ait UH aH
wifrerSI
Meanwhile, Rohit Sharma, the format’s
highest run-scorer, ends his T20I career with
4,231 runs in 159 matches.
He holds the record for the most centuries in
T20 internationals, with five to his name.
Notably, he has secured two T20 World Cup
titles: one as a player in 2007 and another as
captain in 2024.
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01 July 2024 Bank, SSC, Railway, State Exam By Ashish Gautam Sir 49 Y168
80% Discount
° ga dia, ured 8 aad Sel St aA ates Ue Axis Bank inaugurates branch at GIFT City.
wat 3 159 dat F 4,231 HH ara aad Anos =| Ulead free feet a orem ar sares fram
wha
ct
sia
feral
me
Ae
BAe
ATA
2120
stererecta
H
aatheren
yretent
cAT
fraté
2,
fred
sac
ara
aie
ore
ZI
fasts
Sa
a,
Fer
at
c20
faa
wa
Raara
arhtet
feru
@:
Uh
2007
4
Ue
Racist
&
BTA
i
TET
2024
8
Ha
&
ST AI
Axis Bank inaugurated its domestic retail
Ravindra Jadeja Announces His Retirement From branch at Gujarat International Finance Tec-
T20 International Cricket. City (GIFT City).
ais ASST Ft E120 ARTES Fonche S GATE cht ATU The branch was inaugurated by Tapan Ray,
ni MD & Group CEO, GIFT City,
Gandhinagar.
Uae ace TINT FETA gia eH fat
(Free feet) H atatt ater WaT VINAT GT SaTer
ferami
WIRE ct Sates frre fact, ieftam & vast sik
Wa digant aa t+ feral
Union Bank of India introduces “Union Premier”
branches for high-value customers in rural and semi-
Th -n-bowli 1 d frted “hi urban markets.
e spin-bowling all-rounder started his are ai
ite SfSar AT ATATOT Site Stel-greet ATTA
career against Sri Lanka in February 2009. = 3 =
Toa AT Aer Treent ch fore vatras tira yrange
He has scored a total of 515 runs in the 74
matches he has played and has taken 54
wickets in the shortest format.
feos tiearsit streniet 3 wrratt 2009 F sfteiet
& Racin stat caitar chi west ar at
TE Aa Ah VT TT 74 HatA Het 515Tl FATT
@ oi aa Bie sad F 54 fake fare Fi
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01 July 2024
Union Bank of India launched “Union
Premier” branches for high-value customers
in rural and semi-urban (RUSU) markets.
Each Union Premier customer will have
access to a personal Relationship Manager to
address all their banking needs.
aaa dem site sfear A orator ait atel-gredt
(awa) aA H Ser AST ae UTeAt
Tete arat Tre area cet arett watt etter
Wet wt aT aa & fee wm caked
Rrerera tara Rast deh UST TA SEM
C S Setty will be the next SBI Chairman.
at va st vaca & anit Gast Sh
Financial Services Institutions Bureau (FSIB)
has recommended the appointment of Challa
Sreenivasulu Setty for the position of
Chairman in State Bank of India.
Setty currently is the senior most Managing
Director.
ferdtaGar dears sat (THTEaTSah)T aes
Ree deh H areaar a ua & few ace starr
viet cht Prater ht fercnrieetAt BI
Wel ada 4 aaa afte weer Fees FI
Use Only Code:
Bank, SSC, Railway, State Exam By Ashish Gautam Sir « 168
80% Discount
CS Setty will succeed Dinesh Kumar Khara,
who will be superannuating on August 28,
when he turns 63, the upper age limit for the
position of SBI chairman.
He will be the 27th Chairman of SBI.
ALU, et, AAMT HAN ANT Sl TATA CHT, TT 28
Med Hl Aarhrad St A, As TAT ATT 63
ae St wut, wit fee waiters& ateqerue
fee sad ara art 2
ae Waders & 274 seer Bt
Headed by Bhanu Pratap Sharma, former
secretary of the Department of Personnel and
Training (DoPT), the FSIB is responsible for
appointing senior executives to public sector
financial institutions.
The recommendations now go to the
Appointments Committee of the Cabinet, led
by the prime minister, for final approval.
waitin wet sfisreror fast tartdtah & ad
afera rs Mae Brat cht arerera B wR ATS
ardufia aa & fadta dermal 4 af
orfirantfeaat Prats a fore faretare 2
ara & ferarhest attra ont ch fete wrerrriatt At
HATA ATett chferte cht rates afer a ara
WTUTT
Ravi Agrawal appointed new CBDT chief, to succeed
Nitin Gupta.
tea amare at fafaat WaT ar eat crt & fer Aart
aratStetwaa Fras fever ram
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01 July 2024
Ravi Agrawal has been appointed as the new
chairman of the Central Board of Direct
Taxes (CBDT), the administrative body for
the Income Tax Department.
He takes over from Nitin Gupta whose
extended tenure as the chairman ends on June
30.
He will head the CBDT till June, 2025.
ta smartat arate faurt & usreata
Prenat chste wearer at ate (atatSteh) cat Tat
areaer Praee fever war 21
seats afer Tat wr ears ferat S Rater steaat
& wa Ff faenita artaret 30 Wa Hl AaTH et
Te el
ae VA, 2025 aH MAASce we TEM
Use Only Code:
Bank, SSC, Railway, State Exam _ By Ashish Gautam Sir « 168
80% Discount
~~"
Vice President of India M Venkaiah Naidu via
video conferencing.
Ward Hat Ae Aret 4 aifeat HTT ch AeA
S UN & We soRecata UA Achar ANS oh Ate
Te ara UR cits wectentar fertrert fern
The book release event was organised at
Anvaya Convention Centre in Gachibowli in
Telangana’s Hyderabad, on the eve of the
75th birthday of the former Vice President
Naidu.
Ud soca AAS ch 75a Water Al Ue Mea
UR yet faites cardsen acinar & Saurav &
Tratataet H steaq Hays Wet A strata
fora Tat aT
The books released by the Prime Minister
include the biography of the former Vice
President titled ‘Venkaiah Naidu — Life in
Service’, authored by S Nagesh Kumar,
former Resident Editor of The Hindu,
Hyderabad edition.
Wad Halt EAT SIN Al We Tetent aes SoTET a
cht Sitett "tena AAS - HIgh St Alaa" VITAT
@, fore @ fea, carare Teen ch Ya Se User
Ue ang HA A aT ZI
Another book is ‘Celebrating Bharat — The
Mission and Message of M Venkaiah Naidu as
13th Vice-President of India’, a photo
chronicle compiled by IV Subba Rao, former
PM Modi Releases Three Books On Former Vice
President Venkaiah Naidu.
Ura Atal I Oe TUTE Ae AeA AAS UR chat Uectent GAT
Secretary to the Vice President of India.
Ue sea Ueda Uetstfer UNA - ANT H 13a
TATE a BUF UA AeA Aras HT FTA BI
aw &, Wt and ch somata& ud afaa¢ Prime Minister Narendra Modi released
three books on the life and journey of former
Use Code: Y 168 for Any Live Class/ Any MahaPack/ Warrior Pro Batch, Y168s for Books, E-Books, Test Series
Visit: Adda247.com / Adda247 App By Ashish Gautam Sir
Daily Current Affairs @ 7:00 AM
01
July
2024
Bank,
SSC,
Railway,
State
Exam
By
Ashish
Gautam
Sir
4
ASA Toa Wa BNI Henfera en watet shibtenct
al
The third book is a pictorial biography in
Telugu titled ‘Mahaneta — Life and Journey
of M. Venkaiah Naidu’, authored by Sanjay
Kishore.
cert fararat der i wen afer sitet & Fare
AM Weal - Aish US wet sitm wa. dear
areas! @, frees chars Bisa fener ZI
Former India Midfielder Bhupinder Singh Rawat
has passed away. He was 85.
ne a Yet frechiesx after fete waa ar Pert Mt rear
Zl aE 85 aT HF
= es =
Former Indian midfielder Bhupinder Singh
Rawat, known for his speed and nicknamed
Scooter, has passed a
`
console.log(addaFontRemover3(txt, '14/07 '))
// addaFontRemover3(txt, '08/07 ')