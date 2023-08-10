import {
  Stack,
  Heading,
  HStack,
  Flex,
  Text,
  Image,
  chakra,
} from '@chakra-ui/react';
import { BubbleProps } from '@typebot.io/js';
import { isDefined, isSvgSrc } from '@typebot.io/lib';
import { PreviewMessageSettings } from './PreviewMessageSettings';
import { ThemeSettings } from './ThemeSettings';

type Props = {
  defaultPreviewMessageAvatar: string;
  theme: BubbleProps['theme'];
  previewMessage: BubbleProps['previewMessage'];
  onThemeChange: (theme: BubbleProps['theme']) => void;
  onPreviewMessageChange: (
    previewMessage: BubbleProps['previewMessage']
  ) => void;
};

export const BubbleSettings = ({
  defaultPreviewMessageAvatar,
  theme,
  previewMessage,
  onThemeChange,
  onPreviewMessageChange,
}: Props) => {
  const updatePreviewMessage = (
    previewMessage: BubbleProps['previewMessage']
  ) => {
    if (!previewMessage) return onPreviewMessageChange(undefined);
    onPreviewMessageChange({
      ...previewMessage,
      autoShowDelay: previewMessage?.autoShowDelay
        ? previewMessage.autoShowDelay * 1000
        : undefined,
    });
  };

  const updateTheme = (theme: BubbleProps['theme']) => {
    onThemeChange(theme);
  };

  return (
    <Stack spacing="4">
      <Heading size="sm">Chat bubble settings</Heading>
      <Stack pl="4" spacing={4}>
        <PreviewMessageSettings
          defaultAvatar={defaultPreviewMessageAvatar}
          onChange={updatePreviewMessage}
        />
        <ThemeSettings
          theme={theme}
          onChange={updateTheme}
          isPreviewMessageEnabled={isDefined(previewMessage)}
        />
        <Heading size="sm">Preview:</Heading>
        <Stack alignItems="flex-end">
          {isDefined(previewMessage) && (
            <HStack
              bgColor={theme?.previewMessage?.backgroundColor}
              shadow="md"
              rounded="md"
              p="3"
              maxW="280px"
              spacing={4}
            >
              {previewMessage.avatarUrl && (
                <Image
                  src={previewMessage.avatarUrl}
                  w="40px"
                  h="40px"
                  rounded="full"
                  alt="Preview message avatar"
                  objectFit="cover"
                />
              )}
              <Text color={theme?.previewMessage?.textColor}>
                {previewMessage.message}
              </Text>
            </HStack>
          )}
          <Flex
            align="center"
            justifyContent="center"
            transition="all 0.2s ease-in-out"
            boxSize={theme?.button?.size === 'large' ? '64px' : '48px'}
            bgColor={theme?.button?.backgroundColor}
            rounded="full"
            boxShadow="0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)"
          >
            <BubbleIcon buttonTheme={theme?.button} />
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
};

const BubbleIcon = ({
  buttonTheme,
}: {
  buttonTheme: NonNullable<BubbleProps['theme']>['button'];
}) => {
  if (!buttonTheme?.customIconSrc)
    return (
      <Image
        src="https://www.chatworth.io/chatworth-icon.png"
        alt="Default Bubble Icon"
        boxSize={buttonTheme?.size === 'large' ? '36px' : '28px'}
      />
    );

  if (
    buttonTheme.customIconSrc.startsWith('http') ||
    buttonTheme.customIconSrc.startsWith('data:image/svg+xml')
  )
    return (
      <Image
        src={buttonTheme.customIconSrc}
        transition="all 0.2s ease-in-out"
        boxSize={
          isSvgSrc(buttonTheme.customIconSrc)
            ? buttonTheme?.size === 'large'
              ? '36px'
              : '28px'
            : '90%'
        }
        rounded={isSvgSrc(buttonTheme.customIconSrc) ? undefined : 'full'}
        alt="Bubble button icon"
        objectFit={isSvgSrc(buttonTheme.customIconSrc) ? undefined : 'cover'}
      />
    );
  return (
    <chakra.span
      transition="all 0.2s ease-in-out"
      fontSize={buttonTheme.size === 'large' ? '36px' : '24px'}
      lineHeight={buttonTheme.size === 'large' ? '40px' : '32px'}
    >
      {buttonTheme.customIconSrc}
    </chakra.span>
  );
};
