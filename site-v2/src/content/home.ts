export interface HomeContent {
  lang: "he" | "en";
  dir: "rtl" | "ltr";
  otherLangLabel: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  nav: { home: string; about: string; practiceAreas: string; articles: string; contact: string };
  hero: { eyebrow: string; h1: string; h1Accent: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  urgent: {
    title: string;
    items: { title: string; blurb: string }[];
  };
  practiceAreas: {
    title: string;
    items: { title: string; blurb: string }[];
  };
  howItWorks: {
    title: string;
    steps: { title: string; blurb: string }[];
  };
  about: { title: string; blurb: string[]; cta: string };
  articles: {
    title: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: { title: string; blurb: string; ctaPrimary: string; ctaSecondary: string };
  footer: { tagline: string; legal: string[]; rights: string };
}

const PHONE = "[ADD PHONE]";

export const he: HomeContent = {
  lang: "he",
  dir: "rtl",
  otherLangLabel: "EN",
  phone: PHONE,
  phoneHref: "tel:+972000000000",
  whatsappHref: "https://wa.me/436601772166",
  email: "[ADD EMAIL]",
  nav: {
    home: "דף הבית",
    about: "אודות",
    practiceAreas: "תחומי התמחות",
    articles: "מאמרים",
    contact: "צור קשר",
  },
  hero: {
    eyebrow: "הגנה פלילית בינלאומית",
    h1: "הגנה חוצת גבולות למקרים משפטיים מורכבים",
    h1Accent: "חוצת גבולות",
    sub: "עם ניסיון בדין פלילי, אני מעניק הגנה ממוקדת ואסטרטגית ללקוחות העומדים בפני אישומים חמורים — בין אם בארץ ובין אם מעבר לגבולות. מפשיעת סייבר ועד למעצרים בינלאומיים, אני כאן כדי להגן על זכויותיך בכל שלב בדרך.",
    ctaPrimary: "קביעת שיחת ייעוץ ראשונית",
    ctaSecondary: "לשיחה בוואטסאפ",
  },
  urgent: {
    title: "נעצרת בחו\"ל, או חושש שזה עומד לקרות?",
    items: [
      {
        title: "נעצרת בנתב\"ג על בסיס הודעה אדומה",
        blurb: "מעצר בנמל תעופה על בסיס הודעה אדומה של אינטרפול מצריך פעולה מהירה. נברר מול הרשויות מה בדיוק נדרש ומה הצעדים הראשונים.",
      },
      {
        title: "התקבלה בקשת הסגרה",
        blurb: "בקשת הסגרה ממדינה אחרת פותחת הליך משפטי מורכב. נבחן את הבקשה, את הבסיס המשפטי שלה ואת האפשרויות לערער עליה.",
      },
      {
        title: "הוגש כתב אישום במדינה זרה",
        blurb: "כתב אישום בחו\"ל מצריך הבנה של השיטה המשפטית המקומית. נבנה אסטרטגיה מתואמת עם עורכי דין במדינה הרלוונטית.",
      },
      {
        title: "חקירה בעבירות סייבר או מסחר אונליין",
        blurb: "חקירה בנושאי פורקס, קריפטו או CFD כוללת לרוב אלמנטים טכניים ובינלאומיים. נפעל לשמור על זכויותיך משלב החקירה ואילך.",
      },
    ],
  },
  practiceAreas: {
    title: "תחומי התמחות",
    items: [
      { title: "פשיעת סייבר", blurb: "אישומים הקשורים לפריצה למערכות, הונאות, גניבת זהות ועבירות מקוונות אחרות." },
      { title: "הסגרות", blurb: "ליווי מלא בהליכי הסגרה, עם התמקדות בהיבטים המשפטיים, הפרוצדורליים וזכויות האדם." },
      { title: "הודעות אדומות של אינטרפול", blurb: "בדיקה וטיפול מול אינטרפול כאשר קיים חשש או מידע על הודעה אדומה." },
      { title: "מעצרים בינלאומיים", blurb: "סיוע למי שנעצר בחו\"ל או מבוקש במדינות שונות, בתיאום עם אנשי קשר משפטיים מקומיים." },
      { title: "כתבי אישום במדינה זרה", blurb: "הבנת האישומים ובניית אסטרטגיה — ערעור, משא ומתן עם הרשויות, או תכנון קו הגנה." },
      { title: "הסכמים עם התביעה", blurb: "משא ומתן שמוביל להפחתת אישומים, צמצום ענישה, או הימנעות ממשפט." },
    ],
  },
  howItWorks: {
    title: "איך זה עובד",
    steps: [
      { title: "שיחה ראשונה", blurb: "שיחת בירור קצרה להבנת המצב והדחיפות שלו." },
      { title: "בדיקת התיק", blurb: "סקירת החומר הקיים, המסמכים וההליך הרלוונטי." },
      { title: "אסטרטגיה חוצת גבולות", blurb: "גיבוש קו פעולה שמביא בחשבון את כל המדינות המעורבות." },
      { title: "ייצוג עם רשת מקומית", blurb: "ליווי ההליך בפועל, בשיתוף עורכי דין מקומיים במידת הצורך." },
    ],
  },
  about: {
    title: "אודות עו\"ד אופיר מרזוק",
    blurb: [
      `מעל עשור עם התמחות בהגנה פלילית והתמקדות מיוחדת בתיקים בעלי אופי בינלאומי. במהלך השנים טיפלתי בתיקים הקשורים לפשיעת סייבר, הסגרות, מעצרים בינלאומיים וכתבי אישום במדינות זרות. יש לי גם ניסיון בניהול מו״מ עם רשויות התביעה כאשר הדבר משרת את טובת הלקוח.`,
      `עבודתי כוללת לעיתים קרובות שיתוף פעולה עם רשת עורכי דין מהימנים במדינות שונות, כדי להבטיח שלקוחותיי יקבלו ייצוג מקצועי ואפקטיבי — בכל מקום בו מתנהל ההליך. אני ניגש לכל תיק בקפידה, באסטרטגיה ברורה, ובהבנה עמוקה של האופן שבו מערכות משפט מורכבות עשויות להשפיע על חייהם של אנשים.`,
    ],
    cta: "קרא עוד עליי",
  },
  articles: {
    title: "מאמרים אחרונים",
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      { q: "קיבלתי הודעה שיש נגדי הודעה אדומה של אינטרפול — מה עליי לעשות?", a: "רצוי לפנות לעורך דין בהקדם, לפני כל מגע עם רשויות או מעבר בגבולות, כדי לבדוק את מקור ההודעה והאפשרויות העומדות בפניך." },
      { q: "כמה זמן נמשך הליך הסגרה?", a: "משך ההליך משתנה בהתאם למדינה ולנסיבות התיק, ויכול להתפרש על פני חודשים עד שנים." },
      { q: "האם אפשר לייצג אותי בתיק שמתנהל במדינה אחרת?", a: "הייצוג בפועל בבית משפט זר נעשה בדרך כלל על ידי עורך דין מוסמך באותה מדינה; אני פועל בתיאום עם רשת עורכי דין מקומית ומלווה את התהליך כולו." },
      { q: "נחקרתי על ידי המשטרה בנושא מסחר אונליין — האם אני בהכרח חשוד?", a: "זימון לחקירה אינו שווה-ערך להגשת אישום. חשוב להבין את מעמדך בהליך ואת הזכויות שלך לפני כל חקירה." },
      { q: "האם שיחת הייעוץ הראשונה חסויה?", a: "כל פנייה ושיחה עם עורך דין כפופה לחיסיון עורך דין-לקוח." },
    ],
  },
  finalCta: {
    title: "מעוניינים בשיחת ייעוץ?",
    blurb: "מלאו את פרטיכם ואחזור אליכם בהקדם האפשרי, או פנו ישירות בטלפון או בוואטסאפ.",
    ctaPrimary: "קביעת שיחת ייעוץ ראשונית",
    ctaSecondary: "לשיחה בוואטסאפ",
  },
  footer: {
    tagline: "משרד עורכי דין המתמחה במשפט פלילי בינלאומי",
    legal: ["מדיניות פרטיות", "הצהרת אחריות", "הצהרת נגישות"],
    rights: "כל הזכויות שמורות",
  },
};

export const en: HomeContent = {
  lang: "en",
  dir: "ltr",
  otherLangLabel: "עברית",
  phone: PHONE,
  phoneHref: "tel:+972000000000",
  whatsappHref: "https://wa.me/436601772166",
  email: "[ADD EMAIL]",
  nav: {
    home: "Home",
    about: "About",
    practiceAreas: "Practice Areas",
    articles: "Articles",
    contact: "Contact",
  },
  hero: {
    eyebrow: "International Criminal Defense",
    h1: "Cross-Border Defense for Complex Legal Cases",
    h1Accent: "Cross-Border",
    sub: "With experience in criminal law, I provide focused and strategic defense for clients facing serious charges — whether in Israel or across borders. From cybercrime to international arrests, I'm here to protect your rights every step of the way.",
    ctaPrimary: "Book a Free Initial Consultation",
    ctaSecondary: "Message on WhatsApp",
  },
  urgent: {
    title: "Arrested abroad, or worried you might be?",
    items: [
      {
        title: "Detained at an airport on a Red Notice",
        blurb: "An airport detention based on an Interpol Red Notice calls for fast action. We review what's actually required and the immediate next steps.",
      },
      {
        title: "Received an extradition request",
        blurb: "An extradition request from another country opens a complex legal process. We examine the request, its legal basis, and the options to challenge it.",
      },
      {
        title: "Charged in a foreign country",
        blurb: "A foreign indictment requires understanding the local legal system. We build a strategy coordinated with counsel in the relevant country.",
      },
      {
        title: "Under investigation for cyber or online-trading offenses",
        blurb: "Investigations involving forex, crypto or CFDs often have technical and international elements. We work to protect your rights from the investigation stage onward.",
      },
    ],
  },
  practiceAreas: {
    title: "Practice Areas",
    items: [
      { title: "Cybercrime", blurb: "Charges involving system breaches, fraud, identity theft and other online offenses." },
      { title: "Extraditions", blurb: "Full guidance through extradition proceedings, focused on legal, procedural and human-rights aspects." },
      { title: "Interpol Red Notices", blurb: "Review and handling with Interpol when there's concern about, or information on, a Red Notice." },
      { title: "International Arrests", blurb: "Support for clients arrested abroad or wanted in other jurisdictions, coordinated with local legal contacts." },
      { title: "Foreign Indictments", blurb: "Understanding the charges and building a strategy — challenging the indictment, negotiating, or planning a defense." },
      { title: "Prosecution Agreements", blurb: "Negotiation that can lead to reduced charges, minimized penalties, or trial avoidance." },
    ],
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      { title: "First Call", blurb: "A short call to understand your situation and its urgency." },
      { title: "Case Review", blurb: "Reviewing the existing material, documents, and relevant process." },
      { title: "Cross-Border Strategy", blurb: "Building a course of action that accounts for every country involved." },
      { title: "Representation with Local Network", blurb: "Accompanying the process, working with local counsel where needed." },
    ],
  },
  about: {
    title: "About Adv. Ofir Marzouk",
    blurb: [
      `With over a decade of experience in criminal defense and a special focus on international cases, I have handled matters ranging from cybercrime to extraditions, international arrests, and foreign indictments. I also have extensive experience in negotiating with prosecution authorities when it serves the client's best interests.`,
      `My work often involves collaboration with a trusted network of attorneys across different countries to ensure my clients receive professional and effective representation — wherever their case may be. I approach each case meticulously, with a clear strategy and a deep understanding of how complex legal systems can impact people's lives.`,
    ],
    cta: "Read more about me",
  },
  articles: {
    title: "Latest Articles",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { q: "I was told there's an Interpol Red Notice against me — what should I do?", a: "It's best to contact a lawyer as soon as possible, before any contact with authorities or crossing a border, to check the notice's origin and your options." },
      { q: "How long does an extradition process take?", a: "Duration varies by country and case, and can range from months to years." },
      { q: "Can you represent me in a case abroad?", a: "Court appearances abroad are generally handled by a lawyer licensed in that country; I coordinate with a local legal network and accompany the process throughout." },
      { q: "I was questioned by police about online trading — am I necessarily a suspect?", a: "Being called in for questioning is not the same as being charged. It's important to understand your status and rights before any questioning." },
      { q: "Is the first consultation confidential?", a: "Any contact and conversation with a lawyer is subject to attorney-client privilege." },
    ],
  },
  finalCta: {
    title: "Interested in a consultation?",
    blurb: "Fill out your details and I'll get back to you as soon as possible, or reach out directly by phone or WhatsApp.",
    ctaPrimary: "Book a Free Initial Consultation",
    ctaSecondary: "Message on WhatsApp",
  },
  footer: {
    tagline: "Specializing in International Criminal Law",
    legal: ["Privacy Policy", "Legal Disclaimer", "Accessibility Statement"],
    rights: "All Rights Reserved",
  },
};
