import { projectsData, type ProjectItem } from "@/lib/projects";

export interface ProjectSEOItem extends ProjectItem {
  slug: string;
  serviceSlug: string;
  city: string;
}

export const projectSlugMapping: Record<string, { slug: string; serviceSlug: string; city: string }> = {
  "proj-basement-1": {
    slug: "basement-transformation-danbury-ct",
    serviceSlug: "basement-remodeling",
    city: "Connecticut",
  },
  "proj-retaining-wall-1": {
    slug: "backyard-retaining-wall-ridgefield-ct",
    serviceSlug: "finish-carpentry",
    city: "Connecticut",
  },
  "proj-accessibility-ramp-1": {
    slug: "accessibility-ramp-connecticut",
    serviceSlug: "deck-construction",
    city: "Connecticut",
  },
  "proj-bathroom-remodel-1": {
    slug: "bathroom-remodel-brookfield-ct",
    serviceSlug: "bathroom-remodeling",
    city: "Connecticut",
  },
  "proj-basement-finishing-full": {
    slug: "finished-basement-fairfield-county",
    serviceSlug: "basement-remodeling",
    city: "Connecticut",
  },
  "proj-deck-composite-1": {
    slug: "composite-deck-fairfield-county",
    serviceSlug: "deck-construction",
    city: "Connecticut",
  },
  "proj-loft-renovation-1": {
    slug: "open-loft-renovation-connecticut",
    serviceSlug: "framing",
    city: "Connecticut",
  },
  "proj-interior-painting-1": {
    slug: "interior-painting-connecticut",
    serviceSlug: "painting",
    city: "Connecticut",
  },
  "proj-poolside-deck-1": {
    slug: "poolside-deck-connecticut",
    serviceSlug: "deck-construction",
    city: "Connecticut",
  },
};

export const seoProjectsList: ProjectSEOItem[] = projectsData.map((p) => {
  const map = projectSlugMapping[p.id] || {
    slug: p.id,
    serviceSlug: "finish-carpentry",
    city: p.location,
  };
  return {
    ...p,
    slug: map.slug,
    serviceSlug: map.serviceSlug,
    city: map.city,
  };
});
