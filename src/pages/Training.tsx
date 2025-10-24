import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import TrainingModal from '@/components/TrainingModal';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Monitor, 
  CheckCircle, 
  GraduationCap,
  Building,
  Briefcase,
  Shield,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const TrainingPage = () => {
  const { t } = useLanguage();
  const [selectedTraining, setSelectedTraining] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trainingData = {
    courses: {
      title: t('training.courses.title'),
      subtitle: t('training.courses.subtitle'),
      description: t('training.courses.description'),
      icon: <Monitor className="h-6 w-6 text-primary" />,
      type: 'courses' as const,
      features: [
        t('training.courses.features.selfpaced'),
        t('training.courses.features.practical'),
        t('training.courses.features.certificate'),
        t('training.courses.features.support')
      ]
    },
    seminars: {
      title: t('training.seminars.title'),
      subtitle: t('training.seminars.subtitle'),
      description: t('training.seminars.description'),
      icon: <Users className="h-6 w-6 text-primary" />,
      type: 'seminars' as const,
      features: [
        t('training.seminars.features.customized'),
        t('training.seminars.features.expert'),
        t('training.seminars.features.interactive'),
        t('training.seminars.features.materials')
      ]
    },
    topics: [
      {
        title: t('training.topics.ai_basics'),
        subtitle: 'AI Pamati',
        description: t('training.topics.ai_basics.description'),
        icon: <Monitor className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      },
      {
        title: t('training.topics.automation'),
        subtitle: 'Automatizācija',
        description: t('training.topics.automation.description'),
        icon: <CheckCircle className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      },
      {
        title: t('training.topics.chatbots'),
        subtitle: 'Čatboti',
        description: t('training.topics.chatbots.description'),
        icon: <Users className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      },
      {
        title: t('training.topics.data_analysis'),
        subtitle: 'Datu Analīze',
        description: t('training.topics.data_analysis.description'),
        icon: <Briefcase className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      },
      {
        title: t('training.topics.machine_learning'),
        subtitle: 'Mašīnmācīšanās',
        description: t('training.topics.machine_learning.description'),
        icon: <GraduationCap className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      },
      {
        title: t('training.topics.ethics'),
        subtitle: 'AI Ētika',
        description: t('training.topics.ethics.description'),
        icon: <Shield className="h-5 w-5 text-primary" />,
        type: 'topic' as const
      }
    ]
  };

  const handleTrainingClick = (training: Training) => {
    setSelectedTraining(training);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTraining(null);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Apmācības | automatizacijas.lv</title>
        <meta name="description" content="Mēs piedāvājam AI apmācības un seminārus, lai palīdzētu jūsu komandai apgūt nepieciešamās prasmes un zināšanas."/>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-background">
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground animate-fade-in-up">
                {t('training.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                {t('training.subtitle')}
              </p>
            </div>
          </section>

          {/* Training Cards Section */}
          <section className="w-full py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Online Courses Card */}
                <Card className="p-8 border border-border/50 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up animate-delay-400">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm">
                        <Monitor className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-medium">
                        {t('training.courses.title')}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {t('training.courses.subtitle')}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {t('training.courses.description')}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.selfpaced')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.practical')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.certificate')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.courses.features.support')}
                        </span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleTrainingClick(trainingData.courses)}
                      className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 backdrop-blur-sm transition-all duration-300 group"
                    >
                      <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      Uzzināt vairāk
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Corporate Seminars Card */}
                <Card className="p-8 border border-border/50 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up animate-delay-600">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-medium">
                        {t('training.seminars.title')}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {t('training.seminars.subtitle')}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {t('training.seminars.description')}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.customized')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.expert')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.interactive')}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium">
                          {t('training.seminars.features.materials')}
                        </span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleTrainingClick(trainingData.seminars)}
                      className="w-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 backdrop-blur-sm transition-all duration-300 group"
                    >
                      <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      Uzzināt vairāk
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Training Topics Section */}
          <section className="w-full py-16 px-6 md:px-12 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground animate-fade-in-up animate-delay-800">
                  {t('training.topics.title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingData.topics.map((topic, index) => (
                  <Card 
                    key={index}
                    className="p-6 border border-border/50 bg-card/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    onClick={() => handleTrainingClick(topic)}
                  >
                    <CardContent className="p-0 space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm">
                          {topic.icon}
                        </div>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {topic.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-16 group-hover:text-foreground transition-colors">
                        {topic.description}
                      </p>
                      <div className="pt-2 flex items-center justify-end">
                        <span className="text-xs text-primary font-medium group-hover:scale-110 transition-transform">
                          Uzzināt vairāk →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4 animate-fade-in-up animate-delay-1000">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                  Gatavi sākt mācīties?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Sazinieties ar mums, lai uzzinātu vairāk par mūsu kursiem un semināriem
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-1200">
                <Button 
                  onClick={() => handleTrainingClick(trainingData.courses)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group px-8 py-3"
                >
                  <BookOpen className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Apskatīt kursus
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => handleTrainingClick(trainingData.seminars)}
                  className="border-primary/20 text-primary hover:bg-primary/10 transition-all duration-200 group px-8 py-3"
                >
                  <Users className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Pieteikt semināru
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Training Modal */}
        {selectedTraining && (
          <TrainingModal
            isOpen={isModalOpen}
            onClose={closeModal}
            training={selectedTraining}
          />
        )}
      </div>
    </PageTransition>
  );
};

export default TrainingPage;