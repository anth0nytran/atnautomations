export interface BrandStyle {
  theme: string;
  tone: string;
  visuals: string;
  design_keywords?: string[];
}

export interface CopyRequirements {
  headline_style: string;
  voice?: string;
  explain_simply?: string[];
  avoid?: string[];
  use_persuasion: string[];
  include_microcopy?: string[];
}

export interface CtaStrategy {
  primary_cta: string;
  secondary_cta: string;
  cta_placement?: string[];
  lead_magnet?: string;
  qualification?: string;
}

export interface SeoRequirements {
  primary_keywords: string[];
  secondary_keywords: string[];
  on_page: string[];
}

export interface TechnicalOutput {
  format: string;
  preferred_stack: string;
  accessibility: string;
  performance: string;
}

export interface LandingPagePrompt {
  id: string;
  title: string;
  role: string;
  primary_goal: string;
  target_audience: string[];
  positioning: string;
  brand_style: BrandStyle;
  core_pain_points_to_target: string[];
  primary_value_props: string[];
  page_structure: string[];
  copy_requirements: CopyRequirements;
  cta_strategy: CtaStrategy;
  animation_requirements: string[];
  seo_requirements: SeoRequirements;
  trust_builders: string[];
  technical_output: TechnicalOutput;
  deliverables: string[];
}