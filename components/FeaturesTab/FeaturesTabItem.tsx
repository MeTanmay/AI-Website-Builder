import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark, height, width } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden  max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} height={height} width={width} className="dark:hidden " />
          <Image
            src={imageDark}
            alt={title}
            height={height}
            width={width}
            layout="intrinsic"
            className="hidden dark:block object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
