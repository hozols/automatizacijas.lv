import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    client: string;
    year: string;
    tags: string[];
    metrics: Array<{
      icon: React.ComponentType<{ className?: string }>;
      value: string;
      label: string;
    }>;
    gradient: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const IconComponent = project.metrics[0]?.icon || TrendingUp;

  return (
    <Card className="group relative overflow-hidden border border-border/30 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
            {project.category}
          </span>
        </div>
        
        {/* Client & Year */}
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-sm font-semibold">{project.client}</p>
          <p className="text-xs opacity-80">{project.year}</p>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {project.metrics.map((metric, index) => {
            const MetricIcon = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <MetricIcon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Consultation Button */}
        <div className="pt-2">
          <button 
            onClick={() => navigate('/contact')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 rounded-lg transition-all duration-200 group-hover:scale-105"
          >
            <span className="text-sm font-medium">Pieteikties konsultācijai</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 