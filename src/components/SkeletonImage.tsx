import React, { ImgHTMLAttributes, useState } from "react";

import { omitObjectKeys } from "../utils/common-util";

import "./SkeletonImage.css";

type Props = {
  defaultSkeletonHeight?: number;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function LazyImage(props: Props) {
  const [isLoading, setLoading] = useState(true);

  const imageProps = omitObjectKeys(props as Record<string, unknown>, [
    "defaultSkeletonHeight",
  ]) as ImgHTMLAttributes<HTMLImageElement>;

  return (
    <>
      <div
        {...imageProps}
        className={`lazy-image-skeleton ${imageProps.className}`}
        style={{
          width: "100%",
          display: isLoading ? "block" : "none",
          backgroundColor: "gray",
          height: props.defaultSkeletonHeight,
          ...imageProps.style,
        }}
      />

      <img
        alt=""
        {...props}
        style={{
          width: "100%",
          display: isLoading ? "none" : "block",
          ...props.style,
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  );
}
