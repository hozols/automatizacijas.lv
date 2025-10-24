import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectModalProps {
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
    techStack?: string[];
    longDescription?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!project) return null;

  // Default tech stack based on category if not provided
  const getDefaultTechStack = (category: string) => {
    switch (category) {
      case 'AI Automatizācija':
        return ['OpenAI API', 'Python', 'Zapier', 'Google Apps Script', 'Airtable'];
      case 'Web izstrāde':
        return ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];
      case 'Portfolio':
        return ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];
      default:
        return ['JavaScript', 'React', 'Node.js', 'TypeScript'];
    }
  };

  const techStack = project.techStack || getDefaultTechStack(project.category);
  const longDescription = project.longDescription || project.description;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Apraksts</h3>
            <p className="text-muted-foreground leading-relaxed">
              {longDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Izmantotā tehnoloģija</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Tagi</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Rezultāti</h3>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => {
                const MetricIcon = metric.icon;
                return (
                  <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <MetricIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate('/contact')}
            >
              <span className="mr-2">Pieteikties konsultācijai</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
            >
              Aizvērt
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal; 