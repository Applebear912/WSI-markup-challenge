import * as React from "react";

export default function BreadcrumbList() {
  return (
    <ul id="breadcrumb-list" className="breadcrumb-list">
      <li>
        <a href="https://www.williams-sonoma.com/">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="https://www.williams-sonoma.com/shop/outdoor/?cm_type=gnav">
          <span> Outdoor Cooking & Garden</span>
        </a>
      </li>

      <li>
        <a href="https://www.williams-sonoma.com/shop/outdoor/raised-garden-beds-planters/">
          <span> Raised Garden Beds & Wall Planters</span>
        </a>
      </li>
      <p>
        <a href="https://www.williams-sonoma.com/products/gro-products-cedar-elevated-garden-bed-planter-fabric-liner-2021/?pkey=craised-garden-beds-planters">
          <span> Vegetable Flower Herb Planter</span>
        </a>
      </p>
    </ul>
  );
}
