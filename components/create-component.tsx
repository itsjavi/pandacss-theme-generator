import type { RecipeVariantFn, RecipeVariantProps, RecipeVariantRecord } from '@/styled-system/types'

import { cn } from '@/lib/utils'
import type { ComponentProps, ElementType } from 'react'

export function createComponent<T extends ElementType>(
  component: T,
  className: string,
  defaultProps?: ComponentProps<T>,
): React.FC<ComponentProps<T>> {
  const Comp = component
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return ({ className: localClassName, ...rest }: any = defaultProps) => (
    <Comp className={cn(className, localClassName)} {...rest} />
  )
}

type RecipeFn = RecipeVariantFn<RecipeVariantRecord> & {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  splitVariantProps: (props: any) => [any, any]
}

export function createVariantComponent<T extends ElementType, V extends RecipeFn>(
  component: T,
  recipe: V,
  defaultProps?: ComponentProps<T> & RecipeVariantProps<V>,
): React.FC<ComponentProps<T> & RecipeVariantProps<V>> {
  const Comp = component
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return ({ children, ...props }: any) => {
    const joinedProps = { ...defaultProps, ...props }
    const { className, ...rest } = joinedProps
    const [recipeProps, htmlProps] = recipe.splitVariantProps(rest)
    return (
      <Comp className={cn(className, recipe(recipeProps))} {...htmlProps}>
        {children}
      </Comp>
    )
  }
}
