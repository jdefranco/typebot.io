import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Standard } from '@typebot.io/nextjs'; // Ensure correct import path
import { SEO } from './Seo'; // Adjust the import path as necessary
import { BackgroundType, defaultSettings } from '@typebot.io/schemas'; // Ensure these imports match your structure

export type TypebotV3PageProps = {
  url: string;
  name: string;
  publicId: string | null;
  font: string | null; // Adjust according to the actual Font type if different
  isHideQueryParamsEnabled: boolean | null;
  background: string; // Assuming background is a string for simplicity. Adjust as needed
  metadata: any; // Replace 'any' with the correct metadata type
};

export const TypebotPageV3 = ({
  font,
  publicId,
  name,
  url,
  isHideQueryParamsEnabled,
  metadata,
  background,
}: TypebotV3PageProps) => {
  const { asPath, push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Here you would replace this simulated async task with your actual initialization logic
    const simulateAsyncInitialization = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an async task with 1s delay
      setIsLoading(false); // Set loading to false after the task is complete
    };

    simulateAsyncInitialization();
  }, []);

  const clearQueryParamsIfNecessary = () => {
    const hasQueryParams = asPath.includes('?');
    if (
      hasQueryParams &&
      (isHideQueryParamsEnabled ?? defaultSettings.general.isHideQueryParamsEnabled)
    ) {
      push(asPath.split('?')[0], undefined, { shallow: true });
    }
  };

  return (
    <div style={{
        height: '100vh',
        backgroundColor: background || '#fff', // Fallback to white if background is not defined
      }}
    >
      <SEO url={url} typebotName={name} metadata={metadata} />
      {isLoading ? (
        <div className="loader" style={{
            border: '16px solid #f3f3f3', // Light grey
            borderTop: '16px solid #3498db', // Blue
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            animation: 'spin 2s linear infinite',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-60px',
            marginTop: '-60px',
          }}
        ></div>
      ) : (
        <Standard
          typebot={publicId}
          font={font}
          onInit={clearQueryParamsIfNecessary}
          // Insert additional necessary props here
        />
      )}
    </div>
  );
};
