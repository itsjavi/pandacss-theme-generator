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

// -- Colors
export type TailwindColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
export type RadixColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GeistColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type RadixAccentColor = (typeof accentColors)[number]
const accentColors = [
  'gray',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type RadixGrayColor = (typeof grayColors)[number]
const grayColors = ['gray', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const

const geistColors = ['gray', 'alphagray', 'blue', 'red', 'amber', 'green', 'teal', 'purple', 'pink'] as const
export type GeistColor = (typeof geistColors)[number]

export type ThemeColorAlias = 'neutral' | 'primary' | 'secondary' | 'accent' | 'danger' | 'warning' | 'success' | 'info'
export type ThemeColor = GeistColor
