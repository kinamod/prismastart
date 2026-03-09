'use client';

import { builder } from '@builder.io/react';
import { RenderBuilderContent } from '@/components/builder';
import '@/builder-registry';
import { useEffect, useState } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageParams {
  params: Promise<{
    page: string[];
  }>;
}

export default function Page({ params }: PageParams) {
  const [builderContent, setBuilderContent] = useState(null);
  const [urlPath, setUrlPath] = useState<string>('');

  useEffect(() => {
    params.then((resolvedParams) => {
      const path = resolvedParams?.page?.join('/') || '';
      setUrlPath('/' + path);
    });
  }, [params]);

  useEffect(() => {
    if (urlPath) {
      builder
        .get('page', {
          userAttributes: {
            urlPath: urlPath,
          },
        })
        .promise()
        .then(setBuilderContent);
    }
  }, [urlPath]);

  return (
    <div className="min-h-screen bg-white">
      {builderContent && <RenderBuilderContent content={builderContent} model="page" />}
    </div>
  );
}
