(function(){
"use strict";
var T={
uk:{title:"Екранний час і успішність у PISA",lead:"Скільки годин на день ви користуєтесь гаджетами в школі: для навчання і для розваг? Порівняйте себе із середніми результатами PISA 2022.",
calc:"1. Введіть свої години",learn:"Для навчання",leis:"Для розваг",perDay:"годин на день у школі",h:"год",
avg:"Для довідки: у середньому по OECD учні користуються пристроями 2,0 год на день для навчання і 1,1 год для розваг у школі.",
res:"2. Ваш результат",yourCat:"Ваша категорія",avgScore:"Середній бал з математики в цій групі",peak:"Найвищий середній бал",
approx:"наближено",you:"Ви",pts:"бали",xTitle:"годин на день у школі",yTitle:"середній бал з математики",
legend:"Заповнені кружечки: точні значення зі звіту. Порожні: значення зчитані з графіка OECD (±1–2 бали). Кольорова смуга: категорії, де середній бал не більш ніж на 5 пунктів нижчий за найвищий.",
disc:"Це не прогноз вашого балу. Графік показує середні результати груп учнів у країнах OECD, а не вашу оцінку. Дані показують зв’язок, а не причину. Години повідомляли самі учні.",
about:"Дані: OECD (2023), PISA 2022 Results (Volume II), розділ 5, рис. II.5.14: середній бал з математики за кількістю годин на день, які учні проводять на цифрових пристроях у школі. Звіт пов’язує форму кривої з «гіпотезою Златовласки» (Przybylski & Weinstein, 2017): помірне використання не шкодить і навіть пов’язане з вищими балами, а проблемою є надмірне.",
aboutT:"Про дані",limT:"Обмеження",
lim:["Це кореляція, а не причина: ми не знаємо, чи гаджети впливають на бали, чи навпаки, чи є спільні чинники.","Дані лише про використання в школі. Користування вдома тут не показано.","Самозвіт: учні самі оцінювали свій час.","Середнє по країнах OECD не відображає кожну країну чи кожного учня.","Зона балансу орієнтовна, її межі залежать від обраного допуску (5 пунктів)."],
src:"Джерело: https://doi.org/10.1787/a97db61c-en",
hypT:"Гіпотези проти даних",hypCols:["Гіпотеза","Що показують дані PISA"],
hyp:[["Понад 3 години розваг на день пов’язані з нижчими балами.","Підтверджується, але межа нижча: бал знижується вже після 1 години (492 → бл. 483 при 1–2 год → бл. 468 при 2–3 год → бл. 451 при 3–5 год)."],
["Помірне навчальне використання (1–2 год) пов’язане з вищими балами.","Підтверджується частково: до 1 години дає +25 пунктів проти відсутності (481 проти 456), але 1–2 год не краще за інші категорії до 5 годин (бл. 476–479)."],
["Після 2–3 годин навчального використання результат виходить на плато або знижується.","Частково: плато тримається до 5 годин (бл. 477), а помітне зниження починається з 5–7 годин (бл. 465)."]],
theoryT:"Теоретична рамка",
theory:[["Теорія когнітивного навантаження (Sweller, 1988)","Робоча пам’ять обмежена. Сповіщення, перемикання між вкладками й соцмережами на уроці створюють зайве навантаження і заважають глибоко опрацьовувати матеріал. Це можливе пояснення, а не те, що вимірює PISA."],
["Цифрова нерівність другого рівня (Hargittai, 2002)","Різниця в успішності залежить не лише від того, чи є пристрій, а від того, як ним користуються: як інструментом навчання чи для пасивного споживання розваг."],
["Гіпотеза Златовласки (Przybylski & Weinstein, 2017)","Помірне використання не шкодить і навіть пов’язане з вищими балами, а проблемою є надмірне. Саме таку форму кривої бачить OECD у PISA 2022."]],
rulesT:"Цифрова гігієна: практичні правила",
rules:[["Без сповіщень на уроках","Вимкніть звук або увімкніть режим фокусу. Навіть одне сповіщення може збити концентрацію. PISA 2022 пов’язує обмеження пристроїв у школі з меншими відволіканнями."],
["Зміна фокуса","Спробуйте замінити 30–60 хвилин пасивного гортання соцмереж інтерактивними навчальними ресурсами, тренажерами або читанням. Це порада, а не доведений ефект."],
["Мікропаузи для очей (20-20-20)","Кожні 20 хвилин роботи за екраном дивіться на об’єкт за 6 метрів (20 футів) протягом 20 секунд. Це поширена рекомендація для комфорту очей, її вплив на успішність не вимірювався."]],
comboZone:"Ваш режим у зоні найвищих середніх балів і для навчання, і для розваг. Групи учнів з такими звичками мали в середньому найвищі результати з математики. Це не прогноз вашої оцінки.",
comboNo:"Принаймні один показник поза зоною найвищих середніх балів. Подивіться підказки нижче й правила цифрової гігієни.",comboT:"Загальний підсумок",
solT:"Рішення: цифрово-освітня гігієна",
solIntro:"Стратегія з трьох частин: обмежити відволікання на уроках, цілеспрямовано використовувати цифрові інструменти для навчання і працювати з використанням гаджетів поза школою. Докази неоднозначні, тому показуємо і те, що працює, і те, чого не вдалося підтвердити.",
solC:"Висновок",
sol:[{"t": "1. Обмеження смартфонів на уроках", "p": ["PISA 2022: учні, яких відволікали пристрої інших, мали нижчі бали. OECD зазначає, що заборони телефонів у школі, схоже, зменшують відволікання на уроках.", "Англія (Beland & Murphy, 2015): після заборон результати тестів зросли на 6,4% стандартного відхилення, найбільше в учнів із низькою успішністю. Ефект малий, а в успішних учнів його не було. Критики зауважують, що результати не скрізь повторилися.", "Нідерланди (з січня 2024): за опитуванням шкіл для уряду, три чверті з 317 шкіл повідомили про кращу концентрацію. Це думка шкіл, а не результати тестів.", "Англія (SMART Schools, 2025): між школами із суворими й м’якими правилами не знайшли різниці у добробуті й успішності."], "c": "Заборона на уроках може зменшувати відволікання, але сама по собі не гарантує вищих балів.", "s": [["Beland & Murphy (LSE)", "https://researchonline.lse.ac.uk/id/eprint/62574"], ["Уряд Нідерландів", "https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak"], ["Goodyear et al. (2025)", "https://doi.org/10.1016/j.lanepe.2025.101211"], ["OECD PISA 2022", "https://doi.org/10.1787/a97db61c-en"]]}, {"t": "2. Цифрові освітні платформи для навчання і домашніх завдань", "p": ["PISA 2022: використання пристроїв для навчання в школі до 1 години на день пов’язане з вищим балом (на 14 пунктів після поправки на профіль учнів). Плато тримається до 5 годин.", "EEF (Велика Британія): цифрові технології в середньому дають близько +4 місяців додаткового прогресу на рік, але результати окремих оглядів коливаються від 2 місяців до понад року.", "Найкраще вони працюють, коли підтримують нові підходи до викладання, а не є самоціллю. Окремі випробування, наприклад цифровий зворотний зв’язок у початковій математиці, не показали ефекту."], "c": "Платформи допомагають за якісної педагогіки, а не автоматично.", "s": [["OECD PISA 2022", "https://doi.org/10.1787/a97db61c-en"], ["EEF Toolkit", "https://educationendowmentfoundation.org.uk/news/eef-blog-updating-the-toolkit/"], ["EEF: цифровий зворотний зв’язок", "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/digital-feedback-in-primary-maths/"]]}, {"t": "3. Використання поза школою і правила, створені разом з учнями", "p": ["SMART Schools (Англія, 2025): більше користування телефоном і соцмережами загалом було пов’язане з гіршими результатами, але шкільні заборони не зменшили загальний екранний час.", "Автори радять приділяти увагу використанню поза школою і створювати правила разом з учнями, а не лише зверху."], "c": "Шкільні правила корисні, але проблема ширша за уроки.", "s": [["University of Birmingham", "https://www.birmingham.ac.uk/news/2025/school-bans-alone-not-enough-to-tackle-negative-impacts-of-phone-and-social-media-use"]]}],
quizT:"3. Міні-квіз про звички",
quizIntro:"П’ять питань про ваші звички в школі. Це не наукове тестування й не діагноз, а привід замислитись.",
quizBtn:"Показати результат",
quizReset:"Почати знову",
quizNeed:"Відповідайте на всі питання.",
quiz:[{"q": "Де ваш телефон під час уроку?", "o": ["Вимкнений або в сумці", "На парті, звук вимкнено", "У руках або часто в користуванні"]}, {"q": "Як часто ви перевіряєте сповіщення під час уроку?", "o": ["Майже ніколи", "Іноді", "Часто"]}, {"q": "Для чого ви найчастіше користуєтесь пристроями в школі?", "o": ["Здебільшого для навчання", "Приблизно порівну", "Здебільшого для розваг"]}, {"q": "Чи користуєтесь ви освітніми застосунками чи платформами для навчання й домашніх завдань?", "o": ["Регулярно", "Іноді", "Майже ніколи"]}, {"q": "Чи можете ви відкласти телефон на 30 хвилин під час навчання?", "o": ["Легко", "З певним зусиллям", "Складно"]}],
quizRes:[["Збалансований режим", "Ваші звички схожі на режим, пов’язаний у PISA з вищими середніми балами: мало відволікань і цілеспрямоване використання. Підтримуйте його.", "ok"], ["Є над чим попрацювати", "Частина звичок може відволікати. Спробуйте правила цифрової гігієни вище: без сповіщень на уроках і заміна пасивного гортання на навчальні ресурси.", "mid"], ["Високий ризик відволікання", "Ваші звички близькі до тих, що в даних пов’язані з нижчими середніми балами. Почніть з одного кроку: телефон у сумці на уроках і мікропаузи для очей.", "warn"]],
cat:["не користуюсь","до 1 год","1–2 год","2–3 год","3–5 год","5–7 год","понад 7 год"],
catShort:["0","≤1","1–2","2–3","3–5","5–7",">7"],
zone:"У зоні найвищих середніх балів",none:"Нижче піку",high:"Вище зони",
m:{learnZone:"Учні з такою кількістю годин для навчання у школі мали в середньому одні з найвищих балів.",
learnNone:"Учні, які зовсім не користувались пристроями для навчання, мали в середньому нижчі бали, ніж ті, хто користувався до кількох годин.",
learnHigh:"Понад 5 годин на день для навчання пов’язані з нижчими середніми балами. Можливе пояснення: втома, але це припущення, а не доведений факт.",
leisZone:"Учні з таким часом розваг мали в середньому найвищі бали серед усіх груп.",
leisNone:"Учні без розваг на пристроях у школі мали трохи нижчі середні бали, ніж ті, хто користувався до години. Причиною це вважати не можна: після поправки на соціально-економічний профіль різниця менша.",
leisHigh:"Понад годину розваг на пристроях у школі пов’язано з нижчими середніми балами. Для категорій 1–2, 2–3, 3–5 і 5–7 годин бали послідовно нижчі."}},
en:{title:"Screen time and academic performance in PISA",lead:"How many hours a day do you use devices at school, for learning and for leisure? Compare yourself with average PISA 2022 results.",
calc:"1. Enter your hours",learn:"For learning",leis:"For leisure",perDay:"hours per day at school",h:"h",
avg:"For reference: on average across OECD countries, students use devices 2.0 h/day for learning and 1.1 h/day for leisure at school.",
res:"2. Your result",yourCat:"Your category",avgScore:"Average maths score in this group",peak:"Highest average score",
approx:"approx.",you:"You",pts:"points",xTitle:"hours per day at school",yTitle:"average maths score",
legend:"Filled circles: exact values from the report. Hollow circles: values read from the OECD chart (±1–2 points). Coloured band: categories where the average score is within 5 points of the highest one.",
disc:"This is not a forecast of your score. The chart shows average results of groups of students in OECD countries, not your grade. The data show an association, not a cause. Hours were reported by the students themselves.",
about:"Data: OECD (2023), PISA 2022 Results (Volume II), chapter 5, Figure II.5.14: average mathematics score by hours per day students spend on digital devices at school. The report links the shape of the curve to the “Goldilocks hypothesis” (Przybylski & Weinstein, 2017): moderate use is not harmful and is even associated with higher scores, while overuse is the problem.",
aboutT:"About the data",limT:"Limitations",
lim:["This is a correlation, not a cause: we do not know if devices affect scores, the reverse, or if shared factors explain both.","Data cover use at school only. Use at home is not shown.","Self-reported: students estimated their own time.","The OECD average does not describe every country or every student.","The balance zone is indicative; its edges depend on the chosen tolerance (5 points)."],
src:"Source: https://doi.org/10.1787/a97db61c-en",
hypT:"Hypotheses vs data",hypCols:["Hypothesis","What the PISA data show"],
hyp:[["More than 3 hours of leisure per day is linked to lower scores.","Supported, but the threshold is lower: scores fall already after 1 hour (492 → approx. 483 at 1–2 h → approx. 468 at 2–3 h → approx. 451 at 3–5 h)."],
["Moderate learning use (1–2 h) is linked to higher scores.","Partly supported: up to 1 hour gives +25 points vs none (481 vs 456), but 1–2 h is not better than other categories up to 5 hours (approx. 476–479)."],
["After 2–3 hours of learning use, results plateau or decline.","Partly: the plateau lasts up to 5 hours (approx. 477), and a clear drop starts at 5–7 hours (approx. 465)."]],
theoryT:"Theoretical framework",
theory:[["Cognitive load theory (Sweller, 1988)","Working memory is limited. Notifications and switching between tabs and social media in class add extraneous load and prevent deep processing of material. This is a possible explanation, not what PISA measures."],
["Second-level digital divide (Hargittai, 2002)","Differences in outcomes depend not only on having a device but on how it is used: as a tool for learning or for passive consumption of entertainment."],
["Goldilocks hypothesis (Przybylski & Weinstein, 2017)","Moderate use is not harmful and is even associated with higher scores, while overuse is the problem. This is the curve shape OECD sees in PISA 2022."]],
rulesT:"Digital hygiene: practical rules",
rules:[["No notifications in class","Mute the sound or switch to focus mode. Even one notification can break concentration. PISA 2022 links limits on devices at school to less distraction."],
["Shift your focus","Try replacing 30–60 minutes of passive social media scrolling with interactive learning resources, practice tools or reading. This is a suggestion, not a proven effect."],
["Micro-breaks for the eyes (20-20-20)","Every 20 minutes of screen work, look at something 6 metres (20 feet) away for 20 seconds. A common recommendation for eye comfort; its effect on results has not been measured."]],
comboZone:"Your pattern is in the highest-average-score zone for both learning and leisure. Groups of students with such habits had the highest average maths results. This is not a forecast of your grade.",
comboNo:"At least one of your values is outside the highest-average-score zone. See the hints below and the digital hygiene rules.",comboT:"Overall summary",
solT:"Solution: digital-educational hygiene",
solIntro:"A strategy in three parts: limit distraction in lessons, use digital tools purposefully for learning, and address device use outside school. The evidence is mixed, so we show both what works and what could not be confirmed.",
solC:"Conclusion",
sol:[{"t": "1. Limiting smartphones in lessons", "p": ["PISA 2022: students distracted by others' devices had lower scores. OECD notes that school phone bans appear to reduce distraction in lessons.", "England (Beland & Murphy, 2015): after bans, test scores rose by 6.4% of a standard deviation, most for low-achieving students. The effect is small, and high achievers saw none. Critics note the results were not replicated everywhere.", "Netherlands (since January 2024): in a government-commissioned survey, three quarters of 317 schools reported better concentration. This is schools' opinion, not test results.", "England (SMART Schools, 2025): no difference in wellbeing or attainment between schools with restrictive and permissive policies."], "c": "A ban in lessons may reduce distraction, but it does not by itself guarantee higher scores.", "s": [["Beland & Murphy (LSE)", "https://researchonline.lse.ac.uk/id/eprint/62574"], ["Dutch government (in Dutch)", "https://www.rijksoverheid.nl/actueel/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak"], ["Goodyear et al. (2025)", "https://doi.org/10.1016/j.lanepe.2025.101211"], ["OECD PISA 2022", "https://doi.org/10.1787/a97db61c-en"]]}, {"t": "2. Digital learning platforms for study and homework", "p": ["PISA 2022: using devices for learning at school for up to 1 hour a day is linked to higher scores (14 points after accounting for socio-economic profile). The plateau lasts up to 5 hours.", "EEF (UK): digital technology gives about +4 months of extra progress per year on average, but individual reviews range from 2 months to over a year.", "It works best when it supports new approaches to teaching rather than being an end in itself. Some trials, e.g. digital feedback in primary maths, showed no effect."], "c": "Platforms help when the pedagogy is good, not automatically.", "s": [["OECD PISA 2022", "https://doi.org/10.1787/a97db61c-en"], ["EEF Toolkit", "https://educationendowmentfoundation.org.uk/news/eef-blog-updating-the-toolkit/"], ["EEF: digital feedback trial", "https://educationendowmentfoundation.org.uk/projects-and-evaluation/projects/digital-feedback-in-primary-maths/"]]}, {"t": "3. Use outside school and rules co-designed with students", "p": ["SMART Schools (England, 2025): more phone and social media use overall was linked to worse outcomes, but school bans did not reduce total screen time.", "The authors advise focusing on use outside school and designing rules together with students, not only top-down."], "c": "School rules help, but the problem is wider than lessons.", "s": [["University of Birmingham", "https://www.birmingham.ac.uk/news/2025/school-bans-alone-not-enough-to-tackle-negative-impacts-of-phone-and-social-media-use"]]}],
quizT:"3. Mini quiz about your habits",
quizIntro:"Five questions about your habits at school. This is not a scientific test or a diagnosis, just a prompt to reflect.",
quizBtn:"Show result",
quizReset:"Start again",
quizNeed:"Please answer all questions.",
quiz:[{"q": "Where is your phone during a lesson?", "o": ["Switched off or in my bag", "On the desk, sound off", "In my hand or often in use"]}, {"q": "How often do you check notifications during a lesson?", "o": ["Almost never", "Sometimes", "Often"]}, {"q": "What do you mostly use devices for at school?", "o": ["Mostly for learning", "About equally", "Mostly for leisure"]}, {"q": "Do you use educational apps or platforms for study and homework?", "o": ["Regularly", "Sometimes", "Almost never"]}, {"q": "Can you put your phone away for 30 minutes while studying?", "o": ["Easily", "With some effort", "It is hard"]}],
quizRes:[["Balanced pattern", "Your habits resemble the pattern linked in PISA to higher average scores: few distractions and purposeful use. Keep it up.", "ok"], ["Room to improve", "Some habits may distract you. Try the digital hygiene rules above: no notifications in class and replacing passive scrolling with learning resources.", "mid"], ["High risk of distraction", "Your habits are close to those linked in the data to lower average scores. Start with one step: phone in your bag during lessons and micro-breaks for the eyes.", "warn"]],
cat:["none","up to 1 h","1–2 h","2–3 h","3–5 h","5–7 h","over 7 h"],
catShort:["0","≤1","1–2","2–3","3–5","5–7",">7"],
zone:"In the highest-score zone",none:"Below the peak",high:"Above the zone",
m:{learnZone:"Students with this much learning time at school had among the highest average scores.",
learnNone:"Students who did not use devices for learning at all had lower average scores than those who used them for up to a few hours.",
learnHigh:"More than 5 hours a day for learning is associated with lower average scores. A possible explanation is fatigue, but this is an assumption, not a proven fact.",
leisZone:"Students with this amount of leisure time had the highest average scores of all groups.",
leisNone:"Students with no leisure use at school had slightly lower average scores than those with up to one hour. This should not be read as a cause: after accounting for socio-economic profile the gap is smaller.",
leisHigh:"More than an hour of leisure on devices at school is associated with lower average scores. For 1–2, 2–3, 3–5 and 5–7 hours the scores are consistently lower."}}
};
var lang="uk", TOL=5, YMIN=420, YMAX=500;
var EMBEDDED=[{"place":"school","purpose":"learning","hours":"None","order":1,"score":456,"shareOfStudents":14,"approx":false,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"exact, stated in the text"},{"place":"school","purpose":"learning","hours":"Up to 1 hour","order":2,"score":481,"shareOfStudents":31,"approx":false,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"exact: text says 25 points higher than 'None' (+14 after accounting for socio-economic profile)"},{"place":"school","purpose":"learning","hours":"More than 1 hour and up to 2 hours","order":3,"score":476,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"learning","hours":"More than 2 hours and up to 3 hours","order":4,"score":479,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"learning","hours":"More than 3 hours and up to 5 hours","order":5,"score":477,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"learning","hours":"More than 5 hours and up to 7 hours","order":6,"score":465,"shareOfStudents":7.8,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"approx.: text says 12 points lower than the 3-5 hour group (10 after accounting for socio-economic profile)"},{"place":"school","purpose":"learning","hours":"More than 7 hours","order":7,"score":458,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx.); text says 'even lower' than the 5-7 hour group"},{"place":"school","purpose":"leisure","hours":"None","order":1,"score":472,"shareOfStudents":19,"approx":false,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"exact, stated in the text"},{"place":"school","purpose":"leisure","hours":"Up to 1 hour","order":2,"score":492,"shareOfStudents":31,"approx":false,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"exact: text says 20 points higher than 'None' (+10 after accounting for socio-economic profile)"},{"place":"school","purpose":"leisure","hours":"More than 1 hour and up to 2 hours","order":3,"score":483,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"leisure","hours":"More than 2 hours and up to 3 hours","order":4,"score":468,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"leisure","hours":"More than 3 hours and up to 5 hours","order":5,"score":451,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"leisure","hours":"More than 5 hours and up to 7 hours","order":6,"score":430,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"},{"place":"school","purpose":"leisure","hours":"More than 7 hours","order":7,"score":438,"shareOfStudents":null,"approx":true,"source":"OECD (2023), PISA 2022 Results (Volume II), p. 194, Figure II.5.14 (OECD average, at school)","note":"read from the figure (approx., +/-1-2)"}];
var data=(window.SCREEN_DATA&&window.SCREEN_DATA.length)?window.SCREEN_DATA:EMBEDDED;
function rowsFor(p){return data.filter(function(r){return r.place==="school"&&r.purpose===p}).sort(function(a,b){return a.order-b.order})}
var R={learning:rowsFor("learning"),leisure:rowsFor("leisure")};
function catIndex(h){return h<=0?0:h<=1?1:h<=2?2:h<=3?3:h<=5?4:h<=7?5:6}
function zoneOf(rows){var mx=Math.max.apply(null,rows.map(function(r){return r.score}));return rows.map(function(r){return r.score>=mx-TOL})}
var st={learning:2,leisure:1};
function $(id){return document.getElementById(id)}
function el(tag,attrs,txt){var e=document.createElement(tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e}
function ns(tag,attrs,txt){var e=document.createElementNS("http://www.w3.org/2000/svg",tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e}
function fmtH(v){return String(v).replace(".",lang==="uk"?",":".")}

function buildInputs(){
  [["learning","in-learn","learn","--learn"],["leisure","in-leis","leis","--leis"]].forEach(function(c){
    var box=$(c[1]);box.textContent="";
    var row=el("div",{class:"row"});
    var lab=el("div");var dot=el("span",{class:"dot"});dot.style.background="var("+c[3]+")";lab.appendChild(dot);lab.appendChild(el("strong",{},T[lang][c[2]]));
    var val=el("span",{class:"val",id:"val-"+c[0]});row.appendChild(lab);row.appendChild(val);box.appendChild(row);
    var inp=el("input",{type:"range",min:"0",max:"9",step:"0.5",value:st[c[0]],"aria-label":T[lang][c[2]]});
    inp.oninput=function(){st[c[0]]=parseFloat(inp.value);update()};
    box.appendChild(inp);box.appendChild(el("small",{},T[lang].perDay));
  });
}
function chart(rows,color,idx){
  var W=520,H=290,ml=46,mr=14,mt=18,mb=58,pw=W-ml-mr,ph=H-mt-mb,step=pw/7;
  var X=function(i){return ml+(i+.5)*step}, Y=function(v){return mt+ph*(1-(v-YMIN)/(YMAX-YMIN))};
  var s=ns("svg",{viewBox:"0 0 "+W+" "+H,role:"img"});
  [420,440,460,480,500].forEach(function(v){s.appendChild(ns("line",{x1:ml,x2:W-mr,y1:Y(v),y2:Y(v),stroke:"var(--line)"}));s.appendChild(ns("text",{x:ml-6,y:Y(v)+4,"text-anchor":"end"},v))});
  var z=zoneOf(rows),lo=z.indexOf(true),hi=z.lastIndexOf(true);
  if(lo>=0)s.appendChild(ns("rect",{x:X(lo)-step/2,y:mt,width:(hi-lo+1)*step,height:ph,fill:color,"fill-opacity":".14"}));
  rows.forEach(function(r,i){s.appendChild(ns("text",{x:X(i),y:H-mb+16,"text-anchor":"middle"},T[lang].catShort[i]))});
  s.appendChild(ns("text",{x:ml+pw/2,y:H-mb+36,"text-anchor":"middle"},T[lang].xTitle));
  var t=ns("text",{x:12,y:mt+ph/2,"text-anchor":"middle",transform:"rotate(-90 12 "+(mt+ph/2)+")"},T[lang].yTitle);s.appendChild(t);
  s.appendChild(ns("polyline",{points:rows.map(function(r,i){return X(i)+","+Y(r.score)}).join(" "),fill:"none",stroke:color,"stroke-width":2.5}));
  rows.forEach(function(r,i){var c=ns("circle",{cx:X(i),cy:Y(r.score),r:4.5,fill:r.approx?"var(--card)":color,stroke:color,"stroke-width":2});
    c.appendChild(ns("title",{},T[lang].cat[i]+": "+r.score+(r.approx?" ("+T[lang].approx+")":"")));s.appendChild(c)});
  var ux=X(idx),uy=Y(rows[idx].score);
  s.appendChild(ns("line",{x1:ux,x2:ux,y1:mt,y2:mt+ph,stroke:color,"stroke-dasharray":"4 3","stroke-width":1.5}));
  s.appendChild(ns("circle",{cx:ux,cy:uy,r:8,fill:color,stroke:"var(--card)","stroke-width":3}));
  var lab=ns("text",{x:ux,y:Math.max(uy-14,mt+10),"text-anchor":"middle"},T[lang].you);lab.style.fontWeight="700";lab.style.fill=color;s.appendChild(lab);
  return s;
}
function result(p,box,chBox,color){
  var rows=R[p],idx=catIndex(st[p]),r=rows[idx],mx=Math.max.apply(null,rows.map(function(x){return x.score})),z=zoneOf(rows),inZone=z[idx];
  var key,cls,badge;
  if(inZone){key=(p==="learning"?"learnZone":"leisZone");cls="ok";badge=T[lang].zone}
  else if(idx===0){key=(p==="learning"?"learnNone":"leisNone");cls="mid";badge=T[lang].none}
  else{key=(p==="learning"?"learnHigh":"leisHigh");cls="warn";badge=T[lang].high}
  if(p==="learning"&&!inZone&&idx>0&&idx<5){key="learnZone";cls="mid";badge=T[lang].none}
  box.textContent="";
  box.appendChild(el("div",{class:"badge "+cls},badge));
  var h=el("div");h.appendChild(el("strong",{},T[lang][p==="learning"?"learn":"leis"]+": "+fmtH(st[p])+" "+T[lang].h));box.appendChild(h);
  box.appendChild(el("p",{class:"msg"},T[lang].yourCat+": "+T[lang].cat[idx]+". "+T[lang].avgScore+": "+r.score+(r.approx?" ("+T[lang].approx+")":"")+". "+T[lang].peak+": "+mx+"."));
  box.appendChild(el("p",{class:"msg"},T[lang].m[key]));
  chBox.textContent="";chBox.appendChild(chart(rows,color,idx));
}
function combined(){
  var zl=zoneOf(R.learning)[catIndex(st.learning)],ze=zoneOf(R.leisure)[catIndex(st.leisure)];
  var box=$("combo");box.textContent="";var ok=zl&&ze;
  box.appendChild(el("div",{class:"badge "+(ok?"ok":"mid")},T[lang].comboT));
  box.appendChild(el("p",{class:"msg"},ok?T[lang].comboZone:T[lang].comboNo));
}
function lists(){
  var t=T[lang],h=$("hyp");h.textContent="";
  var tb=el("table",{class:"tbl"});var hr=el("tr");t.hypCols.forEach(function(c){hr.appendChild(el("th",{},c))});tb.appendChild(hr);
  t.hyp.forEach(function(r,i){var tr=el("tr");tr.appendChild(el("td",{},"H"+(i+1)+". "+r[0]));tr.appendChild(el("td",{},r[1]));tb.appendChild(tr)});h.appendChild(tb);
  [["theory","theory"],["rules","rules"]].forEach(function(p){var box=$(p[0]);box.textContent="";t[p[1]].forEach(function(x,i){var c=el("div",{class:"card sub"});c.appendChild(el("strong",{},(p[1]==="rules"?(i+1)+". ":"")+x[0]));c.appendChild(el("p",{class:"msg"},x[1]));box.appendChild(c)})});
}
function sols(){
  var t=T[lang],box=$("sol");box.textContent="";
  t.sol.forEach(function(c){var d=el("div",{class:"card"});d.appendChild(el("strong",{},c.t));
    var ul=el("ul");c.p.forEach(function(x){ul.appendChild(el("li",{},x))});d.appendChild(ul);
    var p=el("p",{class:"msg"});p.appendChild(el("strong",{},t.solC+": "));p.appendChild(document.createTextNode(c.c));d.appendChild(p);
    var s=el("p",{class:"note"});c.s.forEach(function(x,i){if(i)s.appendChild(document.createTextNode(" · "));var l=el("a",{href:x[1],target:"_blank",rel:"noopener"},x[0]);s.appendChild(l)});d.appendChild(s);box.appendChild(d)});
}
var quizAns=[];
function quiz(){
  var t=T[lang],box=$("quiz");box.textContent="";
  t.quiz.forEach(function(q,qi){var f=el("fieldset",{class:"q"});f.appendChild(el("legend",{},(qi+1)+". "+q.q));
    q.o.forEach(function(o,oi){var l=el("label",{class:"opt"});var r=el("input",{type:"radio",name:"q"+qi,value:oi});if(quizAns[qi]===oi)r.checked=true;
      r.onchange=function(){quizAns[qi]=oi};l.appendChild(r);l.appendChild(document.createTextNode(" "+o));f.appendChild(l)});box.appendChild(f)});
  var out=el("div",{id:"quiz-out",class:"msg"});var b=el("button",{},t.quizBtn);var rs=el("button",{style:"margin-left:8px"},t.quizReset);
  b.onclick=function(){var n=0,sum=0;t.quiz.forEach(function(q,i){if(quizAns[i]!==undefined){n++;sum+=quizAns[i]}});out.textContent="";
    if(n<t.quiz.length){out.appendChild(el("p",{},t.quizNeed));return}
    var k=sum<=3?0:sum<=6?1:2,r=t.quizRes[k];out.appendChild(el("div",{class:"badge "+r[2]},r[0]));out.appendChild(el("p",{},r[1]))};
  rs.onclick=function(){quizAns=[];quiz()};
  box.appendChild(b);box.appendChild(rs);box.appendChild(out);
}
function update(){
  $("val-learning").textContent=fmtH(st.learning)+" "+T[lang].h;$("val-leisure").textContent=fmtH(st.leisure)+" "+T[lang].h;
  if(!R.learning.length||!R.leisure.length){var why=window.SCREEN_DATA===undefined?"data.js не завантажився. Перевірте, що файл data.js лежить у корені репозиторію разом з index.html, і оновіть сторінку (Ctrl+F5). / data.js did not load. Check that data.js is in the repository root next to index.html, then refresh (Ctrl+F5).":"У data.js немає рядків з place \"school\" і purpose \"learning\"/\"leisure\". / data.js has no rows with place \"school\" and purpose \"learning\"/\"leisure\".";$("res-learn").textContent=why;$("res-leis").textContent="";$("combo").textContent="";return}
  result("learning",$("res-learn"),$("ch-learn"),"var(--learn)");result("leisure",$("res-leis"),$("ch-leis"),"var(--leis)");combined();
}
function texts(){
  var t=T[lang];document.documentElement.lang=lang;document.title=t.title;
  $("t-title").textContent=t.title;$("t-lead").textContent=t.lead;$("t-calc").textContent=t.calc;$("t-avg").textContent=t.avg;
  $("t-res").textContent=t.res;$("t-legend").textContent=t.legend;$("t-disc").textContent=t.disc;$("t-about").textContent=t.aboutT;$("about").textContent=t.about;
  $("t-lim").textContent=t.limT;var ul=$("lim");ul.textContent="";t.lim.forEach(function(x){ul.appendChild(el("li",{},x))});$("t-src").textContent=t.src;
  $("lang").textContent=lang==="uk"?"EN":"UA";$("t-hyp").textContent=t.hypT;$("t-theory").textContent=t.theoryT;$("t-rules").textContent=t.rulesT;lists();sols();quiz();$("t-quiz").textContent=t.quizT;$("quiz-intro").textContent=t.quizIntro;$("t-sol").textContent=t.solT;$("sol-intro").textContent=t.solIntro;
}
$("lang").onclick=function(){lang=lang==="uk"?"en":"uk";texts();buildInputs();update()};
texts();buildInputs();update();
})();
