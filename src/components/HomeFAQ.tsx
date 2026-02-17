import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Kas ir mākslīgais intelekts un kā tas var palīdzēt manam biznesam?',
    answer: 'Mākslīgais intelekts (MI) ir tehnoloģija, kas ļauj datoriem veikt uzdevumus, kurus tradicionāli veic cilvēki — piemēram, atbildēt uz klientu jautājumiem, analizēt datus vai automatizēt atkārtojošos procesus. Biznesā MI palīdz ietaupīt laiku, samazināt izmaksas un uzlabot klientu apkalpošanu. Mūsu klienti vidēji ietaupa 15-25 stundas nedēļā katram darbiniekam.',
  },
  {
    question: 'Cik maksā AI automatizācijas ieviešana?',
    answer: 'AI risinājumu cenas sākas no €299 mēnesī par pamata automatizāciju. Sarežģītākiem projektiem, piemēram, pielāgotiem čatbotiem vai datu analīzes sistēmām, cenas tiek noteiktas individuāli. Piedāvājam bezmaksas konsultāciju, lai novērtētu jūsu vajadzības un sniegtu precīzu tāmi.',
  },
  {
    question: 'Cik ilgi aizņem AI risinājuma izstrāde un ieviešana?',
    answer: 'Pamata AI čatbota ieviešana aizņem 1-2 nedēļas. Procesu automatizācijas projekti parasti ilgst 2-6 nedēļas atkarībā no sarežģītības. Pilnīgi pielāgoti risinājumi ar datu analīzi un integrācijām var aizņemt 1-3 mēnešus. Sākam ar bezmaksas konsultāciju un izstrādājam detalizētu projekta plānu.',
  },
  {
    question: 'Vai AI čatbots var strādāt latviešu valodā?',
    answer: 'Jā, mūsu AI čatboti pilnībā atbalsta latviešu valodu. Izmantojam jaunākās valodas apstrādes tehnoloģijas, kas nodrošina dabīgu un precīzu komunikāciju latviski. Čatboti var apkalpot klientus 24/7, atbildēt uz biežāk uzdotajiem jautājumiem un novirzīt sarežģītākus pieprasījumus pie speciālistiem.',
  },
  {
    question: 'Kā sākt sadarbību ar automatizacijas.lv?',
    answer: 'Sāciet ar bezmaksas konsultāciju — sazinieties ar mums pa tālruni +371 20 015 830, e-pastu info@automatizacijas.lv vai WhatsApp. Konsultācijā mēs novērtēsim jūsu biznesa vajadzības, piedāvāsim piemērotāko risinājumu un sniegsim orientējošu tāmi. Nav nekādu saistību — vienkārši aprunāsimies par jūsu mērķiem.',
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight">
            Biežāk uzdotie jautājumi
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Atbildes uz populārākajiem jautājumiem par AI automatizāciju un mūsu pakalpojumiem
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4"
              >
                <span className="text-sm sm:text-base font-medium text-foreground leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
