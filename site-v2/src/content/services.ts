export interface Service {
  slug: string;
  title: string;
  intro: string;
  bodyHtml: string;
  faqs: { q: string; a: string }[];
  relatedArticleSlugs: string[];
}

/* New copy throughout this file is drafted factually, with no outcome promises
   or superlatives, per the site's advertising guardrails — flag anything here
   for review before publishing (<!-- REVIEW --> marks substantive claims). */

export const servicesHe: Service[] = [
  {
    slug: "cybercrime-online-trading",
    title: "פשיעת סייבר ומסחר אונליין",
    intro: "אישומים הקשורים לפריצה למערכות, הונאות, גניבת זהות, פלטפורמות מסחר אונליין (פורקס, CFD, קריפטו) ועבירות מקוונות אחרות.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שנחקר, הוזמן לחקירה, או הוגש נגדו כתב אישום בנושאי פשיעת סייבר, הונאות מקוונות, או פעילות בתחום המסחר האונליין — בישראל או מול רשויות זרות.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>תיקים מסוג זה כוללים לרוב אלמנטים טכניים (ראיות דיגיטליות, תנועות כספים, שרתים במדינות שונות) ואלמנט בינלאומי — חקירה מקבילה של רשויות בחו"ל, ולעיתים בקשת הסגרה.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>ליווי מהשלב הראשוני של חקירה או זימון.</li>
        <li>בחינת הראיות הדיגיטליות והבסיס המשפטי לאישומים.</li>
        <li>תיאום מול עורכי דין במדינות מעורבות, במידת הצורך.</li>
        <li>בחינת אפשרות להסדר מול התביעה.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>אל תמסור גרסה או מידע לרשויות לפני שהתייעצת עם עורך דין.</li>
        <li>שמור על כל התכתובות, המסמכים והראיות הרלוונטיים.</li>
        <li>פנה לייעוץ משפטי בהקדם, גם אם מדובר רק בזימון ראשוני לחקירה.</li>
      </ul>
    `,
    faqs: [
      { q: "זומנתי לחקירה בנושא מסחר אונליין — האם אני חשוד?", a: "זימון לחקירה אינו שווה-ערך להגשת אישום. חשוב להבין את מעמדך בהליך ואת זכויותיך לפני כל חקירה." },
      { q: "האם תיק כזה כולל בהכרח צד בינלאומי?", a: "לא בהכרח, אך תיקי סייבר ומסחר אונליין כוללים לעיתים קרובות ראיות או רשויות ממדינות שונות." },
    ],
    relatedArticleSlugs: ["forex-online-trading"],
  },
  {
    slug: "extradition",
    title: "הסגרות",
    intro: "ליווי מלא בהליכי הסגרה, עם התמקדות בהיבטים המשפטיים, הפרוצדורליים וזכויות האדם.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שמתמודד עם בקשת הסגרה ממדינה זרה, או חושש שבקשה כזו עומדת להיות מוגשת נגדו.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>בקשת הסגרה נבחנת על ידי בית משפט בישראל, הבודק האם היא עומדת בתנאי האמנה הרלוונטית בין המדינות. ההליך עשוי לכלול שלבים משפטיים נפרדים ולהימשך תקופה ממושכת.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>בחינת הבסיס המשפטי של בקשת ההסגרה.</li>
        <li>ייצוג בהליך מול בית המשפט בישראל.</li>
        <li>בחינת האפשרות להתנגד לבקשה או להציע חלופות.</li>
        <li>תיאום עם עורכי דין במדינה המבקשת, במידת הצורך.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>אל תגיב לפנייה מרשויות זרות בלי ייעוץ משפטי מוקדם.</li>
        <li>אסוף כל מסמך שקיבלת בנושא (בקשה, זימון, הודעה).</li>
        <li>פנה לייעוץ בהקדם האפשרי — טיפול מוקדם מרחיב את מגוון האפשרויות.</li>
      </ul>
    `,
    faqs: [
      { q: "כמה זמן נמשך הליך הסגרה?", a: "משך ההליך משתנה בהתאם למדינה ולנסיבות התיק, ויכול להתפרש על פני חודשים עד שנים." },
      { q: "האם אפשר להתנגד לבקשת הסגרה?", a: "כן, קיימים מסלולים משפטיים להתנגדות, בהתאם לנסיבות התיק ולאמנה הרלוונטית." },
    ],
    relatedArticleSlugs: ["international-arrest", "forex-online-trading"],
  },
  {
    slug: "interpol-red-notice",
    title: "הודעות אדומות של אינטרפול",
    intro: "בדיקה וטיפול מול אינטרפול כאשר קיים חשש או מידע על הודעה אדומה שהוצאה נגדך.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שחושד שהוצאה נגדו הודעה אדומה של אינטרפול, או נתקל בבעיה בגבול או בנמל תעופה שעשויה להיות קשורה להודעה כזו.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>הודעה אדומה אינה צו מעצר מחייב, וכל מדינה מחליטה בעצמה כיצד לפעול לפיה. הטיפול בה כולל בדרך כלל פנייה לוועדה הרלוונטית באינטרפול ובחינת הבסיס המשפטי להוצאתה.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>בדיקה האם קיימת הודעה אדומה ומה מקורה.</li>
        <li>הגשת פנייה לוועדת הביקורת של אינטרפול (CCF) לבקשת הסרה או עיון מחדש.</li>
        <li>ייעוץ לגבי נסיעות בינלאומיות בטרם טופל הנושא.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>הימנע ממעבר גבולות עד לבירור הנושא.</li>
        <li>אסוף כל מידע או מסמך הקשור לחשד.</li>
        <li>פנה לייעוץ משפטי בהקדם, לפני כל מגע עם רשויות.</li>
      </ul>
    `,
    faqs: [
      { q: "קיבלתי הודעה שיש נגדי הודעה אדומה של אינטרפול — מה עליי לעשות?", a: "רצוי לפנות לעורך דין בהקדם, לפני כל מגע עם רשויות או מעבר בגבולות, כדי לבדוק את מקור ההודעה והאפשרויות העומדות בפניך." },
      { q: "איך אדע אם יש נגדי הודעה אדומה?", a: "רוב ההודעות אינן פומביות. לעיתים ניתן לדעת עליהן רק בעת ניסיון לעבור גבול, או דרך בדיקה מול עורך דין." },
    ],
    relatedArticleSlugs: ["interpol-red-notice"],
  },
  {
    slug: "international-arrest",
    title: "מעצרים בינלאומיים",
    intro: "סיוע למי שנעצר בחו\"ל או מבוקש במדינות שונות, בתיאום עם אנשי קשר משפטיים מקומיים.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שנעצר בחו"ל, או בני משפחה של מי שנעצר בחו"ל ומחפשים ליווי וסיוע ראשוני.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>מעצר במדינה זרה כפוף לחוקים המקומיים של אותה מדינה. ייצוג בפועל בבית משפט זר נעשה על ידי עורך דין מוסמך באותה מדינה, לרוב בתיאום עם עורך דין ישראלי שמלווה את התהליך.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>תיאום עם עורך דין מקומי במדינת המעצר.</li>
        <li>ליווי המשפחה בישראל לאורך ההליך.</li>
        <li>תיאום מול הקונסוליה או שגרירות ישראל.</li>
        <li>מעקב אחר ההליך המשפטי במדינה הזרה.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>דרשו הודעה לקונסוליה הישראלית בהקדם.</li>
        <li>אל תמסרו גרסה לפני ייעוץ משפטי.</li>
        <li>פנו ליצירת קשר עם עורך דין מקומי מתאים ועורך דין ישראלי במקביל.</li>
      </ul>
    `,
    faqs: [
      { q: "בן משפחה שלי נעצר בחו\"ל — מה עושים ראשון?", a: "חשוב לדרוש הודעה לקונסוליה הישראלית, ולפנות ליצירת קשר עם עורך דין מקומי במדינת המעצר בהקדם האפשרי." },
      { q: "האם אתה מייצג בבתי משפט מחוץ לישראל?", a: "ייצוג בפועל בבית משפט זר נעשה בדרך כלל על ידי עורך דין מוסמך באותה מדינה; הליווי שלי כולל תיאום עם רשת עורכי דין מקומית ומעקב אחר ההליך." },
    ],
    relatedArticleSlugs: ["international-arrest"],
  },
  {
    slug: "foreign-indictment",
    title: "כתבי אישום במדינה זרה",
    intro: "הבנת האישומים ובניית אסטרטגיה — ערעור, משא ומתן עם הרשויות, או תכנון קו הגנה.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שקיבל כתב אישום במדינה זרה, או נודע לו שמתנהל נגדו הליך פלילי מחוץ לישראל.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>כתב אישום במדינה זרה מתנהל לפי הדין הפלילי של אותה מדינה. השלב הראשון הוא הבנת האישומים וההליך הצפוי, ולאחר מכן בניית אסטרטגיה — בין אם ערעור, משא ומתן, או הכנת קו הגנה.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>בחינת כתב האישום וההליך הצפוי במדינה הזרה.</li>
        <li>תיאום עם עורך דין מקומי מוסמך באותה מדינה.</li>
        <li>ליווי לאורך קבלת ההחלטות וההתנהלות מול הרשויות.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>אל תתעלם מכתב האישום, גם אם אתה מחוץ לאותה מדינה.</li>
        <li>שמור עותק של כל מסמך שהתקבל.</li>
        <li>פנה לייעוץ משפטי לפני כל תגובה לרשויות.</li>
      </ul>
    `,
    faqs: [
      { q: "קיבלתי כתב אישום במדינה זרה אך אני בישראל — מה המשמעות?", a: "המשמעות תלויה בנסיבות התיק ובדין המקומי של אותה מדינה. מומלץ לבחון את המסמך עם עורך דין בהקדם, גם אם אינך נמצא כרגע באותה מדינה." },
      { q: "האם כתב אישום במדינה זרה יכול להוביל לבקשת הסגרה?", a: "במקרים מסוימים כן. זו אחת הסיבות לפנות לייעוץ משפטי מוקדם ולא להתעלם מההליך." },
    ],
    relatedArticleSlugs: ["international-arrest"],
  },
  {
    slug: "plea-agreements",
    title: "הסכמים עם התביעה",
    intro: "משא ומתן שמוביל להפחתת אישומים, צמצום ענישה, או הימנעות ממשפט.",
    bodyHtml: `
      <h2>למי זה מיועד</h2>
      <p>מי שמתמודד עם הליך פלילי — בישראל או בחו"ל — ושוקל, או מתאים למקרה שלו, הסדר מול התביעה.</p>
      <h2>מה קורה בדרך כלל</h2>
      <!-- REVIEW -->
      <p>בחלק מהמקרים, ניהול משא ומתן מול רשויות התביעה יכול להוביל להפחתת אישומים, צמצום ענישה, או הימנעות מהליך משפטי ארוך. ההחלטה האם לפנות למסלול כזה תלויה בנסיבות התיק הספציפי.</p>
      <h2>כיצד אני יכול לעזור</h2>
      <ul>
        <li>בחינת החומר הקיים והאפשרויות העומדות על הפרק.</li>
        <li>ניהול משא ומתן מול רשויות התביעה בישראל או בחו"ל.</li>
        <li>הסבר ברור של היתרונות והחסרונות של כל מסלול אפשרי.</li>
      </ul>
      <h2>מה לעשות עכשיו</h2>
      <ul>
        <li>אל תקבל החלטה על הסדר לפני ייעוץ משפטי מלא.</li>
        <li>רכז את כל המסמכים הרלוונטיים לתיק.</li>
        <li>פנה לייעוץ בהקדם — תזמון משפיע לעיתים על האפשרויות העומדות על הפרק.</li>
      </ul>
    `,
    faqs: [
      { q: "האם הסדר טיעון מתאים לכל תיק?", a: "לא. ההתאמה תלויה בנסיבות הספציפיות של התיק, ונבחנת לגופו של עניין מול עורך דין." },
      { q: "מי מנהל את המשא ומתן מול התביעה?", a: "עורך הדין המייצג מנהל את המגעים מול רשויות התביעה, תוך עדכון שוטף של הלקוח בכל שלב." },
    ],
    relatedArticleSlugs: ["forex-online-trading"],
  },
];

export const servicesEn: Service[] = [
  {
    slug: "cybercrime-online-trading",
    title: "Cybercrime and Online Trading",
    intro: "Charges involving system breaches, fraud, identity theft, online trading platforms (forex, CFDs, crypto), and other online offenses.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone under investigation, called in for questioning, or charged in connection with cybercrime, online fraud, or activity in the online trading space — in Israel or before foreign authorities.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>Cases like these usually involve technical elements (digital evidence, money flows, servers in different countries) and an international dimension — a parallel investigation by foreign authorities, and sometimes an extradition request.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Guidance from the early stage of an investigation or summons.</li>
        <li>Reviewing the digital evidence and the legal basis for the charges.</li>
        <li>Coordinating with lawyers in involved countries, where needed.</li>
        <li>Examining the possibility of an agreement with the prosecution.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Don't give a statement to authorities before consulting a lawyer.</li>
        <li>Preserve all relevant correspondence, documents, and evidence.</li>
        <li>Seek legal advice early, even for an initial summons for questioning.</li>
      </ul>
    `,
    faqs: [
      { q: "I was summoned for questioning about online trading — am I a suspect?", a: "Being called in for questioning is not the same as being charged. It's important to understand your status and rights before any questioning." },
      { q: "Does a case like this always have an international angle?", a: "Not necessarily, but cybercrime and online-trading cases often involve evidence or authorities from more than one country." },
    ],
    relatedArticleSlugs: ["forex-online-trading"],
  },
  {
    slug: "extradition",
    title: "Extraditions",
    intro: "Full guidance through extradition proceedings, focused on legal, procedural and human-rights aspects.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone facing an extradition request from a foreign country, or concerned that one may be filed against them.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>An extradition request is reviewed by a court in Israel, which examines whether it meets the conditions of the relevant treaty between the countries. The process can involve several distinct legal stages and extend over a long period.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Reviewing the legal basis of the extradition request.</li>
        <li>Representation in proceedings before the court in Israel.</li>
        <li>Examining options to oppose the request or propose alternatives.</li>
        <li>Coordinating with lawyers in the requesting country, where needed.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Don't respond to contact from foreign authorities without prior legal advice.</li>
        <li>Collect any document you've received on the matter.</li>
        <li>Seek advice as early as possible — early action widens the range of options.</li>
      </ul>
    `,
    faqs: [
      { q: "How long does an extradition process take?", a: "Duration varies by country and case, and can range from months to years." },
      { q: "Can an extradition request be opposed?", a: "Yes, there are legal avenues to oppose a request, depending on the case and the relevant treaty." },
    ],
    relatedArticleSlugs: ["international-arrest", "forex-online-trading"],
  },
  {
    slug: "interpol-red-notice",
    title: "Interpol Red Notices",
    intro: "Review and handling with Interpol when there's concern about, or information on, a Red Notice issued against you.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone who suspects a Red Notice has been issued against them, or has run into an issue at a border or airport that may be related to one.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>A Red Notice is not a binding arrest warrant, and each country decides for itself how to act on it. Handling one typically involves contacting Interpol's relevant review body and examining the legal basis on which it was issued.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Checking whether a Red Notice exists and where it originated.</li>
        <li>Filing a request with Interpol's Commission for the Control of Files (CCF) for removal or review.</li>
        <li>Advising on international travel until the matter is resolved.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Avoid crossing borders until the matter is clarified.</li>
        <li>Gather any information or documents related to the concern.</li>
        <li>Seek legal advice early, before any contact with authorities.</li>
      </ul>
    `,
    faqs: [
      { q: "I was told there's an Interpol Red Notice against me — what should I do?", a: "It's best to contact a lawyer as soon as possible, before any contact with authorities or crossing a border, to check the notice's origin and your options." },
      { q: "How would I know if there's a Red Notice against me?", a: "Most notices are not public. In some cases you only find out when attempting to cross a border, or by checking with a lawyer." },
    ],
    relatedArticleSlugs: ["interpol-red-notice"],
  },
  {
    slug: "international-arrest",
    title: "International Arrests",
    intro: "Support for clients arrested abroad or wanted in other jurisdictions, coordinated with local legal contacts.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone arrested abroad, or family members of someone arrested abroad looking for initial guidance and support.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>An arrest in a foreign country is subject to that country's local laws. Actual representation in a foreign court is handled by a lawyer licensed in that country, usually coordinated with an Israeli lawyer accompanying the process.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Coordinating with a local lawyer in the detaining country.</li>
        <li>Accompanying the family in Israel throughout the process.</li>
        <li>Coordinating with the Israeli consulate or embassy.</li>
        <li>Following the legal process in the foreign country.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Demand notification to the Israeli consulate as soon as possible.</li>
        <li>Don't give a statement before legal advice.</li>
        <li>Reach out to arrange both a suitable local lawyer and an Israeli lawyer in parallel.</li>
      </ul>
    `,
    faqs: [
      { q: "A family member was arrested abroad — what's the first step?", a: "It's important to demand notification to the Israeli consulate, and reach out to arrange a local lawyer in the detaining country as soon as possible." },
      { q: "Do you represent clients in courts outside Israel?", a: "Court appearances abroad are generally handled by a lawyer licensed in that country; my role includes coordinating with a local legal network and following the process throughout." },
    ],
    relatedArticleSlugs: ["international-arrest"],
  },
  {
    slug: "foreign-indictment",
    title: "Foreign Indictments",
    intro: "Understanding the charges and building a strategy — challenging the indictment, negotiating, or planning a defense.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone who has received an indictment in a foreign country, or learned that criminal proceedings are underway against them outside Israel.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>A foreign indictment proceeds under that country's criminal law. The first step is understanding the charges and the expected process, followed by building a strategy — whether an appeal, negotiation, or preparing a defense.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Reviewing the indictment and the expected process in the foreign country.</li>
        <li>Coordinating with a licensed local lawyer in that country.</li>
        <li>Accompanying the decision-making process and dealings with authorities.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Don't ignore the indictment, even if you're outside that country.</li>
        <li>Keep a copy of every document you've received.</li>
        <li>Seek legal advice before responding to authorities.</li>
      </ul>
    `,
    faqs: [
      { q: "I received a foreign indictment but I'm in Israel — what does it mean?", a: "The implications depend on the case and local law in that country. It's best to have the document reviewed by a lawyer soon, even if you're not currently in that country." },
      { q: "Can a foreign indictment lead to an extradition request?", a: "In some cases, yes. This is one reason to seek early legal advice rather than ignore the process." },
    ],
    relatedArticleSlugs: ["international-arrest"],
  },
  {
    slug: "plea-agreements",
    title: "Prosecution Agreements",
    intro: "Negotiation that can lead to reduced charges, minimized penalties, or trial avoidance.",
    bodyHtml: `
      <h2>Who this is for</h2>
      <p>Anyone facing criminal proceedings — in Israel or abroad — who is considering, or whose case may be suited to, an agreement with the prosecution.</p>
      <h2>What typically happens</h2>
      <!-- REVIEW -->
      <p>In some cases, negotiating with prosecution authorities can lead to reduced charges, minimized penalties, or avoiding a lengthy trial. Whether this route is appropriate depends on the specific circumstances of the case.</p>
      <h2>How I can help</h2>
      <ul>
        <li>Reviewing the existing material and the options on the table.</li>
        <li>Negotiating with prosecution authorities in Israel or abroad.</li>
        <li>Explaining clearly the advantages and drawbacks of each possible route.</li>
      </ul>
      <h2>What to do right now</h2>
      <ul>
        <li>Don't agree to a deal before getting full legal advice.</li>
        <li>Gather all documents relevant to the case.</li>
        <li>Seek advice early — timing can affect the options on the table.</li>
      </ul>
    `,
    faqs: [
      { q: "Is a plea agreement right for every case?", a: "No. Suitability depends on the specific circumstances of the case and is assessed individually with a lawyer." },
      { q: "Who handles the negotiation with the prosecution?", a: "The representing lawyer handles contact with prosecution authorities, keeping the client updated at every stage." },
    ],
    relatedArticleSlugs: ["forex-online-trading"],
  },
];
