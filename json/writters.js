const writters = {
  ديزني: 797,
  "نبيل فاروق": 391,
  "أحمد خالد توفيق": 223,
  "ابن قيم الجوزية": 131,
  "ناشيونال جيوغرافيك": 116,
  "Trade books": 94,
  نخبة: 93,
  "نجيب محفوظ": 91,
  "محمد الغزالي": 83,
  "محمود سالم": 81,
  "محمد عمارة": 76,
  "أبو حامد محمد بن محمد بن محمد بن أحمد الغزالي": 74,
  "عبد الرحمن بن أبي بكر السيوطي الشهير بجلال الدين السيوطي": 74,
  "عبد الكريم بكار": 72,
  "أبو زكريا يحيى بن شرف النووي الدمشقي": 71,
  "محمد ناصر الدين الألباني": 71,
  "محمد بن علوي المالكي الحسني": 70,
  "أبو الفداء عماد الدين إسماعيل بن كثير الشافعي الدمشقي": 60,
  "فاطمة المعدول": 60,
  "محمود شاكر": 60,
  "توفيق الحكيم": 56,
  "فيودور دوستويفسكي": 56,
  "محمود درويش": 55,
  "محمد يسري إبراهيم": 51,
  "أبو الحسن علي الحسني الندوي": 50,
  "الحافظ أحمد بن علي بن حجر العسقلاني": 50,
  "صالح أحمد الشامي": 48,
  "عباس العقاد": 48,
  "ابن تيمة": 47,
  "عبد الرحمن بن الجوزي": 44,
  "أنيس منصور": 43,
  "عباس محمود العقاد": 43,
  "عماد الدين أفندي": 42,
  "عمر سليمان عبد الله الأشقر": 41,
  "عائض القرني": 40,
  "عمر عبيد حسنة": 40,
  "مصطفى صادق الرافعي": 40,
  "غوستاف لوبون": 38,
  "أحمد أمين": 37,
  "عبد الله ناصح علوان": 36,
  "نسيبة عبد العزيز المطوع": 36,
  "إحسان عبد القدوس": 35,
  "بسام العسلي": 35,
  "عبد الوهاب المسيري": 35,
  "ليو تولستوي": 35,
  "أبو عبد الله شمس الدين الذهبي": 34,
  "محمد بن علي بن محمد الشوكاني": 34,
  "وهبة الزحيلي": 34,
  "يوسف زيدان": 34,
  "أسعد السحمراني": 33,
  "ابن تيمية": 33,
  "أسامة المسلم": 30,
  "رفعت السيد العوضي": 30,
  "طالب عمران": 30,
  "عماد الدين خليل": 30,
  "محمد سهيل طقوش": 30,
  "محمد متولي الشعراوي": 30,
  "Bramble Kids": 28,
  "جبران خليل جبران": 28,
  "فاروق حمادة": 28,
  "محمد أبو زهرة": 28,
  "نجيب الكيلاني": 28,
  "عفاف طبالة": 27,
  "مجموعة من المؤلفين": 27,
  أدونيس: 26,
  "زاهي حواس": 26,
  "عبد العزيز بن علي الحربي": 26,
  "عبد الفتاح أبو غدة": 26,
  "عبد الفتاح بن عبد الغني بن محمد القاضي": 26,
  "محمد الزحيلي": 26,
  "محمد حسنين هيكل": 26,
  "محمد رواس قلعة جي": 26,
  "محمد عبد الجواد": 26,
  "نزار أباظة": 26,
  "سيد عبد الماجد الغوري": 25,
  "عبد الوهاب السيد الرفاعي": 25,
  "مصطفى ديب البغا": 25,
  DK: 24,
  "أحمد شوقى إبراهيم": 24,
  "إبراهيم السكران": 24,
  "باولو كويلو": 24,
  "جمال الدين عبد الله بن يوسف بن أحمد بن هشام الأنصاري": 24,
  "حسني قنديل": 24,
  "خيري شلبي": 24,
  "عبد الرحمن حسن حبنكة الميداني": 24,
  "عدلي رزق الله": 24,
  "محمد الخضري بك": 24,
  "محمود مزروعة": 24,
  "يوسف كرم": 24,
  "أبو عمر يوسف بن عبد الله بن عبد البر القرطبي": 23,
  "أدهم شرقاوي": 23,
  "ألبرتو مانغويل": 23,
  "عبد الرحمن منيف": 23,
  "غانم قدوري الحمد": 23,
  "فخر الدين قباوة": 23,
  "lilly s.mohsen": 22,
  "أبو عيسى محمد بن عيسى بن سورة الترمذي": 22,
  "أشرف محمد دوابة": 22,
  "أمل فرح": 22,
  "جيف كيني": 22,
  "سائر بصمه جي": 22,
  "مركز الدراسات الفقهية والاقتصادية": 22,
  "هربرت جورج ويلز": 22,
  "ابن رجب الحنبلي": 21,
  "الملا علي القاري": 21,
  "براء عماد": 21,
  "صلاح عبد الفتاح الخالدي": 21,
  "عبده خال": 21,
  "فاضل صالح السامرائي": 21,
  "فريد الأنصاري": 21,
  "محمد راتب النابلسي": 21,
  "آر إل شتاين": 20,
  "أبو الخير محمد بن محمد بن يوسف الدمشقي المعروف بابن الجزري": 20,
  "أبو عبد الرحمن أحمد بن شعيب بن علي بن سنان بن دينار النسائي": 20,
  "أحمد خيري العمري": 20,
  "إبراهيم نصرالله": 20,
  "جمال توفيق": 20,
  "شهاب الدين أبو العباس أحمد بن محمد بن علي بن حجر الهيتمي": 20,
  "عبد المنعم الهاشمي": 20,
  "عبد الواحد ذنون طه": 20,
  "كريم الشاذلي": 20,
  "مالك بن نبي": 20,
  "محمد الباز": 20,
  "محمد عزيز شكري": 20,
  "مصطفى بكر": 20,
  "أبو محمد علي بن أحمد بن سعيد بن حزم القرطبي الظاهري": 19,
  "أجاثا كريستي": 19,
  "أنطون تشيخوف": 19,
  "بهاء طاهر": 19,
  "جمال الغيطانى": 19,
  "حسان شمسي باشا": 19,
  "رضوى عاشور": 19,
  "شهاب سلطان": 19,
  "شوقي أبو خليل": 19,
  "شوقي ضيف": 19,
  "عائشة رافع": 19,
  "عبد الرحمن الشرقاوي": 19,
  "عبد الستار أحمد الشيخ": 19,
  "مشعل عبد العزيز الفلاحي": 19,
  "نور الدين بن مختار الخادمي": 19,
  "يحيى حقي": 19,
  "أحمد بن إبراهيم بن مصطفى الهاشمي": 18,
  "أرثر كونان دويل": 18,
  "إبراهيم عبد المجيد": 18,
  "ابن الأثير الجزري": 18,
  "حجاج أدول": 18,
  "حنان لاشين": 18,
  "زيجمونت باومان": 18,
  "ستيفن كينج": 18,
  "صالح مرسي": 18,
  "صنع الله إبراهيم": 18,
  "عبد العزيز عزت الخياط": 18,
  "فرانز كافكا": 18,
  "محمد إبراهيم": 18,
  "محمد بن إدريس الشافعي": 18,
  "نور عبد المجيد": 18,
  "يوسف بن اسماعيل النبهاني": 18,
  "برتراند راسل": 17,
  "جورج أورويل": 17,
  "رباب ياغي": 17,
  "طه جابر العلواني": 17,
  "عبد الرحمن ناصر بن عبد الله السعدي": 17,
  "علي الحمادي": 17,
  "علي جمعة محمد": 17,
  "مختار الطاهر حسين": 17,
  "مرفت عبد الناصر": 17,
  "مصطفى النشار": 17,
  "منذر الحايك": 17,
  "نظمي خليل أبو العطا": 17,
  "ويليام شكسبير": 17,
  "الطاهر بن جلون": 16,
  "بسام محمد عيسى": 16,
  "بوليت بورجوا": 16,
  "تشارلز ديكنز": 16,
  "رجائي عطية": 16,
  "سمير كبريت": 16,
  "شعبان محمد إسماعيل": 16,
  "عبد الوهاب عبدالسلام طويلة": 16,
  "عمار علي حسن": 16,
  "محمد سليم العوا": 16,
  "محمد عثمان شبير": 16,
  "محمد عدنان سالم": 16,
  "محمود محمد شاكر": 16,
  "مصطفى حسني": 16,
  "مصطفى لطفي المنفلوطي": 16,
  "مكسيم غوركي": 16,
  "نجدة فتحي صفوة": 16,
  "هنري لورنس": 16,
  "أحمد بن محمد بن حنبل الشيباني الذهلي": 15,
  "أحمد سويلم": 15,
  "أحمد فؤاد الأهواني": 15,
  "أمير تاج السر": 15,
  أوشو: 15,
  "إمام عبد الفتاح إمام": 15,
  "بدر الدين محمد بن بهادر بن عبد الله الزركشى": 15,
  "زغلول النجار": 15,
  "زين الدين زكريا بن محمد الأنصاري": 15,
  "سعيد إسماعيل علي": 15,
  "شريف صبري": 15,
  "صلاح الدين خليل بن أيبك الصفدي": 15,
  "عبد العظيم بن عبد القوي المنذري": 15,
  "علي الجارم": 15,
  "كمال هاشم حمود": 15,
  "مالك حداد": 15,
  "مجموعة مؤلفين": 15,
  "محمد المنسي قنديل": 15,
  "محمد خير فاطمة": 15,
  "محمد علي أبو حمدة": 15,
  "محمد محمد داود": 15,
  "محمود أبو فروة الرجبي": 15,
  "منير محمد الغضبان": 15,
  "أبو القاسم علي بن الحسن بن هبة الله بن عبد الله بن عساكر": 14,
  "أحمد حسن فرحات": 14,
  "أحمد يونس": 14,
  "أنس أحمد كرزون": 14,
  "جاد الحق علي جاد الحق": 14,
  "جمال الغيطاني": 14,
  "حسن أيوب": 14,
  "رفيق يونس المصري": 14,
  "سلمان العودة": 14,
  "طه أحمد الزيدي": 14,
  "عبد الرحمن بن إبراهيم الفوزان": 14,
  "عبد القادر الجيلاني": 14,
  "علي محيي الدين القره داغي": 14,
  "غازي عبد الرحمن القصيبي": 14,
  "فضل حسن عباس": 14,
  "محمد أمحزون": 14,
  "محمد الطاهر بن عاشور": 14,
  "محمد عابد الجابري": 14,
  "محمد على أحمد": 14,
  "محمد محيي الدين عبد الحميد": 14,
  "موفق الدين أبو محمد عبد الله بن أحمد بن قدامة المقدسي": 14,
  "نوار بن الشلي": 14,
  "وائل حلاق": 14,
  "واسيني الأعرج": 14,
  "وليد طاهر": 14,
  "أبو الحسين مسلم بن الحجاج بن مسلم القشيري النيسابوري": 13,
  "أبو داود سليمان بن الأشعث السجستاني الأزدي": 13,
  "أبو عمرو عثمان بن سعيد بن عثمان الداني": 13,
  "أبو محمد عبد الله بن مسلم بن قتيبة الدينوري": 13,
  "أبو منصور عبد الملك بن محمد بن اسماعيل الثعالبي النيسأبوري": 13,
  "أحمد مراد": 13,
  "أشرف العشماوي": 13,
  "إلياس دردور": 13,
  "ابن خلدون": 13,
  "جان جاك روسو": 13,
  "جلال أمين": 13,
  "جيهان ممدوح مأمون": 13,
  "راشيل رينيه راسل": 13,
  "رشيد الضعيف": 13,
  "عبد الصبور شاهين": 13,
  "عبد الكريم تتان": 13,
  "عماد علي جمعة": 13,
  "عمرو خالد": 13,
  "كيت بويهم جيروم": 13,
  "محمد بن حسن بن عقيل بن موسى الشريف": 13,
  "محمد بن محمد بن قاسم التاويل": 13,
  "محمد حسن غانم": 13,
  "محمد نبيل كاظم": 13,
  "ميلان كونديرا": 13,
  "نور الدين عتر": 13,
  "ياسر نصر": 13,
  "يوسف محمد فارح يوسف": 13,
  "‌محمد شحرور": 13,
  "أبو بكر أحمد بن علي بن ثابت الخطيب البغدادي": 12,
  "أبو بكر جابر الجزائري": 12,
  "أبو حيان التوحيدي": 12,
  "أبو عبد الله مالك بن أنس بن مالك الأصبحي الحميري": 12,
  "أبو عبد الله محمد إسماعيل بن إبراهيم البخاري": 12,
  "أحمد بن عطاء الله السكندري": 12,
  "أمال خطاب": 12,
  "أورهان باموق": 12,
  "إبراهيم عيسى": 12,
  "إبراهيم نصر الله": 12,
  "إنجي فراج": 12,
  "جابر عصفور": 12,
  "جابرييل جارسيا ماركيز": 12,
  "جول فيرن": 12,
  "دانيال ستيل": 12,
  "رانية حسين أمين": 12,
  "ربيع جابر": 12,
  "ريم بسيوني": 12,
  "سعد بن ناصر بن عبد العزيز الشثرى": 12,
  "صلاح عيسى": 12,
  "طارق البشري": 12,
  "طه حسين": 12,
  "عبدالمقصود عفيفى": 12,
  "كريم بهاء الدين": 12,
  "متنوع أطفال": 12,
  "محمد أركون": 12,
  "محمد بن إسماعيل بن صلاح الأمير الصنعاني": 12,
  "محمد جمال الدين القاسمي": 12,
  "محمد عبد الخالق محمد فضل": 12,
  "محمد عبد الله دراز": 12,
  "محمد نعيم محمد هاني ساعي": 12,
  "محيي الدين محمد عوامة": 12,
  "مصطفى لطفى المنفلوطي": 12,
  "نوري فيتاتشي": 12,
  "هيفاء بيطار": 12,
  "أبو الحسن علي بن محمد بن حبيب البصري البغدادي الماوردي": 11,
  "أبو الفتوح صبري": 11,
  "أبو اليزيد أبو زيد العجمي": 11,
  "أبو عثمان عمرو بن بحر الجاحظ": 11,
  "أثير الدين أبو حيان محمد بن يوسف بن علي بن حيان الغرناطي الجياني الأندلسي": 11,
  "أحمد السعيد مراد": 11,
  "أسامة غريب": 11,
  "أمين معلوف": 11,
  "إبراهيم محمد العلي": 11,
  "إدجار رايس بوروس": 11,
  السنافر: 11,
  "ثريا عبد البديع": 11,
  "جاك دريدا": 11,
  "جان دوست": 11,
  "جلال الدين الرومي": 11,
  "حسام الآلوسي": 11,
  "حسن الجندي": 11,
  "حسن داوود": 11,
  "حسين البرغوثي": 11,
  "خالد عبد الرحمن العك": 11,
  "خالد فهمي": 11,
  "دان براون": 11,
  "دساتير الأمم المتحدة": 11,
  "زين الدين أحمد بن أحمد بن عبد اللطيف الزبيدي": 11,
  "سعيد اللاوندي": 11,
  "سماح أبوبكر عزت": 11,
  "عبد الحميد أحمد أبو سليمان": 11,
  "عبد الحميد محمود طهماز": 11,
  "عبد المجيد الزنداني": 11,
  "عقيل حسين عقيل": 11,
  "عمر طاهر": 11,
  "فهد بن محمد أبو محجن": 11,
  "فهد خليل زايد": 11,
  فولتير: 11,
  "فيكتور هوجو": 11,
  "كامل كيلاني": 11,
  "كاملة الكواري": 11,
  "ليليان مرادي": 11,
  "م. د. سبنسر": 11,
  "محمد بن رياض الأحمد": 11,
  "محمد بن لطفي الصباغ": 11,
  "محمد حسين هيكل": 11,
  "محمد علي البار": 11,
  "محمد علي الهاشمي": 11,
  "محمد مندور": 11,
  "مصطفى الفقي": 11,
  "مصطفى باهي": 11,
  "مصطفى عبد الوهاب": 11,
  "ناصف مصطفى عبد العزيز": 11,
  "هديل غنيم": 11,
  يوربيديس: 11,
  "أبو الطيب محمد صديق حسن خان القنوجي": 10,
  "أبو بكر عبد الله بن محمد بن أبي الدنيا القرشي": 10,
  "أبو عبد الله محمد بن إسماعيل بن إبراهيم بن المغيرة البخاري": 10,
  "أحمد بهجت": 10,
  "أماني العشماوي": 10,
  "أيمن العايدي": 10,
  "إبراهيم الكوني": 10,
  "إبراهيم بن موسى اللخمي الغرناطي الشهير بأبي إسحاق الشاطبي": 10,
  "إيريش فروم": 10,
  "ابن سينا": 10,
  "الحبيب عبد الله بن علوي بن محمد الحداد العلوي": 10,
  "تزفيتان تودوروف": 10,
  "جار الله أبو القاسم محمود بن عمر الزمخشري الخوارزمي": 10,
  "جاك تشاليم": 10,
  "جبور الدويهي": 10,
  "حاتم بن عارف العوني": 10,
  "حصة بنت عبد الكريم الزيد": 10,
  "حمو النقاري": 10,
  "رئيف خوري": 10,
  "رضا البهات": 10,
  "سالم القحطاني": 10,
  "سامر سقا أميني": 10,
  "سامي محمد سعيد عبد الشكور": 10,
  "سمر طاهر": 10,
  "سيجموند فرويد": 10,
  "شكري المبخوت": 10,
  "شهاب الدين السهروردي": 10,
  "شيرين هنائي": 10,
  "صالح بن عبد السميع الأبي الأزهري": 10,
  "صلاح فضل": 10,
  "عباس بيضون": 10,
  "عبد الجبار الرفاعي": 10,
  "عبد الكريم زيدان": 10,
  "عبد الله بن أحمد بن محمود النسفي": 10,
  "عبد الله بن عبد القادر التليدي الحسني الطنجي": 10,
  "عبد المجيد طعمة حلبي": 10,
  "عبد الوهاب بن أحمد بن علي الشعراني": 10,
  "عبده جبير": 10,
  "علي جمعة محمد عبد الوهاب": 10,
  "فاضل الربيعي": 10,
  "فلاديمير ف. جيكارنتسيف": 10,
  "كريم مروة": 10,
  "كيغي ناكازاوا": 10,
  "مأمون توفيق مبيض": 10,
  "مارك توين": 10,
  "مجدي محمد عاشور": 10,
  "محمد أبو فرحة": 10,
  "محمد بن عزوز": 10,
  "محمد خير رمضان يوسف": 10,
  "محمد رضوان الداية": 10,
  "محمد علي الصابوني": 10,
  "محمود عبد الشكور": 10,
  "مصطفى أحمد الزرقا": 10,
  "مكاوي سعيد": 10,
  "منى سلامة": 10,
  "نايف معروف": 10,
  "نجلاء علام": 10,
  "نور الدين مختار الخادمي": 10,
  "أبو الوليد محمد بن أحمد بن محمد بن أحمد بن رشد القرطبي الأندلسي": 9,
  "أبو عبد الله محمد بن عبد الرحمن بن أبي بكر سليمان الجزولي": 9,
  "أبو عبد الله محمد بن يزيد بن ماجه القزويني الربعي": 9,
  "أحمد الريسوني": 9,
  "أحمد بن محمد بن أحمد الحملاوي": 9,
  "أحمد عيسى المعصراوي": 9,
  "أليس مونرو": 9,
  "أمبرتو إيكو": 9,
  "أنطوان صياح": 9,
  "إبراهيم بن شعيب المالكي المكي": 9,
  "إريك كارل": 9,
  "إيفان تورغينيف": 9,
  "باتريك موديانو": 9,
  "بلال فضل": 9,
  "جوانا كول": 9,
  "جورج أر.أر. مارتن": 9,
  "جوزيف كونراد": 9,
  "جيلدا بيرجر": 9,
  "حبيب عبد الرب سروري": 9,
  "حلمي التوني": 9,
  "خليل بن إبراهيم ملا خاطر العزامي": 9,
  "راجي عنايت": 9,
  "رانيا محمد": 9,
  "ربيع ديركي": 9,
  "ريبيكا جونسون": 9,
  "ريك ريوردان": 9,
  "سارة البدري": 9,
  "سامية أحمد": 9,
  "سعد الدين الكبي": 9,
  "سعود السنعوسي": 9,
  "سلامة كيلة": 9,
  "سميرة شفيق": 9,
  "شهاب الدين أحمد بن محمد القسطلاني": 9,
  "صالح الفوزان بن عبد الله الفوزان": 9,
  "عائشة عبد الرحمن بنت الشاطئ": 9,
  "عارف حجاوي": 9,
  "عبد العظيم الديب": 9,
  "عبد الغني الغنيمي الميداني": 9,
  "عبد الله الطنطاوي": 9,
  "عبد الله بن الصديق الغماري": 9,
  "عبد المتعال الصعيدي": 9,
  "علاء عبد الحميد": 9,
  "علي الوردي": 9,
  "علي جمعة": 9,
  "علي ليلة": 9,
  "عمرو العادلي": 9,
  "فاديم زيلاند": 9,
  "فاروق جويدة": 9,
  "فهمي هويدي": 9,
  "كلوديا حسن": 9,
  "كولن ولسون": 9,
  "محمد الامين بن عبد الله الأثيوبي الهرري البويطي السلفي": 9,
  "محمد الدسوقي كحيلة": 9,
  "محمد السماك": 9,
  "محمد الهلالي": 9,
  "محمد بلتاجي حسن": 9,
  "محمد بن أبي بكر بن عبد القادر الرازي": 9,
  "محمد رجب البيومي": 9,
  "محمد سلماوي": 9,
  "محمد عبد القدوس": 9,
  "محمد غنيمي هلال": 9,
  "محمد مطيع الحافظ": 9,
  "مصطفى غنيم": 9,
  "مكي بن أبي طالب بن حيوس بن محمد بن مختار القيسي القيرواني ثم الأندلسي القرطبي": 9,
  "ميرال الطحاوي": 9,
  "ميلفين بيرجر": 9,
  "ناصر عراق": 9,
  "نعوم تشومسكي": 9,
  "هرمان هيسه": 9,
  "هشام الخشن": 9,
  هيجل: 9,
  "وليد إبراهيم قصاب": 9,
  "يحيى بن عبد الرازق الغوثاني": 9,
  "يوسف بن عبد الرحمن المرعشلي": 9,
  Mcmillan: 8,
  Usborne: 8,
  "أبو أسامة سليم بن عيد الهلالي": 8,
  "أبو الثناء شهاب الدين محمود شكري الحسيني الألوسي": 8,
  "أبو الحسنات محمد عبد الحي اللكنوي": 8,
  "أبو العباس أحمد بن يحيى بن محمد بن عبد الواحد الونشريسي التلمساني": 8,
  "أبو الفضل عياض بن موسى بن عياض اليحصبي": 8,
  "أبو بكر أحمد بن الحسين البيهقي": 8,
  "أبو جعفر محمد بن جرير الطبري": 8,
  "أبو محمد القاسم بن علي بن محمد بن عثمان الحريري البصري": 8,
  "أبو يعلى محمد بن الحسين بن محمد الفراء الحنبلي البغدادي": 8,
  "أحمد القرملاوي": 8,
  "أحمد سالم أبو فهر": 8,
  "أحمد عز الدين البيانوني": 8,
  "أحمد عمر هاشم": 8,
  أرسطو: 8,
  "أمير عبد العزيز": 8,
  "أمين حداد": 8,
  "إبراهيم أحمد عيسى": 8,
  "إدوارد سعيد": 8,
  "إنجي ساج": 8,
  "إيمان مغازي الشرقاوي": 8,
  "إيناس فوزي": 8,
  "السيد سابق": 8,
  "السيد عبده": 8,
  "السيد ياسين": 8,
  "الشاهد البوشيخي": 8,
  "الطيب بو عزة": 8,
  القيرواني: 8,
  "المختار بن العربي مؤمن الجزائري ثم الشنقيطي": 8,
  "بثينة العيسى": 8,
  "بيرل باك": 8,
  "تقي الدين عبد الغني بن عبد الواحد المقدسي الجماعيلي": 8,
  "توني ميتون": 8,
  "جاسم سلطان": 8,
  "جورج طرابيشي": 8,
  "حامد محمد الخليفة": 8,
  "خالد أمين": 8,
  "خالد محمد خالد": 8,
  "خليل صويلح": 8,
  "روبرت لويس ستيفنسون": 8,
  "زغلول راغب محمد النجار": 8,
  "زكي نجيب محمود": 8,
  "سالي مورجان": 8,
  "ستيفن هوكينج": 8,
  "سعدي أبو حبيب": 8,
  "سميرة أحمد سالم": 8,
  "شمس الدين محمد بن أحمد بن الخطيب الشربيني": 8,
  "طه عبد الرحمن": 8,
  "عبد الرحمن الكواكبي": 8,
  "عبد السلام المسدي": 8,
  "عبد الله بن المقفع": 8,
  "عبد الله بن عبد الرحمن الجبرين": 8,
  "عبد الله شحاته": 8,
  "عبير محمد أنور": 8,
  "عز الدين شكري فشير": 8,
  "عزت القمحاوي": 8,
  "علاء الأسواني": 8,
  "علي بن عبد الرحمن الطيار": 8,
  "علي عبد الواحد وافي": 8,
  "عمر فاروق الطباع": 8,
  "عيد الوصيف محمد": 8,
  "غادة السمان": 8,
  "قسم الترجمة والتعريب": 8,
  "كلير ليويلين": 8,
  "لوتشيا راتما سالي لي": 8,
  "محمد أديب الصالح": 8,
  "محمد المخزنجي": 8,
  "محمد بن زين العابدين بن رستم": 8,
  "محمد بن عبد الله الخطيب التبريزي": 8,
  "محمد تقي العثماني": 8,
  "محمد توفيق": 8,
  "محمد جلال كشك": 8,
  "محمد حسن علوان": 8,
  "محمد رضا": 8,
  "محمد صادق": 8,
  "محمد طارق": 8,
  "محمد عبد العليم": 8,
  "محمد مطر سالم بن عابد الكعبي": 8,
  "محمد يوسـف الكاندهلوي": 8,
  "محمود شيت خطاب": 8,
  "محي الدين قندور": 8,
  "محيي الدين بن عربي الطائي الأندلسي": 8,
  "مريد الكلاب": 8,
  "مريم سليم": 8,
  "مصطفى الغلاييني": 8,
  "مصطفى زهران": 8,
  "مصطفى عبيد": 8,
  "منصور عرابي": 8,
  "منى الشافعي": 8,
  "نصر سلمان": 8,
  "هاروكي موراكامي": 8,
  "هاني نقشبندي": 8,
  "هيثم طلعت": 8,
  "وليد فتيحي": 8,
  "وليد فكري": 8,
  "ويل ديورانت": 8,
  "J.K. Rowling": 7,
  "آرثر سي كلارك": 7,
  "أبو الإخلاص حسن بن عمار علي الشرنبلالي": 7,
  "أبو البقاء العكبري": 7,
  "أبو العباس أحمد بن إدريس بن عبد الرحمن الصنهاجي القرافي المالكي": 7,
  "أبو بكر محمد بن الحسين بن عبد الله الآجري": 7,
  "أبو بكر محمد بن عبد الله المشهور بن العربي": 7,
  "أبو عبيد القاسم بن سلام الهروي": 7,
  "أبو يعرب المرزوقي": 7,
  "أحمد الشهاوي": 7,
  "أحمد بن محمد بن أحمد الدردير": 7,
  "أحمد خليل جمعة": 7,
  "أحمد زكي يماني": 7,
  "أشرف الخمايسي": 7,
  أفلاطون: 7,
  "أنطونيو تابوكي": 7,
  "أوسكار وايلد": 7,
  "إبراهيم البيومي غانم": 7,
  "إبراهيم حلمي الغوري": 7,
  "إبراهيم عبد القادر المازني": 7,
  "إدغار موران": 7,
  "إدواردو غاليانو": 7,
  "إرنست همينغوي": 7,
  "إسماعيل الكيلاني": 7,
  "إميل بديع يعقوب": 7,
  "ابن سيرين": 7,
  "الكسندر بوشكين": 7,
  "انطوان الدحداح": 7,
  "بلال علي أبو الخير": 7,
  "بنسالم حميش": 7,
  "بول ريكور": 7,
  "بيتر هاندكه": 7,
  "تقي الدين أبي عبد الله محمد عبد الغني عبد الواحد المقدسي الحنبلي": 7,
  "تيري إيجلتون": 7,
  "ثناء محمد إحسان الحافظ": 7,
  "ج. ك رولينج": 7,
  "جار الله أبي القاسم محمود بن عمر الزمخشري الخوارزمي": 7,
  "جان نيلسن": 7,
  "جمال الدين أبو الحجاج يوسف بن عبد الرحمن المزي": 7,
  "جين أوستن": 7,
  "جينيفر مور - مالينوس": 7,
  "حسن كمال": 7,
  "خالد عزب": 7,
  "خالدة سعيد": 7,
  "دوريس ليسينج": 7,
  "ديفيد ر. هاوكينز": 7,
  "رامي طويل": 7,
  "ربيع السملالي": 7,
  "رفيق حبيب": 7,
  "رولد دال": 7,
  "زين الدين مرعي بن يوسف الكرمي المقدسي الحنبلي": 7,
  "سارة نصر": 7,
  "ستيفان زفايج": 7,
  "سعد الدين مسعود بن عمر التفتازاني": 7,
  "سليمان بن أحمد الطبراني": 7,
  "سمير إبراهيم خليل حسن": 7,
  "شريف ثابت": 7,
  "طالب الرفاعي": 7,
  "عاطف الغمري": 7,
  "عبد الباسط الجمل": 7,
  "عبد الحكم عبد اللطيف الصعيدي": 7,
  "عبد الرحمن بن منصور الثعالبي": 7,
  "عبد السلام بنعبد العالي": 7,
  "عبد العزيز الشناوي": 7,
  "عبد الغني النابلسي الدمشقي": 7,
  "عبد القادر عبد الرحمن السعدي": 7,
  "عبد الله روبين حسين": 7,
  "عبد الوهاب رشيد أبو صفية": 7,
  "علي بن جابر الفيفي": 7,
  "علي بن محمد الآمدي": 7,
  "علي محمد فاخر": 7,
  "علي نايف البقاعي": 7,
  "غادة حسن": 7,
  "غادة كريم": 7,
  "فاروق منجونة": 7,
  "فرهاد دفتري": 7,
  "فكري أندراوس": 7,
  "لينين الرملي": 7,
  "مأمون طربيه": 7,
  "مارتن بانم": 7,
  "ماهر العربي": 7,
  "محمد أحمد الراشد": 7,
  "محمد أكرم الندوي": 7,
  "محمد الدسوقي": 7,
  "محمد العريفي": 7,
  "محمد المختار السوسي": 7,
  "محمد بن أحمد بن جزي الكلبي": 7,
  "محمد بن سعيد البوصيري": 7,
  "محمد بن صالح العثيمين": 7,
  "محمد حرب": 7,
  "محمد راجي بن حسن كناس": 7,
  "محمد سيد أحمد المسير": 7,
  "محمد صبري السوربوني": 7,
  "محمد فاروق الشاذلي": 7,
  "محمد كرد علي": 7,
  "محمد لطفى الصباغ": 7,
  "محمد نجاتي الغزالي": 7,
  "محمد ياسر القضماني": 7,
  "محمود توفيق": 7,
  "محمود خليل الحصري": 7,
  "محمود محمد بابللى": 7,
  "مروان عرنوس": 7,
  "مصطفى الجندي": 7,
  "مصطفى فوزي غزال": 7,
  "مقبول العلوي": 7,
  "منصور بن يونس البهوتي": 7,
  "موريس لوبلان": 7,
  "ميشيل فوكو": 7,
  "ناصر الحلواني": 7,
  "نذير محمد مكتبي": 7,
  "نزيه حماد": 7,
  "هارييت جريفي": 7,
  "هنريك أبسن": 7,
  "هيثم دبور": 7,
  "وائل صبري": 7,
  "ياسر العيتي": 7,
  "ياسر محمد مرسي بيومي": 7,
  "‌عبدالعزيز عبدالغني إبراهيم": 7,
  "Denys Johnson-Davies": 6,
  Rosen: 6,
  "آدم ساذرلاند": 6,
  "آلان دو بوتون": 6,
  "آن روني": 6,
  "أبو إسحاق إبراهيم بن علي بن يوسف الفيروز أبادي الشيرازي": 6,
  "أبو الطيب محمد شمس الحق العظيم آبادي": 6,
  "أبو العباس محمد بن يزيد المبرد": 6,
  "أبو حفص عمر بن علي بن أحمد الأنصاري المعروف بابن الملقن": 6,
  "أبو عبد الله عبد السلام بن محمد بن عمر علوش": 6,
  "أبو عبد الله محمد السنوسي": 6,
  "أحسن لحساسنة": 6,
  "أحمد الحجي الكردي": 6,
  "أحمد العلاونة": 6,
  "أحمد بن زيني دحلان": 6,
  "أحمد بن عبد الله السلمي": 6,
  "أحمد بن فارس السلوم": 6,
  "أحمد جابر جبران": 6,
  "أحمد حسن الزيات": 6,
  "أحمد خالد شكري": 6,
  "أحمد خالد مصطفى": 6,
  "أحمد محمد شاكر": 6,
  "أدريان ماسون": 6,
  "أسامة الفقي": 6,
  "أسماء محسن": 6,
  "ألكسندر دوما": 6,
  "أمير عاطف": 6,
  "أونوريه دي بلزاك": 6,
  "أيمن العتوم": 6,
  "أيمن رشدي سويد": 6,
  "أيمن محمود": 6,
  "إبراهيم بن محمد بن أحمد الباجوري": 6,
  "إبراهيم بن محمد بن ضويان": 6,
  "إبراهيم حقي": 6,
  "إبراهيم خضر": 6,
  "إسعاد يونس": 6,
  "إلفي دونيللي": 6,
  "ابن حزم الأندلسي": 6,
  "الجوهرة الرمال": 6,
  "الحبيب بن طاهر": 6,
  "الحسين زروق": 6,
  "الطيب أديب": 6,
  "امحمد جبرون": 6,
  "باسل شيخو": 6,
  "تقي الدين المقريزي": 6,
  "جان بول سارتر": 6,
  "جرجي زيدان": 6,
  "جورج مقدسي": 6,
  "جوزيه ساراماغو": 6,
  "جيري بيلي": 6,
  "جين لاسي": 6,
  "حسان حلاق": 6,
  "حسين العودات": 6,
  "حسين علي": 6,
  "حمدو طماس": 6,
  "حنة آرنت": 6,
  "خالد عبد العزيز": 6,
  "خولة حمدي": 6,
  "دعاء عبد الرحمن": 6,
  "دلاور محمد صابر النقشبندي": 6,
  "ديباك شوبرا": 6,
  "ديفيد هيوم": 6,
  "ديل كارنيجي": 6,
  "ربا شعبان": 6,
  "ربيع عبد الرؤوف الزواوي": 6,
  "رجاء النقاش": 6,
  "رشا سمير": 6,
  "سائد بكداش": 6,
  "سعد مكاوي": 6,
  "سعيد إسماعيل القاضي": 6,
  "سعيد توفيق": 6,
  "سماح أبو بكر عزت": 6,
  "سماح كامل جلال": 6,
  "سهام العدوي": 6,
  "سوزان رينج": 6,
  "سومرست موم": 6,
  "شريف عرفة": 6,
  "شمس الدين محمد بن علي بن طولون الدمشقي": 6,
  "شيرين عادل": 6,
  "صالح حسن الرياشي": 6,
  "صفاء شمندي": 6,
  "طاهر بن صالح بن أحمد بن موهوب السمعوني الجزائري": 6,
  "عادل أسعد الميري": 6,
  "عباس أرناؤوط": 6,
  "عبد الحميد الجياش": 6,
  "عبد الحميد الطائي": 6,
  "عبد الرحمن النحلاوي": 6,
  "عبد الرحمن بن محمد عوض الجزيري": 6,
  "عبد الرحمن عزام": 6,
  "عبد الستار المرسومي": 6,
  "عبد العال سالم مكرم": 6,
  "عبد العزيز بن عثمان التويجري": 6,
  "عبد الفتاح الحموز": 6,
  "عبد القادر أحمد بن مصطفى بن بدران الدومي الحنبلي": 6,
  "عبد الله بن يوسف الجديع": 6,
  "عبد المجيد الشرفي": 6,
  "عبد المنعم سعيد": 6,
  "عدنان محمد زرزور": 6,
  "عز الدين عبد العزيز بن عبد السلام": 6,
  "عفيف عبد الفتاح طباره": 6,
  "علا ديوب": 6,
  "علاء الديب": 6,
  "علاء خالد": 6,
  "علي الشربجي": 6,
  "علي بن إبراهيم النملة": 6,
  "علي بن عمر الدارقطني": 6,
  "علي بن محمد العمران": 6,
  "علي حسن موسى": 6,
  "علي زيعور": 6,
  "علي سامي النشار": 6,
  "علي عبود المحمداوي": 6,
  "عمرو حسن": 6,
  "عمرو عبد الحميد": 6,
  "عيسى إبراهيم السعدي": 6,
  "غازي طليمات": 6,
  "فرنان برودل": 6,
  "فريد الدين العطار": 6,
  "فريدريش نيتشه": 6,
  "فريدريك نيتشه": 6,
  "فواز طرابلسي": 6,
  "قيس العزاوي": 6,
  "كارم عبد الغفار": 6,
  "كيرلس بهجت": 6,
  "لوكيوس أنايوس سينيكا": 6,
  "ليلى العثمان": 6,
  "ليموني سنيكت": 6,
  "لينا هويان الحسن": 6,
  "ماجد محمد أبو رخية": 6,
  "مارسي كلمان": 6,
  "مبروك عطية": 6,
  "محمد البساطي": 6,
  "محمد الحسناوي": 6,
  "محمد الصادق عرجون": 6,
  "محمد بخيت المطيعي": 6,
  "محمد بن أحمد ميارة الفاسي": 6,
  "محمد بن حامد الأحمري": 6,
  "محمد بن عبد الرحمن السخاوي": 6,
  "محمد بن علي بن علان الصديقي الشافعي المكي": 6,
  "محمد بن علي تقي الدين بن دقيق العيد القشيري": 6,
  "محمد بن مرتضى الزبيدي": 6,
  "محمد بن مفلح المقدسي الحنبلي": 6,
  "محمد جمال": 6,
  "محمد رجب": 6,
  "محمد سليمان عبد الله الأشقر": 6,
  "محمد طه": 6,
  "محمد عبد الرحمن بن عبد الرحيم المباركفوري": 6,
  "محمد عبد الرحمن شميلة الأهدل": 6,
  "محمد عبد الله": 6,
  "محمد عبد النبي": 6,
  "محمد علي دولة": 6,
  "محمد عمارة تقي الدين": 6,
  "محمد فتحي": 6,
  "محمد كامل عبد الصمد": 6,
  "محمد محفوظ": 6,
  "محمد مسعد ياقوت": 6,
  "محمد مصطفى شلبي": 6,
  "محمد مصطفى مجاهد": 6,
  "محمد نعيم ياسين": 6,
  "محمود الطحان": 6,
  "محمود شلتوت": 6,
  "محمود عبد الرحمن": 6,
  "محيي الدين مستو": 6,
  "مريد البرغوثي": 6,
  "مسفر بن علي القحطاني": 6,
  "مصطفى إبراهيم": 6,
  "مصطفى زيد": 6,
  "مناع خليل القطان": 6,
  "منتصر أمين": 6,
  ميكافيللي: 6,
  "نادية محمود مصطفى": 6,
  "نور الدين علي بن أحمد بن عبد الله الحسني السمهودي": 6,
  "نورا ناجي": 6,
  "هيذر أيمري": 6,
  "وسيم السيسي": 6,
  "وصال تقة": 6,
  "وفاء محمد عزت الشريف": 6,
  "وفيق صفوت مختار": 6,
  "ويليام فوكنر": 6,
  "يوسف إدريس": 6,
  "‌حازم صاغية": 6,
  "Free spirit publishing": 5,
  "آليس ووكر": 5,
  "آية محمود يحيى": 5,
  "أبكار السقاف": 5,
  "أبو العباس أحمد بن عبد الرحمن بن قدامة المقدسي": 5,
  "أحلام مستغانمي": 5,
  "أحمد آل حمدان": 5,
  "أحمد الحمد": 5,
  "أحمد عبد اللطيف": 5,
  "أحمد عبد المجيد": 5,
  "أحمد علي الزين": 5,
  "أحمد محمد الشرقاوي": 5,
  "أحمد هارون": 5,
  "أحمد يوسف": 5,
  "ألبرتو مورافيا": 5,
  "ألبير كامو": 5,
  "ألكس سكارو": 5,
  "أمير العمري": 5,
  "أندريه جيد": 5,
  "أوليفييه روا": 5,
  "إبراهيم فرغلي": 5,
  "إبراهيم محمد النملة": 5,
  "إدوار الخراط": 5,
  "إدوارد دي بونو": 5,
  "إسلام جمال": 5,
  "إسماعيل عرفة": 5,
  "إشراق شلبي": 5,
  "إيزابيل الليندي": 5,
  "إيهاب الملاح": 5,
  "ايمانويل تود": 5,
  "باتريك زوسكيند": 5,
  "برتولت بريشت": 5,
  "برنارد لويس": 5,
  "تحية كامل": 5,
  "تركي الحمد": 5,
  "ترودى رومانيك": 5,
  "توني ديترليزي": 5,
  "جاك لندن": 5,
  "جاكلين مورلي": 5,
  "جلبير الأشقر": 5,
  "جمال حمدان": 5,
  "جيري بيللي": 5,
  "جيمس جويس": 5,
  "جين جرين": 5,
  "حسام مصطفى إبراهيم": 5,
  "حسين الطويل": 5,
  "خالد الحروب": 5,
  "دافيد جيفرس": 5,
  "ديفيد هربرت لورانس": 5,
  "رشا عدلي": 5,
  "رضوان السيد": 5,
  "روان النسور": 5,
  "زهير أحمد السباعي": 5,
  "زينب عفيفي": 5,
  "ستيفان زفايغ": 5,
  "ستيفن كينغ": 5,
  "سلطان الموسى": 5,
  "سلوى الغامدي": 5,
  "سليم بركات": 5,
  "سليمان فياض": 5,
  "سونيا بوماد": 5,
  "سيد حسين نصر": 5,
  "شربل داغر": 5,
  "شروق نوت بوك": 5,
  "شريف شعبان": 5,
  "شريف عبد الهادي": 5,
  "صبحي حديدي": 5,
  "صفي الرحمن المباركفوري": 5,
  "طارق إمام": 5,
  "طالب عزيز": 5,
  "عائشة البصري": 5,
  "عادل حمودة": 5,
  "عبد الحي يوسف": 5,
  "عبد الكريم النملة": 5,
  "عبد الله بن محمود بن مودود الموصلي": 5,
  "عبد الله محمد عبد المعطي": 5,
  "عبد الوهاب عيساوي": 5,
  "عرفان نظام الدين": 5,
  "عزت السعدني": 5,
  "عكاشة عباد": 5,
  "عمر فضل الله": 5,
  "فاطمة الشيشيني": 5,
  "فهد عامر الأحمدي": 5,
  "فهمي جدعان": 5,
  "فيرجينيا وولف": 5,
  "فيليب روث": 5,
  "كارول ماكلاود": 5,
  "لوتس عبد الكريم": 5,
  "لينا النابلسي": 5,
  "مجموعة باحثين": 5,
  "محمد أبو الغار": 5,
  "محمد السيد": 5,
  "محمد حسين": 5,
  "محمد حشمت": 5,
  "محمد عبد الظاهر": 5,
  "محمود علام": 5,
  "مصطفى أمين": 5,
  "مصطفى حجازي": 5,
  "ممدوح عدوان": 5,
  "منصور الرفاعي عبيد": 5,
  "منير شفيق": 5,
  "ميخائيل نعيمة": 5,
  "نابليون هيل": 5,
  "نيل دونالد وولش": 5,
  "هدى النمر": 5,
  "هنري جيمس": 5,
  "هيثم مناع": 5,
  "والتر ستيس": 5,
  "وجدي الكومي": 5,
  "وجيه كوثراني": 5,
  "وليد سيف": 5,
  "وليد كساب": 5,
  "وليم جاي كار": 5,
  "ويليام جيمس": 5,
  "ياسر ثابت": 5,
  "ياسمينة خضرا": 5,
  "يعقوب الشارونى": 5,
  "يوسف المحيميد": 5,
  "يوسف عز الدين عيسى": 5,
  "يوهان فولجانج جوته": 5,
  "‌أمين الزاوي": 5,
  "‌دوستويفسكي": 5,
};

export const getWritters = () => {
  const array = [];
  for (let name in writters) {
    array.push({
      name,
      number: writters[name],
    });
  }
  return array.sort((a, b) => b.number - a.number);
};