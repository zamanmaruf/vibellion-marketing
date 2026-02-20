export type CtaClickParams = {
  location: string;
  label: string;
  destination: string;
};

export type CalendlyClickParams = {
  location: string;
};

export type ContactFormStartParams = {
  location: string;
};

export type ContactFormSubmitParams = {
  location: string;
  status: "success" | "error";
};

export type PricingViewParams = {
  tier: string;
};

export type FaqExpandParams = {
  question: string;
};

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event",
      eventName: string,
      params?: EventParams
    ) => void;
  }
}

function trackEvent(eventName: string, params: EventParams) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackCtaClick({ location, label, destination }: CtaClickParams) {
  trackEvent("cta_click", { location, label, destination });
}

export function trackCalendlyClick({ location }: CalendlyClickParams) {
  trackEvent("calendly_click", { location });
}

export function trackContactFormStart({ location }: ContactFormStartParams) {
  trackEvent("contact_form_start", { location });
}

export function trackContactFormSubmit({ location, status }: ContactFormSubmitParams) {
  trackEvent(status === "success" ? "contact_submit_success" : "contact_submit_error", {
    location,
    status,
  });
}

export function trackPricingView({ tier }: PricingViewParams) {
  trackEvent("pricing_view", { tier });
}

export function trackFaqExpand({ question }: FaqExpandParams) {
  trackEvent("faq_expand", { question });
}
