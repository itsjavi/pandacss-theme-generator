import type { PropsWithChildren } from 'react'

// -- Utility types

export type ConditionalPick<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never
  }[keyof Base]
>

export type ConditionalUnpick<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? never : Key
  }[keyof Base]
>

export type PropsOf<T> = ConditionalUnpick<T, () => unknown>
export type MethodsOf<T> = ConditionalPick<T, () => unknown>
export type Awaitable<T> = T | Promise<T>

// -- Data Types

export type PageProps<TParams = { slug: string }> = {
  params: TParams
  searchParams: { [key: string]: string | string[] | undefined }
}

export type FormState<TData = undefined> =
  | {
      data: TData
      errors?: never
    }
  | {
      data?: never
      errors: Record<string, string[] | undefined>
    }
  | undefined

export type BasicComponentProps = PropsWithChildren<{
  className?: string
}>

export type PolymorphicComponentProps<T extends string> = BasicComponentProps & {
  as?: T
}
