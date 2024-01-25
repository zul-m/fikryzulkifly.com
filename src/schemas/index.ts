import category from "@/src/schemas/category";
import dateIn from "@/src/schemas/dateIn";
import furnish from "@/src/schemas/furnish";
import listing from "@/src/schemas/listing";
import listingProject from "@/src/schemas/listingProject";
import location from "@/src/schemas/location";
import propertyType from "@/src/schemas/propertyType";
import rental from "@/src/schemas/rental";
import video from "@/src/schemas/video";

export const schemaTypes = [
  listing,
  listingProject,
  rental,
  video,
  category,
  location,
  propertyType,
  dateIn,
  furnish,
];
