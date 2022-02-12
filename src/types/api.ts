export type Image = {
  alternativeText: string;
  url: string;
};

export type Button = {
  label: string;
  url: string;
};

export type TechIcon = {
  id: string;
  title: string;
  image: Image;
};

export type Module = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
};

export type SocialLink = {
  id: string;
  title: string;
  url: string;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  description: string;
  photo: Image;
  socialLinks: Array<SocialLink>;
};

export type Review = {
  id: string;
  name: string;
  text: string;
  photo: Image;
};

export type Question = {
  id: string;
  question: string;
  answer: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: Button;
  image: Image;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  media: Image;
};

export type SectionTechProps = {
  title: string;
  techIcons: Array<TechIcon>;
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{
    id: string;
    title: string;
  }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Array<Module>;
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type FormattedPricingBoxProps = {
  totalPrice: string;
  numberInstallments: number;
  priceInstallment: string;
  benefits: string;
  discount: string;
  button: Button;
};

export type SectionAboutUsProps = {
  title: string;
  authors: Array<Author>;
};

export type SectionReviewsProps = {
  title: string;
  reviews: Array<Review>;
};

export type SectionFaqProps = {
  title: string;
  questions: Array<Question>;
};

export type FooterProps = {
  description: string;
};

export type LandingPageProps = {
  logo: Image;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  formattedPricing: FormattedPricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
  footer: FooterProps;
};
