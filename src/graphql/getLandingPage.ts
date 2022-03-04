import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment buttonComponent on ComponentPageButton {
    label
    url
  }

  fragment author on AuthorEntity {
    id
    attributes {
      photo {
        data {
          attributes {
            ...image
          }
        }
      }
      name
      role
      description
      socialLinks {
        id
        title
        url
      }
    }
  }

  fragment logo on LandingPage {
    logo {
      data {
        attributes {
          ...image
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        ...buttonComponent
      }
      media {
        data {
          attributes {
            ...image
          }
        }
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        data {
          attributes {
            ...image
          }
        }
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        id
        title
        icon {
          data {
            attributes {
              ...image
            }
          }
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        id
        title
        subTitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        ...buttonComponent
      }
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        data {
          ...author
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      id
      title
      reviews {
        id
        name
        text
        photo {
          data {
            attributes {
              ...image
            }
          }
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        id
        question
        answer
      }
    }
  }

  fragment footer on LandingPage {
    footer {
      description
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
          ...sectionConcepts
          ...sectionModules
          ...sectionAgenda
          ...pricingBox
          ...sectionAboutUs
          ...sectionReviews
          ...sectionFaq
          ...footer
        }
      }
    }
  }
`;

export { GET_LANDING_PAGE };
