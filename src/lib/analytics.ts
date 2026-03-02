// Analytics utility for GA4 custom events and Microsoft Clarity
// Respects cookie consent preferences

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    clarity: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Check if analytics cookies are accepted
function hasAnalyticsConsent(): boolean {
  try {
    const prefs = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie-preferences='));
    if (!prefs) return false;
    const parsed = JSON.parse(decodeURIComponent(prefs.split('=')[1]));
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

// GA4 custom event tracking
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!hasAnalyticsConsent() || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

// Pre-defined event helpers
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
}

export function trackFormSubmission(formName: string): void {
  trackEvent('form_submission', {
    form_name: formName,
  });
}

export function trackServiceView(serviceName: string): void {
  trackEvent('service_view', {
    service_name: serviceName,
  });
}

export function trackBlogPostView(postSlug: string, postTitle: string): void {
  trackEvent('blog_post_view', {
    post_slug: postSlug,
    post_title: postTitle,
  });
}

export function trackOutboundLink(url: string): void {
  trackEvent('outbound_link', {
    link_url: url,
  });
}

export function trackProjectView(projectName: string): void {
  trackEvent('project_view', {
    project_name: projectName,
  });
}

export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
  });
}

// Clarity custom tags
export function clarityTag(key: string, value: string): void {
  if (!hasAnalyticsConsent() || typeof window.clarity !== 'function') return;
  window.clarity('set', key, value);
}

export function clarityIdentify(userId: string): void {
  if (!hasAnalyticsConsent() || typeof window.clarity !== 'function') return;
  window.clarity('identify', userId);
}
