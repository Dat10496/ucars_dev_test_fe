import image1 from "../images/car/1.png";
import image2 from "../images/car/2.png";
import image3 from "../images/car/3.png";
import image4 from "../images/car/4.png";
import image5 from "../images/car/5.png";
import image6 from "../images/car/6.png";
import image7 from "../images/car/7.png";
import alpine from "../images/alpine.png";
import bmw from "../images/bmw.png";
import aston from "../images/aston.png";
import palace from "../images/palace.png";
import rory from "../images/rory.png";
import rexona from "../images/rexona.png";
import advertiseImg from "../images/advertise.png";
import logo1 from "../images/logo/toyota.png";
import logo2 from "../images/logo/bmw.png";
import logo3 from "../images/logo/mazda.png";
import logo4 from "../images/logo/huyndai.png";
import logo5 from "../images/logo/kia.png";
import logo6 from "../images/logo/nissan.png";

export const FILTER_CAR = [
  {
    value: "New Car ( Authorised Dealer)",
    label: "New Car ( Authorised Dealer)",
  },
  {
    value: "New Car ( Parallel Importer )",
    label: "New Car ( Parallel Importer )",
  },
  { value: "Used Cars", label: "Used Cars" },
];

export const VEHICLE_TYPES = [
  { value: "Bus", label: "Bus" },
  { value: "Lorry", label: "Lorry" },
  { value: "SUV", label: "SUV" },
  { value: "Class Car", label: "Class Car" },
  { value: "MPV", label: "MPV" },
  { value: "Truck", label: "Truck" },
  { value: "Coupe", label: "Coupe" },
  { value: "Pickup", label: "Pickup" },
  { value: "Van (Passenger)", label: "Van (Passenger)" },
  { value: "Convertible", label: "Convertible" },
  { value: "Sedan", label: "Sedan" },
  { value: "Van (Goods)", label: "Van (Goods)" },
  { value: "Hatchback", label: "Hatchback" },
  { value: "Sport Car", label: "Sport Car" },
  { value: "Wagon", label: "Wagon" },
];

export const CAR = [
  {
    id: 1,
    brand: "BMW X3",
    price: "$248,000",
    lease: "$2,302/mo",
    description: "4 variants | with COE",
    description_logo: "Performance Motors",
    image: image1,
    logo: bmw,
  },
  {
    id: 2,
    brand: "Alpine A110",
    price: "$248,000",
    lease: "$2,302/mo",
    description: "3 variants | with COE",
    description_logo: "Wearnes Automotive ",
    image: image2,
    logo: alpine,
  },
  {
    id: 3,
    brand: "Aston Martin DBS Superlegge...Alpine A110",
    price: "POA",
    lease: "$2,302/mo",
    description: "1 variant",
    description_logo: "Wearnes Automotive",
    image: image3,
    logo: aston,
  },
  {
    id: 4,
    brand: "Alfa Romeo Stelvio",
    price: "$278,000",
    lease: "$2,302/mo",
    description: "3 variants | with COE",
    description_logo: "EuroAutomobile",
    image: image4,
    logo: bmw,
  },
  {
    id: 5,
    brand: "Aston Martin DB11 Volante",
    price: "POA",
    lease: "$2,302/mo",
    description: "1 variant",
    description_logo: "Wearnes Automotive ",
    image: image5,
    logo: aston,
  },
  {
    id: 6,
    brand: "Aston Martin DB11",
    price: "$799,000",
    lease: "$2,302/mo",
    description: "1 variant",
    description_logo: "Wearnes Automotive ",
    image: image6,
    logo: aston,
  },
  {
    id: 7,
    brand: "Aston Martin DB11 Volante",
    price: "POA",
    lease: "$2,302/mo",
    description: "1 variant",
    description_logo: "Wearnes Automotive ",
    image: image7,
    logo: aston,
  },
];

export const FEATURES_VEHICLE = [
  { id: 1, brand: "The Palace", price: "$2,000", image: palace },
  { id: 2, brand: "IVY RORY", price: "$2,000", image: rory },
  { id: 3, imageAdvertise: advertiseImg },
  { id: 4, brand: "REXONA", price: "$2,000", image: rexona },
  { id: 5, brand: "The Palace", price: "$2,000", image: palace },
  { id: 6, brand: "IVY RORY", price: "$2,000", image: rory },
];

export const FILTER_BRANDING = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Last Updated",
    label: "Last Updated",
  },
  {
    value: "Brand Name",
    label: "Brand Name",
  },
  {
    value: "Number of Models",
    label: "Number of Models",
  },
];

export const CAR_BRANDING_LIST = [
  {
    logo: logo1,
    brand: "Toyota",
    description: "Jeep Grand Cherokee",
    model: "1200 Models",
    updateAt: "25/12/2022",
    status: "Active",
  },
  {
    logo: logo2,
    brand: "BMW",
    description: "Brand description too long...",
    model: "800 Models",
    updateAt: "25/12/2022",
    status: "Inactive",
  },
  {
    logo: logo3,
    brand: "MAZDA",
    description: "Audi Q7",
    model: "620 Models",
    updateAt: "25/12/2022",
    status: "Active",
  },
  {
    logo: logo4,
    brand: "Hyundai",
    description: "Brand description too long...",
    model: "4260 Models",
    updateAt: "25/12/2022",
    status: "Inactive",
  },
  {
    logo: logo5,
    brand: "KIA",
    description: "Dodge Charger",
    model: "620 Models",
    updateAt: "25/12/2022",
    status: "Active",
  },
  {
    logo: logo6,
    brand: "Nissan",
    description: "Brand description too long...",
    model: "4260 Models",
    updateAt: "25/12/2022",
    status: "Inactive",
  },
];
