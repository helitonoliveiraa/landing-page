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
  pricingBox,
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
    <PricingBox {...pricingBox} />
    <SectionAboutUs {...sectionAboutUs} />
    <SectionReviews {...sectionReviews} />
    <SectionFaq {...sectionFaq} />
    <Footer {...footer} />
    <JsonSchema />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const {
    landingPage: { data },
  } = await client.request(GET_LANDING_PAGE);

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
  } = data.attributes;

  const discount = pricingBox.numberInstallments * pricingBox.priceInstallment;

  const landingPage = {
    logo: {
      url: logo.data.attributes.url,
      alternativeText: logo.data.attributes.alternativeText,
    },
    header: {
      ...header,
      title: header.title,
      media: {
        url: header.media.data.attributes.url,
        alternativeText: header.media.data.attributes.alternativeText,
      },
    },
    sectionAboutProject: {
      ...sectionAboutProject,
      image: {
        url: sectionAboutProject.image.data.attributes.url,
        alternativeText:
          sectionAboutProject.image.data.attributes.alternativeText,
      },
    },
    sectionTech: {
      ...sectionTech,
      techIcons: sectionTech.techIcons.map(techIcon => ({
        ...techIcon,
        icon: {
          url: techIcon.icon.data.attributes.url,
          alternativeText: techIcon.icon.data.attributes.alternativeText,
        },
      })),
    },
    sectionConcepts,
    sectionModules,
    sectionAgenda,
    pricingBox: {
      ...pricingBox,
      totalPrice: formatPrice(pricingBox.totalPrice),
      priceInstallment: formatPrice(pricingBox.priceInstallment),
      discount: formatPrice(discount),
    },
    sectionAboutUs: {
      ...sectionAboutUs,
      authors: sectionAboutUs.authors.data.map(author => {
        return {
          id: author.id,
          photo: {
            alternativeText:
              author.attributes.photo.data.attributes.alternativeText,
            url: author.attributes.photo.data.attributes.url,
          },
          name: author.attributes.name,
          role: author.attributes.role,
          description: author.attributes.description,
          socialLinks: author.attributes.socialLinks,
        };
      }),
    },
    sectionReviews: {
      ...sectionReviews,
      reviews: sectionReviews.reviews.map(review => {
        return {
          ...review,
          photo: {
            alternativeText: review.photo.data.attributes.alternativeText,
            url: review.photo.data.attributes.url,
          },
        };
      }),
    },
    sectionFaq,
    footer,
  };

  return {
    props: {
      ...landingPage,
    },
  };
};

export default Index;
