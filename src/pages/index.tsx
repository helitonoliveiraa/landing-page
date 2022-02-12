import React from 'react';

import { GetStaticProps } from 'next';

import Footer from '@/components/Footer';
import JsonSchema from '@/components/JsonSchema';
import PricingBox from '@/components/PricingBox';
import { SectionAboutProject } from '@/components/SectionAboutProject';
import SectionAboutUs from '@/components/SectionAboutUs';
import { SectionAgenda } from '@/components/SectionAgenda';
import { SectionConcepts } from '@/components/SectionConcepts';
import SectionFaq from '@/components/SectionFaq';
import { SectionHero } from '@/components/SectionHero';
import { SectionModules } from '@/components/SectionModules';
import SectionReviews from '@/components/SectionReviews';
import { SectionTech } from '@/components/SectionTech';
import { client } from '@/graphql/client';
import { GET_LANDING_PAGE } from '@/graphql/getLandingPage';
import { LandingPageProps } from '@/types/api';
import { formatPrice } from '@/utils/formatPrice';

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionAgenda,
  formattedPricing,
  sectionAboutUs,
  sectionReviews,
  sectionFaq,
  footer,
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech {...sectionTech} />
    <SectionConcepts {...sectionConcepts} />
    <SectionModules {...sectionModules} />
    <SectionAgenda {...sectionAgenda} />
    <PricingBox {...formattedPricing} />
    <SectionAboutUs {...sectionAboutUs} />
    <SectionReviews {...sectionReviews} />
    <SectionFaq {...sectionFaq} />
    <Footer {...footer} />
    <JsonSchema />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  const {
    logo,
    header,
    sectionAboutProject,
    sectionTech,
    sectionConcepts,
    sectionModules,
    sectionAgenda,
    pricingBox,
    sectionAboutUs,
    sectionReviews,
    sectionFaq,
    footer,
  } = landingPage;

  const discount = pricingBox.numberInstallments * pricingBox.priceInstallment;

  const formattedPricing = {
    ...pricingBox,
    totalPrice: formatPrice(pricingBox.totalPrice),
    priceInstallment: formatPrice(pricingBox.priceInstallment),
    discount: formatPrice(discount),
  };

  console.log(JSON.stringify(footer, null, 2));

  return {
    props: {
      logo,
      header,
      sectionAboutProject,
      sectionTech,
      sectionConcepts,
      sectionModules,
      sectionAgenda,
      formattedPricing,
      sectionAboutUs,
      sectionReviews,
      sectionFaq,
      footer,
    },
  };
};

export default Index;
