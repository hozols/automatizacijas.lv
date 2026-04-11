import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, BarChart3, FileText, Users, TrendingUp } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const HomeAIIntro = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Main intro text - keyword rich */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-center mb-6 sm:mb-8">
            Kāpēc AI automatizācija jūsu uzņēmumam?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-foreground">Mākslīgais intelekts</strong> (MI) strauji maina veidu, kā uzņēmumi
              Latvijā veic ikdienas biznesa procesus. AI automatizācija ļauj samazināt manuālo darbu, paātrināt
              lēmumu pieņemšanu un uzlabot klientu apkalpošanas kvalitāti — vienlaikus samazinot izmaksas līdz pat 60%.
            </p>
            <p>
              Latvijas uzņēmumi, kas jau izmanto mākslīgo intelektu, ietaupa vidēji <strong className="text-foreground">15-25 stundas nedēļā</strong> katram
              darbiniekam. Neatkarīgi no uzņēmuma lieluma — vai tas ir neliels e-komercijas veikals vai liela
              ražošanas kompānija — AI risinājumi var automatizēt atkārtojošos procesus un atbrīvot resursus
              stratēģiskam darbam.
            </p>
            <p>
              No AI čatbotiem, kas apkalpo klientus 24/7 latviešu valodā, līdz dokumentu apstrādes automatizācijai
              un biznesa datu analīzei — <strong className="text-foreground">automatizacijas.lv</strong> piedāvā
              pilnu AI pakalpojumu klāstu, kas pielāgots Latvijas tirgus vajadzībām.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '80%', label: 'Mazāk manuālā darba', icon: <TrendingUp className="h-5 w-5 text-primary" /> },
            { value: '24/7', label: 'Klientu apkalpošana', icon: <Users className="h-5 w-5 text-primary" /> },
            { value: '3-6', label: 'Mēneši līdz ROI', icon: <BarChart3 className="h-5 w-5 text-primary" /> },
            { value: '99.9%', label: 'Datu precizitāte', icon: <Zap className="h-5 w-5 text-primary" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-6 rounded-xl border border-border/50 bg-card/30">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services preview with keyword-rich descriptions */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-center">
            Mūsu AI pakalpojumi uzņēmumiem Latvijā
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Bot className="h-6 w-6 text-primary" />,
                title: 'AI Čatboti',
                description: 'Inteliģenti čatboti latviešu valodā, kas apkalpo klientus 24/7, atbild uz jautājumiem un palīdz pārdošanas procesā. Integrējas ar populārākajām platformām.',
                link: '/chatbotu-izstrade',
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: 'Procesu automatizācija',
                description: 'Biznesa procesu automatizācija ar mākslīgo intelektu — e-pastu apstrāde, dokumentu ģenerēšana, datu ievade un atskaišu veidošana pilnībā automatizēti.',
                link: '/procesu-automatizacija',
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
                title: 'Datu analīze un BI',
                description: 'AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija lēmumu pieņemšanai.',
                link: '/datu-analize',
              },
              {
                icon: <FileText className="h-6 w-6 text-primary" />,
                title: 'Dokumentu automatizācija',
                description: 'Automātiska dokumentu digitalizācija, rēķinu apstrāde, līgumu analīze un datu izvilkšana no jebkura formāta dokumentiem ar AI.',
                link: '/dokumentu-automatizacija',
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: 'AI darbinieki',
                description: 'Gatavi izmantošanai AI darbinieki, kas veic specifiskus uzdevumus — no satura veidošanas līdz klientu apkalpošanai un datu apstrādei.',
                link: '/ai-darbinieki',
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: 'Mājaslapu izstrāde',
                description: 'Modernas mājas lapas un e-komercijas risinājumi ar AI integrāciju — čatboti, personalizācija, automātisks SEO un analītika.',
                link: '/majaslapu-izstrade',
              },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                onClick={() => trackCTAClick(service.title, 'home_services')}
                className="group p-5 sm:p-6 rounded-xl border border-border/50 hover:border-primary/30 bg-card/30 hover:bg-card/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all">
                  Uzzināt vairāk
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAIIntro;
