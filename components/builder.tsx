'use client';
import { ComponentProps } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';

// Initialize Builder with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderProps) {
  const isPreviewing = useIsPreviewing();

  if (!props.content && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return <BuilderComponent {...props} />;
}
