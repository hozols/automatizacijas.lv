import React from 'react';
import Reveal from '@/components/motion/Reveal';
import Hairline from '@/components/motion/Hairline';

const faqs = [
  {
    question: 'Kas ir mākslīgais intelekts un kā tas var palīdzēt manam biznesam?',
    answer: 'Mākslīgais intelekts (MI) ir tehnoloģija, kas ļauj datoriem veikt uzdevumus, kurus tradicionāli veic cilvēki: atbildēt uz klientu jautājumiem, analizēt datus vai automatizēt atkārtojošos procesus. Biznesā MI palīdz ietaupīt laiku, samazināt izmaksas un uzlabot klientu apkalpošanu. Mūsu klienti vidēji ietaupa 15-25 stundas nedēļā katram darbiniekam.',
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
    answer: 'Sāciet ar bezmaksas konsultāciju. Sazinieties ar mums pa tālruni +371 20 015 830, e-pastu info@automatizacijas.lv vai WhatsApp. Konsultācijā mēs novērtēsim jūsu biznesa vajadzības, piedāvāsim piemērotāko risinājumu un sniegsim orientējošu tāmi. Nav nekādu saistību, vienkārši aprunāsimies par jūsu mērķiem.',
  },
];

const HomeFAQ = () => {
  return (
    <section className="wrap band">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="label m-0 text-muted-foreground">Jautājumi</p>
          <h2 className="display-2 m-0 mt-4">Biežāk uzdotie jautājumi</h2>
        </div>

        <div className="border-t border-foreground lg:col-span-7">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq border-b border-border">
              <summary className="display-3 flex cursor-pointer list-none items-baseline justify-between gap-6 py-5">
                {faq.question}
                <span aria-hidden="true" className="faq-sign shrink-0 font-sans text-2xl font-light leading-none" />
              </summary>
              <p className="m-0 pb-6 max-w-[40em] text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
