"use client";
import { builder, Builder } from "@builder.io/react";
import VideoSlider from "./components/VideoSlider/VideoSlider";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(VideoSlider, {
  name: "VideoSlider",
  inputs: [
    {
      name: "slides",
      type: "list",
      defaultValue: [{ backgroundColor: "rgb(0, 109, 160)" }],
      subFields: [
        {
          name: "videoUrl",
          type: "file",
          allowedFileTypes: ["mp4", "webm", "ogg"],
          helperText: "Upload a video file for this slide",
        },
        {
          name: "backgroundColor",
          type: "color",
          defaultValue: "rgb(0, 109, 160)",
          helperText: "Background color for the slide",
        },
      ],
    },
    {
      name: "showNavigation",
      type: "boolean",
      defaultValue: false,
      helperText: "Show next/previous navigation arrows",
    },
    {
      name: "showIndicators",
      type: "boolean",
      defaultValue: false,
      helperText: "Show slide indicator dots",
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: true,
      helperText: "Autoplay videos",
    },
    {
      name: "height",
      type: "number",
      defaultValue: 600,
      helperText: "Height of the slider in pixels",
    },
  ],
});
