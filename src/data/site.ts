export const SITE_TITLE = '';
export const SITE_DESCRIPTION = '';
export const SITE_KEYWORDS = ""
export const SOCIAL_IMAGE = ""
export const LOGO = '';
export const FAVICON = '';



export const NAVIGATION = [
    //the "type" controls which link appears where in the footer
    {
        name: "Etusivu",
        url: "#main-content",
        type: ["footer-yritys"]
    },
    {
        name: "Palvelut",
        url: "#services",
        type: ["header"]
    },
    {
        name: "Portfolio",
        url: "#portfolio",
        type: ["header", "footer-yritys"]
    },
    {
        name: "Minusta",
        url: "about",
        type: ["header", "footer-yritys"]
    },
    {
        name: "Ota yhteyttä",
        url: "#contact",
        type: ["header"]
    },
    {
        name: "Tietosuojaseloste",
        url: "privacy",
        type: ["footer-legal"]
    },
    {
        name: "Saavutettavuusseloste",
        url: "saavutettavuusseloste",
        type: ["footer-legal"]
    },
    {
        name: "in English",
        url: "en",
        type: ["footer-yritys"]
    }
];


export interface Testimonial {
    name: string;
    role: string;
    company?: string;
    date: string; // ISO format: "2024-10-01"
    avatar: string;
    rating: number;
    text: string;
    fullText?: string;
    verified?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
   {
       name: "",
       role: "",
       date: "",
       avatar: "",
       rating: 0,
       text: ""
   }
];

export const getHref = (url: string) => {
    if (url.startsWith('http')) return url; // External links
    if (url.startsWith('#')) return `/${url}`; // Internal anchors (e.g., /#portfolio)
    return `/${url.replace(/^\//, '')}`; // Internal pages (ensures single leading slash)
};