
import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    // {
    //   quote: "Pasūtījām datu analīzes risinājumu publiskajiem iepirkumiem saules paneļu nozarē, un šis risinājums mums ļoti palīdzēja tāmejot dažādus objektus un prognozējot konkurentu cenu piedāvājumus.",
    //   author: "Dāvids Krastiņš",
    //   position: "Direktors, BN Darbi",
    //   avatar: "/bndarbi.png",
    //   rating: 5,
    //   company: "BN Darbi"
    // },
    // {
    //   quote: "Working with Maris from automatizacijas.lv was a pleasure. He's not only a knowledgable professional, but more importantly great to communicate with, so I felt part of the project and knew what was happening at each stage. Enjoyed the creativity of coming up with solutions and drive to make them work. Top automtion specialist I can wholeheartedly recommend",
    //   author: "Filip Łysikowski",
    //   position: "signingclients.com",
    //   avatar: "/filip.png",
    //   rating: 5,
    //   company: "Signing Clients"
    // },
    // {
    //   quote: "Dokumentu apstrāde, kas agrāk aizņēma stundas, tagad tiek pabeigti ievērojami ātrāk.",
    //   author: "Juris Ozols",
    //   position: "Vadītājs, Dalton Nekustamie Īpašumi",
    //   avatar: "bg-primary/40",
    //   rating: 5,
    //   company: "Dalton Nekustamie Īpašumi"
    // }
  ];
  
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce-subtle animate-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-bounce-subtle animate-delay-400"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Atsauksmes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-foreground leading-tight">
            Uzticas uzņēmumi visā Latvijā
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Redziet, kā mūsu AI risinājumi transformē biznesa procesus uzņēmumiem
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border/30 bg-card/60 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Rating stars */}
              <div className="relative z-10 mb-6 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-primary text-primary animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative z-10 mb-6">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author info */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0">
                  {testimonial.avatar.startsWith('/') ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                  ) : (
                    <div className={`h-12 w-12 rounded-full ${testimonial.avatar} ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300`}></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold text-foreground leading-tight truncate">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight truncate">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-primary/70 font-medium leading-tight truncate">
                    {testimonial.company}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
