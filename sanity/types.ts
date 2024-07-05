/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SimpleText = {
  _type: "simpleText";
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Qa = {
  _type: "qa";
  question?: string;
  answer?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Price = {
  _type: "price";
  title?: string;
  price?: number;
  offer?: string;
  perks?: Array<string>;
  payment?: string;
  book?: string;
};

export type VideoColumn = {
  _type: "videoColumn";
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    alt?: string;
    _type: "defaultVideo";
  };
};

export type Column = {
  _type: "column";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "defaultImage";
  };
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Route = {
  _type: "route";
  title?: string;
  pageRoute?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  route?: string;
  anchor?: string;
  link?: string;
  blank?: boolean;
  nofollow?: boolean;
};

export type DefaultVideo = {
  _type: "defaultVideo";
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
  };
  alt?: string;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type TextBlock = {
  _type: "textBlock";
  active?: boolean;
  anchor?: string;
  contentAlignment?: "left" | "center" | "right";
  content?: NormalText;
};

export type NormalText = {
  _type: "normalText";
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type PriceBlock = {
  _type: "priceBlock";
  active?: boolean;
  anchor?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  columns?: Array<{
    _key: string;
  } & Price>;
  ctaContent?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  cta?: Cta;
};

export type VideoBlock = {
  _type: "videoBlock";
  active?: boolean;
  anchor?: string;
  videoUrl?: string;
};

export type CtaBlock = {
  _type: "ctaBlock";
  active?: boolean;
  anchor?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  cta?: Cta;
};

export type QaBlock = {
  _type: "qaBlock";
  active?: boolean;
  anchor?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  qa?: Array<{
    _key: string;
  } & Qa>;
  cta?: Cta;
};

export type Cta = {
  _type: "cta";
  active?: boolean;
  route?: Route;
};

export type InfoBlock = {
  _type: "infoBlock";
  active?: boolean;
  anchor?: string;
  title?: string;
  columns?: Array<{
    _key: string;
  } & Column>;
  subTitle?: string;
  videoColumns?: Array<{
    _key: string;
  } & VideoColumn>;
};

export type ReviewBlock = {
  _type: "reviewBlock";
  active?: boolean;
  anchor?: string;
  titles?: Array<string>;
  reviews?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "review";
  }>;
};

export type ColumnBlock = {
  _type: "columnBlock";
  active?: boolean;
  anchor?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  rows?: Array<({
    _key: string;
  } & ColumnArray) | ({
    _key: string;
  } & SimpleText) | ({
    _key: string;
  } & VideoColumnArray)>;
};

export type Sections = Array<({
  _key: string;
} & CtaBlock) | ({
  _key: string;
} & ColumnBlock) | ({
  _key: string;
} & PriceBlock) | ({
  _key: string;
} & QaBlock) | ({
  _key: string;
} & ReviewBlock) | ({
  _key: string;
} & VideoBlock) | ({
  _key: string;
} & TextBlock)>;

export type Review = {
  _id: string;
  _type: "review";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "defaultImage";
  };
  name?: string;
  title?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type DefaultImage = {
  _type: "defaultImage";
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
};

export type Navigation = {
  _id: string;
  _type: "navigation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  items?: Array<{
    _key: string;
  } & Route>;
};

export type Site = {
  _id: string;
  _type: "site";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  altTitle?: string;
  foundingYear?: string;
  addressCountry?: string;
  social?: Social;
  seo?: Seo;
};

export type Social = {
  _type: "social";
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  sections?: Sections;
  seo?: Seo;
  pageNav?: NavObject;
};

export type NavObject = {
  _type: "navObject";
  header?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigation";
  };
  footer?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "navigation";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Seo = {
  _type: "seo";
  noIndex?: boolean;
  metaTitle?: string;
  metaDesc?: string;
  shareGraphic?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type VideoColumnArray = {
  _type: "videoColumnArray";
  columns?: Array<{
    _key: string;
  } & VideoColumn>;
};

export type ColumnArray = {
  _type: "columnArray";
  columns?: Array<{
    _key: string;
  } & Column>;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/queries/documents/page-query.ts
// Variable: PAGES_QUERY
// Query: *[_type == "page" && defined(slug.current)][]
export type PAGES_QUERYResult = Array<{
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  sections?: Sections;
  seo?: Seo;
  pageNav?: NavObject;
}>;
// Variable: PAGE_QUERY
// Query: *[_type == "page" && slug.current == $slug][0]{  title,  "slug": slug.current,  pageNav {      header -> {    title,    items[] {        _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },      items[] {        "parentTitle": parentRoute.title,          _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        parentRoute {            _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        },        items[] {            _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        }      }    }  },  footer -> {    title,    items[] {        _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },      items[] {        "parentTitle": parentRoute.title,          _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        parentRoute {            _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        },        items[] {            _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  },        }      }    }  },  },  seo {    ...,    shareGraphic {        alt,   caption,  shadow,  crop {    ...  },  hotspot {    x,    y  },  asset-> {    ...,    metadata  },    },  },  sections[] {    ...,    image {        alt,   caption,  shadow,  crop {    ...  },  hotspot {    x,    y  },  asset-> {    ...,    metadata  },    },    ctaBlock {        active,      route {          _type,  title,  blank,  pageRoute->{    slug {      current    }  },  route,  anchor,  link-> {    link,    nofollow  }      }    },  }}
export type PAGE_QUERYResult = {
  title: string | null;
  slug: string | null;
  pageNav: {
    header: {
      title: string | null;
      items: Array<{
        _type: "route";
        title: string | null;
        blank: boolean | null;
        pageRoute: {
          slug: {
            current: string | null;
          } | null;
        } | null;
        route: string | null;
        anchor: string | null;
        link: null;
        items: null;
      }> | null;
    } | null;
    footer: {
      title: string | null;
      items: Array<{
        _type: "route";
        title: string | null;
        blank: boolean | null;
        pageRoute: {
          slug: {
            current: string | null;
          } | null;
        } | null;
        route: string | null;
        anchor: string | null;
        link: null;
        items: null;
      }> | null;
    } | null;
  } | null;
  seo: {
    _type: "seo";
    noIndex?: boolean;
    metaTitle?: string;
    metaDesc?: string;
    shareGraphic: {
      alt: null;
      caption: null;
      shadow: null;
      crop: {
        _type: "sanity.imageCrop";
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      } | null;
      hotspot: {
        x: number | null;
        y: number | null;
      } | null;
      asset: {
        _id: string;
        _type: "sanity.imageAsset";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        originalFilename?: string;
        label?: string;
        title?: string;
        description?: string;
        altText?: string;
        sha1hash?: string;
        extension?: string;
        mimeType?: string;
        size?: number;
        assetId?: string;
        uploadId?: string;
        path?: string;
        url?: string;
        metadata: SanityImageMetadata | null;
        source?: SanityAssetSourceData;
      } | null;
    } | null;
  } | null;
  sections: Array<{
    _key: string;
    image: null;
    ctaBlock: null;
  }> | null;
} | null;
