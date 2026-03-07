
function addaFontRemover(txt) {
  let date = '04/ 07 '
  txt = date + txt;
  let str = '';
  let i = findBullet(txt, 0);
  for (; i < txt.length; i++) {
    if (txt.charAt(i) == '.' && Ab1spaceChecker(txt, i + 1)) {
      str += txt.charAt(i) + '\n';
      if (dateAdder(txt, i))
      {
        str += '\n\n'+date;
      }
      i = findBullet(txt, i) - 1;
      continue;
    }
    str += txt.charAt(i);
  }
  return date + str;
}


function Ab1spaceChecker(txt, k) {
  // k = i+1;
  if (txt.charCodeAt(k) >= 48 && txt.charCodeAt(k) <= 57) {
    return false;
  }

  else if (txt.charCodeAt(k) >= 65 && txt.charCodeAt(k) <= 90) {
    return false;
  }
  else if (txt.charCodeAt(k) >= 97 && txt.charCodeAt(k) <= 122) {
    return false;
  }
  else if (txt.charCodeAt(k+2) >= 65 && txt.charCodeAt(k+2) <= 90) {
    return false;
  }
  else if (txt.charCodeAt(k + 2) >= 97 && txt.charCodeAt(k+2) <= 122) {
    return false;
  }
  else {
    return true;
  }
}

function findBullet(txt, i) {
  for (let j = i; j < txt.length; j++) {
    if (txt.charAt(j) == '•') {
      return j;
    }
  }
  return txt.length;
}

function dateAdder(txt, i) {
  for (let j = i; j < txt.length; j++) {
    if (txt.charAt(j) == '•') {
      return false;
    }

    else if (txt.charCodeAt(j) >= 48 && txt.charCodeAt(j) <= 57 && txt.charAt(j + 1) == '.' && txt.charAt(j + 2) == ' ') {
      return true;
    }
  }
}
let txt =
  `• India’s first indigenously developed 700 MW nuclear power reactor at the Kakrapar Atomic Power Project (KAPP) in Gujarat has successfully commenced commercial operations, marking a significant milestone in the country’s nuclear energy sector. 
    • The reactor, known as KAPP-3, began operating at 90 percent of its total power capacity on June 30, 2023, as confirmed by a senior official from KAPP. 
                             International News
2. New Zealand becomes first country to ban plastic produce bags

    • New Zealand has taken a momentous step towards reducing plastic waste by becoming the first country to implement a complete ban on thin plastic bags commonly used in supermarkets for fruit and vegetable purchases. 
    • Moreover, this move will extend beyond bags, as it also includes banning of plastic straws and silverware. This significant move aligns with the government’s ongoing campaign against single-use plastics, which began in 2019 with the prohibition of thicker plastic shopping bags. 
                                   State News
3. Y S Jagan Mohan Reddy launched the ‘Jagananna Amma Vodi’ scheme

    • Chief Minister Y.S. Jagan Mohan Reddy of Andhra Pradesh has taken a significant step towards promoting education and empowering mothers through the implementation of the Jagananna Amma Vodi scheme. 
    • With an allocation of ₹6,392 crore, this initiative aims to provide financial assistance to approximately 42 lakh mothers, offering them an annual gift of ₹15,000 for sending their children to school. 
                                 Defence News    
4. Lt Gen M U Nair appointed as new National Cybersecurity Coordinator

    • The government has named Lt Gen M U Nair as the newly appointed National Cybersecurity Coordinator (NCSC). Lt Gen Nair, who took on the role of the 28th Signal Officer-in-Chief in July 2022, brings a wealth of experience and expertise in the areas of cyber warfare, signal intelligence, and communication and information technology. 
    • Before assuming the position of NCSC, Lt Gen Nair held the position of commandant at the Military College of Telecommunication Engineering. 
                                 Banking News
5. State Bank of India Launches 34 Transaction Banking Hubs Nationwide

    • On the occasion of its 68th foundation day, the State Bank of India (SBI) has inaugurated 34 Transaction Banking Hubs across 21 district centres in the country. 
    • These hubs aim to provide efficient and quick Transaction Banking solutions to customers. 
6. State Bank of India Appoints Kameshwar Rao Kodavanti as CFO

    • State Bank of India, the country’s largest lender, has announced the appointment of Kameshwar Rao Kodavanti as its Chief Financial Officer (CFO). 
    • Kodavanti, who has been with the bank since 1991, assumed the position on July 1, 2023. This article provides details about Kodavanti’s appointment and his professional background. 
7. IDFC First Bank to Merge with IDFC Ltd in 155:100 Share Exchange Ratio 

    • IDFC First Bank and IDFC Ltd have announced their merger plans, with a share exchange ratio of 155 equity shares of IDFC First Bank for every 100 equity shares of IDFC. 
    • The merger aims to simplify the corporate structure, increase the book value per share, and streamline regulatory compliances. 
    • The merger is expected to be completed in the current financial year, subject to unforeseen circumstances. 
                                  Business News
8. Government Releases Draft Framework for India’s First Carbon Market

    • The Indian government has taken a significant step towards establishing India’s first carbon market by notifying a draft framework for the Carbon Credit Trading Scheme, 2023. 
    • The framework outlines the regulatory structure and key stakeholders responsible for the formation and functioning of the carbon market. 
    • This move aligns with India’s ambitious goal of achieving net-zero emissions by 2070 and aims to facilitate decarbonization in the commercial and industrial sector. 
                          Important Days News
9. International Day of Cooperatives 2023: Date, Theme, Significance and History

    • The International Day of Cooperatives is commemorated on July 1st and is celebrated on the first Saturday of July. This significant event unites people, communities, and organizations worldwide to honor the impressive influence of cooperative businesses. 
    • By joining forces, we recognize and appreciate the power of collaboration, which has positively impacted numerous lives and shaped communities on a global level. 
    • The designated theme for the International Day of Cooperatives 2023 is “Cooperatives for Sustainable Development.” 
10. USA Independence Day 2023: Date, Background, Significance and Celebration

    • The United States is celebrating its 247th Independence Day this year on 4th July. Independence Day is a federal holiday in the United States to commemorate the declaration of Independence. 
    • The celebration of Independence Day in U.S. is associated with parade, fireworks, carnival, fairs, picnics, political speeches, games and ceremonies. This day is considered to be a National Day of U.S. 
                            Appointment News
11. China’s Qu-Dongyu re-elected unopposed as head of FAO

    • The 43rd session of conference of United Nation Food and Agriculture Organization (FAO) held at FAO’s headquarter, Rome began on Saturday i.e. 1st July, 2023. 
    • In this conference of FAO Qu-Dongyu was re-elected as a Director General of United Nations Food and Agriculture Organization (FAO). 
                          Ranks & Reports News
12. Union Minister Kapil Moreshwar Patil Releases Report on Panchayat Development Index

    • Union Minister of State for Panchayati Raj, Shri Kapil Moreshwar Patil, released the Report on Panchayat Development Index (PDI) at a National Workshop on PDI. 
    • The workshop saw the participation of over 250 stakeholders, including senior government officials, ministry representatives, and key stakeholders in the field. 
                                Awards News
13. British children’s writer Michael Rosen awarded the PEN Pinter Prize 2023

    • Renowned children’s writer and performance poet, Michael Rosen, aged 77, has been honored with the esteemed PEN Pinter Prize 2023. 
    • This prestigious award is bestowed upon a writer hailing from the United Kingdom, Ireland, or the Commonwealth, whose body of work fearlessly uncovers and reveals truths about the realities of modern-day existence. 
14. Rajindar Singh Dhatt Receives Points of Light Award

    • Rajindar Singh Dhatt, the driving force behind the “Undivided Indian Ex-Servicemen’s Association” has been honored with the prestigious Points of Light award for his exceptional service and relentless efforts to bring together British Indian war veterans. 
    • Dhatt demonstrated his dedication to serving his country by joining the British Indian Army during the Second World War. 
                                 Sports News
15. Shreyanka Patil becomes first Indian cricketer to be part of Caribbean Premier League

    • Young spin bowler Shreyanka Patil has made history by becoming the first Indian cricketer to be signed for the Women’s Caribbean Premier League (WCPL). Interestingly, Patil is also the first Indian player to be offered a contract in an overseas league before making her international debut. 
    • Shreyanka Patil made a name for herself when she was selected for Royal Challenger’s Bangalore (RCB) in the inaugural edition of the WPL. In the 7 matches she played for RCB, the all-rounder took 6 wickets and scored 62 runs. 
Important Current Affairs of 4th July 2023
Get all the International, National, Sports, Economy, latest schemes and appointments and current affairs updates with Adda247 Headlines of the day. Adda247 headlines of the day brings you the best accumulation of the daily updates. Stay updated with us!

`
console.log(addaFontRemover(txt));