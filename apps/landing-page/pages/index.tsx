// Import your necessary dependencies
import dynamic from 'next/dynamic';
import { Stack } from '@chakra-ui/react';
import { Footer } from 'components/common/Footer';
import { SocialMetaTags } from 'components/common/SocialMetaTags';
import { EasyBuildingExperience } from 'components/Homepage/EasyBuildingExperience';
import { EasyEmbed } from 'components/Homepage/EasyEmbed';
import { EndCta } from 'components/Homepage/EndCta';
import { Features } from 'components/Homepage/Features';
import { Hero } from 'components/Homepage/Hero';
import { Integrations } from 'components/Homepage/Integrations';
import { IntroducingChatApps } from 'components/Homepage/IntroducingChatApps';

// Fix starts here: Specify the dynamic import with a proper loader function and noConflict
const RealTimeResults = dynamic(() => import('../components/Homepage/RealTimeResults').then((mod) => mod.RealTimeResults), { ssr: false });

const App = () => {
  return (
    <Stack w="full" overflowX="hidden" bgColor="gray.900">
      <SocialMetaTags currentUrl="https://www.chatworth.io/" />
      <Hero />
      <IntroducingChatApps />
      <EasyBuildingExperience />
      <EasyEmbed />
      <Integrations />
      <RealTimeResults />
      <Features />
      <EndCta />
      <Footer />
    </Stack>
  );
};

export default App;
