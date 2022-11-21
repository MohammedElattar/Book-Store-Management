const categories = {
  "شحن للخارج": 31369,
  إسلاميات: 9125,
  أدب: 8906,
  روايات: 5506,
  "علوم شرعية": 5171,
  تاريخ: 3066,
  "أطفال وناشئين": 3047,
  "الفقه الإسلامي": 2488,
  مترجمات: 1814,
  سياسة: 1475,
  "كتب أطفال": 1336,
  "القرآن وعلومه": 1297,
  فلسفة: 1254,
  "الحديث الشريف وعلومه": 1241,
  أديان: 1211,
  شعر: 970,
  "روايات مترجمة": 967,
  "دراسات إسلامية": 952,
  لغات: 918,
  "التراجم والسير والأنساب": 876,
  "اللغة العربية وعلومها": 790,
  فكر: 752,
  قصص: 706,
  "تنمية ذاتية": 675,
  "العقيدة وأصول الدين": 669,
  علوم: 611,
  "علم نفس": 533,
  "التاريخ الإسلامي": 524,
  "سير وتراجم": 515,
  "قصص قصيرة": 500,
  "علوم اجتماعية": 492,
  كوميكس: 471,
  اقتصاد: 444,
  "قصص أطفال": 439,
  "الآداب والرقائق": 418,
  التفسير: 418,
  "النحو والصرف": 401,
  "تاريخ إسلامي": 362,
  نصوص: 358,
  دراسات: 340,
  مقالات: 338,
  "التجويد والقراءات": 337,
  "السيرة النبوية": 337,
  "أصول الفقه": 319,
  "فكر إسلامي": 313,
  تعليم: 312,
  "معرض القاهرة 2021": 312,
  ثقافة: 294,
  "مجموعة قصصية": 293,
  مجتمع: 266,
  فن: 263,
  "شحن دولي": 261,
  تصوف: 256,
  "الفقه المالكي": 236,
  مسرحيات: 229,
  "كتب مستعملة": 222,
  "المعاجم والقواميس": 217,
  "تعليم أطفال": 202,
  "علم اجتماع": 195,
  "تنمية بشرية": 179,
  "كتابات حرة": 173,
  "الفقه الشافعي": 171,
  اجتماع: 146,
  "تربية أطفال": 145,
  قانون: 142,
  لغة: 135,
  "الأديان والفرق والمذاهب": 127,
  صحة: 120,
  "الفلسفة الإسلامية وعلم الكلام": 116,
  "إدارة أعمال": 112,
  "نقد أدبي": 106,
  "الفقه الحنبلي": 104,
  "تربية الأطفال": 103,
  "إثارة وتشويق": 94,
  "تراجم وسير وأنساب": 94,
  "Accessories - إكسسوارات": 93,
  مذكرات: 92,
  "تنمية أسرية": 91,
  تربية: 90,
  "أدب ساخر": 89,
  "الخطب والدروس": 88,
  طب: 84,
  الفتاوى: 83,
  "علم المكتبات والببليوجرافيا": 83,
  "الفقه الحنفي": 82,
  المرأة: 81,
  البلاغة: 80,
  نثر: 74,
  "المخطوطات والكتب النادرة": 72,
  "ثقافة عامة": 69,
  خواطر: 65,
  رعب: 65,
  "الفقه الإسلامية": 64,
  صحافة: 63,
  "إرشاد نفسي": 62,
  "تعليم الأطفال": 62,
  "ثقافة دينية": 61,
  "سيرة ذاتية": 60,
  إعلام: 59,
  جغرافيا: 59,
  "أدب الرحلات": 57,
  تلوين: 56,
  خيال: 55,
  "أدب رحلات": 54,
  رواية: 52,
  "القرآن الكريم وعلومه": 51,
  "معارف عامة": 49,
  "أعمال فكرية": 48,
  "طب نفسي": 48,
  "تاريخ فرعوني": 46,
  تسويق: 45,
  "الأعمال الكاملة": 42,
  "المصورات والأطالس": 41,
  حضارة: 39,
  "العلوم الاجتماعية": 38,
  نقد: 38,
  "أدب الرسائل": 36,
  "روايات رومانسية": 36,
  مجلات: 33,
  "غير مصنف": 32,
  إدارة: 31,
  "القرآن الكويم وعلومه": 31,
  "شعر عامي": 31,
  "قصص الأنبياء": 31,
  "الغة لعربية وعلومها": 30,
  سينما: 30,
  "ألعاب مونتيسوري": 29,
  "خيال علمي": 28,
  فنون: 28,
  "ألعاب أطفال": 26,
  الموسوعات: 25,
  "علاقات اجتماعية": 24,
  "الأحاجي والنوادر والفكاهات": 22,
  "المعارف العامة": 22,
  بيئة: 22,
  عمارة: 22,
  "فقه مقارن": 21,
  موسوعات: 21,
  معاجم: 20,
  "الإملاء والترقيم": 17,
  رياضة: 17,
  "أصول الفه": 16,
  "العروض والقافية": 16,
  "روايات تاريخية": 16,
  "أدب واقعي": 15,
  "أدب بوليسي": 14,
  "الأكثر مبيعًا": 14,
  "التربية والتعليم": 14,
  تراث: 14,
  Notebooks: 13,
  "تاريخ فلسطين": 13,
  رحلات: 13,
  "علم النفس الإكلينيكي": 13,
  comics: 11,
  تقنية: 11,
  "لغة عربية": 11,
  موسيقى: 11,
  "أدب صوفي": 10,
  أنثروبولوجيا: 10,
  حوارات: 10,
  "فلسفة إسلامية": 9,
  فيزياء: 9,
  قواميس: 9,
  Sketchbook: 8,
  أجندات: 8,
  أنشطة: 8,
  تكنولوجيا: 8,
  "دراسات أدبية": 8,
  "روايات فلسفية": 8,
  "صحة نفسية": 8,
  "علم الفلك": 8,
  مصاحف: 8,
  مطبخ: 8,
  مهارات: 8,
  "أدب إسلامي": 7,
  "ريادة أعمال": 7,
  "طب أطفال": 7,
  طبخ: 7,
  "علاقات زوجية": 7,
  "مسرحيات شعرية": 7,
  منطق: 7,
  اشعر: 6,
  "تاريخ حديث": 6,
  "قصص قصيرة غريبة": 6,
  "نثر فني": 6,
  أحياء: 5,
  اطفال: 5,
  "الطب النبوي": 5,
  "بحث علمي": 5,
  تجارة: 5,
  "مجموعة قصصية القصيرة": 5,
  "أدب رسائل": 4,
  أنثربولوجيا: 4,
  إحصاء: 4,
  إكسسوارات: 4,
  "إكسسوارات دينية": 4,
  "التاريخ القديم": 4,
  "النثر الفني": 4,
  "ثقافة جنسية": 4,
  "دراسات شرعية": 4,
  سير: 4,
  "علم الاجتماع": 4,
  "مشكلات الحضارة": 4,
  مصريات: 4,
  Bookmarks: 3,
  "Pencil case - حافظة أقلام": 3,
  "أدب سجون": 3,
  أسرة: 3,
  الأسرة: 3,
  "الفلسفة وعلم النفس": 3,
  "الفن التشكيلي": 3,
  "تربية جنسية": 3,
  "حقوق الإنسان": 3,
  "دراسات دينية": 3,
  "دورية نماء لعلوم الوحي والدراسات الإنسانية": 3,
  "روايات رعب": 3,
  "روايات صوفية": 3,
  "سياسة شرعية": 3,
  سيرة: 3,
  "محموعة قصصية": 3,
  أبحاث: 2,
  "أدب الرعب": 2,
  "أدب السجون": 2,
  أطالس: 2,
  "أطفال وناشين": 2,
  "التاريخ العربي القديم": 2,
  "التاريخ اليوناني": 2,
  الصناعة: 2,
  الصين: 2,
  العلوم: 2,
  تاريح: 2,
  "تاريخ العالم القديم": 2,
  "تربية وعلم نفس": 2,
  "تنميه ذاتية": 2,
  "ثقافة إسلامية": 2,
  "دراسات عامة": 2,
  "دراسات فقهية": 2,
  دراسة: 2,
  رقائق: 2,
  "سلسة الإبداع قصص": 2,
  "سير تراجم": 2,
  عروض: 2,
  "علم اللغة": 2,
  "علوم القرآن": 2,
  فقه: 2,
  "فن إسلامي": 2,
  "مجموعة قصصيةي": 2,
  مرأة: 2,
  "مقالات أدبية": 2,
  "موسوعة فنية": 2,
  يوميات: 2,
  "أدب مقارن": 1,
  الإدارة: 1,
  التاريخ: 1,
  "التاريخ الإسلاميالمخطوطات والكتب النادرة": 1,
  "التاريخ الإسلاني": 1,
  التصوف: 1,
  "التفسيرالحديث الشريف وعلومه": 1,
  "الجغرافيا السياسية": 1,
  "الخط العربي": 1,
  "الخيال العلمي": 1,
  "الزهد والرقائق": 1,
  "السياسة الشرعية": 1,
  "السير والتراجم": 1,
  الشعر: 1,
  "الفقه المقارن": 1,
  "الفلسفة اليونانية": 1,
  القانون: 1,
  الكيمياء: 1,
  "اللغة وعلومها": 1,
  "تاريخ أوروبا القديم": 1,
  "تاريخ الشرق القديم": 1,
  "تاريخ العصور الوسطى": 1,
  "تاريخ فرنسا": 1,
  "تاريخ مصري": 1,
  "تاريخ وسياسة": 1,
  تدريس: 1,
  "ترايخ فرعوني": 1,
  "تربية طفال": 1,
  تعليمي: 1,
  تفسير: 1,
  "تفسير أحلام": 1,
  "تقافة عامة": 1,
  ثفافة: 1,
  "حفلات توقيع": 1,
  "خيال علمى": 1,
  دارسات: 1,
  "دراسات طبية": 1,
  ديوان: 1,
  "ديوان شعر": 1,
  "روايات مترجة": 1,
  "روايات وثائقية": 1,
  "سير ذاتية": 1,
  سيروتراجم: 1,
  سيناء: 1,
  سيناريو: 1,
  "شعر عامية": 1,
  علم: 1,
  "علم الرياضيات": 1,
  فتاوى: 1,
  "فكر وسياسة": 1,
  فلسغة: 1,
  فلسلفة: 1,
  "كتب عامة": 1,
  "كرة القدم": 1,
  "لقرآن وعلومه": 1,
  "مذكرات تاريخ": 1,
  "مساعدة ذاتية": 1,
  مسرح: 1,
  "مناهج البحث": 1,
  نحو: 1,
  نوفيلا: 1,
  هدايا: 1,
  وثائق: 1,
  وناشئين: 1,
  "‌اطفال وناشئين": 1,
  "‌سياسة وعلوم سياسية": 1,
  "‌فكر ومقارنات فكرية": 1,
};

export const getCategories = () => {
  let array = [];
  for (let name in categories) {
    array.push({
      name,
      number: categories[name],
    });
  }
  return array.sort((a, b) => b.number - a.number);
};
