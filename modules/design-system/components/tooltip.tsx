'use client'

import { css } from '@/styled-system/css'
import { Box, Stack, VStack } from '@/styled-system/jsx'
import { InlineTextButton } from '@/ui/components/button'
import { Popover as ArkPopover } from '@ark-ui/react'

export const popoverCss = {
  positioner: css({
    position: 'relative',
  }),
  content: css({
    minWidth: '360px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.border1',
    background: 'bg.base',
    borderRadius: 'sm',
    boxShadow: 'lg',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'sm',
    zIndex: 'popover',
    p: '4',
    _open: {
      animation: 'fadeIn 0.25s ease-out',
    },
    _closed: {
      animation: 'fadeOut 0.2s ease-out',
    },
    _hidden: {
      display: 'none',
    },
  }),
  title: css({
    fontWeight: 'medium',
    textStyle: 'sm',
  }),
  description: css({
    color: 'fg.muted',
    textStyle: 'sm',
  }),
  closeTrigger: css({
    color: 'fg.muted',
  }),
  arrow: css({
    '--arrow-size': 'var(--sizes-3)',
    '--arrow-background': 'var(--colors-bg)',
    zIndex: 'z1',
  }),
  arrowTip: css({
    borderTopWidth: '1px',
    borderLeftWidth: '1px',
    borderColor: 'gray.border1',
  }),
}

type PopoverProps = {
  isOpen: boolean
  title?: React.ReactNode
  trigger: React.ReactNode
  children: React.ReactNode
  onClose?: () => void
}

export default function Popover({ title, trigger, children, isOpen, onClose }: PopoverProps) {
  if (!isOpen) {
    return trigger
  }

  return (
    <ArkPopover.Root
      open={isOpen}
      onOpenChange={(details) => {
        if (!details.open) {
          onClose?.()
        }
      }}
      closeOnEscape={true}
      closeOnInteractOutside={true}
    >
      <ArkPopover.Trigger asChild>{trigger}</ArkPopover.Trigger>
      <ArkPopover.Positioner className={popoverCss.positioner}>
        <ArkPopover.Content className={popoverCss.content}>
          <ArkPopover.Arrow className={popoverCss.arrow}>
            <ArkPopover.ArrowTip className={popoverCss.arrowTip} />
          </ArkPopover.Arrow>
          <Stack gap="1">
            {title && <ArkPopover.Title className={popoverCss.title}>{title}</ArkPopover.Title>}
            <ArkPopover.Description className={popoverCss.description}>
              <VStack gap="1">{children}</VStack>
            </ArkPopover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <ArkPopover.CloseTrigger
              asChild
              className={popoverCss.closeTrigger}
              onClick={() => {
                // console.log('close....')
                onClose?.()
              }}
            >
              <InlineTextButton aria-label="Close Popover" variant="ghost" size="sm">
                X
              </InlineTextButton>
            </ArkPopover.CloseTrigger>
          </Box>
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </ArkPopover.Root>
  )
}
