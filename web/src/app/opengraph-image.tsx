import { env } from "@/env";
import NextImage from "next/image";
import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

export const runtime = "edge";

export const alt = "RoseMC";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const openGraphImageURL = new URL(
    "/images/opengraph-image.png",
    env.NEXT_PUBLIC_APP_URL,
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NextImage
          src={openGraphImageURL}
          alt={alt}
          style={{ width: "100%", objectFit: "cover", objectPosition: "top" }}
          {...size}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
