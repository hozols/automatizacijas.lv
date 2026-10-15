import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  client: string;
  year: string;
  tags: string[];
  metrics: Array<{
    /* Accepted for older callers; icons are not rendered. */
    icon?: unknown;
    value: string;
    label: string;
  }>;
  gradient?: string;
  techStack?: string[];
  longDescription?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/* Stock photos were filler; only a real local screenshot is shown. */
const hasScreenshot = (image?: string): image is string => Boolean(image && image.startsWith('/'));

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
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
      <DialogContent className="sheet bg-card max-w-3xl max-h-[90vh] overflow-y-auto gap-0 p-6 sm:p-8 sm:rounded-md">
        <p className="m-0 pr-8 leading-snug">
          <span className="font-bold">{project.client}</span>
          <span className="text-muted-foreground">, {project.year}, {project.category}</span>
        </p>
        <DialogTitle className="display-3 m-0 mt-2 pb-5 border-b-2 border-foreground">
          {project.title}
        </DialogTitle>

        {hasScreenshot(project.image) && (
          <img
            src={project.image}
            alt={`${project.title} - ${project.client} projekta detaļas`}
            loading="lazy"
            decoding="async"
            className="block mt-6 w-full aspect-[8/5] object-cover object-top rounded-md border border-border"
          />
        )}

        <h3 className="m-0 mt-6 text-lg font-bold">Apraksts</h3>
        <DialogDescription className="mt-2 mb-0 text-base leading-relaxed text-foreground">
          {longDescription}
        </DialogDescription>

        <dl className="m-0 mt-6 border-t border-border">
          <div className="grid gap-x-6 py-3 border-b border-border sm:grid-cols-[12rem_1fr]">
            <dt className="font-bold">Izmantotā tehnoloģija</dt>
            <dd className="m-0 text-muted-foreground">{techStack.join(', ')}</dd>
          </div>
          <div className="grid gap-x-6 py-3 border-b border-border sm:grid-cols-[12rem_1fr]">
            <dt className="font-bold">Tagi</dt>
            <dd className="m-0 text-muted-foreground">{project.tags.join(', ')}</dd>
          </div>
        </dl>

        <h3 className="m-0 mt-6 text-lg font-bold">Rezultāti</h3>
        <dl className="m-0 mt-2 border-t border-border">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex items-baseline gap-3 py-2.5 border-b border-border">
              <dt className="order-2 text-muted-foreground leading-snug">{metric.label}</dt>
              <dd className="order-1 m-0 min-w-[4.5rem] shrink-0 font-bold tabular-nums">{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col sm:flex-row gap-3 mt-7">
          <Link to="/contact" className="btn btn-solid">
            Pieteikties konsultācijai
          </Link>
          <button type="button" onClick={onClose} className="btn btn-line">
            Aizvērt
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
