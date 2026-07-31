import { useState } from "react";
import LegalLayout from "../../components/LegalLayout/LegalLayout";

export default function Privacy() {
  const [legalContent] = useState([
    {
      id: 1,
      title: "مقدمة",
      paragraph:
        "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.",
    },

    {
      id: 2,
      title: " المعلومات التي نجمعها",

      list: [
        {
          title: "بيانات الهوية:",
          description:
            "تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.",
        },
        {
          title: "بيانات الاتصال:",
          description: "تشمل عنوان البريد الإلكتروني.",
        },
        {
          title: "البيانات التقنية:",
          description:
            "تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.",
        },
        {
          title: "بيانات الاستخدام:",
          description: "تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.",
        },
      ],
    },

    {
      id: 3,
      title: "كيف نستخدم معلوماتك",
      list: [
        "لتقديم خدمتنا والحفاظ عليها",
        "لإخطارك بالتغييرات في خدمتنا",
        "لتقديم دعم العملاء",
        "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
        "لمراقبة استخدام خدمتنا",
        "لاكتشاف ومنع ومعالجة المشاكل التقنية",
      ],
    },
    {
      id: 4,
      title: "ملفات تعريف الارتباط",
      paragraph:
        "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.",
    },
    {
      id: 5,
      title: "أمان البيانات",
      paragraph:
        "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.",
    },

    {
      id: 6,
      title: "حقوقك",
      list: [
        "طلب الوصول إلى بياناتك الشخصية",
        "طلب تصحيح بياناتك الشخصية",
        "طلب مسح بياناتك الشخصية",
        "الاعتراض على معالجة بياناتك الشخصية",
        "طلب تقييد معالجة بياناتك الشخصية",
        "الحق في سحب الموافقة",
      ],
    },
    {
      id: 7,
      title: "تواصل معنا",
      paragraph:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:",
    },
  ]);
  return (
    <>
      <LegalLayout
        icon="fa-lock"
        title=" سياسة الخصوصية"
        alertIcon="fa-shield-halved"
        alertTitle="خصوصيتك تهمنا"
        alertParagraph="نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه."
        linkPath="/terms"
        linkText=" شروط الخدمة"
      >
        {legalContent.map((privacyContent) => {
          return (
            <>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-primary to-secondary text-white text-sm font-bold rounded-lg">
                    {privacyContent.id}
                  </span>{" "}
                  {privacyContent.title}
                </h2>
                <div className="pr-11">
                  {privacyContent.paragraph && (
                    <p className="text-subtext leading-relaxed">
                      {privacyContent.paragraph}
                    </p>
                  )}

                  {privacyContent.id === 7 && (
                    <a
                      href="mailto:hello@adasah.com"
                      className="mt-4 flex items-center gap-2 text-primary hover:text-secondary font-medium"
                    >
                      <i className="fa-regular fa-envelope"></i>
                      hello@adasah.com
                    </a>
                  )}

                  {privacyContent.list && (
                    <ul className="flex flex-col gap-3">
                      {privacyContent.list.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-subtext"
                        >
                          <i className="fa-solid fa-circle-check text-primary mt-1"></i>

                          <span>
                            {item.title && (
                              <span className="text-white font-bold">
                                {item.title}
                              </span>
                            )}{" "}
                            {item.description || item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </LegalLayout>
    </>
  );
}
