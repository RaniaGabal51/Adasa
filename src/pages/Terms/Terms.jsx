import { useState } from "react";
import LegalLayout from "../../components/LegalLayout/LegalLayout";

export default function Terms() {
  const [legalContent] = useState([
    {
      id: 1,
      title: "الموافقة على الشروط",
      paragraph:
        "بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.",
    },

    {
      id: 2,
      title: "رخصة الاستخدام",
      paragraph: "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.",
      listTitle: "بموجب هذا الترخيص لا يجوز لك:",
      list: [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري",
        "محاولة فك البرنامج",
        "إزالة حقوق النشر",
        "نقل المواد إلى شخص آخر",
      ],
    },

    {
      id: 3,
      title: "إخلاء المسؤولية",
      paragraph:
        'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
    },
    {
      id: 4,
      title: "القيود",
      paragraph:
        "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.",
    },
    {
      id: 5,
      title: "محتوى المستخدم",
      paragraph:
        "إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.",
      listTitle: "يجب ألا يكون محتواك:",
      list: [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
      ],
    },
    {
      id: 6,
      title: "التعديلات",
      paragraph:
        "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.",
    },
    {
      id: 7,
      title: "معلومات الاتصال",
      paragraph:
        "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:",
    },
  ]);

  return (
    <>
      <LegalLayout
        icon="fa-file-lines"
        title=" شروط الخدمة"
        alertIcon="fa-triangle-exclamation"
        alertTitle=" إشعار مهم "
        alertParagraph=" يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول
            أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط."
        linkPath="/privacy"
        linkText="سياسة الخصوصية"
      >

        {legalContent.map((termContent) => {
          return (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-primary to-secondary text-white text-sm font-bold rounded-lg">
                  {termContent.id}
                </span>{" "}
                {termContent.title}
              </h2>
              <div className="pr-11">
                <p className="text-subtext leading-relaxed">
                  {termContent.paragraph}
                </p>

                {termContent.id === 7 && (
                  <a
                    href="mailto:hello@adasah.com"
                    className="mt-4 flex items-center gap-2 text-primary hover:text-secondary font-medium"
                  >
                    <i className="fa-regular fa-envelope"></i>
                    hello@adasah.com
                  </a>
                )}
                {termContent.listTitle && (
                  <p className="text-neutral-300 font-medium mb-3 mt-4">
                    {termContent.listTitle}
                  </p>
                )}

                {termContent.list && (
                  <ul className="flex flex-col gap-3">
                    {termContent.list.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-subtext"
                      >
                        <i className="fa-solid fa-xmark text-red-400 mt-0.5"></i>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </LegalLayout>
    </>
  );
}
